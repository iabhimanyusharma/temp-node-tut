// OS module provides utilities to interact with  the operating system


const os = require('os'); // we dont do ./ in require and so as the NODE woudl know that we want to 
// dig into built in module

const user = os.userInfo(); //method to find about current user

console.log(user);

console.log(`The system is up for about ${os.uptime} seconds`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs);