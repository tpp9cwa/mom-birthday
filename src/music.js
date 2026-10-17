import {content} from './content.js';
// Original generated music-box motif. No external audio service or download.
export class Music {
  on=false; context=null; timer=null; audio=null;
  async toggle(){ if(this.on){this.stop();return false;} return this.start(); }
  async start(){
    try{
      if(content.music.file){this.audio??=new Audio(content.music.file);this.audio.loop=true;this.audio.volume=content.music.volume;await this.audio.play();}
      else{
        const AudioContext=window.AudioContext||window.webkitAudioContext;
        if(!AudioContext)return false;
        this.context??=new AudioContext();await this.context.resume();
        if(!this.gain){this.gain=this.context.createGain();this.gain.connect(this.context.destination);}this.gain.gain.cancelScheduledValues(this.context.currentTime);this.gain.gain.setValueAtTime(0,this.context.currentTime);this.gain.gain.linearRampToValueAtTime(content.music.volume,this.context.currentTime+2);
        this.next=this.context.currentTime+.1;this.step=0;this.schedule();this.timer=setInterval(()=>this.schedule(),250);
      }
      this.on=true;return true;
    }catch{this.on=false;return false;}
  }
  schedule(){
    const notes=[72,76,79,83,79,76,74,null,69,72,76,79,76,72,71,null,65,69,72,76,72,69,67,null,67,71,74,79,74,71,72,null];
    while(this.next<this.context.currentTime+1){
      const note=notes[this.step++%notes.length];
      if(note!==null){const osc=this.context.createOscillator(), envelope=this.context.createGain();osc.type='sine';osc.frequency.value=440*2**((note-69)/12);envelope.gain.setValueAtTime(0,this.next);envelope.gain.linearRampToValueAtTime(.21,this.next+.012);envelope.gain.exponentialRampToValueAtTime(.0001,this.next+2.1);osc.connect(envelope);envelope.connect(this.gain);osc.start(this.next);osc.stop(this.next+2.2);osc.onended=()=>{osc.disconnect();envelope.disconnect();};}
      this.next+=.64;
    }
  }
  stop(){this.on=false;if(this.audio)this.audio.pause();if(this.timer)clearInterval(this.timer);if(this.context&&this.gain){this.gain.gain.cancelScheduledValues(this.context.currentTime);this.gain.gain.setTargetAtTime(0,this.context.currentTime,.2);}}
}
