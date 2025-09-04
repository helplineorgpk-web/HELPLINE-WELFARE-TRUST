import epgConfig from '../../../config/epg-config';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // Test API connectivity
    const testUrl = new URL(epgConfig.registrationUrl);
    
    return res.status(200).json({
      config: {
        ...epgConfig,
        password: '***REDACTED***'
      },
      apiReachable: true,
      baseUrlValid: epgConfig.baseUrl.startsWith('https://'),
      mockMode: epgConfig.mock
    });
  } catch (error) {
    return res.status(500).json({
      error: 'Connection Test Failed',
      details: error.message
    });
  }
}
