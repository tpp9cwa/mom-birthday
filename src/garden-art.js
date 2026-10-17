// Original, resolution-independent artwork. Keep visual assets out of game logic.
export function avatarArt(){return `
<svg viewBox="0 0 80 108" aria-hidden="true">
 <defs>
  <linearGradient id="sweater" x2="0" y2="1"><stop stop-color="#faf0da"/><stop offset="1" stop-color="#e9d8b9"/></linearGradient>
  <linearGradient id="hair" x2=".8" y2="1"><stop stop-color="#795640"/><stop offset="1" stop-color="#533b30"/></linearGradient>
 </defs>
 <ellipse class="avatar-shadow" cx="40" cy="101" rx="20" ry="4.4" fill="#68745a" opacity=".15"/>
 <g class="avatar-person">
  <g class="avatar-build" transform="translate(4.8 0) scale(.88 1)">
  <g class="avatar-leg leg-left"><path d="M27 75L25 94Q31 98 38 94L39 75" fill="#8b8d8d" stroke="#737777" stroke-width="1.2"/><path d="M26 92Q30 90 36 93L36 100H23Q21 96 26 92" fill="#605552"/><path d="M23 100H36" stroke="#e8dac6" stroke-width="2" stroke-linecap="round"/></g>
  <g class="avatar-leg leg-right"><path d="M41 75L42 94Q49 98 55 94L53 75" fill="#969795" stroke="#737777" stroke-width="1.2"/><path d="M44 93Q51 90 54 94L58 98Q58 101 53 101H43Z" fill="#605552"/><path d="M44 101H56" stroke="#e8dac6" stroke-width="2" stroke-linecap="round"/></g>
  <g class="avatar-arm arm-left"><path d="M25 54Q18 56 17 74" fill="none" stroke="#eadbbd" stroke-width="11" stroke-linecap="round"/><path d="M17 73L17 79" stroke="#dfb79b" stroke-width="7" stroke-linecap="round"/><path d="M12 72L22 73" stroke="#cabb9e" stroke-width="1.1"/></g>
  <g class="avatar-arm arm-right"><path d="M55 54Q63 57 64 74" fill="none" stroke="#eadbbd" stroke-width="11" stroke-linecap="round"/><path d="M64 73L64 79" stroke="#dfb79b" stroke-width="7" stroke-linecap="round"/><path d="M59 73L69 72" stroke="#cabb9e" stroke-width="1.1"/></g>
  <path d="M27 48Q40 43 53 48L57 77Q40 83 23 77Z" fill="url(#sweater)" stroke="#bcad93" stroke-width="1.2"/>
  <path d="M25 73Q40 77 55 73M29 76L29 79M34 76L34 80M40 77L40 81M46 76L46 80M51 75L51 79" stroke="#c9baa0" stroke-width="1" fill="none"/>
  <path d="M33 47Q40 56 47 47" fill="none" stroke="#b7aa90" stroke-width="2.4" stroke-linecap="round"/>
  <g class="avatar-front"><path d="M34 48L40 57L46 48" fill="#fcf7ec" stroke="#c5b79c" stroke-width=".9"/><path d="M40 57V76" stroke="#cbbca1" stroke-width="1"/><g fill="#b9a78b"><circle cx="41" cy="61" r="1.1"/><circle cx="41" cy="67" r="1.1"/><circle cx="41" cy="73" r="1.1"/></g><path d="M28 64H35V70H28ZM46 64H53V70H46Z" fill="#eee2cc" stroke="#c9b99d" stroke-width=".7"/></g>
  </g>
  <g class="avatar-head" transform="translate(2.4 0) scale(.94 1)">
  <path d="M18 34C10 32 11 23 16 21C10 14 17 8 23 10C23 3 34 2 38 7C44 0 53 4 55 10C64 7 70 15 64 22C72 26 70 34 65 37C72 44 65 52 59 50C56 57 48 53 45 51L34 51C28 57 21 54 20 50C11 52 10 44 15 40C10 37 13 33 18 34Z" fill="url(#hair)"/>
  <g class="avatar-face"><circle cx="24" cy="34" r="4" fill="#dfb79b"/><circle cx="56" cy="34" r="4" fill="#dfb79b"/>
   <path d="M24 23Q40 12 56 23L55 35Q53 45 40 51Q27 45 25 35Z" fill="#edcbb0"/>
   <path d="M22 30C16 27 19 19 24 20C20 12 29 9 34 14C36 7 46 9 47 15C54 10 62 17 57 23C63 27 58 33 53 29C50 34 42 30 43 25C39 32 31 30 32 25C29 32 23 34 22 30Z" fill="url(#hair)"/>
   <path d="M22 16C19 12 27 10 29 14M35 12C34 7 43 7 44 12M50 17C52 12 59 15 56 19" fill="none" stroke="#a27956" stroke-width="2.5" stroke-linecap="round" opacity=".7"/>
   <ellipse cx="32.5" cy="35" rx="1.65" ry="2.25" fill="#51443b"/><ellipse cx="47.5" cy="35" rx="1.65" ry="2.25" fill="#51443b"/>
   <ellipse cx="30" cy="39" rx="3" ry="2.1" fill="#dca392" opacity=".55"/><ellipse cx="50" cy="39" rx="3" ry="2.1" fill="#dca392" opacity=".55"/>
   <path d="M36 42Q40 45 44 42" stroke="#a96f60" stroke-width="1.1" fill="none" stroke-linecap="round"/>
   <path d="M41 36L40 39H42" stroke="#d6a78e" fill="none" stroke-width=".8"/>
  </g>
  <g class="avatar-back"><path d="M18 34C10 32 11 23 16 21C10 14 17 8 23 10C23 3 34 2 38 7C44 0 53 4 55 10C64 7 70 15 64 22C72 26 70 34 65 37C72 44 65 52 59 50C56 57 48 53 45 51L34 51C28 57 21 54 20 50C11 52 10 44 15 40C10 37 13 33 18 34Z" fill="url(#hair)"/><path d="M23 17C18 12 29 10 30 16M37 12C36 7 46 8 46 14M53 22C58 16 64 22 58 27M22 29C16 25 15 35 22 35M29 25C23 21 23 33 30 31M39 19C34 14 31 25 39 25M48 33C53 27 59 36 51 39M31 42C25 35 20 46 28 47M39 37C33 31 30 41 38 43" fill="none" stroke="#9a7253" stroke-width="1.5" opacity=".6"/></g>
  <g class="hair-flower" transform="translate(20 7) scale(.68)"><path d="M56 25C47 23 48 16 53 18C53 10 60 11 60 17C67 13 71 20 65 23C71 29 65 33 61 28C57 34 52 30 56 25" fill="#e8bcb0"/><circle cx="59" cy="23" r="2.8" fill="#c99d62"/></g>
 </g>
 </g>
</svg>`;}

export function gardenScene(){
 const grasses=Array.from({length:35},(_,i)=>{const a=i*2.39996,r=110+(i%5)*34,x=400+Math.cos(a)*r*1.35,y=285+Math.sin(a)*r*.72;return `<path d="M${x.toFixed(1)} ${y.toFixed(1)}l-3-7m3 7 4-5"/>`;}).join('');
 const daisies=[[167,259],[159,265],[176,270],[616,408],[626,403],[267,397],[261,407],[659,229],[650,237]].map(([x,y])=>`<g transform="translate(${x} ${y})"><path d="M0 7V0" stroke="#9aaf84"/><g fill="#fffdf4"><ellipse cy="-4" rx="2.4" ry="4"/><ellipse cx="4" rx="4" ry="2.4"/><ellipse cy="4" rx="2.4" ry="4"/><ellipse cx="-4" rx="4" ry="2.4"/></g><circle r="2" fill="#dec17c"/></g>`).join('');
 const stones=[[394,454,19,8,-12],[416,421,19,9,14],[429,386,17,9,-8],[420,352,19,9,9],[401,320,18,8,-10],[392,286,17,8,9],[398,251,18,8,-9],[413,218,17,8,12],[429,185,16,7,-5],[437,153,14,7,9]].map(([x,y,rx,ry,a])=>`<g transform="translate(${x} ${y}) rotate(${a})"><ellipse cy="2" rx="${rx}" ry="${ry}" fill="#ccd3bc" opacity=".4"/><ellipse rx="${rx}" ry="${ry}" fill="#f7f4e7" stroke="#d5d7c3" stroke-width="1"/><path d="M-${rx*.55} -2Q0 -${ry*.6} ${rx*.55} -2" stroke="#fffdf6" stroke-width="1.5" fill="none"/></g>`).join('');
 return `<svg class="land" viewBox="0 0 800 560" aria-hidden="true"><defs><radialGradient id="grass"><stop stop-color="#e0e9cd"/><stop offset=".78" stop-color="#eaf0dc"/><stop offset="1" stop-color="#f3f4e8"/></radialGradient><linearGradient id="tree-trunk" x2="1" y2="0"><stop stop-color="#b19b7b"/><stop offset="1" stop-color="#c6b393"/></linearGradient></defs>
 <path d="M82 335C20 267 114 178 170 170 185 83 307 113 370 72 461 38 553 108 601 123 700 118 761 203 725 259 792 343 683 439 611 441 569 514 445 485 380 505 285 523 245 459 174 465 100 463 57 401 82 335Z" fill="url(#grass)"/>
 <path d="M102 366Q155 438 240 439M530 470Q624 461 665 412" fill="none" stroke="#e0e6d0" stroke-width="3" stroke-linecap="round"/>
 <ellipse cx="580" cy="210" rx="56" ry="13" fill="#a5b18d" opacity=".1"/>
 ${stones}<g stroke="#afbf96" stroke-width="1.2" fill="none" stroke-linecap="round" opacity=".65">${grasses}</g>${daisies}
 <g transform="translate(580 202)">
  <path d="M-7 1Q-3-37-7-79H6Q1-31 9 1Z" fill="url(#tree-trunk)"/><path d="M-1-38L-24-65M1-51L25-80" stroke="#b5a080" stroke-width="4" stroke-linecap="round"/>
  <path d="M-51-66Q-74-91-51-116-56-145-25-146-12-173 16-155 45-168 60-138 85-122 65-96 75-68 45-59 16-40-7-55-34-41-51-66Z" fill="#b9cd9e"/>
  <path d="M-51-91Q-64-115-40-123-41-145-15-140-5-159 16-143 44-153 51-129 74-116 54-98 48-77 25-82 4-65-14-80-40-69-51-91Z" fill="#c9dbac"/>
  <path d="M-36-112Q-38-132-18-126-5-147 9-130 30-142 39-121 55-118 45-105 19-113 11-100-12-116-36-112" fill="#d8e5be" opacity=".8"/>
  <g fill="#f2ead4"><circle cx="-32" cy="-102" r="2.5"/><circle cx="27" cy="-134" r="2"/><circle cx="45" cy="-88" r="2.4"/><circle cx="-12" cy="-73" r="2"/></g>
  <g stroke="#acc08f" stroke-width="1.2" fill="none" stroke-linecap="round"><path d="M-43-86l5-4m23-40 5 1m33 24 4-3m-19 40 5-2"/></g>
 </g>
 <g transform="translate(565 292) rotate(8)"><ellipse cx="32" cy="44" rx="48" ry="8" fill="#a9b294" opacity=".12"/><g stroke="#9b8d75" stroke-width="3" stroke-linecap="round"><path d="M6 1V42M59 1V42M7 24H60"/></g><g fill="#d8c6a6" stroke="#b6a486" stroke-width="1.1"><rect x="-3" y="-8" width="73" height="9" rx="2"/><rect x="-3" y="5" width="73" height="8" rx="2"/><path d="M0 19H68L73 28H-4Z"/></g><path d="M5-4H61M5 8H61" stroke="#eadcc2" stroke-width="1"/></g>
 <g transform="translate(212 378) rotate(-10)"><ellipse cy="28" rx="24" ry="5" fill="#b3bba0" opacity=".18"/><path d="M-13 0H13L16 26Q0 32-16 26Z" fill="#b0c1b5" stroke="#8ea395"/><ellipse rx="13" ry="4" fill="#cbd7c9" stroke="#8ea395"/><path d="M13 7Q34 0 30 19L15 23" fill="none" stroke="#8ea395" stroke-width="3"/><path d="M-13 8L-32-3-35 3-15 20" fill="#b0c1b5" stroke="#8ea395"/><path d="M-37-5L-32 5" stroke="#8ea395" stroke-width="4" stroke-linecap="round"/></g>
 <g class="garden-butterfly" transform="translate(310 166)"><path d="M0 0C-17-18-22 7-3 5-20 19 1 22 1 8 13 23 25 6 5 5 24-6 8-21 2 0" fill="#e2c8ad"/><path d="M1 0V9" stroke="#a99074" stroke-width="1.3"/></g>
 </svg>`;
}

export function flowerArt(){return `<svg viewBox="0 0 60 80" aria-hidden="true"><ellipse cx="30" cy="70" rx="13" ry="2.8" fill="#8eaa7b" opacity=".1"/><path d="M30 69Q34 47 29 28" fill="none" stroke="#8eaa7b" stroke-width="2"/><path d="M31 59Q13 58 14 46 28 45 31 59M32 49Q46 47 47 37 33 37 32 49" fill="#b4c799" stroke="#91ab7b" stroke-width=".8"/><path d="M18 49L30 58M43 40L33 47" stroke="#d0dbb9" stroke-width=".7"/><g class="bloom"><g fill="var(--petal)" stroke="#ac9590" stroke-width=".6"><ellipse cx="29" cy="17" rx="8" ry="10"/><ellipse cx="40" cy="25" rx="10" ry="8"/><ellipse cx="36" cy="37" rx="8" ry="10"/><ellipse cx="23" cy="37" rx="8" ry="10"/><ellipse cx="18" cy="25" rx="10" ry="8"/></g><g fill="#fffdf5" opacity=".23"><ellipse cx="28" cy="14" rx="4" ry="5"/><ellipse cx="40" cy="23" rx="5" ry="3"/><ellipse cx="17" cy="24" rx="4" ry="3"/></g><circle cx="29" cy="27" r="6" fill="#e2bd70"/><circle cx="28" cy="25.5" r="3.5" fill="#ecd18d"/><g fill="#bfa15f"><circle cx="27" cy="27" r=".6"/><circle cx="31" cy="25" r=".6"/><circle cx="30" cy="30" r=".6"/></g></g></svg>`;}
