export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
  }

  try {
    const {
      transactionId,
      customer: customerBody,
      userName: userNameBody,
      password: passwordBody,
      finalizationUrl: finalizationUrlBody,
    } = req.body || {};
    if (typeof transactionId !== 'string' || transactionId.trim() === '') {
      return res.status(400).json({ error: 'Invalid transactionId' });
    }

    if (process.env.EPG_MOCK === 'true') {
      return res.status(200).json({
        result: {
          Transaction: {
            ResponseCode: '0',
            ResponseClass: '0',
            ResponseDescription: 'Mock: Request processed successfully',
            ResponseClassDescription: 'Success',
            Language: 'en',
            ApprovalCode: '000000',
            Account: 'MOCK',
            OrderID: 'MOCK-ORDER',
            Amount: { Value: '0.00' },
            Fees: { Value: '0' },
            CardNumber: '411111******1111',
            CardBrand: 'Visa',
            UniqueID: transactionId,
          },
        },
      });
    }

    const EPG_FINALIZATION_URL = finalizationUrlBody || process.env.EPG_FINALIZATION_URL;
    const EPG_CUSTOMER = customerBody || process.env.EPG_CUSTOMER;
    const EPG_USERNAME = userNameBody || process.env.EPG_USERNAME;
    const EPG_PASSWORD = passwordBody || process.env.EPG_PASSWORD;

    if (!EPG_FINALIZATION_URL || !EPG_CUSTOMER || !EPG_USERNAME || !EPG_PASSWORD) {
      return res.status(500).json({
        error: 'EPG environment not configured. Please set EPG_FINALIZATION_URL, EPG_CUSTOMER, EPG_USERNAME, EPG_PASSWORD.',
      });
    }

    const payload = {
      Finalization: {
        TransactionID: transactionId,
        Customer: EPG_CUSTOMER,
        UserName: EPG_USERNAME,
        Password: EPG_PASSWORD,
      },
    };

    const epgRes = await fetch(EPG_FINALIZATION_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const epgData = await epgRes.json().catch(() => null);

    if (!epgRes.ok) {
      return res.status(502).json({ error: 'EPG Finalization failed', details: epgData || null });
    }

    return res.status(200).json({ result: epgData });
  } catch (err) {
    console.error('EPG finalize error', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
