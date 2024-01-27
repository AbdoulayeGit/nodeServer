
const http = require('http');

const server = http.createServer((req, res) =>{
    res.end("my first node serverr");
});

server.listen(3001);
