const {readFile, writeFile} = require('fs'); // we can use require('fs').promises and we wont even need
// to use util etc


const util = require('util');
const readFilePromise = util.promisify(readFile);//promisy method of util is essentially functioning as 
//a wrapper function of promises coded below in comments

const writeFilePromise = util.promisify(writeFile);



const start = async() => {
    try {
        const first = await readFilePromise('./content/first.txt', 'utf8')
        const second = await readFilePromise('./content/second.txt', 'utf8')
        await writeFilePromise('./content/result-mind-grenade.txt', `This is awesome: ${first}, ${second}`)
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}
start();

// the try block allows us to to try out or execute a block of code 
// catch allows us to catch the error if it occurs in the try block
// async function always returns a promise
// await waits till promsise is resolved
// we dont need to use .then etc


//     const getText = (path) => {
//     return new Promise ((resolve, reject) => {

//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err); 
//             } else {
//                 resolve(data);
//             }
//         })

//     })
// }

// getText('./content/first.txt')
// .then((result)=>console.log(result))
// .catch((err)=>console.log(err));