import FraudPreventionService from '../../utils/fraudPrevention';

const fraudService = new FraudPreventionService();

export default async function handler(req, res) {
  const { method } = req;

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    switch (method) {
      case 'POST':
        return await handleCustomerRegistration(req, res);
      
      case 'GET':
        return await handleGetCustomer(req, res);
      
      case 'PUT':
        return await handleUpdateCustomer(req, res);
      
      default:
        return res.status(405).json({
          success: false,
          error: 'Method not allowed'
        });
    }
  } catch (error) {
    console.error('Customer Registration API Error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
}

/**
 * Handle customer registration
 */
async function handleCustomerRegistration(req, res) {
  const {
    customerName,
    mobile,
    email,
    dateOfBirth,
    address,
    cnicNumber,
    ipAddress
  } = req.body;

  // Validate required fields
  const requiredFields = {
    customerName: 'Customer Name',
    mobile: 'Mobile Number',
    email: 'Email Address',
    address: 'Address',
    cnicNumber: 'CNIC Number'
  };

  for (const [field, label] of Object.entries(requiredFields)) {
    if (!req.body[field]) {
      return res.status(400).json({
        success: false,
        error: `${label} is required`
      });
    }
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      error: 'Invalid email format'
    });
  }

  // Validate mobile number format (Pakistani mobile)
  const mobileRegex = /^(\+92|0)?[0-9]{10}$/;
  if (!mobileRegex.test(mobile.replace(/\s/g, ''))) {
    return res.status(400).json({
      success: false,
      error: 'Invalid mobile number format'
    });
  }

  // Validate CNIC format
  const cnicRegex = /^[0-9]{5}-[0-9]{7}-[0-9]{1}$/;
  if (!cnicRegex.test(cnicNumber)) {
    return res.status(400).json({
      success: false,
      error: 'Invalid CNIC format. Use format: 12345-1234567-1'
    });
  }

  try {
    const customer = fraudService.registerCustomer({
      customerName,
      mobile,
      email,
      dateOfBirth,
      address,
      cnicNumber,
      ipAddress: ipAddress || req.connection.remoteAddress
    });

    // Remove sensitive data from response
    const { cnicNumber: _, ...customerResponse } = customer;

    return res.status(201).json({
      success: true,
      message: 'Customer registered successfully',
      customer: customerResponse
    });

  } catch (error) {
    console.error('Customer registration error:', error);
    return res.status(400).json({
      success: false,
      error: error.message
    });
  }
}

/**
 * Handle get customer information
 */
async function handleGetCustomer(req, res) {
  const { customerId, email, mobile } = req.query;

  if (!customerId && !email && !mobile) {
    return res.status(400).json({
      success: false,
      error: 'Customer ID, email, or mobile number is required'
    });
  }

  try {
    let customer = null;

    if (customerId) {
      customer = fraudService.customers?.get(customerId);
    } else if (email) {
      customer = fraudService.findCustomerByEmail(email);
    } else if (mobile) {
      customer = fraudService.findCustomerByMobile(mobile);
    }

    if (!customer) {
      return res.status(404).json({
        success: false,
        error: 'Customer not found'
      });
    }

    // Remove sensitive data from response
    const { cnicNumber: _, passportNumber: __, ...customerResponse } = customer;

    return res.status(200).json({
      success: true,
      customer: customerResponse
    });

  } catch (error) {
    console.error('Get customer error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
}

/**
 * Handle update customer information
 */
async function handleUpdateCustomer(req, res) {
  const { customerId } = req.query;
  const updateData = req.body;

  if (!customerId) {
    return res.status(400).json({
      success: false,
      error: 'Customer ID is required'
    });
  }

  try {
    const customer = fraudService.customers?.get(customerId);
    if (!customer) {
      return res.status(404).json({
        success: false,
        error: 'Customer not found'
      });
    }

    // Update customer data
    const updatedCustomer = {
      ...customer,
      ...updateData,
      lastUpdated: new Date()
    };

    fraudService.customers?.set(customerId, updatedCustomer);

    // Remove sensitive data from response
    const { cnicNumber: _, passportNumber: __, ...customerResponse } = updatedCustomer;

    return res.status(200).json({
      success: true,
      message: 'Customer updated successfully',
      customer: customerResponse
    });

  } catch (error) {
    console.error('Update customer error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
}
