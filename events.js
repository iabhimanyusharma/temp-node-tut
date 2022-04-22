const EventEmitter = require('events'); //EventEmitter is a class here which is represneted by capital innitials

const emitter = new EventEmitter() ;

//Registering a listner
emitter.on('Message Logged', ()=>console.log('Listener Called'))


// Raise an event
emitter.emit('Message Logged');


// The order of above objects matter, emitter.on for example should always come before raising an event

// we can have as many listeners as we want