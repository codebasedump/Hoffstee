const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');

// Directories and paths
const postsDir = './posts';
const outputDir = './blog-posts';
const templatePath = './templates/blog-post-template.html';
const sitemapPath = './sitemap.xml';
const baseUrl = 'https://hoffstee.com.au/blog-posts/';

// Load HTML template
const template = fs.readFileSync(templatePath, 'utf-8');

// Initialize sitemap content
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

// Optional: Add static URLs manually
const staticUrls = [
  { loc: 'https://hoffstee.com.au/', priority: '1.0' },
  { loc: 'https://hoffstee.com.au/about.html', priority: '0.7' },
  { loc: 'https://hoffstee.com.au/blog.html', priority: '0.9' },
  { loc: 'https://hoffstee.com.au/canberra.html', priority: '1.0' },
  { loc: 'https://hoffstee.com.au/contact.html', priority: '0.7' },
  { loc: 'https://hoffstee.com.au/griffith.html', priority: '0.9' },
  { loc: 'https://hoffstee.com.au/melbourne.html', priority: '1.0' },
  { loc: 'https://hoffstee.com.au/shepparton.html', priority: '0.7' },
  { loc: 'https://hoffstee.com.au/sydney.html', priority: '0.9' },
  { loc: 'https://hoffstee.com.au/wagga-wagga.html', priority: '1.0' },
  { loc: 'https://hoffstee.com.au/services-branding.html', priority: '0.7' },
  { loc: 'https://hoffstee.com.au/services-graphicdesign.html', priority: '0.9' },
  { loc: 'https://hoffstee.com.au/services-paidmedia.html', priority: '0.9' },
  { loc: 'https://hoffstee.com.au/services-seo-agency.html', priority: '0.9' },
  { loc: 'https://hoffstee.com.au/services-socialmedia.html', priority: '0.9' },
  { loc: 'https://hoffstee.com.au/services-ui.html', priority: '0.9' },
  { loc: 'https://hoffstee.com.au/services-webdevelopment.html', priority: '0.9' }
];

staticUrls.forEach(({ loc, priority }) => {
  sitemap += `  <url>\n`;
  sitemap += `    <loc>${loc}</loc>\n`;
  sitemap += `    <lastmod>2025-08-20</lastmod>\n`;
  sitemap += `    <changefreq>weekly</changefreq>\n`;
  sitemap += `    <priority>${priority}</priority>\n`;
  sitemap += `  </url>\n`;
});

// Process each Markdown file
fs.readdirSync(postsDir).forEach(file => {
  const filePath = path.join(postsDir, file);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  const htmlContent = marked(content);
  const slug = file.replace('.md', '');

  // Generate HTML
  const jsonLd = `
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "${data.title}",
    "datePublished": "${data.date}",
    "description": "${data.summary}",
    "author": {
      "@type": "Organization",
      "name": "Hoffstee"
    }
  }
  </script>`;

  const finalHtml = template
    .replace(/{{title}}/g, data.title)
    .replace(/{{date}}/g, data.date)
    .replace(/{{summary}}/g, data.summary)
    .replace(/{{tags}}/g, Array.isArray(data.tags) ? data.tags.join(', ') : '')
    .replace(/{{slug}}/g, slug)
    .replace(/{{content}}/g, htmlContent)
    .replace(/{{jsonld}}/g, jsonLd);

  fs.writeFileSync(path.join(outputDir, `${slug}.html`), finalHtml);
  console.log(`✅ Generated: ${slug}.html`);

  // Add to sitemap
  sitemap += `  <url>\n`;
  sitemap += `    <loc>${baseUrl}${slug}.html</loc>\n`;
  sitemap += `    <lastmod>${data.date}</lastmod>\n`;
  sitemap += `    <changefreq>monthly</changefreq>\n`;
  sitemap += `    <priority>0.6</priority>\n`;
  sitemap += `  </url>\n`;
});

sitemap += `</urlset>\n`;

// Write sitemap
fs.writeFileSync(sitemapPath, sitemap, 'utf8');
console.log(`🗺️ Sitemap updated: ${sitemapPath}`);