import fs from 'node:fs';
const rate=44100,duration=12,channels=1,bits=16,count=rate*duration,data=Buffer.alloc(count*2);
const notes=[196,247,294,392,330,294,247,220];
for(let i=0;i<count;i++){const t=i/rate,n=notes[Math.floor(t*2)%notes.length],beat=Math.exp(-((t*2)%1)*5),sample=(Math.sin(2*Math.PI*n*t)*.12+Math.sin(2*Math.PI*(n/2)*t)*.06)*beat;data.writeInt16LE(Math.max(-32767,Math.min(32767,sample*32767)),i*2)}
const out=Buffer.alloc(44+data.length);out.write('RIFF',0);out.writeUInt32LE(36+data.length,4);out.write('WAVEfmt ',8);out.writeUInt32LE(16,16);out.writeUInt16LE(1,20);out.writeUInt16LE(channels,22);out.writeUInt32LE(rate,24);out.writeUInt32LE(rate*channels*bits/8,28);out.writeUInt16LE(channels*bits/8,32);out.writeUInt16LE(bits,34);out.write('data',36);out.writeUInt32LE(data.length,40);data.copy(out,44);fs.mkdirSync('public/assets',{recursive:true});fs.writeFileSync('public/assets/original-clubhouse-theme.wav',out);
