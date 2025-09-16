/**
 * Fraud Prevention System for UBL Payment Gateway
 * Implements UBL best practices for online merchant transactions
 */

// In-memory storage (in production, use proper database)
let customers = new Map();
let transactions = new Map();
let positiveList = new Map();
let negativeList = new Map();
let blockedAccounts = new Set();
let ipAddresses = new Map();

// Configuration for transaction limits
const FRAUD_CONFIG = {
  // Positive list limits
  POSITIVE_LIST: {
    MIN_AMOUNT: 1000, // PKR
    MAX_AMOUNT: 100000, // PKR
    MAX_TRANSACTIONS_PER_MONTH: 3
  },
  // Negative list limits
  NEGATIVE_LIST: {
    MIN_AMOUNT: 100, // PKR
    MAX_AMOUNT: 5000, // PKR
    MAX_TRANSACTIONS_PER_MONTH: 1
  },
  // New user limits
  NEW_USER: {
    MAX_AMOUNT: 5000, // PKR
    MAX_TRANSACTIONS_PER_DAY: 1,
    MAX_TRANSACTIONS_PER_MONTH: 2
  },
  // IP address limits
  IP_LIMITS: {
    MAX_TRANSACTIONS_PER_DAY: 5,
    MAX_TRANSACTIONS_PER_MONTH: 20
  }
};

class FraudPreventionService {
  /**
   * Register a new customer with mandatory information
   */
  registerCustomer(customerData) {
    const {
      customerName,
      mobile,
      email,
      dateOfBirth,
      address,
      cnicNumber,
      ipAddress
    } = customerData;

    // Validate required fields
    if (!customerName || !mobile || !email || !address || !cnicNumber) {
      throw new Error('Missing required customer information');
    }

    // Check if customer already exists
    const existingCustomer = this.findCustomerByEmail(email) || 
                           this.findCustomerByMobile(mobile) ||
                           (cnicNumber && this.findCustomerByCNIC(cnicNumber));

    if (existingCustomer) {
      throw new Error('Customer already exists');
    }

    const customerId = this.generateCustomerId();
    const customer = {
      customerId,
      customerName,
      mobile,
      email,
      dateOfBirth,
      address,
      cnicNumber,
      registrationDate: new Date(),
      ipAddress,
      status: 'active',
      transactionCount: 0,
      totalAmount: 0,
      lastTransactionDate: null
    };

    customers.set(customerId, customer);
    
    // Log customer registration
    this.logActivity('CUSTOMER_REGISTRATION', {
      customerId,
      email,
      mobile,
      ipAddress
    });

    return customer;
  }

  /**
   * Validate transaction against fraud prevention rules
   */
  async validateTransaction(transactionData) {
    const {
      customerId,
      amount,
      cardToken,
      ipAddress,
      transactionId,
      orderId
    } = transactionData;

    const validationResult = {
      allowed: true,
      reason: '',
      riskLevel: 'LOW',
      recommendations: []
    };

    try {
      // 1. Check if account is blocked
      if (blockedAccounts.has(customerId)) {
        validationResult.allowed = false;
        validationResult.reason = 'Account is blocked';
        validationResult.riskLevel = 'HIGH';
        return validationResult;
      }

      // 2. Check IP address limits
      const ipValidation = this.validateIPAddress(ipAddress, amount);
      if (!ipValidation.allowed) {
        validationResult.allowed = false;
        validationResult.reason = ipValidation.reason;
        validationResult.riskLevel = 'HIGH';
        return validationResult;
      }

      // 3. Get customer data
      const customer = customers.get(customerId);
      if (!customer) {
        validationResult.allowed = false;
        validationResult.reason = 'Customer not found';
        validationResult.riskLevel = 'HIGH';
        return validationResult;
      }

      // 4. Check if customer is on negative list
      if (negativeList.has(customerId)) {
        const negativeListData = negativeList.get(customerId);
        if (amount > negativeListData.maxAmount || 
            customer.transactionCount >= negativeListData.maxTransactions) {
          validationResult.allowed = false;
          validationResult.reason = 'Customer on negative list - transaction limits exceeded';
          validationResult.riskLevel = 'HIGH';
          return validationResult;
        }
      }

      // 5. Check positive list benefits
      if (positiveList.has(customerId)) {
        const positiveListData = positiveList.get(customerId);
        if (amount >= positiveListData.minAmount && 
            amount <= positiveListData.maxAmount &&
            customer.transactionCount < positiveListData.maxTransactions) {
          validationResult.riskLevel = 'LOW';
          validationResult.recommendations.push('Customer on positive list - fast track approval');
          return validationResult;
        }
      }

      // 6. Check new user limits
      const isNewUser = this.isNewUser(customerId);
      if (isNewUser) {
        const newUserValidation = this.validateNewUserLimits(customerId, amount);
        if (!newUserValidation.allowed) {
          validationResult.allowed = false;
          validationResult.reason = newUserValidation.reason;
          validationResult.riskLevel = 'MEDIUM';
          return validationResult;
        }
      }

      // 7. Check card token frequency
      if (cardToken) {
        const cardTokenValidation = this.validateCardToken(cardToken, amount);
        if (!cardTokenValidation.allowed) {
          validationResult.allowed = false;
          validationResult.reason = cardTokenValidation.reason;
          validationResult.riskLevel = 'HIGH';
          return validationResult;
        }
      }

      // 8. Check transaction patterns
      const patternValidation = this.validateTransactionPatterns(customerId, amount, ipAddress);
      if (!patternValidation.allowed) {
        validationResult.allowed = false;
        validationResult.reason = patternValidation.reason;
        validationResult.riskLevel = 'MEDIUM';
        return validationResult;
      }

      // 9. Check amount thresholds
      if (amount > 50000) { // High value transaction
        validationResult.riskLevel = 'MEDIUM';
        validationResult.recommendations.push('High value transaction - additional verification recommended');
      }

      return validationResult;

    } catch (error) {
      console.error('Fraud validation error:', error);
      validationResult.allowed = false;
      validationResult.reason = 'Fraud validation error';
      validationResult.riskLevel = 'HIGH';
      return validationResult;
    }
  }

  /**
   * Record a successful transaction
   */
  recordTransaction(transactionData) {
    const {
      customerId,
      transactionId,
      amount,
      cardToken,
      ipAddress,
      orderId,
      approvalCode
    } = transactionData;

    const transaction = {
      transactionId,
      customerId,
      amount,
      cardToken,
      ipAddress,
      orderId,
      approvalCode,
      timestamp: new Date(),
      status: 'completed'
    };

    transactions.set(transactionId, transaction);

    // Update customer transaction count
    const customer = customers.get(customerId);
    if (customer) {
      customer.transactionCount++;
      customer.totalAmount += amount;
      customer.lastTransactionDate = new Date();
    }

    // Update IP address tracking
    this.updateIPTracking(ipAddress, amount);

    // Log transaction
    this.logActivity('TRANSACTION_COMPLETED', {
      transactionId,
      customerId,
      amount,
      ipAddress
    });

    return transaction;
  }

  /**
   * Add customer to positive list
   */
  addToPositiveList(customerId, limits = {}) {
    const positiveListData = {
      customerId,
      minAmount: limits.minAmount || FRAUD_CONFIG.POSITIVE_LIST.MIN_AMOUNT,
      maxAmount: limits.maxAmount || FRAUD_CONFIG.POSITIVE_LIST.MAX_AMOUNT,
      maxTransactions: limits.maxTransactions || FRAUD_CONFIG.POSITIVE_LIST.MAX_TRANSACTIONS_PER_MONTH,
      addedDate: new Date()
    };

    positiveList.set(customerId, positiveListData);
    
    this.logActivity('ADDED_TO_POSITIVE_LIST', {
      customerId,
      limits: positiveListData
    });

    return positiveListData;
  }

  /**
   * Add customer to negative list
   */
  addToNegativeList(customerId, reason, limits = {}) {
    const negativeListData = {
      customerId,
      reason,
      minAmount: limits.minAmount || FRAUD_CONFIG.NEGATIVE_LIST.MIN_AMOUNT,
      maxAmount: limits.maxAmount || FRAUD_CONFIG.NEGATIVE_LIST.MAX_AMOUNT,
      maxTransactions: limits.maxTransactions || FRAUD_CONFIG.NEGATIVE_LIST.MAX_TRANSACTIONS_PER_MONTH,
      addedDate: new Date()
    };

    negativeList.set(customerId, negativeListData);
    
    this.logActivity('ADDED_TO_NEGATIVE_LIST', {
      customerId,
      reason,
      limits: negativeListData
    });

    return negativeListData;
  }

  /**
   * Block customer account
   */
  blockAccount(customerId, reason) {
    blockedAccounts.add(customerId);
    
    // Update customer status
    const customer = customers.get(customerId);
    if (customer) {
      customer.status = 'blocked';
    }

    this.logActivity('ACCOUNT_BLOCKED', {
      customerId,
      reason
    });

    return true;
  }

  /**
   * Unblock customer account
   */
  unblockAccount(customerId, reason) {
    blockedAccounts.delete(customerId);
    
    // Update customer status
    const customer = customers.get(customerId);
    if (customer) {
      customer.status = 'active';
    }

    this.logActivity('ACCOUNT_UNBLOCKED', {
      customerId,
      reason
    });

    return true;
  }

  /**
   * Get fraud prevention statistics
   */
  getFraudStats() {
    return {
      totalCustomers: customers.size,
      totalTransactions: transactions.size,
      positiveListCount: positiveList.size,
      negativeListCount: negativeList.size,
      blockedAccountsCount: blockedAccounts.size,
      totalTransactionValue: Array.from(transactions.values())
        .reduce((sum, t) => sum + t.amount, 0)
    };
  }

  // Helper methods
  generateCustomerId() {
    return 'CUST_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  findCustomerByEmail(email) {
    for (let customer of customers.values()) {
      if (customer.email === email) return customer;
    }
    return null;
  }

  findCustomerByMobile(mobile) {
    for (let customer of customers.values()) {
      if (customer.mobile === mobile) return customer;
    }
    return null;
  }

  findCustomerByCNIC(cnic) {
    for (let customer of customers.values()) {
      if (customer.cnicNumber === cnic) return customer;
    }
    return null;
  }

  isNewUser(customerId) {
    const customer = customers.get(customerId);
    if (!customer) return false;
    
    const daysSinceRegistration = (new Date() - customer.registrationDate) / (1000 * 60 * 60 * 24);
    return daysSinceRegistration <= 30; // New user for 30 days
  }

  validateIPAddress(ipAddress, amount) {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    if (!ipAddresses.has(ipAddress)) {
      ipAddresses.set(ipAddress, {
        dailyTransactions: 0,
        monthlyTransactions: 0,
        dailyAmount: 0,
        monthlyAmount: 0,
        lastTransactionDate: null
      });
    }

    const ipData = ipAddresses.get(ipAddress);
    
    // Reset daily counters if new day
    if (ipData.lastTransactionDate && 
        new Date(ipData.lastTransactionDate).toDateString() !== today.toDateString()) {
      ipData.dailyTransactions = 0;
      ipData.dailyAmount = 0;
    }

    // Check daily limits
    if (ipData.dailyTransactions >= FRAUD_CONFIG.IP_LIMITS.MAX_TRANSACTIONS_PER_DAY) {
      return {
        allowed: false,
        reason: 'IP address daily transaction limit exceeded'
      };
    }

    // Check monthly limits
    if (ipData.monthlyTransactions >= FRAUD_CONFIG.IP_LIMITS.MAX_TRANSACTIONS_PER_MONTH) {
      return {
        allowed: false,
        reason: 'IP address monthly transaction limit exceeded'
      };
    }

    return { allowed: true };
  }

  validateNewUserLimits(customerId, amount) {
    const customer = customers.get(customerId);
    if (!customer) return { allowed: false, reason: 'Customer not found' };

    // Check amount limit for new users
    if (amount > FRAUD_CONFIG.NEW_USER.MAX_AMOUNT) {
      return {
        allowed: false,
        reason: 'New user transaction amount exceeds limit'
      };
    }

    // Check daily transaction limit
    const today = new Date().toDateString();
    const lastTransactionDate = customer.lastTransactionDate ? 
      new Date(customer.lastTransactionDate).toDateString() : null;

    if (lastTransactionDate === today && customer.transactionCount >= FRAUD_CONFIG.NEW_USER.MAX_TRANSACTIONS_PER_DAY) {
      return {
        allowed: false,
        reason: 'New user daily transaction limit exceeded'
      };
    }

    // Check monthly transaction limit
    if (customer.transactionCount >= FRAUD_CONFIG.NEW_USER.MAX_TRANSACTIONS_PER_MONTH) {
      return {
        allowed: false,
        reason: 'New user monthly transaction limit exceeded'
      };
    }

    return { allowed: true };
  }

  validateCardToken(cardToken, amount) {
    // Count transactions with this card token in the last 24 hours
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const recentTransactions = Array.from(transactions.values())
      .filter(t => t.cardToken === cardToken && new Date(t.timestamp) > oneDayAgo);

    if (recentTransactions.length >= 3) {
      return {
        allowed: false,
        reason: 'Card token used too frequently'
      };
    }

    // Check for suspicious amount patterns
    const totalAmount = recentTransactions.reduce((sum, t) => sum + t.amount, 0);
    if (totalAmount + amount > 50000) {
      return {
        allowed: false,
        reason: 'Card token daily amount limit exceeded'
      };
    }

    return { allowed: true };
  }

  validateTransactionPatterns(customerId, amount, ipAddress) {
    const customer = customers.get(customerId);
    if (!customer) return { allowed: false, reason: 'Customer not found' };

    // Check for rapid successive transactions
    const recentTransactions = Array.from(transactions.values())
      .filter(t => t.customerId === customerId)
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    if (recentTransactions.length > 0) {
      const lastTransaction = recentTransactions[0];
      const timeDiff = new Date() - new Date(lastTransaction.timestamp);
      
      if (timeDiff < 60000) { // Less than 1 minute
        return {
          allowed: false,
          reason: 'Rapid successive transactions detected'
        };
      }
    }

    return { allowed: true };
  }

  updateIPTracking(ipAddress, amount) {
    if (!ipAddresses.has(ipAddress)) {
      ipAddresses.set(ipAddress, {
        dailyTransactions: 0,
        monthlyTransactions: 0,
        dailyAmount: 0,
        monthlyAmount: 0,
        lastTransactionDate: null
      });
    }

    const ipData = ipAddresses.get(ipAddress);
    ipData.dailyTransactions++;
    ipData.monthlyTransactions++;
    ipData.dailyAmount += amount;
    ipData.monthlyAmount += amount;
    ipData.lastTransactionDate = new Date();
  }

  logActivity(activity, data) {
    const logEntry = {
      timestamp: new Date(),
      activity,
      data
    };
    
    console.log('FRAUD_PREVENTION_LOG:', JSON.stringify(logEntry, null, 2));
    
    // In production, save to database
    // await this.saveLogToDatabase(logEntry);
  }
}

export default FraudPreventionService;
