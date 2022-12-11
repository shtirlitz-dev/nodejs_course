const http = require('http')

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost`)
  console.log(url.searchParams)
  
  var msg = url.searchParams.get('message');
  res.setHeader('Content-Type', 'text/plain; charset=UTF-8');
  if(msg) {
      res.statusCode = 200;
      res.end(msg);
  }
  else {
      res.statusCode = 400;
      res.end('Передайте строку в параметре message GET-запроса');
  }

  /* 
    TODO: напишите обработчик запроса.
    
    1. Ответом на запрос к /?message=<text> должна быть строка <text>.
       Статус ортвета - 200 (OK)
    2. Если параметр message не задан, в ответ должна быть выведена подсказка: "Передайте строку в параметре message GET-запроса".
       Статус ответа - 400 (BAD REQUEST)

    Подсказка: используйте поле searchParams в объекте url для доступа к параметрам GET-запроса
  */

  //res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  //res.statusCode = 200
  //res.end('Привет!')
});

module.exports = { server }
