const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-type": "text/html",
    });
    res.end("<h1>Xin Chào Mọi Người - Ứng Dụng Openshift NodeJS</h1>");
});

server.listen(8000, () => {
    console.log("Listening to requests on port 8000");
});