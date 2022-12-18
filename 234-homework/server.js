const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {

  // variant 1: ctx.assert:
  // ctx.query = ctx.request.query
  ctx.assert(ctx.query.message, 400, "Передайте строку в параметре message GET-запроса");

  // variant 2: if() -- not elegant
  // if(ctx.request.query.message === undefined) {
  //   ctx.status = 400;
  //   ctx.body = "Передайте строку в параметре message GET-запроса";
  // }
  // else {
    ctx.body = ctx.query.message;
//  }
  /* 
    TODO: напишите обработчик запроса.
    
    1. Ответом на запрос к /?message=<text> должна быть строка <text>.
       Статус ортвета - 200 (OK)
    2. Если параметр message не задан, в ответ должна быть выведена подсказка: "Передайте строку в параметре message GET-запроса".
       Статус ответа - 400 (BAD REQUEST)

    Подсказка: используйте ctx.assert, чтобы проверить наличие параметра message
    Подсказка: используйте ctx.query для доступа к параметрам GET-запроса
  */
  
})

module.exports = { app }


