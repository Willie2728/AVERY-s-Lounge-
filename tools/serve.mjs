import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {extname,join,normalize} from 'node:path';
const root=join(process.cwd(),'dist','client');
const types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.png':'image/png','.webp':'image/webp','.svg':'image/svg+xml','.mp4':'video/mp4','.wav':'audio/wav','.txt':'text/plain'};
createServer(async(req,res)=>{try{let path=decodeURIComponent(new URL(req.url,'http://local').pathname);if(path==='/'||!extname(path))path='/index.html';const file=normalize(join(root,path));if(!file.startsWith(root))throw new Error('bad path');const body=await readFile(file);res.writeHead(200,{'Content-Type':types[extname(file)]||'application/octet-stream'});res.end(body)}catch{try{const body=await readFile(join(root,'index.html'));res.writeHead(200,{'Content-Type':'text/html'});res.end(body)}catch{res.writeHead(404);res.end('Not found')}}}).listen(4173,'127.0.0.1',()=>console.log('Avery Lounge ready at http://127.0.0.1:4173'));
