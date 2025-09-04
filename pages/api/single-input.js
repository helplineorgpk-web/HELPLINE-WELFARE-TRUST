export default function handler(req, res) {

  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
  }

  const { input } = req.body || {};

  if (typeof input !== 'string' || input.trim() === '') {
    return res.status(400).json({
      error: 'Invalid input: expected a non-empty string field named "input" in the JSON body.',
    });
  }

  return res.status(200).json({
    message: 'Received input successfully',
    input,
  });
}

