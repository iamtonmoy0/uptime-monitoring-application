// dependencies 
const http = require('http');

// module scaffolding
const app ={};

//  server config
app.config ={
	port:3000,
} ;

// create server
app.createServer=()=>{
	const server =http.createServer(app.handleReqRes);
	server.listen(app.config.port,()=>{
		console.log(`listening to port ${app.config.port}`);
	});
};

// req and resp handler

app.handleReqRes=(req,res)=> {
	res.end('hello world heheheh');
};

// start server 
app.createServer();