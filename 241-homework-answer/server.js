const Koa = require('koa')
const errorHandler = require('./middlewares/error-handler')
/*
  TODO: используйте функцию require, чтобы подключить модуль, содержащий middleware
*/

const app = new Koa()
app.use(errorHandler)
/*
  TODO: используйте функцию app.use, чтобы подключить middleware
*/

app.use(async (ctx, next) => {
  ctx.assert(ctx.query.error != 500, 500)
  ctx.assert(ctx.query.message, 400, 'Передайте строку в параметре message GET-запроса')
  ctx.body = ctx.query.message
})
module.exports = { app }


