// dependencies 
const http = require('http');

const {req_resp_handler}=require('./helpers/req_resp_handler')

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
app.req_resp_handler=req_resp_handler;

// start server 
app.createServer();