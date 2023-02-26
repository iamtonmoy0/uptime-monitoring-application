// dependencies 
const http = require('http');
const url = require('url');
const {StringDecoder}= require('string_decoder')

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
// parser
const parseUrl = url.parse(req.url,true);
const path = parseUrl.pathname;
const trimmedPath =path.replace(/^\/+|\/+$/g,'');
const method= req.method.toLowerCase();
const queryStringObject= parseUrl.query;
const headersObject = req.headers;

const Decoder= new StringDecoder('utf-8')
let realData ='';

req.on('data',(buffer)=>{
	realData +=Decoder.write(buffer);

});
req.on('end',()=>{
	realData+=Decoder.end();
	console.log(realData)
	res.end("hello")
});



	

};

// start server 
app.createServer();