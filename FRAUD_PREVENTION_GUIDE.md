# UBL Payment Gateway Fraud Prevention System

This document outlines the comprehensive fraud prevention system implemented according to UBL's best practices for online merchant transactions in Card-Not-Present scenarios.

## 🛡️ Overview

The fraud prevention system implements all UBL recommended security measures to minimize exposure to fraudulent transactions while maintaining a smooth user experience for legitimate customers.

## 🏗️ System Architecture

### Core Components

1. **FraudPreventionService** (`utils/fraudPrevention.js`)
   - Main fraud detection and prevention logic
   - Customer registration and validation
   - Transaction monitoring and limits
   - Positive/Negative list management

2. **Customer Registration API** (`pages/api/customer-registration.js`)
   - Handles customer registration with mandatory fields
   - Validates customer information
   - Manages customer data securely

3. **Fraud Management API** (`pages/api/fraud-management.js`)
   - Manages positive/negative lists
   - Handles account blocking/unblocking
   - Provides fraud statistics and reporting

4. **Enhanced Payment API** (`pages/api/ubl-payment.js`)
   - Integrates fraud prevention checks
   - Validates transactions before processing
   - Records successful transactions for monitoring

5. **Admin Dashboard** (`pages/fraud-prevention.js`)
   - Visual interface for fraud management
   - Customer registration form
   - Real-time fraud statistics

## 🔐 Security Features Implemented

### 1. Strict Registration Policy

**Mandatory Customer Information:**
- ✅ Customer Name
- ✅ Mobile Number
- ✅ Email Address
- ✅ Date of Birth
- ✅ Address
- ✅ CNIC Number

**Validation Rules:**
- Email format validation
- Pakistani mobile number format validation
- CNIC format validation (12345-1234567-1)
- Required field validation

### 2. Active Monitoring

**Transaction Limits:**
- **Positive List:** Min PKR 1,000 - Max PKR 100,000, Max 3 transactions/month
- **Negative List:** Min PKR 100 - Max PKR 5,000, Max 1 transaction/month
- **New Users:** Max PKR 5,000, Max 1 transaction/day, Max 2 transactions/month
- **IP Address:** Max 5 transactions/day, Max 20 transactions/month

**Monitoring Features:**
- Real-time transaction validation
- Card token frequency tracking
- IP address monitoring
- Suspicious pattern detection
- Rapid successive transaction detection

### 3. Preventive Actions

**Account Management:**
- Automatic account blocking for suspicious activity
- Positive list for trusted customers
- Negative list for restricted customers
- Immediate suspension of suspicious accounts

**Risk Assessment:**
- LOW: Positive list customers, low amounts
- MEDIUM: New users, high-value transactions
- HIGH: Blocked accounts, suspicious patterns

## 📊 Usage Guide

### Customer Registration

```javascript
// Register a new customer
const response = await fetch('/api/customer-registration', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    customerName: 'John Doe',
    mobile: '+92 300 1234567',
    email: 'john@example.com',
    address: '123 Main St, Karachi',
    cnicNumber: '12345-1234567-1'
  })
});
```

### Transaction Validation

```javascript
// Validate transaction before processing
const response = await fetch('/api/ubl-payment', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    action: 'validate_transaction',
    customerId: 'CUST_1234567890_abc123',
    amount: 5000,
    cardToken: 'token123',
    ipAddress: '192.168.1.1'
  })
});
```

### Payment Processing with Fraud Prevention

```javascript
// Process payment with fraud checks
const response = await fetch('/api/ubl-payment', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    action: 'register',
    amount: 5000,
    orderName: 'Donation',
    returnPath: '/payment/callback',
    customerId: 'CUST_1234567890_abc123',
    cardToken: 'token123',
    ipAddress: '192.168.1.1'
  })
});
```

### Fraud Management

```javascript
// Add customer to positive list
const response = await fetch('/api/fraud-management', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    action: 'add_to_positive_list',
    customerId: 'CUST_1234567890_abc123',
    limits: {
      minAmount: 1000,
      maxAmount: 100000,
      maxTransactions: 3
    }
  })
});

// Block suspicious account
const response = await fetch('/api/fraud-management', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    action: 'block_account',
    customerId: 'CUST_1234567890_abc123',
    reason: 'Suspicious transaction patterns detected'
  })
});
```

## 🎛️ Admin Dashboard

Access the fraud prevention dashboard at `/fraud-prevention` to:

1. **View Statistics**
   - Total customers, transactions, and blocked accounts
   - Transaction values and fraud metrics
   - Real-time monitoring data

2. **Manage Lists**
   - Add/remove customers from positive list
   - Add/remove customers from negative list
   - Set custom limits for specific customers

3. **Account Management**
   - Block/unblock customer accounts
   - View customer transaction history
   - Monitor suspicious activities

4. **Customer Registration**
   - Register new customers with full validation
   - Update customer information
   - View customer details and status

## 🔧 Configuration

### Environment Variables

```env
# UBL Payment Gateway Configuration
UBL_CUSTOMER_ID=your_customer_id
UBL_STORE_ID=your_store_id
UBL_TERMINAL_ID=your_terminal_id
UBL_USERNAME=your_username
UBL_PASSWORD=your_password
```

### Fraud Prevention Limits

You can customize the fraud prevention limits in `utils/fraudPrevention.js`:

```javascript
const FRAUD_CONFIG = {
  POSITIVE_LIST: {
    MIN_AMOUNT: 1000,        // PKR
    MAX_AMOUNT: 100000,      // PKR
    MAX_TRANSACTIONS_PER_MONTH: 3
  },
  NEGATIVE_LIST: {
    MIN_AMOUNT: 100,         // PKR
    MAX_AMOUNT: 5000,        // PKR
    MAX_TRANSACTIONS_PER_MONTH: 1
  },
  NEW_USER: {
    MAX_AMOUNT: 5000,        // PKR
    MAX_TRANSACTIONS_PER_DAY: 1,
    MAX_TRANSACTIONS_PER_MONTH: 2
  },
  IP_LIMITS: {
    MAX_TRANSACTIONS_PER_DAY: 5,
    MAX_TRANSACTIONS_PER_MONTH: 20
  }
};
```

## 📈 Monitoring and Logging

### Transaction Logging

All transactions are logged with:
- Customer ID and transaction details
- Fraud validation results
- Risk assessment levels
- IP addresses and card tokens
- Timestamps and approval codes

### Audit Trail

The system maintains a complete audit trail for:
- Customer registrations
- Fraud prevention actions
- Account blocking/unblocking
- List management operations
- Transaction approvals/rejections

## 🚨 Alert System

### Automatic Alerts

The system automatically triggers alerts for:
- High-risk transactions
- Suspicious patterns detected
- Account blocking events
- Limit violations
- Failed fraud validations

### Manual Monitoring

Administrators can:
- Review fraud statistics in real-time
- Investigate suspicious transactions
- Manage customer lists
- Adjust fraud prevention rules

## 🔒 Security Best Practices

1. **Data Protection**
   - Sensitive data (CNIC, Passport) is not returned in API responses
   - All data is validated and sanitized
   - Secure logging without exposing sensitive information

2. **Access Control**
   - Admin dashboard requires proper authentication
   - API endpoints have proper validation
   - Sensitive operations are logged

3. **Monitoring**
   - Real-time fraud detection
   - Comprehensive logging
   - Regular security audits

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment**
   - Set up UBL payment gateway credentials
   - Configure fraud prevention limits

3. **Access Admin Dashboard**
   - Navigate to `/fraud-prevention`
   - Register customers
   - Monitor transactions

4. **Integrate with Payment Flow**
   - Use customer registration before payments
   - Include fraud validation in payment process
   - Monitor and manage fraud prevention

## 📞 Support

For technical support or questions about the fraud prevention system:

1. Check the admin dashboard for real-time status
2. Review transaction logs for detailed information
3. Use the fraud management API for automated operations
4. Monitor fraud statistics and adjust limits as needed

## 🔄 Updates and Maintenance

The fraud prevention system is designed to be:
- **Scalable**: Handles increasing transaction volumes
- **Configurable**: Easy to adjust limits and rules
- **Maintainable**: Clear code structure and documentation
- **Extensible**: Easy to add new fraud prevention features

Regular maintenance includes:
- Reviewing fraud statistics
- Adjusting limits based on business needs
- Updating customer lists
- Monitoring system performance
- Updating security measures

---

This fraud prevention system implements all UBL recommended best practices and provides a comprehensive solution for secure online payment processing while maintaining excellent user experience for legitimate customers.
