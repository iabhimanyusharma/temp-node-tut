const readFile = require('fs');

readFile('./content/first.txt', 'utf8', (err, ata) => {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log(data);
        return;
    }
})