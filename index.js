/*
* Title: Uptime-Monitoring-Application
* Description:A RESTFul API to monitor up/down time of user defined links
* Author:Tonmoy(github.com/iamtonmoy0)
* Date: 25-07-2023
*/

//dependencies
const http=require('http');
require('colors');
const {handleReqRes}=require('./helpers/handleReqRes')
const environment=require('./helpers/environment')

//  app object -scaffold
const app={}

// config
app.config={
	port:3000,
}
// create server
app.createServer=()=>{
	const server=http.createServer(app.handleReqRes)
	server.listen(environment.port,()=>{console.log(`App is listening on port : ${environment.port}`.yellow.bold)})
}
// handle request and response
app.handleReqRes=handleReqRes;
// starting the server
 app.createServer()
