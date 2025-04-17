const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://retrobuildcon.com';

// Define your static routes
const staticRoutes = [
  '/',
  '/about',
  '/services',
  '/projects',
  '/blog',
  '/contact',
];

// Define dynamic routes and their data sources
const dynamicRoutes = [
  // Blog posts
  ...fs.readdirSync(path.join(process.cwd(), 'content/blogs'))
    .filter(file => file.endsWith('.md'))
    .map(file => `/blog/${file.replace('.md', '')}`),
];

// Generate sitemap XML
const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${[...staticRoutes, ...dynamicRoutes]
        .map(route => `
          <url>
            <loc>${SITE_URL}${route}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>${route === '/' ? 'daily' : 'weekly'}</changefreq>
            <priority>${route === '/' ? '1.0' : '0.8'}</priority>
          </url>
        `).join('')}
    </urlset>`;

  // Create the public directory if it doesn't exist
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  // Write the sitemap
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
};

generateSitemap();