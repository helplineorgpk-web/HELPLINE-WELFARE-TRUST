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
        return await handleFraudAction(req, res);
      
      case 'GET':
        return await handleGetFraudData(req, res);
      
      default:
        return res.status(405).json({
          success: false,
          error: 'Method not allowed'
        });
    }
  } catch (error) {
    console.error('Fraud Management API Error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
}

/**
 * Handle fraud management actions
 */
async function handleFraudAction(req, res) {
  const { action, customerId, reason, limits } = req.body;

  if (!action || !customerId) {
    return res.status(400).json({
      success: false,
      error: 'Action and Customer ID are required'
    });
  }

  try {
    let result;

    switch (action) {
      case 'add_to_positive_list':
        result = fraudService.addToPositiveList(customerId, limits);
        break;

      case 'add_to_negative_list':
        if (!reason) {
          return res.status(400).json({
            success: false,
            error: 'Reason is required for adding to negative list'
          });
        }
        result = fraudService.addToNegativeList(customerId, reason, limits);
        break;

      case 'block_account':
        if (!reason) {
          return res.status(400).json({
            success: false,
            error: 'Reason is required for blocking account'
          });
        }
        result = fraudService.blockAccount(customerId, reason);
        break;

      case 'unblock_account':
        if (!reason) {
          return res.status(400).json({
            success: false,
            error: 'Reason is required for unblocking account'
          });
        }
        result = fraudService.unblockAccount(customerId, reason);
        break;

      default:
        return res.status(400).json({
          success: false,
          error: 'Invalid action specified'
        });
    }

    return res.status(200).json({
      success: true,
      message: `Action ${action} completed successfully`,
      result
    });

  } catch (error) {
    console.error('Fraud action error:', error);
    return res.status(400).json({
      success: false,
      error: error.message
    });
  }
}

/**
 * Handle get fraud data
 */
async function handleGetFraudData(req, res) {
  const { type, customerId } = req.query;

  try {
    switch (type) {
      case 'stats':
        const stats = fraudService.getFraudStats();
        return res.status(200).json({
          success: true,
          stats
        });

      case 'positive_list':
        const positiveList = Array.from(fraudService.positiveList?.values() || []);
        return res.status(200).json({
          success: true,
          positiveList
        });

      case 'negative_list':
        const negativeList = Array.from(fraudService.negativeList?.values() || []);
        return res.status(200).json({
          success: true,
          negativeList
        });

      case 'blocked_accounts':
        const blockedAccounts = Array.from(fraudService.blockedAccounts || []);
        return res.status(200).json({
          success: true,
          blockedAccounts
        });

      case 'customer_transactions':
        if (!customerId) {
          return res.status(400).json({
            success: false,
            error: 'Customer ID is required'
          });
        }
        
        const customerTransactions = Array.from(fraudService.transactions?.values() || [])
          .filter(t => t.customerId === customerId)
          .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        
        return res.status(200).json({
          success: true,
          transactions: customerTransactions
        });

      case 'customer_details':
        if (!customerId) {
          return res.status(400).json({
            success: false,
            error: 'Customer ID is required'
          });
        }
        
        const customer = fraudService.customers?.get(customerId);
        if (!customer) {
          return res.status(404).json({
            success: false,
            error: 'Customer not found'
          });
        }

        // Get customer's fraud status
        const isOnPositiveList = fraudService.positiveList?.has(customerId);
        const isOnNegativeList = fraudService.negativeList?.has(customerId);
        const isBlocked = fraudService.blockedAccounts?.has(customerId);

        const customerDetails = {
          ...customer,
          fraudStatus: {
            isOnPositiveList,
            isOnNegativeList,
            isBlocked,
            positiveListData: isOnPositiveList ? fraudService.positiveList?.get(customerId) : null,
            negativeListData: isOnNegativeList ? fraudService.negativeList?.get(customerId) : null
          }
        };

        // Remove sensitive data
        const { cnicNumber: _, passportNumber: __, ...safeCustomerDetails } = customerDetails;

        return res.status(200).json({
          success: true,
          customer: safeCustomerDetails
        });

      default:
        return res.status(400).json({
          success: false,
          error: 'Invalid type specified'
        });
    }

  } catch (error) {
    console.error('Get fraud data error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
}
