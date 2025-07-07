export const getCanonicalUrl = (path = '') => {
  const baseUrl = 'https://helplinewelfare.org';
  const canonicalPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${canonicalPath}`;
};
