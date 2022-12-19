module.exports = async function errorHandler(ctx, next) {
  try {
    await next();
  } catch(err) {
    console.error(err);
    ctx.status = err.status;
    if(err.status >= 500)
      ctx.body = "Наши специалисты уже работают над устранением ошибки";
    else if(err.status >= 400)
      ctx.body = "Ошибка формирования запроса";
    else
      return;
    //console.error(err.status, ctx.body, ctx.response.status);
    /*
      TODO:
        1. Если статус ответа больше или равен 500 (ошибка сервера), выведите в ответ текст,
          содержащий строку: "Наши специалисты уже работают над устранением ошибки"
        1. Если статус ответа больше или равен 400, но меньше, чем 500 (ошибка клиента), выведите в ответ текст,
          содержащий строку: "Ошибка формирования запроса"
        2. Залогируйте ошибку в стандартный поток вывода
    */
  }
}