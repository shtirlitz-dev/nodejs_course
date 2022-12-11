const winston = require('winston')

const transports = [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log', level: 'info' })
]

// 1. Уровни логирования:
// { 
//   error: 0, // Высокий приоритет сообщения
//   warn: 1, 
//   info: 2, 
//   verbose: 3, 
//   debug: 4, 
//   silly: 5 // Низкий приоритет сообщения
// }
// 
// 2. Стандартные значения переменной NODE_ENV: development или production
if (process.env.NODE_ENV !== 'production') {
    transports.push(new winston.transports.Console({
        format: winston.format.simple()
    }))
}

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
    transports
})

module.exports = logger