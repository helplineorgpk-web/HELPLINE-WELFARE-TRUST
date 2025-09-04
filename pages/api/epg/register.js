import crypto from 'crypto';
import https from 'https';

// Helper function to make HTTP POST request
async function makeRequest(url, data, headers = {}) {
  return new Promise((resolve, reject) => {
    try {
      const urlObj = new URL(url);
      
      const options = {
        hostname: urlObj.hostname,
        port: urlObj.port || 443,
        path: urlObj.pathname + (urlObj.search || ''),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          ...headers
        },
        timeout: 30000 // 30 seconds timeout
      };

      console.log('Making request to:', url);
      console.log('Request options:', JSON.stringify(options, null, 2));
      
      const req = https.request(options, (res) => {
        let responseData = '';
        
        console.log(`Response status: ${res.statusCode} ${res.statusMessage}`);
        console.log('Response headers:', res.headers);
        
        res.on('data', (chunk) => {
          responseData += chunk;
        });
        
        res.on('end', () => {
          try {
            console.log('Raw response data:', responseData);
            const parsed = responseData ? JSON.parse(responseData) : {};
            resolve({
              statusCode: res.statusCode,
              data: parsed,
              headers: res.headers
            });
          } catch (error) {
            console.error('Failed to parse response:', error);
            reject(new Error(`Failed to parse response: ${error.message}`));
          }
        });
      });

      req.on('error', (error) => {
        console.error('Request error:', error);
        reject(new Error(`Request failed: ${error.message}`));
      });

      req.on('timeout', () => {
        console.error('Request timed out');
        req.destroy();
        reject(new Error('Request timed out'));
      });

      const requestBody = JSON.stringify(data);
      console.log('Sending request body:', requestBody);
      
      req.write(requestBody);
      req.end();
    } catch (error) {
      console.error('Error creating request:', error);
      reject(new Error(`Failed to create request: ${error.message}`));
    }
  });
}

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ 
      error: 'Method Not Allowed',
      message: 'Only POST method is allowed',
      allowedMethods: ['POST']
    });
  }

  // Validate content type
  const contentType = req.headers['content-type'];
  if (!contentType || !contentType.includes('application/json')) {
    return res.status(400).json({
      error: 'Invalid Content-Type',
      message: 'Content-Type must be application/json'
    });
  }

  try {
    const {
      amount: amountBody,
      customer: customerBody,
      store: storeBody,
      terminal: terminalBody,
      channel: channelBody,
      currency: currencyBody,
      orderId: orderIdBody,
      orderName: orderNameBody,
      orderInfo: orderInfoBody,
      transactionHint: transactionHintBody,
      returnPath: returnPathBody,
      userName: userNameBody,
      password: passwordBody,
      recurrenceType: recurrenceTypeBody,
      extraData: extraDataBody
    } = req.body || {};

    // Validate required fields
    if (!amountBody) {
      return res.status(400).json({
        error: 'Validation Error',
        message: 'Amount is required',
        field: 'amount'
      });
    }

    // Sanitize and validate amount
    const amount = parseFloat(amountBody);
    if (isNaN(amount) || amount <= 0) {
      return res.status(400).json({
        error: 'Validation Error',
        message: 'Amount must be a positive number',
        field: 'amount',
        value: amountBody
      });
    }

    // Get configuration from environment or request
    const EPG_REGISTRATION_URL = process.env.EPG_REGISTRATION_URL;
    const EPG_CUSTOMER = customerBody || process.env.EPG_CUSTOMER;
    const EPG_STORE = storeBody || process.env.EPG_STORE || '0000';
    const EPG_TERMINAL = terminalBody || process.env.EPG_TERMINAL || '0000';
    const EPG_CHANNEL = channelBody || process.env.EPG_CHANNEL || 'Web';
    const EPG_USERNAME = userNameBody || process.env.EPG_USERNAME;
    const EPG_PASSWORD = passwordBody || process.env.EPG_PASSWORD;
    const EPG_CURRENCY = (currencyBody || process.env.EPG_CURRENCY || 'AED').toUpperCase();
    const EPG_TRANSACTION_HINT = transactionHintBody || process.env.EPG_TRANSACTION_HINT || 'CPT:Y;VCC:Y;';

    // Validate configuration
    const missingConfig = [];
    if (!EPG_REGISTRATION_URL) missingConfig.push('EPG_REGISTRATION_URL');
    if (!EPG_CUSTOMER) missingConfig.push('EPG_CUSTOMER');
    if (!EPG_USERNAME) missingConfig.push('EPG_USERNAME');
    if (!EPG_PASSWORD) missingConfig.push('EPG_PASSWORD');

    if (missingConfig.length > 0) {
      return res.status(500).json({
        error: 'EPG Configuration Error',
        message: 'Missing required EPG configuration',
        missing: missingConfig,
        help: 'Please configure the missing environment variables or provide them in the request.'
      });
    }

    // Generate return path if not provided
    const origin = req.headers.origin || process.env.NEXT_PUBLIC_BASE_URL || '';
    const computedReturnPath = origin ? `${origin}/api/epg/return` : '';
    const returnPath = returnPathBody || computedReturnPath;
    
    if (!returnPath) {
      return res.status(400).json({ 
        error: 'Return Path Required',
        message: 'ReturnPath is required. Provide returnPath in request or set NEXT_PUBLIC_BASE_URL.',
        help: 'Either include returnPath in your request or configure NEXT_PUBLIC_BASE_URL environment variable.'
      });
    }

    // Generate order ID if not provided
    const orderId = orderIdBody || `ORD-${Date.now()}-${crypto.randomBytes(4).toString('hex')}`;
    const orderName = typeof orderNameBody === 'string' && orderNameBody.trim() !== '' 
      ? orderNameBody.substring(0, 100) // Limit length
      : 'Donation';
    
    const orderInfo = typeof orderInfoBody === 'string' && orderInfoBody.trim() !== ''
      ? orderInfoBody.substring(0, 500) // Limit length
      : undefined;

    // Build the registration payload
    const payload = {
      Registration: {
        Currency: EPG_CURRENCY,
        ReturnPath: returnPath,
        TransactionHint: EPG_TRANSACTION_HINT,
        OrderID: orderId,
        Store: EPG_STORE,
        Terminal: EPG_TERMINAL,
        Channel: EPG_CHANNEL,
        Amount: parseFloat(amountBody).toFixed(2), // Ensure 2 decimal places
        Customer: EPG_CUSTOMER,
        OrderName: orderName,
        OrderInfo: orderInfo,
        UserName: EPG_USERNAME,
        Password: EPG_PASSWORD,
      },
    };

    // Add recurrence data if provided
    if (recurrenceTypeBody) {
      payload.Registration.Recurrence = {
        Type: recurrenceTypeBody
      };
    }

    // Add extra data if provided
    if (extraDataBody && typeof extraDataBody === 'object') {
      payload.Registration.ExtraData = extraDataBody;
    }

    // Clean up undefined values
    Object.keys(payload.Registration).forEach((k) => {
      if (payload.Registration[k] === undefined) delete payload.Registration[k];
    });

    console.log('EPG Registration Payload:', {
      ...payload.Registration,
      Password: '***REDACTED***'
    });

    // Mock mode for testing without hitting EPG
    if (process.env.EPG_MOCK === 'true') {
      console.log('EPG Mock Mode: Simulating registration');
      const transactionId = `MOCK-${Date.now()}-${crypto.randomBytes(3).toString('hex')}`;
      
      return res.status(200).json({
        success: true,
        transactionId,
        paymentPortal: '/api/epg/return',
        orderId,
        amount: payload.Registration.Amount,
        currency: payload.Registration.Currency,
        _mock: true,
        epg: { 
          Transaction: { 
            TransactionID: transactionId, 
            PaymentPortal: '/api/epg/return', 
            ResponseCode: '0' 
          } 
        },
      });
    }

    console.log('Making actual EPG request to:', EPG_REGISTRATION_URL);
    const response = await makeRequest(EPG_REGISTRATION_URL, payload);
    
    console.log('EPG Response:', {
      status: response.statusCode,
      data: response.data
    });

    if (response.statusCode >= 200 && response.statusCode < 300) {
      const responseData = response.data.Transaction || response.data;
      
      if (responseData && responseData.RedirectUrl) {
        // For 3D Secure or other redirect flows
        console.log('Payment requires 3D Secure verification');
        res.status(200).json({
          success: false,
          paymentPortal: responseData.RedirectUrl,
          message: '3D Secure verification required',
          requiresAction: true
        });
      } else if (responseData.ResponseCode === '0') {
        // Payment successful, return success response to be handled by the frontend
        console.log('Payment successful, returning success response');
        res.status(200).json({
          success: true,
          message: 'Payment processed successfully',
          transactionId: responseData.TransactionID || responseData.transactionId || 'N/A',
          amount: responseData.amount || req.body.amount,
          timestamp: new Date().toISOString()
        });
      } else {
        // EPG returned an error response
        return res.status(400).json({
          success: false,
          error: 'EPG Registration Failed',
          message: responseData.ResponseDescription || 'Payment registration failed',
          responseCode: responseData.ResponseCode,
          orderId,
          _raw: process.env.NODE_ENV === 'development' ? responseData : undefined
        });
      }
    } else {
      // HTTP error
      throw new Error(`HTTP ${response.statusCode}: ${JSON.stringify(response.data)}`);
    }
  } catch (error) {
    console.error('EPG Registration Error:', error);
    
    // Handle different types of errors
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        error: 'Validation Error',
        message: error.message,
        field: error.field,
        value: error.value
      });
    }
    
    // Default error response
    return res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'An unexpected error occurred while processing your request',
      ...(process.env.NODE_ENV === 'development' && { 
        details: error.message,
        stack: error.stack 
      })
    });
  }
}