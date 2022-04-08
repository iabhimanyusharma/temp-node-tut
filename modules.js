// Modules
// CommonJs - Every files is a module
// Encapsulated code - only share minimum


const names = require('./names')
const sayHi = require('./utils')

const data = require('./alternativeFlavour');
console.log(data);

// sayHi('Abhimanyu')
// sayHi(names.john);
// sayHi(names.peter);

require('./mindGrenade');
