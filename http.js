const http= require('http');
const server = http.createServer((req, res)=>{
	res.write('hello')
	res.write('world')
	res.end();
});

server.listen(3000);
console.log("listining on port 3000")