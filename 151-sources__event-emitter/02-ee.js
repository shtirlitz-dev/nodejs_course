const EventEmitter = require('events')
class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter()
myEmitter.on('event', () => {
    console.log('an event occurred!')
})
myEmitter.emit('event')
setTimeout(() => myEmitter.emit('event'), 2000)
