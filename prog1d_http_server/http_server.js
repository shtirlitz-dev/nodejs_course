const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
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
    /*
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
        protocol: url.protocol,
        hostname: url.hostnane,
        port: url.port,
        pathname: url.pathnane,
        search: url.search,
    }));
    */
});

server. listen(port, () => {
    console. log(`Server is running at port ${port}`);
});