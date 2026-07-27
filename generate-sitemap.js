const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { resolve } = require('path');
const fetchBlogSlugs = async () => {
    try {
      const fetch = (await import('node-fetch')).default; // Dynamically import node-fetch
      const response = await fetch('https://os5ae1ct.api.sanity.io/v2023-03-06/data/query/production', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `*[_type == "post"] {
              slug
          }`
        }),
      });
  
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
  
      const data = await response.json();
      return data.result;
    } catch (error) {
      console.error('Error fetching blog slugs:', error);
      return [];
    }
};

const generateSitemap = async () => {
  const sitemap = new SitemapStream({ hostname: 'https://www.developerhuzaifa.site' });

  const staticPages = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/blog', changefreq: 'monthly', priority: 0.9 },
    { url: '/connect', changefreq: 'monthly', priority: 0.7 },
    { url: '/projects', changefreq: 'monthly', priority: 0.6 },
    // Add more static pages here
  ];

  staticPages.forEach(page => sitemap.write(page));

  const blogSlugs = await fetchBlogSlugs();
  blogSlugs.forEach(blog => {
    sitemap.write({ url: `/blog/${blog.slug.current}`, changefreq: 'weekly', priority: 0.8 });
  });

  sitemap.end();

  const data = await streamToPromise(sitemap);
  const sitemapPath = resolve(__dirname, 'public', 'sitemap.xml');
  createWriteStream(sitemapPath).write(data);
};

generateSitemap().catch(console.error);
