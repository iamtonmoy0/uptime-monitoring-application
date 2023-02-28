// dependencies 
const http = require('http');
const environment=require('./helpers/environments')
const {req_resp_handler}=require('./helpers/req_resp_handler')

// module scaffolding
const app ={};




// create server
app.createServer=()=>{
	const server =http.createServer(app.handleReqRes);
	server.listen(environment.port,()=>{


		// console.log(`environment variable is ${process.env.NODE_ENV}`);
		console.log(`listening to port ${environment.port}`);
	});
};
app.req_resp_handler=req_resp_handler;

// start server 
app.createServer();