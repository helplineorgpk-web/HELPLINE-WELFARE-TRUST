export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { amount, cause } = req.body || {};
    const numericAmount = parseInt(String(amount || '').replace(/[^0-9]/g, ''), 10);
    if (!numericAmount || Number.isNaN(numericAmount) || numericAmount <= 0) {
      return res.status(400).json({ error: 'Invalid amount' });
    }

    const {
      UBL_API_BASE,
      UBL_USERNAME,
      UBL_PASSWORD,
      UBL_TRANSACTION_HINT = 'CPT:Y;VCC:Y',
      UBL_STORE = '0000',
      UBL_TERMINAL = '0000',
      APP_BASE_URL = 'http://localhost:3000',
      UBL_REGISTRATION_PATH = '',
    } = process.env;

    const returnPath = `${APP_BASE_URL.replace(/\/$/, '')}/api/ubl/return`;

    if (!UBL_API_BASE || !UBL_USERNAME || !UBL_PASSWORD || !UBL_REGISTRATION_PATH) {
      return res.status(500).json({
        error: 'Gateway is not configured. Please set UBL_API_BASE, UBL_USERNAME, UBL_PASSWORD, and UBL_REGISTRATION_PATH in .env.local',
      });
    }

    const orderId = `${Date.now()}`;
    const payload = {
      Registration: {
        Customer: 'Demo Merchant',
        Store: UBL_STORE,
        Terminal: UBL_TERMINAL,
        Channel: 'Web',
        Amount: String(numericAmount),
        Currency: process.env.UBL_CURRENCY || 'AED',
        OrderID: orderId,
        OrderName: cause || 'Donation',
        TransactionHint: UBL_TRANSACTION_HINT,
        ReturnPath: returnPath,
        UserName: UBL_USERNAME,
        Password: UBL_PASSWORD,
      },
    };

    const REG_PATH = (UBL_REGISTRATION_PATH && UBL_REGISTRATION_PATH.trim().length > 0)
      ? (UBL_REGISTRATION_PATH.startsWith('/') ? UBL_REGISTRATION_PATH : `/${UBL_REGISTRATION_PATH}`)
      : '/PaymentAPI/Registration';
    const url = `${UBL_API_BASE.replace(/\/$/, '')}${REG_PATH}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    });

    const text = await response.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = null;
    }

    if (!response.ok) {
      return res.status(502).json({ error: 'Registration failed', url, status: response.status, details: data || text });
    }

    const txn = data?.Transaction || data?.transaction || data || {};
    const paymentPortal = txn?.PaymentPortal || txn?.PaymentPage || data?.PaymentPortal || data?.paymentPortal || data?.RedirectURL || data?.redirectURL;
    const transactionId = txn?.TransactionID || txn?.transactionId || data?.TransactionID || data?.TransactionId || data?.transactionId || data?.transactionID;

    if (!paymentPortal || !transactionId) {
      return res.status(502).json({ error: 'Invalid response from gateway', url, data });
    }

    return res.status(200).json({ paymentPortal, transactionId });
  } catch (err) {
    console.error('UBL register error', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
