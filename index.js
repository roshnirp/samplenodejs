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





// const http=require('http');
// const hostname ="localhost";
//  const port =3000;
//  const server=http.createServer((req,res)=>{
//     console.log(req.headers);
//     res.statusCode=200;
//     res.setHeader('Content-Type','text/html');
//     res.end('<html><body><h1>surversuccess</h1></body></html>')
// });

// server.listen(port, hostname, ()=>{
//     console.log(`server funning at http://${hostname}:${port}`);
// })

// exports.myDateTime = function () {
//     return Date();
//   };

// const a = {
//     average: (a, b) => {
//         console.log((a + b) / 2);
//     },
//     percent: (a, b) => {
//         console.log((a/b) * 100);
//     },
    
// };
// module.export = a;