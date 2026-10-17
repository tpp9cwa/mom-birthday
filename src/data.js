import {content} from './content.js';
// The UI depends on this adapter, not on where content lives.
// A future authenticated API can replace these methods without changing pages.
export const repository = {
  async getLetter(){ return content.letter; },
  async getFlowers(){ return content.flowers; },
  async getMemories(){ return content.memories; },
  async getCompliments(){ return content.compliments; }
};
export const progress = {
  read(){try{return new Set(JSON.parse(localStorage.getItem('mom:garden:v1')||'[]'));}catch{return new Set();}},
  mark(id){const found=this.read();found.add(id);try{localStorage.setItem('mom:garden:v1',JSON.stringify([...found]));}catch{} return found;}
};
export function text(tag,value,className=''){const el=document.createElement(tag);el.textContent=value;el.className=className;return el;}
