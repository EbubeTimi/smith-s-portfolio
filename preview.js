(()=>{'use strict';
let logged=12,failNext=false;
const $=id=>document.getElementById(id);
function renderDemo(message){$('demo-count').textContent=String(logged);$('demo-total').textContent=new Intl.NumberFormat('en-NG',{style:'currency',currency:'NGN',maximumFractionDigits:0}).format(logged*2500);$('demo-activity').textContent=logged===12?'Ready for next post':'Sample post '+(logged-12)+' added';$('log-video').disabled=logged>=14;$('log-video').textContent=logged>=14?'Demo complete':'Log sample video';$('demo-feedback').textContent=message;}
function resetDemo(){logged=12;failNext=false;renderDemo('Ready to try. Nothing will be sent or saved.');}
$('log-video').addEventListener('click',()=>{if(failNext){failNext=false;renderDemo('Simulated connection error. Nothing changed. Click Log sample video to retry.');return;}if(logged>=14)return;logged++;renderDemo(logged===14?'Two sample posts added. Reset to try again.':'Sample video logged. The amount increased by ₦2,500.');$('demo-total').classList.remove('flash');requestAnimationFrame(()=>$('demo-total').classList.add('flash'));});
$('reset-demo').addEventListener('click',resetDemo);$('review-reset').addEventListener('click',resetDemo);$('review-error').addEventListener('click',()=>{resetDemo();failNext=true;location.hash='work';$('demo-feedback').textContent='Error simulation ready. Click Log sample video.';});
const brands={NorthQuest:[['Trial results','Review queue'],['Creator onboarding','Contracts & records'],['Bonus claims','Business-specific']],CashDrive:[['Inquiries','CashDrive workflow'],['Creator onboarding','Contracts & records'],['Payment preparation','CashDrive records']],AURA:[['Creator records','Business workspace'],['Onboarding','Planned workflow'],['Contracts','Source document needed']]};
document.querySelectorAll('[data-brand]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-brand]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));const content=$('brand-content');content.replaceChildren();const h=document.createElement('h3');h.textContent=button.dataset.brand+' overview';content.append(h);for(const row of brands[button.dataset.brand]){const div=document.createElement('div');div.className='workspace-row';row.forEach(value=>{const span=document.createElement('span');span.textContent=value;div.append(span);});content.append(div);}}));
document.querySelectorAll('[data-play]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('video').forEach(v=>v.pause());const screen=button.closest('.film-screen');const film=button.dataset.play;const video=$('video-template').content.firstElementChild.cloneNode(true);video.src='preview-media/'+film+'.mp4';video.poster='preview-media/'+film+'.jpg';video.setAttribute('aria-label',film==='trailer'?'Soil Edu trailer':film.toUpperCase());video.addEventListener('play',()=>document.querySelectorAll('video').forEach(v=>{if(v!==video)v.pause();}));video.addEventListener('error',()=>{if(screen.querySelector('.film-error'))return;const message=document.createElement('div');message.className='film-error';message.textContent='This film could not load. ';const retry=document.createElement('button');retry.className='button';retry.textContent='Retry film';retry.onclick=()=>{message.remove();video.load();video.play().catch(()=>{});};message.append(retry);screen.append(message);});screen.replaceChildren(video);video.load();video.play().catch(()=>{});video.focus();}));
function route(){const hash=location.hash.slice(1);const target=document.getElementById(hash);const isCase=!!target?.classList.contains('case');$('home-page').hidden=isCase;document.querySelectorAll('.case').forEach(c=>c.hidden=c!==target||!isCase);document.querySelectorAll('video').forEach(v=>v.pause());if(isCase){window.scrollTo(0,0);target.focus({preventScroll:true});document.title=target.querySelector('h1').textContent+' — Smith Onyekwereh';}else{document.title='Smith Onyekwereh — AI Operations & Filmmaking';if(target)requestAnimationFrame(()=>target.scrollIntoView());}}
window.addEventListener('hashchange',route);route();$('motion-toggle').addEventListener('change',e=>document.documentElement.classList.toggle('reduce-motion',e.target.checked));document.querySelectorAll('[data-verdict]').forEach(b=>b.addEventListener('click',()=>{$('review-output').textContent=b.dataset.verdict+' selected locally. Share your decision and notes in the chat; nothing has been sent or published.';}));
})();

/* Chapter entrances are decorative, finite and independent of business demos. */
(() => {
  const root = document.documentElement;
  const systemMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const control = document.getElementById('intro-motion');
  const reviewControl = document.getElementById('motion-toggle');
  const replay = document.getElementById('operations-replay');
  const mechanism = document.querySelector('[data-entrance="operations"]');
  let timer;
  const reduced = () => systemMotion.matches || root.classList.contains('reduce-motion');
  function syncMotion() {
    const isReduced = reduced();
    control.hidden = false;
    control.disabled = systemMotion.matches;
    control.setAttribute('aria-pressed', String(isReduced));
    control.textContent = systemMotion.matches ? 'Motion reduced' : isReduced ? 'Enable motion' : 'Reduce motion';
    reviewControl.checked = isReduced;
    if (replay) {
      clearTimeout(timer);
      replay.hidden = false;
      replay.disabled = isReduced;
      replay.querySelector('.lever-label').textContent = isReduced ? 'Motion reduced' : 'Set it in motion';
    }
    if (isReduced) {
      mechanism?.classList.remove('running');
      document.querySelectorAll('[data-entrance]').forEach(e => e.classList.remove('entered'));
    }
  }
  function runMechanism() {
    if (reduced() || !mechanism) return;
    clearTimeout(timer);
    mechanism.classList.remove('running');
    requestAnimationFrame(() => requestAnimationFrame(() => {
      if (reduced()) return;
      mechanism.classList.add('running');
      replay.disabled = true;
      replay.querySelector('.lever-label').textContent = 'In motion';
      timer = setTimeout(() => {
        mechanism.classList.remove('running');
        replay.disabled = false;
        replay.querySelector('.lever-label').textContent = 'Run it again';
      }, 2000);
    }));
  }
  control.addEventListener('click', () => {
    root.classList.toggle('reduce-motion');
    syncMotion();
  });
  reviewControl.addEventListener('change', syncMotion);
  systemMotion.addEventListener('change', syncMotion);
  replay?.addEventListener('click', runMechanism);
  syncMotion();
  if ('IntersectionObserver' in window) {
    const entrances = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entrances.unobserve(entry.target);
        if (!reduced()) {
          entry.target.classList.add('entered');
          if (entry.target === mechanism) runMechanism();
        }
      });
    }, {threshold: .35});
    document.querySelectorAll('[data-entrance]').forEach(e => entrances.observe(e));
  }
})();
