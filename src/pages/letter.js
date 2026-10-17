import {repository,text} from '../data.js';
import {giftBox} from '../gift.js';
export function envelope(){return `<svg viewBox="0 0 260 180" aria-hidden="true"><path class="env-back" d="M12 34Q130 23 248 34L246 163Q130 170 14 163Z"/><path class="flap" d="M12 34L129 114 248 34Z"/><path class="env-front" d="M14 163L94 96 130 120 166 96 246 163M12 34L14 163M248 34L246 163"/><path class="seal" d="M130 104C105 90 111 75 121 79L130 87C147 65 164 90 130 104Z"/></svg>`;}
export async function letterPage(root,{intro=false,onUnlock,onMusic}){
  const letter=await repository.getLetter();let active=true;
  root.className='letter-page';
  const renderLetter=()=>{
    root.replaceChildren();root.classList.add('revealed');
    const sheet=document.createElement('article');sheet.className='letter-sheet enter';sheet.append(text('p','a little something for you','eyebrow'),text('h1',letter.title,'hand'));
    letter.paragraphs.forEach(p=>sheet.append(text('p',p)));
    sheet.append(text('p',letter.signature,'signature hand'));
    const explore=text('button','there’s a little more →','text-button');
    explore.hidden=true;
    explore.onclick=()=>location.hash='garden';
    const gift=giftBox({onOpen:()=>{explore.hidden=false;explore.classList.add('gift-next');}});
    sheet.append(gift,explore);root.append(sheet);onUnlock();
  };
  if(!intro){renderLetter();return()=>{active=false;};}
  const greeting=document.createElement('section');greeting.className='greeting enter';
  const {content}=await import('../content.js');greeting.append(text('h1',content.greeting,'hand'));
  const tap=text('button','tap here →','text-button delayed');greeting.append(tap);root.append(greeting);
  tap.onclick=async()=>{
    tap.disabled=true;onMusic();greeting.classList.add('exit');
    await new Promise(r=>setTimeout(r,450));if(!active)return;
    const wrap=document.createElement('section');wrap.className='envelope-stage enter';const button=document.createElement('button');button.className='envelope-button';button.setAttribute('aria-label','Open your birthday letter');button.innerHTML=envelope();wrap.append(button,text('p','this is for you','hand hint'));root.replaceChildren(wrap);
    button.onclick=async()=>{button.disabled=true;wrap.classList.add('opening');await new Promise(r=>setTimeout(r,1000));if(active)renderLetter();};button.focus({preventScroll:true});
  };
  return()=>{active=false;};
}
