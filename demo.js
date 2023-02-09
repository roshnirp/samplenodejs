const http = require("http");
const fs = require("fs");
const PORT = 2000;
const hostname = "localhost";

const home = fs.readFileSync('./index.html');

const server = http.createServer((req, res)=>{
    if(req.url === "/")
    {
        return res.end(home)
    }
    if(req.url=== "/about")
    {
       return res.end("<h1>About Page</h1>")
    }
    if(req.url === "/service")
    {
       return res.end("<h1>Service Page<h1>")
    }
    else{
        res.end("<h1>400Page not Found</h1>")
    }
});

server.listen(PORT, hostname, ()=>{
    console.log(`server is working on http://${hostname}:${PORT}`);
});


// const http = require("http");
// const server = http.createServer((req, res)=>{
//     res.end("Working");
// });
// server.listen(2000, "localhost", ()=>{
//     console.log("server is working on http://localhost:4000");
// });

// const os =require("os");
// console.log(os.homedir());



// const path = require("path");
// b="/6bpp";
// const a=path.join("/nodeserver/demo.js" + b);
// console.log(a);




// const fs = require("fs");
// const a= "This is file";
// fs.writeFile("./sample.txt",a,()=>{
//     console.log("written");
// })

// console.log("i am first");

// var http = require('http');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World!');
// }).listen(8080);


// var http = require('http');
// var dt = require('./index.js');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write("The date and time is currently: " + dt.myDateTime());
//   res.end();
// }).listen(8080);

// const a = require('./index');

// a.average(10,20);
// a.percent(20,100);

              