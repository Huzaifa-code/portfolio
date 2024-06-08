import client from './src/client'
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { resolve } = require('path');

const fetchBlogSlugs = async () => {
  try {

    client.fetch(
        `*[_type == "post"] {
            slug,
        }`
    ).then((data) => { return data } ).catch(
        console.error()
    )

    // const data = await response.json();
    // return data.result;
  } catch (error) {
    console.error('Error fetching blog slugs:', error);
    return [];
  }
};

const generateSitemap = async () => {
  const sitemap = new SitemapStream({ hostname: 'https://www.developerhuzaifa.site' });

  const staticPages = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/connect', changefreq: 'monthly', priority: 0.7 },
    { url: '/blog/best-vs-code-extensions', changefreq: 'weekly', priority: 0.8 },
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
