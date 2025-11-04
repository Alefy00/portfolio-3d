// generate-sitemap.mjs
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://www.alefyxavier.com.br/'; 
const routes = ['/', '/work', '/experience', '/contact', '/skills']; 

const sitemap = new SitemapStream({ hostname: BASE_URL });
const writeStream = createWriteStream(path.join(__dirname, 'public', 'sitemap.xml'));

routes.forEach((url) =>
  sitemap.write({ url, changefreq: 'weekly', priority: url === '/' ? 1.0 : 0.8 })
);

sitemap.end();

streamToPromise(sitemap).then((data) => {
  writeStream.write(data.toString());
  writeStream.end();
  console.log('✅ sitemap.xml gerado em /public');
});
