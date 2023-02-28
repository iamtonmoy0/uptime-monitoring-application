
const url = require('url');
const {StringDecoder}= require('string_decoder')
const routes =require('../routes')
const {notFoundHandler}=require('../handlers/routeHandlers/notFoundHandler');
const { type } = require('os');

const handler={}
handler.handleReqRes=(req,res)=> {
// parser
const parseUrl = url.parse(req.url,true);
const path = parseUrl.pathname;
const trimmedPath =path.replace(/^\/+|\/+$/g,'');
const method= req.method.toLowerCase();
const queryStringObject= parseUrl.query;
const headersObject = req.headers;

const requestProperties={
	parseUrl,
	path,
	trimmedPath,
	method,
	queryStringObject,
	headersObject,
};
const Decoder= new StringDecoder('utf-8')
let realData ='';
const chosenHandler=routes[trimmedPath] ? routes[trimmedPath]:notFoundHandler;

req.on('data',(buffer)=>{
	realData +=Decoder.write(buffer);

});
req.on('end',()=>{
	realData+=Decoder.end();

	chosenHandler(requestProperties,(statusCode,payload)=>{
	statusCode=typeof(statusCode)=== 'number'? statusCode:500;
	payload=typeof(payload)==='object'? payload :{};
	const payloadString=JSON.stringify(payload);

	res.writeHead(statusCode);
	res.end(payloadString);

});

	// response handle
	res.end("hello")
});
};

module.exports=handler;