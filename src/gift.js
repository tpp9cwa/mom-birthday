import {content} from './content.js';
import {text} from './data.js';

// A small reusable reveal; no timers survive when its page is removed.
export function giftBox({onOpen = () => {}} = {}){
  const wrap=document.createElement('section');wrap.className='gift';
  const button=document.createElement('button');button.className='gift-button';
  button.setAttribute('aria-label','Open a little gift');button.setAttribute('aria-expanded','false');
  button.innerHTML=`<svg viewBox="0 0 160 155" aria-hidden="true"><g class="gift-rays" stroke="#d99a89" fill="none" stroke-linecap="round"><path d="M30 48l-8-9M126 48l9-10M79 30V17"/></g><g class="gift-body"><path d="M35 80L36 135Q78 142 124 135L125 80Z" fill="#f3e8dc" stroke="#a39180" stroke-width="1.2"/><path d="M73 81V138H87V81" fill="#dfafa2"/></g><g class="gift-lid"><path d="M29 66Q80 61 131 66L130 84Q80 88 30 84Z" fill="#f8f0e6" stroke="#a39180" stroke-width="1.2"/><path d="M72 64V87H88V64" fill="#dfafa2"/><path d="M80 64C49 66 44 35 60 38 73 39 79 57 80 64ZM80 64C109 64 116 36 101 38 88 39 82 57 80 64Z" fill="#e7b6a8" stroke="#c58f80" stroke-width="1.1"/></g></svg>`;
  const hint=text('span','a little gift for you','gift-hint hand');button.append(hint);
  const message=text('p',content.gift?.message ?? 'this website will be up for the whole year mom, so you can revisit it whenever you want when you miss me. i will try to update it once in a while','gift-message');message.hidden=true;
  const live=document.createElement('div');live.setAttribute('aria-live','polite');live.append(message);
  button.onclick=()=>{if(button.getAttribute('aria-expanded')==='true')return;wrap.classList.add('is-open');button.setAttribute('aria-expanded','true');button.setAttribute('aria-label','Your gift is open');hint.textContent='all yours! ♡';message.hidden=false;onOpen();};
  wrap.append(button,live);return wrap;
}
