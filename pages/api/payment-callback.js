import UBLPaymentGateway from '../../utils/ublPaymentGateway';
import FraudPreventionService from '../../utils/fraudPrevention';

// Use UBL_ENV environment variable if available, otherwise fall back to NODE_ENV
const environment = process.env.UBL_ENV || (process.env.NODE_ENV === 'production' ? 'production' : 'sandbox');
const paymentGateway = new UBLPaymentGateway(environment);
const fraudService = new FraudPreventionService();

export default async function handler(req, res) {
  const { method, query, body } = req;

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // Handle both GET and POST requests for payment callbacks
    const transactionId = query.TransactionID || query.transactionId || query.transaction_id || body?.transactionId;
    
    if (!transactionId) {
      return res.status(400).json({
        success: false,
        error: 'Transaction ID is required'
      });
    }

    console.log('Payment Callback API - Processing transaction:', transactionId);

    // Finalize the payment
    const result = await paymentGateway.finalizePayment(transactionId);

    // Record successful transaction for fraud prevention if we have customer data
    if (result.success && body?.customerId) {
      try {
        fraudService.recordTransaction({
          customerId: body.customerId,
          transactionId: transactionId,
          amount: parseFloat(body.amount) || 0,
          cardToken: body.cardToken || result.cardToken,
          ipAddress: body.ipAddress || req.connection.remoteAddress,
          orderId: result.orderId,
          approvalCode: result.approvalCode
        });
      } catch (error) {
        console.error('Error recording transaction for fraud prevention:', error);
      }
    }

    // Log transaction for tracking
    console.log('Payment Callback - Finalization Result:', {
      transactionId,
      success: result.success,
      approvalCode: result.approvalCode,
      customerId: body?.customerId,
      fraudRecorded: !!body?.customerId
    });

    return res.status(result.success ? 200 : 400).json(result);

  } catch (error) {
    console.error('Payment Callback API Error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error during payment processing'
    });
  }
}
