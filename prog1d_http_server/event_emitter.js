const EventEmitter = require('events')

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter()

// .once('ok') only first event
myEmitter.on('ok', function (n) {
    console.log(this.constructor.name,`ok event ${n}`) // 'MyEmitter ...'
})
myEmitter.on('error', (e) => {
    console.log(this.constructor.name,`: on error ${e}`) // 'Object ...' because of lambda
})

myEmitter.emit('ok', 1)
myEmitter.emit('fail')
myEmitter.emit('error', new Error('unexpected!'))
setTimeout(()=> myEmitter.emit('ok', 2), 1000)
