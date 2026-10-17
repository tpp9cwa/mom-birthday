// Shuffle cycles without repeats inside a cycle, or across cycle boundaries.
export function messageDeck(messages,random=Math.random){
  let bag=[],last;
  return ()=>{
    if(!messages.length)return '';
    if(!bag.length){bag=messages.map((_,i)=>i);for(let i=bag.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[bag[i],bag[j]]=[bag[j],bag[i]];}if(bag.length>1&&bag[bag.length-1]===last){[bag[0],bag[bag.length-1]]=[bag[bag.length-1],bag[0]];}}
    last=bag.pop();return messages[last];
  };
}
