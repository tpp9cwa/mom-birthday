// ALL TEXT BELOW IS SAMPLE COPY. Replace it with your own words.
// Keep IDs stable: they are used to remember which flowers were discovered.
export const content = {
  gift: {message: 'this website will be up for the whole year, you can revisit it whenever you want'},
  greeting: 'hey mom, guess what?',
  letter: {title: 'happy birthday, mom.', paragraphs: [
    'There are a thousand little things I want to thank you for. The ordinary days. The little kindnesses. The way you make everything feel a bit more like home.',
    'So I made you a little world. There are memories to keep, flowers to find, and a few things I don’t say often enough.',
    'Take your time. Every little thing here is for you.'
  ], signature: 'with love,\nme ♡'},
  flowers: [
    {id:'home', x:28,y:37,color:'#e8a5af',title:'a little reminder',message:'Wherever life takes me, your love always feels like home.'},
    {id:'ordinary',x:69,y:35,color:'#d5b86d',title:'the ordinary days',message:'You make the ordinary days feel special. Those are the days I remember most.'},
    {id:'laughter',x:18,y:65,color:'#b5bee0',title:'your laugh',message:'One of my favorite sounds in the whole world is you laughing.'},
    {id:'courage',x:75,y:65,color:'#c4add1',title:'something you gave me',message:'There is a little of your courage in everything brave I do.'},
    {id:'seen',x:42,y:77,color:'#f1c6a1',title:'thank you',message:'Thank you for noticing the little things, even when nobody else does.'},
    {id:'wish',x:48,y:24,color:'#ece5ac',title:'a wish for you',message:'More laughter. More rest. More days spent doing the things you love. You deserve all of them.'}
  ],
  // Add pic1.jpg through pic18.jpg to public/assets/.
  memories: Array.from({ length: 18 }, (_, i) => ({
    id: `pic${i + 1}`,
    image: `/assets/pic${i + 1}.jpg`,
    alt: `Family memory ${i + 1}`,
    date: '',
    title: '',
    caption: ''
  })),
  compliments: ['I love the way you care about the little things.','I love your laugh. Especially when you can’t stop.','I love how you make people feel welcome.','I love that so much of who I am began with you.','I love you on the ordinary days, too.'],
  music: { file: null, volume: 0.16 } // e.g. '/assets/your-licensed-song.mp3'. null uses the included original music-box melody.
};
