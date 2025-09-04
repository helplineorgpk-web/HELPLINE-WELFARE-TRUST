import { Feed } from 'feed';
import { organizationInfo } from '../../config/seo.config';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const EXTERNAL_DATA_URL = 'https://helplinewelfare.org';

  const feed = new Feed({
    title: 'Helpline Welfare Organization',
    description: 'Updates from Helpline Welfare Organization - Transforming Lives Through Welfare in Pakistan',
    id: EXTERNAL_DATA_URL,
    link: EXTERNAL_DATA_URL,
    language: 'en',
    image: `${EXTERNAL_DATA_URL}/img/logo.png`,
    favicon: `${EXTERNAL_DATA_URL}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Helpline Welfare Organization`,
    updated: new Date(),
    generator: 'Helpline Welfare Feed Generator',
    feedLinks: {
      rss2: `${EXTERNAL_DATA_URL}/feed.xml`,
      json: `${EXTERNAL_DATA_URL}/feed.json`,
      atom: `${EXTERNAL_DATA_URL}/feed.atom`,
    },
    author: {
      name: organizationInfo.name,
      email: organizationInfo.contact.email,
      link: EXTERNAL_DATA_URL,
    },
  });
  feed.addItem({
    title: 'Latest News from Helpline',
    id: `${EXTERNAL_DATA_URL}/news/latest`,
    link: `${EXTERNAL_DATA_URL}/news/latest`,
    description: 'Stay updated with the latest news and developments from Helpline Welfare Organization.',
    content: 'Detailed content of the news item goes here.',
    author: [
      {
        name: organizationInfo.name,
        email: organizationInfo.contact.email,
        link: EXTERNAL_DATA_URL,
      },
    ],
    date: new Date(),
    image: `${EXTERNAL_DATA_URL}/img/news/latest.jpg`,
  });

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=3600, stale-while-revalidate=1800'
  );

  const format = req.query.format || 'rss';
  let output;
  switch (format) {
    case 'atom':
      res.setHeader('Content-Type', 'application/atom+xml');
      output = feed.atom1();
      break;
    case 'json':
      res.setHeader('Content-Type', 'application/json');
      output = feed.json1();
      break;
    default:
      res.setHeader('Content-Type', 'application/rss+xml');
      output = feed.rss2();
  }

  return res.status(200).send(output);
}
