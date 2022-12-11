const EventEmitter = require('events')
class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter()
myEmitter.on('event', function handler() {
    console.log(this.constructor.name)
})
myEmitter.emit('event', 'foo')
setTimeout(() => myEmitter.emit('event', 'bar'), 2000)
