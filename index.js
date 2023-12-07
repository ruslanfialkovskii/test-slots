const http = require('http');
const server = http.createServer((req, res) => {
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('Test task has been done successfully !\n');
});
const port = 3000;
server.listen(port, () => {
console.log(`Server listen on the port ${port}`);
});