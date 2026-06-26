import { chromium } from 'playwright-core';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const html = 'file://' + path.join(__dirname, 'poster2.html');

const exe = process.env.CHROME_BIN || undefined;
const browser = await chromium.launch(exe ? { executablePath: exe } : {});
const page = await browser.newPage();
await page.goto(html, { waitUntil: 'networkidle' });
await page.pdf({
  path: path.join(__dirname, 'linkerdog-a3-poster2-self-intro.pdf'),
  width: '297mm',
  height: '420mm',
  printBackground: true,
  margin: { top: '0', bottom: '0', left: '0', right: '0' },
});
// also a PNG preview
await page.setViewportSize({ width: 1122, height: 1587 }); // ~A3 @96dpi
await page.screenshot({ path: path.join(__dirname, 'linkerdog-a3-poster2-self-intro.png'), fullPage: true });
await browser.close();
console.log('done');
