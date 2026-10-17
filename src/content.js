
// Keep IDs stable.
export const content = {
  gift: {message: 'this website will be up for the whole year, you can revisit it whenever you want'},
  greeting: 'hey mom, guess what?',
  letter: {title: 'happy birthday, mom.', paragraphs: [
      'I know I\'ll be away for your 56th birthday Mom and I can\'t give you anything until I come back, so I made this website for you while I\'m in Oxford. I love you, and there are a thousand things I want to thank you for. I hope you stay happy and healthy so we can do a lot of fun stuff together. You are the best mom I could have ever asked for and you always make me feel at home. Seriously I am so grateful for everything you\'ve done for me, and I wish I could pay you back but I don\'t think I ever could.',
      'I made you this website, it\'s like a little world, and I added some of our memories and flowers for you to find, and a few things I always want to say to you.',
      'I hope you like it mom. Every thing here is for you.'
  ], signature: 'with love,\nyour son ♡ 10/24/2026'},
  flowers: [
    {id:'home', x:28,y:37,color:'#e8a5af',title:'a little reminder',message:'Your love always makes me feel at home.'},
      {id:'ordinary',x:69,y:35,color:'#d5b86d',title:'the ordinary days',message:'You make the ordinary days feel special and I wish I could remember every day.'},
    {id:'laughter',x:18,y:65,color:'#b5bee0',title:'your laugh',message:'I love to see you smile and laugh.'},
    {id:'courage',x:75,y:65,color:'#c4add1',title:'something you gave me',message:'Ever since I was a kid you always told me to be kind so I am.'},
    {id:'seen',x:42,y:77,color:'#f1c6a1',title:'thank you',message:'Thank you for always noticing things about me, even when nobody else does.'},
      {id:'wish',x:48,y:24,color:'#ece5ac',title:'a wish for you',message:'I wish you were always happy and healthy, and always get good rest. I want you to do things you like, you deserve everything mom.'}
  ],
  memories: Array.from({ length: 18 }, (_, i) => ({
    id: `pic${i + 1}`,
    image: `/assets/pic${i + 1}.JPG`,
    alt: `Family memory ${i + 1}`,
    date: '',
    title: '',
    caption: ''
  })),
    compliments: ['I love that you are always on time.','I love when you smile','I love how I can always come home.','I love that I can be your son.','I love you everyday.', 'I love how humble you are.', 'You are awesome', 'Thank you for always doing your best to take care of me.', 'Thank you for trying so hard all the time.', 'Your cooking is the best even though dad doesnt like it, I love eomma haejuneun bab.', 'Thanks for making me smarter than everyone else.', 'I want you in my life forever mom.', 'I\'m never too busy for you mom.', 'I\'ll never be too busy for you mom.', 'Does appa like my website? pretty impressive right?', 'tommy and mom 2026', 'Show your friends so they can admire you and me.'],
  music: { file: null, volume: 0.16 } // '/assets/song.mp3'. null uses the included original music-box melody.
};
