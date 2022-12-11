const http = require('http');
const EventEmitter = require('events')
const port = 3000;

const server = http.createServer();
console.log(server instanceof EventEmitter);

server.on('request', (req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}` )

    var msg = url.searchParams.get('message');
    res.setHeader('Content-Type', 'text/plain; charset=UTF-8');
    if(msg) {
        res.statusCode = 200;
        res.end(msg);
    }
    else {
        res.statusCode = 400;
        res.end('message not given');
    }
});

server.on('request', function logger(req, res)  {
    const url = new URL(req.url, `http://${req.headers.host}` )
    console.log(JSON.stringify({
        protocol: url.protocol,
        hostname: url.hostnane,
        port: url.port,
        pathname: url.pathnane,
        search: url.search,
    }));
});

server. listen(port, () => {
    console. log(`Server is running at port ${port}`);
});