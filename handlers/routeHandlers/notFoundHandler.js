const handler={};

handler.notFoundHandler=(requestProperties,callback)=>{
	callback(404,{
		message:'your requested url was not found'
	});
};

module.exports = handler;