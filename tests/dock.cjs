const assert = require('node:assert/strict');
const { chromium } = require(process.env.PORTFOLIO_NODE_MODULES + '/playwright');
const fs = require('node:fs');
(async () => {
  const browser = await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
  fs.mkdirSync('evidence', {recursive:true});
  for (const width of [1440, 390, 320]) {
    const page = await browser.newPage({viewport:{width,height:900}, reducedMotion:'reduce'});
    await page.goto('http://127.0.0.1:4174/preview.html');
    await page.evaluate(() => document.fonts.ready);
    const dock = page.locator('.bottom-dock');
    assert.equal(await dock.count(), 1, 'one permanent bottom dock');
    assert.equal(await dock.evaluate(e => getComputedStyle(e).position), 'fixed');
    const initial = await dock.boundingBox();
    assert.ok(initial.y > 800 && initial.height <= 72);
    assert.ok(initial.x >= 0 && initial.x + initial.width <= width);
    for (const name of ['Work','Films','About','Get in touch']) {
      await dock.getByRole('link',{name, exact:true}).click();
      assert.equal((await dock.boundingBox()).y, initial.y);
    }
    await page.locator('a[href="#case-operations"]').first().evaluate(e => e.click());
    assert.ok(await dock.isVisible());
    await dock.getByRole('link',{name:'Work',exact:true}).click();
    await page.locator('#home-page').waitFor({state:'visible'});
    assert.ok(await page.locator('#home-page').isVisible());
    await dock.getByRole('link',{name:'Get in touch',exact:true}).click();
    await page.waitForFunction(() => location.hash === '#contact' && document.querySelector('#contact').getBoundingClientRect().top < innerHeight / 2);
    const email = await page.locator('a[href="mailto:smithonyekwereh1@gmail.com"]').boundingBox();
    assert.ok(email.y >= 0 && email.y + email.height < initial.y, 'contact above dock');
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    for (const link of await dock.locator('a').all()) {
      await link.focus();
      assert.equal(await link.evaluate(e => e === document.activeElement), true);
      assert.ok((await link.boundingBox()).height >= 44);
    }
    await page.goto('http://127.0.0.1:4174/preview.html#home');
    await page.screenshot({path:'evidence/dock-' + width + '.png'});
    await page.close();
  }
  await browser.close();
  console.log('PASS: fixed dock 1440/390/320, destinations, case return, focus, touch targets and overflow.');
})().catch(e => {console.error(e);process.exit(1);});
