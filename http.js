const http= require('http');
const server = http.createServer();
server.on('connection',()=>{
	console.log('new devise connected lol')
})
server.listen(3000);
console.log("listining on port 3000")