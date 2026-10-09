const http = require('http');

const server = http.createServer((req, res) => {
    // res.write("this is my first server");
    // res.write("12345");
    // res.end("welcome to server")

    if(req.url === "/") {
        res.end("this is home page");
    }
    else if(req.url === "/about") {
        res.end("this is about page");
    }
    
})

server.listen(8000, () => {
    console.log("server started http://localhost:8000");
})