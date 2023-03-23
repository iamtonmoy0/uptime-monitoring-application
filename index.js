// dependencies 
const http = require('http');
const environment=require('./helpers/environments')
const {handleReqRes}=require('./helpers/handleReqRes')

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
app.handleReqRes=handleReqRes;

// start server 
app.createServer();