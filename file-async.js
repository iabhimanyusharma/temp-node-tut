const {readFile, writeFile} = require('fs');

console.log('Start');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt', `Here is the result... : ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('Done with this task');
        })
    })
}
)
console.log('Starting next');

// What an amazing way of showing what ajax is by John smilga, You see here we have read and wrote files
// both synchronously and aysnchronously 
// in sunc-file, the reading , writing are done in sequence
// imagne a scenerio with big tasks where thousands of users are accessing databses 
// we cant wait for them to complete their tasks so that we can move on to another task
// thats where async comes in
// we offload a task as soon as it starts and move to other one 
// for example here, start comes first im console, then comes starting next and then comes done with the task
// above example is also an example of a callback hell


//Callback functions help offloading the tasks, or to perform asynchronous approach 