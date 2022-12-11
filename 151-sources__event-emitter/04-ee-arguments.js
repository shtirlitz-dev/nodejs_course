const EventEmitter = require('events')
class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter()
myEmitter.on('event', function(arg) {
    console.log('an event occurred!', arg)
})
myEmitter.emit('event', 'foo')
setTimeout(() => myEmitter.emit('event', 'bar'), 2000)
