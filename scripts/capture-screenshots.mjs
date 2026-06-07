// One-off utility: capture hero screenshots of live project sites using the
// locally-installed Google Chrome. Run with:  node scripts/capture-screenshots.mjs
//
// Saves <id>.png into src/assets/screenshots/. Failures are skipped (the app
// falls back to the existing thumbnail), so a blocked site won't break a run.

import puppeteer from 'puppeteer-core';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { mkdirSync, existsSync } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, '..', 'src', 'assets', 'screenshots');

const CHROME =
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

// id -> live url (matches portfolioData ids)
const TARGETS = [
  { id: '1', url: 'https://carwashapp.com/' },
  { id: '2', url: 'https://pangovet.com/' },
  { id: '3', url: 'https://indiefilmsrus.com/' },
  { id: '4', url: 'https://yoyospeak.com/' },
  { id: '5', url: 'https://www.heydividend.com/' },
  { id: '7', url: 'https://www.hubavet.com/' },
  { id: '8', url: 'https://www.eedoctors.net/' },
  { id: '9', url: 'https://www.momoyoga.com/' },
  { id: '10', url: 'https://www.novatelehealth.com/' },
  { id: '11', url: 'https://www.dialavet.com/' },
  { id: '12', url: 'https://www.pawssum.com.au/' },
  { id: '13', url: 'https://vetpass.com/' },
];

const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.0.0 Safari/537.36';

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--no-sandbox', '--disable-gpu', '--hide-scrollbars', '--disable-dev-shm-usage'],
});

const results = [];
for (const { id, url } of TARGETS) {
  const page = await browser.newPage();
  try {
    await page.setUserAgent(UA);
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 35000 });
    // give lazy hero imagery / fonts a moment to settle
    await sleep(2500);
    const out = join(OUT_DIR, `${id}.png`);
    await page.screenshot({ path: out, type: 'png' }); // viewport crop (1440x900)
    results.push(`OK   ${id}  ${url}`);
  } catch (err) {
    results.push(`FAIL ${id}  ${url}  -> ${err.message.split('\n')[0]}`);
  } finally {
    await page.close();
  }
}

await browser.close();
console.log('\n' + results.join('\n') + '\n');
