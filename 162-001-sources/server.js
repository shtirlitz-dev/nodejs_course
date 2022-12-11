const http = require('http')
const log = require('./logger')

const server = http.createServer((req, res) => {
  log.info(`${req.method}: ${req.url}`)
  const url = new URL(req.url, `http://localhost`)

  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  const message = url.searchParams.get('message')
  if (!message) {
    log.error(`Message can not be parsed from URL: ${req.url}`)
    res.statusCode = 400
    return res.end('Передайте строку в параметре message GET-запроса')    
  }
  
  log.debug(`Message received: ${message}`)
  res.statusCode = 200
  res.end(message)
});

module.exports = { server }


