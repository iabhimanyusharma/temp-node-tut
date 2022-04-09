const EventEmitter = require('events') //EventEmitter is a class

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, age) =>{
    console.log(`The users name is ${name} and age is ${age}`); // the call back function here takes
    // the arguments as passed by the emitter, just like regular functions.
})
customEmitter.on('response', () =>{
    console.log("Some other logic here");
})

customEmitter.emit('response') // emit should always come after on
// since emitting the event always come after listening for it

customEmitter.emit('response', 'Abhi', 29) // we can pass other arguments(n number of them)