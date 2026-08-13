/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://aditechinfo.com',
  generateRobotsTxt: true,
  trailingSlash: true,

  /*
    CANONICAL FIX:
    exclude default auto-generated entries — additionalPaths mein
    manually define kar rahe hain sab URLs with proper priority/freq.
    Isse duplicate canonical issue nahi aayega.
  */
  exclude: ['*'],

  changefreq: 'weekly',
  priority: 0.7,

  additionalPaths: async (config) => [
    /* ── Main Pages ─────────────────────────────────── */
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
      loc: '/services/',
      changefreq: 'monthly',
      priority: 0.9,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/services/branding/',
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/services/digital-marketing/',
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/services/experience-design/',
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/services/technology/',
      changefreq: 'monthly',
      priority: 0.7,
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

    /* ── Case Studies ────────────────────────────────── */
    {
      loc: '/case-studies/carrotkart/',
      changefreq: 'monthly',
      priority: 0.6,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/case-studies/mobileapp/',
      changefreq: 'monthly',
      priority: 0.6,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/case-studies/adiskill/',
      changefreq: 'monthly',
      priority: 0.6,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/case-studies/techfocal/',
      changefreq: 'monthly',
      priority: 0.6,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/case-studies/durgaschoolofmotoring/',
      changefreq: 'monthly',
      priority: 0.6,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/case-studies/adiskillbranding/',
      changefreq: 'monthly',
      priority: 0.6,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/case-studies/adiskillbrochure/',
      changefreq: 'monthly',
      priority: 0.6,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/case-studies/indusessentials/',
      changefreq: 'monthly',
      priority: 0.6,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/case-studies/vendingbrands/',
      changefreq: 'monthly',
      priority: 0.6,
      lastmod: new Date().toISOString(),
    },
  ],

  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/api/' },
    ],
    /*
      404 FIX: additionalSitemaps se duplicate sitemap entry hata di.
      next-sitemap khud /sitemap.xml generate karta hai — dobara
      list karne se Google confuse hota tha aur 404 crawl hoti thi.
    */
    // additionalSitemaps: ['https://aditechinfo.com/sitemap.xml'], // REMOVED
  },
}