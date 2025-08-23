// Sitemap generator for EcoMoTechWeb
// This utility generates XML sitemaps for better search engine crawling

export interface SitemapURL {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

// Static pages configuration
const staticPages: SitemapURL[] = [
  {
    loc: 'https://ecomotech.online/',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 1.0
  },
  {
    loc: 'https://ecomotech.online/products',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.9
  },
  {
    loc: 'https://ecomotech.online/services',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    loc: 'https://ecomotech.online/about',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    loc: 'https://ecomotech.online/news',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.8
  },
  {
    loc: 'https://ecomotech.online/contact',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.6
  },
  {
    loc: 'https://ecomotech.online/join-us',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.5
  }
];

// Product pages
const productPages: SitemapURL[] = [
  {
    loc: 'https://ecomotech.online/products/solar-panels',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.9
  },
  {
    loc: 'https://ecomotech.online/products/electric-motorcycles',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.9
  },
  {
    loc: 'https://ecomotech.online/products/solar-inverters',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.8
  },
  {
    loc: 'https://ecomotech.online/products/home-systems',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.8
  },
  {
    loc: 'https://ecomotech.online/products/street-lights',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.8
  },
  {
    loc: 'https://ecomotech.online/products/energy-storage',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.9
  },
  {
    loc: 'https://ecomotech.online/products/electric-tricycles',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.8
  },
  {
    loc: 'https://ecomotech.online/products/ev-chargers',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.9
  },
  {
    loc: 'https://ecomotech.online/products/solar-pumbs',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.8
  }
];

// Service pages
const servicePages: SitemapURL[] = [
  {
    loc: 'https://ecomotech.online/services/solar-installation',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    loc: 'https://ecomotech.online/services/solar-maintenance',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    loc: 'https://ecomotech.online/services/ev-charger-installation',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    loc: 'https://ecomotech.online/services/ev-repair',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.6
  },
  {
    loc: 'https://ecomotech.online/services/solar-consultancy',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.6
  },
  {
    loc: 'https://ecomotech.online/services/energy-assessment',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.6
  }
];

// News/Article pages
const newsPages: SitemapURL[] = [
  {
    loc: 'https://ecomotech.online/news/new-solar-panel-series',
    lastmod: '2024-04-15',
    changefreq: 'yearly',
    priority: 0.6
  },
  {
    loc: 'https://ecomotech.online/news/distribution-center',
    lastmod: '2023-03-22',
    changefreq: 'yearly',
    priority: 0.5
  },
  {
    loc: 'https://ecomotech.online/news/remote-communities',
    lastmod: '2023-02-15',
    changefreq: 'yearly',
    priority: 0.5
  },
  {
    loc: 'https://ecomotech.online/news/research-partnership',
    lastmod: '2023-01-10',
    changefreq: 'yearly',
    priority: 0.5
  },
  {
    loc: 'https://ecomotech.online/news/sustainability-report',
    lastmod: '2022-12-01',
    changefreq: 'yearly',
    priority: 0.5
  },
  {
    loc: 'https://ecomotech.online/news/street-lighting',
    lastmod: '2022-11-15',
    changefreq: 'yearly',
    priority: 0.5
  },
  {
    loc: 'https://ecomotech.online/news/electric-mobility-africa',
    lastmod: '2022-10-20',
    changefreq: 'yearly',
    priority: 0.5
  },
  {
    loc: 'https://ecomotech.online/news/ev-charging-africa',
    lastmod: '2022-09-25',
    changefreq: 'yearly',
    priority: 0.5
  },
  {
    loc: 'https://ecomotech.online/news/ev-charging-infrastructure-africa',
    lastmod: '2022-08-30',
    changefreq: 'yearly',
    priority: 0.5
  }
];

// Generate XML sitemap
export const generateSitemap = (): string => {
  const allPages = [...staticPages, ...productPages, ...servicePages, ...newsPages];
  
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const urlsetClose = '</urlset>';
  
  const urls = allPages.map(page => {
    const { loc, lastmod, changefreq, priority } = page;
    
    let urlXml = `  <url>
    <loc>${loc}</loc>`;
    
    if (lastmod) {
      urlXml += `
    <lastmod>${lastmod}</lastmod>`;
    }
    
    if (changefreq) {
      urlXml += `
    <changefreq>${changefreq}</changefreq>`;
    }
    
    if (priority !== undefined) {
      urlXml += `
    <priority>${priority.toFixed(1)}</priority>`;
    }
    
    urlXml += `
  </url>`;
    return urlXml;
  }).join('\n');
  
  return `${xmlHeader}
${urlsetOpen}
${urls}
${urlsetClose}`;
};

// Generate robots.txt content
export const generateRobotsTxt = (): string => {
  return `# Robots.txt for EcoMoTech - Renewable Energy Solutions
# https://ecomotech.online

User-agent: *
Allow: /

# Prioritize important pages for crawling
Allow: /products/
Allow: /services/
Allow: /news/
Allow: /about
Allow: /contact

# Block admin and development files
Disallow: /admin/
Disallow: /.git/
Disallow: /node_modules/
Disallow: /src/
Disallow: *.map
Disallow: /deploy-*
Disallow: /test-*

# Allow CSS, JS, and images for better rendering
Allow: /assets/
Allow: /images/
Allow: *.css
Allow: *.js
Allow: *.png
Allow: *.jpg
Allow: *.jpeg
Allow: *.gif
Allow: *.webp
Allow: *.svg

# Sitemap location
Sitemap: https://ecomotech.online/sitemap.xml

# Crawl delay to be respectful
Crawl-delay: 1

# Special rules for different bots
User-agent: Googlebot
Allow: /
Crawl-delay: 0

User-agent: Bingbot
Allow: /
Crawl-delay: 1

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /`;
};