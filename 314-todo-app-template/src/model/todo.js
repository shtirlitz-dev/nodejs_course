const fs = require('fs').promises
const ObjectID = require('mongodb').ObjectID
const dbConnection = require('./db')
const { importTodoTxt } = require('./todotxt')
const { InvalidArgError } = require('./errors')

const COLLECTION = 'todos'

/**
 * @typedef TodoEntry
 * @property {string}  title - текст записи
 * @property {boolean} [completed] - флаг завершенности задачи
 * @property {Date}    [completedAt] - дата завершения (для завершенных задач)
 * @returns
 */

/**
 * @typedef TodosCount
 * @property {number} total - количество записей в списке дел
 * @property {number} completed - количество завершенных записей в списке дел
 * @returns
 */

/**
 * Создает новый объект, в котором все поля кроме `_id` совпадают с входным объектом.
 * Поле `_id` (если есть) будет преобразовано к объекту класса ObjectID,
 * который можно использовать для выполнения запросов к MongoDB.
 * @param {Object} query - параметры запроса find к MongoDB
 * @returns {Object} - параметры запроса find к MongoDB с подготовленным значением `_id`
 */
function _mapObjectId (query = {}) {
  try {
    const idQuery = query._id
      ? { _id: ObjectID(query._id) }
      : {}

    return { ...query, ...idQuery }
  } catch (err) {
    throw new InvalidArgError(err.message)
  }
}

/**
 * Создает запись todo в базе данных
 * @param {TodoEntry} data - атрибуты todo
 * @returns {ObjectID} - ID созданного todo
 */
async function createTodo (data) {
  const col = dbConnection.getCollection(COLLECTION);
  const obj = await col.insertOne(data);
  /*
    TODO [Урок 4.2] - done: Реализуйте логику сохранения новой записи списка дел в базу данных

    Используйте функцию col.insertOne [http://mongodb.github.io/node-mongodb-native/3.5/api/Collection.html#insertOne]:
      await col.insertOne(<описание нового документа>)
  */
  return obj.insertedId;
}

/**
 * Удаляет запись todo из базы данных
 * @param {Object} query - критерии поиска todo для удаления
 * @returns {Boolean} - true если запись была удалена, иначе - false
 */
async function deleteTodo (query) {
  const col = dbConnection.getCollection(COLLECTION)
  /*
    TODO [Урок 4.4] - done: Реализуйте логику удаления записи списка дел из базы данных

    Используйте функцию col.deleteOne [http://mongodb.github.io/node-mongodb-native/3.5/api/Collection.html#deleteOne]:
      await col.deleteOne(<параметры поиска>)

    Подсказка: используйте поле `result` из результата выполнения функции col.updateOne,
    чтобы выяснить, успешно ли выполнено удаление записи из базы данных?
  */
 const res = await col.deleteOne(_mapObjectId(query));
 return res.deletedCount == 1;
}

/**
 * Возвращает список todo, соответсвующих запросу
 * @param {Object} query - параметры поиска todo
 * @returns {Cursor} - курсор MongoDB по найденным записям
 */
function getTodos (query) {
  const col = dbConnection.getCollection(COLLECTION)
  return col.find(_mapObjectId(query))
}

/**
 * Возвращает первую запись todo, удовлетворяющую заданным критериям
 * @param {Object} query - критерии поиска todo
 * @returns {TodoEntry} - запись списка дел
 */
async function getTodo (query) {
  const col = dbConnection.getCollection(COLLECTION);
  const rec = await col.findOne(_mapObjectId(query));
  return rec;
  /*
    TODO [Урок 4.1] - done: Реализуйте логику получения одной записи списка дел из базы данных

    - Используйте функцию col.findOne [http://mongodb.github.io/node-mongodb-native/3.5/api/Collection.html#findOne]:
      await col.findOne(<параметры поиска>)
    - Используйте функцию _mapObjectId(<параметры запроса>), чтобы преобразовать идентификатор записи
      к объекту ObjectID в MongoDB.
  */
}

/**
 * Обновляет первую запись todo, удовлетворяющую заданным критериям
 * @param {Object} query - критерии поиска todo
 * @param {Object} data - атрибуты todo для обновления
 * @returns {boolean} - `true` - если запись в базе данных была обновлена
 *                      `false` - если запрошенная запись в базе данных не найдена
 */
async function updateTodo (query, data) {
  const col = dbConnection.getCollection(COLLECTION)
  /*
    TODO [Урок 4.3] - done: Реализуйте логику обновления записи todo.

    - Используйте функцию col.updateOne [http://mongodb.github.io/node-mongodb-native/3.5/api/Collection.html#updateOne]:
      await col.updateOne(<параметры поиска>)
    - Результатом выполнения функции должно быть булево значение:
        * `true` - если запись в базе данных была обновлена
        * `false` - если запрошенная запись в базе данных не найдена

    Подсказка: используйте поле `result` из результата выполнения функции col.updateOne,
    чтобы выяснить, успешно ли выполнено обновление записи базе данных?
   */
  const res = await col.updateOne(_mapObjectId(query), {$set: data});
  return res.matchedCount == 1;
}

/**
 * Создает записи todo в БД на основе указанного файла todo.txt
 * @param {string} filePath - путь к файлу todo.txt
 * @param {string} email - email пользователя для создания записей todo
 * @returns {undefined} // TODO!
 */
async function createTodosFromText (filePath, email) {
  const fileContent = await fs.readFile(filePath)
  const todos = importTodoTxt(fileContent.toString()) // An array of todo objects (title, completed, completedAt).

  const todosE = todos.map(td => ({ // add email in every element
    ...td,
    email // same as 'email : email'
  }));
  const col = dbConnection.getCollection(COLLECTION);
  /*
    TODO [Урок 4.6] - done: Сохраните импортированные записи списка дел в базу данных.

    Используйте переменную todos в качестве источника новых записей списка дел.
    Используйте функцию col.insertMany(<записи списка дел>)[http://mongodb.github.io/node-mongodb-native/3.5/api/Collection.html#insertMany],
    чтобы сохранить записи в базе данных.

    Верните массив созданных записей списка дел
  */
  const inserted = await col.insertMany(todosE);
  //console.log('inserted:', inserted);
  /*
inserted: {
  result: { ok: 1, n: 1, opTime: { ts: [Timestamp], t: 765 } },
  ops: [
    {
      title: '24e3c3eb-bde6-416c-9d5d-f854596785ee',
      completed: true,
      completedAt: 2019-12-31T23:00:00.000Z,
      email: '52c1b945-809c-4a6b-98ce-1999d3f06332',
      _id: 63b36b90827f752aa0ec67a4
    }
  ],
  insertedCount: 1,
  insertedIds: { '0': 63b36b90827f752aa0ec67a4 }
}  */
  return inserted.ops;
}

/**
 * Возвращает количество записей, соответсвующих указанным критериям поиска
 * @param {Object} user - пользователь
 * @returns {TodosCount} - количество записей в списке дел: { total, completed }
 */
async function getCount (user) {
  //console.log('getCount user =', user)
  const col = dbConnection.getCollection(COLLECTION)
  const [total, completed] = await Promise.all([
    col.countDocuments({
      /*
        TODO [Урок 5.3] - done: Добавьте проверку email-адреса пользователя при получении количества записей в БД
      */
     email: user.email
    }),
    col.countDocuments({
      completed: true,
      /*
        TODO [Урок 5.3] - done : Добавьте проверку email-адреса пользователя при получении количества записей в БД
      */
        email: user.email
      })
  ])

  return { completed, total }
}

module.exports = {
  createTodo,
  createTodosFromText,
  deleteTodo,
  getCount,
  getTodo,
  getTodos,
  updateTodo
}
