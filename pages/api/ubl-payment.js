

import UBLPaymentGateway from '../../utils/ublPaymentGateway';
import FraudPreventionService from '../../utils/fraudPrevention';

const paymentGateway = new UBLPaymentGateway(process.env.UBL_ENV || 'sandbox');
const fraudService = new FraudPreventionService();

export default async function handler(req, res) {
  const { method, body } = req;

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    switch (method) {
      case 'POST':
        const { action, ...data } = body;

        switch (action) {
          case 'register':
            return await handleRegistration(req, res, data);
          
          case 'validate_transaction':
            return await handleTransactionValidation(req, res, data);
          
          case 'finalize':
            return await handleFinalization(req, res, data);
          
          case 'authorize':
            return await handleAuthorization(req, res, data);
          
          case 'capture':
            return await handleCapture(req, res, data);
          
          case 'refund':
            return await handleRefund(req, res, data);
          
          case 'query':
            return await handleQuery(req, res, data);
          
          default:
            return res.status(400).json({
              success: false,
              error: 'Invalid action specified'
            });
        }

      default:
        return res.status(405).json({
          success: false,
          error: 'Method not allowed'
        });
    }
  } catch (error) {
    console.error('Payment API Error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
}

/**
 * Handle payment registration with fraud prevention
 */
async function handleRegistration(req, res, data) {
  const {
    amount,
    currency = 'PKR',
    orderName,
    orderInfo = '',
    returnPath,
    transactionHint = 'CPT:Y;VCC:Y;',
    language = 'en',
    customerId,
    cardToken,
    ipAddress
  } = data;

  // Validate required fields
  if (!amount || !orderName || !returnPath) {
    return res.status(400).json({
      success: false,
      error: 'Missing required fields: amount, orderName, returnPath'
    });
  }

  // Validate amount
  if (isNaN(amount) || parseFloat(amount) <= 0) {
    return res.status(400).json({
      success: false,
      error: 'Invalid amount'
    });
  }

  // Fraud prevention validation
  if (customerId) {
    const fraudValidation = await fraudService.validateTransaction({
      customerId,
      amount: parseFloat(amount),
      cardToken,
      ipAddress: ipAddress || req.connection.remoteAddress,
      transactionId: null,
      orderId: null
    });

    if (!fraudValidation.allowed) {
      return res.status(403).json({
        success: false,
        error: 'Transaction blocked by fraud prevention system',
        reason: fraudValidation.reason,
        riskLevel: fraudValidation.riskLevel
      });
    }

    // Log fraud validation result
    console.log('Fraud Validation Result:', {
      customerId,
      amount,
      allowed: fraudValidation.allowed,
      riskLevel: fraudValidation.riskLevel,
      recommendations: fraudValidation.recommendations
    });
  }

  const result = await paymentGateway.registerPayment({
    amount: parseFloat(amount),
    currency,
    orderName,
    orderInfo,
    returnPath,
    transactionHint,
    language
  });

  // Log transaction for tracking
  console.log('Payment Registration:', {
    orderId: result.orderId,
    transactionId: result.transactionId,
    amount,
    currency,
    success: result.success,
    customerId,
    fraudChecked: !!customerId
  });

  return res.status(result.success ? 200 : 400).json(result);
}

/**
 * Handle transaction validation (fraud prevention check only)
 */
async function handleTransactionValidation(req, res, data) {
  const {
    customerId,
    amount,
    cardToken,
    ipAddress
  } = data;

  if (!customerId || !amount) {
    return res.status(400).json({
      success: false,
      error: 'Customer ID and amount are required'
    });
  }

  try {
    const validationResult = await fraudService.validateTransaction({
      customerId,
      amount: parseFloat(amount),
      cardToken,
      ipAddress: ipAddress || req.connection.remoteAddress,
      transactionId: null,
      orderId: null
    });

    return res.status(200).json({
      success: true,
      validation: validationResult
    });

  } catch (error) {
    console.error('Transaction validation error:', error);
    return res.status(500).json({
      success: false,
      error: 'Transaction validation failed'
    });
  }
}

/**
 * Handle payment finalization with fraud prevention recording
 */
async function handleFinalization(req, res, data) {
  const { transactionId, customerId, amount, cardToken, ipAddress } = data;

  if (!transactionId) {
    return res.status(400).json({
      success: false,
      error: 'Transaction ID is required'
    });
  }

  const result = await paymentGateway.finalizePayment(transactionId);

  // Record successful transaction for fraud prevention
  if (result.success && customerId) {
    try {
      fraudService.recordTransaction({
        customerId,
        transactionId,
        amount: parseFloat(amount) || 0,
        cardToken: cardToken || result.cardToken,
        ipAddress: ipAddress || req.connection.remoteAddress,
        orderId: result.orderId,
        approvalCode: result.approvalCode
      });
    } catch (error) {
      console.error('Error recording transaction for fraud prevention:', error);
    }
  }

  // Log transaction for tracking
  console.log('Payment Finalization:', {
    transactionId,
    success: result.success,
    approvalCode: result.approvalCode,
    customerId,
    fraudRecorded: !!customerId
  });

  return res.status(result.success ? 200 : 400).json(result);
}

/**
 * Handle payment authorization (MOTO transactions)
 */
async function handleAuthorization(req, res, data) {
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
  } = data;

  // Validate required fields
  if (!amount || !orderName || !orderId || !cardNumber || !expiryMonth || !expiryYear) {
    return res.status(400).json({
      success: false,
      error: 'Missing required fields for authorization'
    });
  }

  const result = await paymentGateway.authorizePayment({
    amount: parseFloat(amount),
    currency,
    orderName,
    orderId,
    cardNumber,
    expiryMonth,
    expiryYear,
    verifyCode,
    transactionHint,
    language
  });

  // Log transaction for tracking
  console.log('Payment Authorization:', {
    orderId,
    transactionId: result.transactionId,
    amount,
    success: result.success
  });

  return res.status(result.success ? 200 : 400).json(result);
}

/**
 * Handle payment capture
 */
async function handleCapture(req, res, data) {
  const { transactionId, amount, currency = 'PKR' } = data;

  if (!transactionId) {
    return res.status(400).json({
      success: false,
      error: 'Transaction ID is required'
    });
  }

  const result = await paymentGateway.capturePayment(transactionId, amount, currency);

  // Log transaction for tracking
  console.log('Payment Capture:', {
    transactionId,
    amount,
    success: result.success
  });

  return res.status(result.success ? 200 : 400).json(result);
}

/**
 * Handle payment refund
 */
async function handleRefund(req, res, data) {
  const { transactionId, amount, currency = 'PKR' } = data;

  if (!transactionId) {
    return res.status(400).json({
      success: false,
      error: 'Transaction ID is required'
    });
  }

  const result = await paymentGateway.refundPayment(transactionId, amount, currency);

  // Log transaction for tracking
  console.log('Payment Refund:', {
    transactionId,
    amount,
    success: result.success
  });

  return res.status(result.success ? 200 : 400).json(result);
}

/**
 * Handle transaction query
 */
async function handleQuery(req, res, data) {
  const { transactionId } = data;

  if (!transactionId) {
    return res.status(400).json({
      success: false,
      error: 'Transaction ID is required'
    });
  }

  const result = await paymentGateway.queryTransaction(transactionId);

  return res.status(result.success ? 200 : 400).json(result);
}
