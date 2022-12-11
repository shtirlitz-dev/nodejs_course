const http = require('http');
const EventEmitter = require('events')
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer()
console.log(server instanceof EventEmitter)

server.on('request', function logger(req, res) {
  const url = new URL(req.url, `http://${hostname}:${port}`)
  console.log(JSON.stringify({
    protocol: url.protocol,
    hostname: url.hostname,
    port: url.port,
    pathname: url.pathname,
    search: url.search,
  }))
})

server.on('request', function handler(req, res) {
  res.status = 200
  res.end('Hello World!')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`)
});
