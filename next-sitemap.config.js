/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // NOTE: this project's actual sitemap.xml / robots.txt are generated
  // natively by app/sitemap.ts and app/robots.ts (Next.js metadata routes).
  // This next-sitemap config is kept in sync as a fallback only — it is
  // not wired into the "build" script.
  siteUrl: 'https://aditechinfo.com/kommoncanvas',
  generateRobotsTxt: true,
  trailingSlash: true,
  exclude: ['*'],

  changefreq: 'weekly',
  priority: 0.7,

  additionalPaths: async () => [
    {
      loc: '/',
      changefreq: 'weekly',
      priority: 1.0,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/about/',
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/service/',
      changefreq: 'monthly',
      priority: 0.9,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/work/',
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/contact/',
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
  ],

  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/api/' },
    ],
  },
}