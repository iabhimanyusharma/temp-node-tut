const path = require('path');

console.log(path.sep);

const filePath = path.join('/content', 'subfolder','test.txt');

console.log(filePath);

const base = path.basename(filePath); // provides basename.

console.log(base);

const absolute = path.resolve(__dirname,'content', 'subfolder', 'test.txt'); // why are we working towards finding the absolute path
//of the file, its simply becuase out there in the wild , we wuldbe working on files which are running 
// in different environments

console.log(absolute);