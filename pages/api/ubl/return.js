export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  try {
    let tid = '';
    const ctype = (req.headers['content-type'] || '').toLowerCase();

    if (ctype.includes('application/x-www-form-urlencoded')) {
      const raw = await new Promise((resolve, reject) => {
        let data = '';
        req.setEncoding('utf8');
        req.on('data', (chunk) => (data += chunk));
        req.on('end', () => resolve(data));
        req.on('error', reject);
      });
      const params = new URLSearchParams(raw);
      tid =
        params.get('TransactionID') ||
        params.get('TransactionId') ||
        params.get('transactionId') ||
        params.get('transactionID') ||
        '';
    } else {
      const raw = await new Promise((resolve, reject) => {
        let data = '';
        req.setEncoding('utf8');
        req.on('data', (chunk) => (data += chunk));
        req.on('end', () => resolve(data));
        req.on('error', reject);
      });
      let body = {};
      try { body = JSON.parse(raw || '{}'); } catch { body = {}; }
      tid = body.TransactionID || body.TransactionId || body.transactionId || body.transactionID || '';
    }

    if (!tid) {
      return res.status(400).send('Missing TransactionID');
    }

    const {
      UBL_API_BASE,
      UBL_USERNAME,
      UBL_PASSWORD,
      UBL_FINALIZATION_PATH = '',
      UBL_STORE = '0000',
      UBL_TERMINAL = '0000',
    } = process.env;

    let status = 'pending';

    if (UBL_API_BASE && UBL_USERNAME && UBL_PASSWORD && UBL_FINALIZATION_PATH) {
      const payload = {
        Finalization: {
          TransactionID: tid,
          Customer: 'Demo Merchant',
          UserName: UBL_USERNAME,
          Password: UBL_PASSWORD,
        },
      };

      const FIN_PATH = (UBL_FINALIZATION_PATH && UBL_FINALIZATION_PATH.trim().length > 0)
        ? (UBL_FINALIZATION_PATH.startsWith('/') ? UBL_FINALIZATION_PATH : `/${UBL_FINALIZATION_PATH}`)
        : '/PaymentAPI/Finalization';
      const url = `${UBL_API_BASE.replace(/\/$/, '')}${FIN_PATH}`;
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        });
        const text = await response.text();
        let data;
        try { data = JSON.parse(text); } catch { data = null; }

        const txn = data?.Transaction || data?.transaction || data || {};
        const code = txn?.ResponseCode || data?.ResponseCode || data?.responseCode || data?.Code || data?.code;
        if (String(code) === '0') status = 'success';
        else if (code != null) status = 'failed';
        else status = 'unknown';
      } catch (e) {
        console.error('Finalization error', e);
        status = 'error';
      }
    } else {
      status = 'pending';
    }

    const location = `/payment/result?status=${encodeURIComponent(status)}&tid=${encodeURIComponent(tid)}`;
    res.writeHead(302, { Location: location });
    return res.end();
  } catch (e) {
    console.error('ReturnPath error', e);
    return res.status(500).send('Internal Server Error');
  }
}
