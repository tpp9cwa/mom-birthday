export function move(position,delta){return {x:Math.max(10,Math.min(90,position.x+delta.x)),y:Math.max(20,Math.min(86,position.y+delta.y))};}
export function closest(position,flowers,radius=14){return flowers.map(f=>({flower:f,d:Math.hypot((position.x-f.x)*1.2,position.y-f.y)})).filter(v=>v.d<radius).sort((a,b)=>a.d-b.d)[0]?.flower;}
