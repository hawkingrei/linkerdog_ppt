import { chromium } from 'playwright-core';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const html = 'file://' + path.join(__dirname, 'poster2-v4.html');

const exe = '/home/ubuntu/.cache/ms-playwright/chromium-1228/chrome-linux64/chrome';
const browser = await chromium.launch({ executablePath: exe });
const page = await browser.newPage();
await page.goto(html, { waitUntil: 'networkidle' });
await page.pdf({
  path: path.join(__dirname, 'linkerdog-a3-poster2-self-intro-v6.pdf'),
  width: '297mm',
  height: '420mm',
  printBackground: true,
  margin: { top: '0', bottom: '0', left: '0', right: '0' },
});
await page.setViewportSize({ width: 1122, height: 1587 });
await page.screenshot({ path: path.join(__dirname, 'linkerdog-a3-poster2-self-intro-v6.png'), fullPage: true });
await browser.close();
console.log('done');
