import {letterPage} from './pages/letter.js';
import {gardenPage} from './pages/garden.js';
import {memoriesPage} from './pages/memories.js';
import {complimentsPage} from './pages/compliments.js';
import {Music} from './music.js';
// Add new pages here. Each mount(root, context) returns a cleanup function.
// Future notes can be another module backed by an authenticated repository adapter.
const pages={letter:{label:'the letter',mount:letterPage},garden:{label:'garden',mount:gardenPage},memories:{label:'our memories',mount:memoriesPage},compliments:{label:'things I love about you',mount:complimentsPage}};
const main=document.querySelector('main'),menu=document.querySelector('#menu'),toggle=document.querySelector('#menu-toggle'),sound=document.querySelector('#sound'),music=new Music();let cleanup=()=>{},unlocked=false,generation=0;
function unlock(){unlocked=true;document.body.classList.add('unlocked');}
async function startMusic(){if(!music.on)await music.start();paintSound();}
function paintSound(){sound.querySelector('span').textContent=music.on?'on':'off';sound.setAttribute('aria-label',music.on?'Mute gentle music':'Turn gentle music on');sound.setAttribute('aria-pressed',String(music.on));}
sound.onclick=async()=>{await music.toggle();paintSound();};
Object.entries(pages).forEach(([id,page])=>{const a=document.createElement('a');a.href='#'+id;a.textContent=page.label;a.onclick=()=>closeMenu();document.querySelector('#navigation').append(a);});
function closeMenu(){menu.close();toggle.setAttribute('aria-expanded','false');}
toggle.onclick=()=>{menu.showModal();toggle.setAttribute('aria-expanded','true');};menu.querySelector('.menu-close').onclick=closeMenu;menu.addEventListener('close',()=>toggle.setAttribute('aria-expanded','false'));menu.addEventListener('click',e=>{if(e.target===menu)closeMenu();});
async function route(){
  const ticket=++generation;cleanup();cleanup=()=>{};main.replaceChildren();
  const id=location.hash.slice(1)||'letter',page=pages[id]||pages.letter,intro=!unlocked&&!location.hash;
  if(!intro)unlock();document.querySelector('#page-name').textContent=intro||id==='letter'?'':page.label;
  document.querySelectorAll('nav a').forEach(a=>{if(a.hash==='#'+id)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
  document.querySelector('footer').hidden=id==='garden';window.scrollTo(0,0);
  try{const teardown=await page.mount(main,{intro,onUnlock:unlock,onMusic:startMusic});if(ticket===generation)cleanup=teardown||(()=>{});else teardown?.();}catch(error){main.textContent='This little page couldn’t open. Please refresh and try again.';console.error(error);}
}
window.addEventListener('hashchange',route);route();
