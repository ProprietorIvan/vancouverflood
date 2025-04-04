/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://vancouverflood.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://vancouverflood.com/server-sitemap.xml', // Optional: For dynamically generated pages
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*', '/server-sitemap.xml'],
  // Add location-specific areas with higher priority to boost SEO for local searches
  additionalPaths: async (config) => {
    const result = [];

    // Add high-priority service area pages
    const serviceAreas = [
      { url: '/', priority: 1.0 },
      { url: '/flood-repair-services-in-vancouver', priority: 0.9 },
      { url: '/water-extraction', priority: 0.9 },
      { url: '/mold-remediation-services-in-vancouver', priority: 0.9 },
      { url: '/structural-repair-services-in-vancouver', priority: 0.9 },
      { url: '/drying-and-dehumidification', priority: 0.9 },
      { url: '/flood-restoration-burnaby', priority: 0.9 },
      { url: '/contact-us', priority: 0.8 },
    ];

    for (const area of serviceAreas) {
      result.push({
        loc: area.url,
        changefreq: 'weekly',
        priority: area.priority,
        lastmod: new Date().toISOString(),
      });
    }

    return result;
  },
  transform: async (config, path) => {
    // Custom transformation for specific paths
    // For example, add alternates for multi-language support if needed

    // Default transformation for other pages
    return {
      loc: path, // => this is the path (URL) of the page
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
}; 