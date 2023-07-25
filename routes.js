/*
* Title:Routes
* Description:Application routes function
*/
// dependencies
const {sampleHandler}=require('./handlers/routeHandlers/sampleHandlers')

const routes={
	sample:sampleHandler,
}

module.exports=routes