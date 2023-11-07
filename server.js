const http = require('http');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    res.end('Hello World!\n');
});

server.listen(3000, () => {
    console.log('Server is running...');
    console.log(_.random(1, 99));
});
