const { chromium } = require(process.env.PORTFOLIO_NODE_MODULES+'/playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
 fs.mkdirSync('evidence',{recursive:true});
 for(const width of [1440,390,320]){
  const page=await browser.newPage({viewport:{width,height:900},reducedMotion:'reduce'});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto('http://127.0.0.1:4174/preview.html#home');
  await page.evaluate(async()=>{await document.fonts.ready;for(const img of document.images){img.loading='eager';await img.decode().catch(()=>{});}});
  assert.match(await page.locator('#intro-title').innerText(),/AI\s*Operations/i);
  assert.ok(!await page.locator('.intro').innerText().then(t=>t.includes('I turn complex')));
  assert.ok(await page.locator('#intro-motion').isDisabled());
  assert.ok(await page.locator('#operations-replay').isDisabled());
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'overflow '+width);
  await page.screenshot({path:'evidence/identity-'+width+'.png'});
  await page.locator('.bottom-dock a[href="#work"]').click();
  await page.locator('.operations-intro').scrollIntoViewIfNeeded();
  await page.screenshot({path:'evidence/operations-'+width+'.png'});
  await page.locator('.bottom-dock a[href="#films"]').click();
  await page.locator('.cinema-intro').scrollIntoViewIfNeeded();
  await page.screenshot({path:'evidence/films-'+width+'.png'});
  assert.deepEqual(await page.locator('img').evaluateAll(images=>images.filter(i=>!i.complete||i.naturalWidth===0).map(i=>i.src)),[]);
  assert.deepEqual(errors,[]);
  await page.close();
 }
 const page=await browser.newPage({viewport:{width:1440,height:900},reducedMotion:'no-preference'});
 await page.goto('http://127.0.0.1:4174/preview.html#work');
 await page.waitForFunction(()=>document.querySelector('.operations-intro').classList.contains('running'));
 assert.ok(await page.locator('.gear-large').evaluate(e=>e.getAnimations().length>0));
 await page.waitForFunction(()=>!document.querySelector('#operations-replay').disabled);
 await page.locator('#operations-replay').click();
 await page.waitForFunction(()=>document.querySelector('.operations-intro').classList.contains('running'));
 await page.locator('.bottom-dock a[href="#home"]').click();
 await page.locator('#intro-motion').click();
 assert.ok(await page.locator('#operations-replay').isDisabled());
 assert.equal(await page.locator('#intro-motion').getAttribute('aria-pressed'),'true');
 await page.locator('#intro-motion').click();
 assert.equal(await page.locator('#intro-motion').getAttribute('aria-pressed'),'false');
 await browser.close();
 console.log('PASS: identity, assets, reduced motion, finite gear animation/replay, motion toggle, 1440/390/320, no overflow/errors.');
})().catch(e=>{console.error(e);process.exit(1)});

