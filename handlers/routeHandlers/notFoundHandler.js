/*
* Title: Not found handler
* Description: If the route did not match then this function will run
*/

// module - scaffold
const handler={};

handler.notFoundHandler=(requestProperties, callback) => {
    callback(404, {
        message: 'Your requested URL was not found!',
    });
};
module.exports=handler;