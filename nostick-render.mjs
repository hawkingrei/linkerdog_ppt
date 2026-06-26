import { chromium } from 'playwright-core';
import { fileURLToPath } from 'url'; import path from 'path';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const exe='/home/ubuntu/.cache/ms-playwright/chromium-1228/chrome-linux64/chrome';
const b=await chromium.launch({executablePath:exe}); const p=await b.newPage();
await p.goto('file://'+path.join(__dirname,'poster2-nostick.html'),{waitUntil:'networkidle'});
await p.setViewportSize({width:1122,height:1587});
await p.screenshot({path:path.join(__dirname,'nostick.png'),fullPage:true});
await b.close(); console.log('done');
