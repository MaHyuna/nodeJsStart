const http = require("http");

http.createServer( (Request, response) => {
    response.writeHead( 200, { "Content-Type" : "text/plain"} );
    response.end(`
    hello world! 
    node js test file
    `);
}).listen(8124);

console.log("server running at http://127.0.0.1:8124");