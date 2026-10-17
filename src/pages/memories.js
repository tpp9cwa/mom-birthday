import {repository,text} from '../data.js';
export async function memoriesPage(root){
  const items=await repository.getMemories();let index=0,start=null;root.className='memories-page enter';
  root.innerHTML='<p class="eyebrow">a few moments I kept</p><h1 class="hand">our memories</h1><figure class="memory"><img><figcaption><p class="memory-date"></p><h2 class="hand"></h2><p class="memory-caption"></p></figcaption></figure><div class="memory-controls"><button class="prev" aria-label="Previous memory">←</button><span aria-live="polite"></span><button class="next" aria-label="Next memory">→</button></div><p class="sample-note">illustrated placeholders · your photos will go here</p>';
  const img=root.querySelector('img');
  function render(){const m=items[index];img.src=m.image;img.alt=m.alt;root.querySelector('.memory-date').textContent=m.date;root.querySelector('h2').textContent=m.title;root.querySelector('.memory-caption').textContent=m.caption;root.querySelector('.memory-controls span').textContent=`${index+1} / ${items.length}`;}
  function step(d){index=(index+d+items.length)%items.length;render();}
  root.querySelector('.prev').onclick=()=>step(-1);root.querySelector('.next').onclick=()=>step(1);
  root.querySelector('figure').addEventListener('pointerdown',e=>{start=e.clientX;});root.querySelector('figure').addEventListener('pointerup',e=>{if(start!==null&&Math.abs(e.clientX-start)>45)step(e.clientX<start?1:-1);start=null;});render();return()=>{};
}
