const EventEmitter = require('events');


const emitter = new  EventEmitter();

emitter.on('belRing',()=>{
	console.log('we need to roll')
})
emitter.emit('belRing');
