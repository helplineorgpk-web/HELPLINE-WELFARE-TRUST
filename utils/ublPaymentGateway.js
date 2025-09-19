

const UBL_CONFIG = {
  // Sandbox Configuration (for testing)
  SANDBOX: {
    baseURL: 'https://ipg.comtrust.ae:2443/',
    customer: 'HELPLINE WELFARE',
    store: '0000',
    terminal: '0000',
    username: 'HELPLINE_Mudasir',
    password: 'PakistanHLP786@'
  },
  // Production Configuration (live credentials)
  PRODUCTION: {
    baseURL: 'https://ipg.comtrust.ae:2443/',
    customer: 'HELPLINE WELFARE',
    store: '0000',
    terminal: '0000',
    username: 'HELPLINE_Mudasir',
    password: 'PakistanHLP786@'
  }
};

class UBLPaymentGateway {
  constructor(environment = 'production') {
    // Use UBL_ENV environment variable if available, otherwise fall back to parameter
    const env = process.env.UBL_ENV || environment;
    this.config = UBL_CONFIG[env.toUpperCase()];
    this.environment = env;
    
    // Validate that required credentials are present
    if (!this.config.username || !this.config.password) {
      throw new Error('UBL Payment Gateway: Missing username or password credentials');
    }
    
    // Debug logging
    console.log('UBL Payment Gateway Config:', {
      environment: this.environment,
      baseURL: this.config.baseURL,
      customer: this.config.customer,
      store: this.config.store,
      terminal: this.config.terminal,
      username: this.config.username,
      hasPassword: !!this.config.password
    });
  }

  generateOrderId() {
    const timestamp = Date.now().toString().slice(-10); 
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `${timestamp}${random}`;
  }

  async registerPayment(paymentData) {
    const {
      amount,
      currency = 'PKR',
      orderName,
      orderInfo = '',
      returnPath,
      transactionHint = 'CPT:Y;VCC:Y;',
      language = 'en'
    } = paymentData;

    const orderId = this.generateOrderId();

    const requestBody = {
      Registration: {
        Customer: this.config.customer,
        Store: this.config.store,
        Terminal: this.config.terminal,
        Channel: 'Web',
        Language: language,
        Amount: amount.toString(),
        Currency: currency,
        OrderID: orderId,
        OrderName: orderName,
        OrderInfo: orderInfo,
        TransactionHint: transactionHint,
        ReturnPath: returnPath,
        UserName: this.config.username,
        Password: this.config.password
      }
    };

    // Debug logging
    console.log('UBL Registration Request:', JSON.stringify(requestBody, null, 2));

    try {
      const response = await fetch(`${this.config.baseURL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      const data = await response.json();
      
      // Debug logging
      console.log('UBL Registration Response:', JSON.stringify(data, null, 2));
      
      if (data.Transaction && data.Transaction.ResponseCode === '0') {
        return {
          success: true,
          transactionId: data.Transaction.TransactionID,
          paymentPortal: data.Transaction.PaymentPortal,
          orderId: orderId,
          response: data.Transaction
        };
      } else {
        return {
          success: false,
          error: data.Transaction?.ResponseDescription || 'Registration failed',
          response: data.Transaction
        };
      }
    } catch (error) {
      return {
        success: false,
        error: error.message || 'Network error during registration'
      };
    }
  }

  /**
   * Finalization API Call
   * Completes the payment transaction
   */
  async finalizePayment(transactionId) {
    const requestBody = {
      Finalization: {
        TransactionID: transactionId,
        Customer: this.config.customer,
        UserName: this.config.username,
        Password: this.config.password
      }
    };

    try {
      const response = await fetch(`${this.config.baseURL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      const data = await response.json();
      
      if (data.Transaction && data.Transaction.ResponseCode === '0') {
        return {
          success: true,
          response: data.Transaction,
          approvalCode: data.Transaction.ApprovalCode,
          cardNumber: data.Transaction.CardNumber,
          cardToken: data.Transaction.CardToken,
          cardBrand: data.Transaction.CardBrand,
          amount: data.Transaction.Amount?.Value,
          orderId: data.Transaction.OrderID
        };
      } else {
        return {
          success: false,
          error: data.Transaction?.ResponseDescription || 'Finalization failed',
          response: data.Transaction
        };
      }
    } catch (error) {
      return {
        success: false,
        error: error.message || 'Network error during finalization'
      };
    }
  }

  /**
   * Authorization API Call (for MOTO transactions)
   */
  async authorizePayment(paymentData) {
    const {
      amount,
      currency = 'PKR',
      orderName,
      orderId,
      cardNumber,
      expiryMonth,
      expiryYear,
      verifyCode,
      transactionHint = 'CPT:Y;',
      language = 'en'
    } = paymentData;

    const requestBody = {
      Authorization: {
        Customer: this.config.customer,
        Store: this.config.store,
        Terminal: this.config.terminal,
        Language: language,
        Currency: currency,
        OrderName: orderName,
        OrderID: orderId,
        Channel: 'W',
        Amount: amount.toString(),
        TransactionHint: transactionHint,
        CardNumber: cardNumber,
        ExpiryMonth: expiryMonth,
        ExpiryYear: expiryYear,
        VerifyCode: verifyCode,
        UserName: this.config.username,
        Password: this.config.password
      }
    };

    try {
      const response = await fetch(`${this.config.baseURL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      const data = await response.json();
      
      if (data.Transaction && data.Transaction.ResponseCode === '0') {
        return {
          success: true,
          response: data.Transaction,
          transactionId: data.Transaction.TransactionID,
          approvalCode: data.Transaction.ApprovalCode,
          cardNumber: data.Transaction.CardNumber,
          cardToken: data.Transaction.CardToken,
          cardBrand: data.Transaction.CardBrand,
          amount: data.Transaction.Amount?.Value,
          orderId: data.Transaction.OrderID
        };
      } else {
        return {
          success: false,
          error: data.Transaction?.ResponseDescription || 'Authorization failed',
          response: data.Transaction
        };
      }
    } catch (error) {
      return {
        success: false,
        error: error.message || 'Network error during authorization'
      };
    }
  }

  /**
   * Capture API Call
   */
  async capturePayment(transactionId, amount = null, currency = 'PKR') {
    const requestBody = {
      Capture: {
        TransactionID: transactionId,
        Customer: this.config.customer,
        UserName: this.config.username,
        Password: this.config.password
      }
    };

    if (amount) {
      requestBody.Capture.Amount = amount.toString();
      requestBody.Capture.Currency = currency;
    }

    try {
      const response = await fetch(`${this.config.baseURL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      const data = await response.json();
      
      if (data.Transaction && data.Transaction.ResponseCode === '0') {
        return {
          success: true,
          response: data.Transaction,
          balance: data.Transaction.Balance?.Value
        };
      } else {
        return {
          success: false,
          error: data.Transaction?.ResponseDescription || 'Capture failed',
          response: data.Transaction
        };
      }
    } catch (error) {
      return {
        success: false,
        error: error.message || 'Network error during capture'
      };
    }
  }

  /**
   * Refund API Call
   */
  async refundPayment(transactionId, amount = null, currency = 'PKR') {
    const requestBody = {
      Refund: {
        TransactionID: transactionId,
        Customer: this.config.customer,
        UserName: this.config.username,
        Password: this.config.password
      }
    };

    if (amount) {
      requestBody.Refund.Amount = amount.toString();
      requestBody.Refund.Currency = currency;
    }

    try {
      const response = await fetch(`${this.config.baseURL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      const data = await response.json();
      
      if (data.Transaction && data.Transaction.ResponseCode === '0') {
        return {
          success: true,
          response: data.Transaction,
          approvalCode: data.Transaction.ApprovalCode
        };
      } else {
        return {
          success: false,
          error: data.Transaction?.ResponseDescription || 'Refund failed',
          response: data.Transaction
        };
      }
    } catch (error) {
      return {
        success: false,
        error: error.message || 'Network error during refund'
      };
    }
  }

  /**
   * Query Transaction API Call
   */
  async queryTransaction(transactionId) {
    const requestBody = {
      QueryData: {
        Customer: this.config.customer,
        Store: this.config.store,
        Terminal: this.config.terminal,
        Name: 'QueryTransactionsByLastState',
        StartDate: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().slice(0, 19).replace('T', ' '),
        EndDate: new Date().toISOString().slice(0, 19).replace('T', ' '),
        From: '0',
        To: '10',
        LastTranState: 'Authorized',
        OrderByDate: 'Descending',
        UserName: this.config.username,
        Password: this.config.password
      }
    };

    try {
      const response = await fetch(`${this.config.baseURL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      const data = await response.json();
      
      if (data.Transaction && data.Transaction.ResponseCode === '0') {
        return {
          success: true,
          response: data.Transaction
        };
      } else {
        return {
          success: false,
          error: data.Transaction?.ResponseDescription || 'Query failed',
          response: data.Transaction
        };
      }
    } catch (error) {
      return {
        success: false,
        error: error.message || 'Network error during query'
      };
    }
  }
}

export default UBLPaymentGateway;
