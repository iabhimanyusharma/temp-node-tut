const {readFileSync, writeFileSync,} = require('fs');

console.log('Start');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first);
console.log(second);

writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`); // This method would create a file
// and if it doesnt exist, t would also by default override evrything if the file already exists
// so if we need to append the file and prevent it from overriding, following is the wayu to do so.

writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`, { flag: 'a'});
// {flag: a} this object above prevents overwiriting of the file. a here represents append.

console.log("Done with the task");
console.log('Starting the next task');
