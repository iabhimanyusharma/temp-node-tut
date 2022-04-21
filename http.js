const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Welcome to our home page');
        res.end();
    } 
    if ( req.url === '/about') {
        res.end("Here is our brief history")
    }
    res.end(`
    <h1>Oops</h1>
    <p>we cant seem to find the page you requested</p>
    <a href ="/">Back Home</a>
    `)
   
})

server.listen(5000); 

// req, res used in http.createserver are both objects
