/*
* Title: Request Response Handler
* Description: Handle Request and Response
* Author:Tonmoy(github.com/iamtonmoy0)
* Date: 25-07-2023
*/
// dependencies
const {StringDecoder}= require('string_decoder');
const url = require('url');
const routes = require('../routes');
const { notFoundHandler } = require('../handlers/routeHandlers/notFoundHandler');

//handler
const handler={};
// req res function
handler.handleReqRes=(req,res)=>{
	// request handling
    // get the url and parse it
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;

    const requestProperties={
	parsedUrl,
	path,
	trimmedPath,
	method,
	queryStringObject,
	headersObject
    }

     const decoder = new StringDecoder('utf-8');
    let realData = '';

    const chosenHandler=routes[trimmedPath]? routes[trimmedPath] : notFoundHandler;
    
    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });
    
    req.on('end', () => {
        realData += decoder.end();
        
             chosenHandler(requestProperties,(statusCode, payload) => {
                statusCode = typeof statusCode === 'number' ? statusCode : 500;
                payload = typeof payload === 'object' ? payload : {};
        
                const payloadString = JSON.stringify(payload);
        
                // return the final response
                res.writeHead(statusCode);
                res.end(payloadString);
            });
        
               // response handle
        res.end('Hello world');
    });

};
module.exports=handler