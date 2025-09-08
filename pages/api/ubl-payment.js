/**
 * UBL Payment Gateway API Routes
 * Handles payment registration, finalization, and other payment operations
 */

import UBLPaymentGateway from '../../utils/ublPaymentGateway';

// Initialize payment gateway (use sandbox for development)
const paymentGateway = new UBLPaymentGateway(process.env.NODE_ENV === 'production' ? 'production' : 'sandbox');

export default async function handler(req, res) {
  const { method, body } = req;

  // Set CORS headers
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
 * Handle payment registration
 */
async function handleRegistration(req, res, data) {
  const {
    amount,
    currency = 'PKR',
    orderName,
    orderInfo = '',
    returnPath,
    transactionHint = 'CPT:Y;VCC:Y;',
    language = 'en'
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
    success: result.success
  });

  return res.status(result.success ? 200 : 400).json(result);
}

/**
 * Handle payment finalization
 */
async function handleFinalization(req, res, data) {
  const { transactionId } = data;

  if (!transactionId) {
    return res.status(400).json({
      success: false,
      error: 'Transaction ID is required'
    });
  }

  const result = await paymentGateway.finalizePayment(transactionId);

  // Log transaction for tracking
  console.log('Payment Finalization:', {
    transactionId,
    success: result.success,
    approvalCode: result.approvalCode
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
