const { AuthenticationError } = require('../model/errors')

function assertAuthenticated (ctx) {
  /*
    TODO [Урок 5.2] - done: Реализуйте функцию проверки аутентификации пользователя.

    Эта функция должна выбрасывать исключение AuthenticationError, если пользователь не прошел аутентификацию.
    Если пользователь прошел аутентификацию -- функция ничего не делает.

    Подсказка: Вы можете найти сведения о пользователе в объекте `ctx.state.user`
   */
  //ctx.assert(ctx.state.user, 403, 'not authorized');
  if(!ctx.state.user)
    throw new AuthenticationError('not authenticated');
}

module.exports = {
  assertAuthenticated
}
