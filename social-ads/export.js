// Rendert alle Ads aus ads.js als PNG nach export/ und schreibt ads.csv.
// Aufruf: node export.js            (alle)
//         node export.js 3 17 42    (nur bestimmte IDs)
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const dir = __dirname;
const outDir = path.join(dir, 'export');
fs.mkdirSync(outDir, { recursive: true });

const ctx = {}; new Function('window', fs.readFileSync(path.join(dir, 'ads.js'), 'utf8'))(ctx);
const ADS = ctx.ADS;
const only = process.argv.slice(2).map(Number);
const SIZE = { '1x1': [1080, 1080], '4x5': [1080, 1350], '9x16': [1080, 1920] };
const PLACEMENT = { '1x1': 'Feed quadratisch', '4x5': 'Feed hochkant (Instagram/Facebook)', '9x16': 'Story / Reel / TikTok / Pinterest' };
const fileName = a => `g4y-ad-${String(a.id).padStart(2, '0')}-${a.format}.png`;

(async () => {
  const browser = await chromium.launch({ args: ['--allow-file-access-from-files'] });
  for (const ad of ADS.filter(a => !only.length || only.includes(a.id))) {
    const [w, h] = SIZE[ad.format];
    const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
    await page.goto('file://' + path.join(dir, 'render.html') + '?id=' + ad.id);
    await page.waitForSelector('body[data-ready="1"]', { timeout: 20000 });
    await page.locator('#ad').screenshot({ path: path.join(outDir, fileName(ad)) });
    await page.close();
    process.stdout.write(`✓ ${fileName(ad)}\n`);
  }
  await browser.close();

  const q = s => '"' + String(s ?? '').replace(/"/g, '""') + '"';
  const rows = [['Nr', 'Datei', 'Format', 'Platzierung', 'Thema', 'Anzeigentitel', 'Primärtext', 'Hashtags', 'CTA-Button', 'Ziel-URL']];
  for (const a of ADS) rows.push([a.id, fileName(a), a.format.replace('x', ':'), PLACEMENT[a.format], a.angle, a.title, a.caption, ctx.HASHTAGS, a.cta, ctx.URL_DEFAULT]);
  fs.writeFileSync(path.join(dir, 'ads.csv'), '﻿' + rows.map(r => r.map(q).join(';')).join('\n'));
  console.log('ads.csv geschrieben');
})();
