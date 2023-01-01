steps done in Node.js course

1. go to https://nodejs.org/en/ to download a current version

08.12.2022 versions are: 18.12.1 LTS / 19.2.0 Current -> node-v18.12.1-x64.msi

Install all + check "Automatically install the necessary tools...". It take about 5 minutes and 3.3 GB on disk

Check if the installation is complete: `node --version` in cmd line

2. Modules 

Declaring modules:

CommonJS: declare `module.exports`, usage `require()`

AMD (Asynchronous module definition): : declare `define()`, usage `require()`


UMD (Universal module definition)

Modules ES6: export, import

Node.js:

declaring via mudule.exports

export:
```
function greet(useName) {
	console.log('Hello, ${userName}');
}
module.exports = greet
```

import:
```
const greet = require('./file.js')
greet('Ivan")
```

declaring via exports

export:
```
function greet(useName) {
	console.log('Hello, ${userName}');
}
exports.greet = greet
```

import:
```
const {greet} = require('./file.js')
greet('Ivan")
```

JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript

Документация к API CommonJS модулей Node.js (англ.): https://nodejs.org/api/modules.html

javascript.ru. Введение в модули: https://learn.javascript.ru/modules-intro

MDN. Модули JavaScript: https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Modules


Node.js API  https://nodejs.org/api/
modules:

path - dir and files
path.posix, path.win32 - explicitly

functions: path.join, i.e. path.win32.join or path.posix.join, path.join - imlicitly selects
url
os: homedir(), tmpdir()
events: emitter.emit, emitter.on

HTTP module: https://nodejs.org/api/http.html#http_http

how to parse url in js https://habr.com/ru/post/510742/

usually a framework is used: Express or koa

Официальная документация к системным модулям Node.js (англ.): https://nodejs.org/api/documentation.html

Официальная документация к модулю FS (англ.): https://nodejs.org/api/fs.html

Официальная документация к модулю HTTP (англ.): https://nodejs.org/api/http.html

Официальная документация к модулю Path (англ.): https://nodejs.org/api/path.html

Официальная документация к модулю URL (англ.): https://nodejs.org/api/url.html

Официальная документация к модулю OS (англ.): https://nodejs.org/api/os.html

Официальная документация к модулю Events (англ.): https://nodejs.org/api/events.html

Event loop

Morning Keynote – Everything You Need to Know About Node.js Event Loop – Bert Belder, IBM: https://www.youtube.com/watch?v=PNa9OMajw9w

The Node.js Event Loop, Timers, and process.nextTick() (англ.): https://nodejs.org/ru/docs/guides/event-loop-timers-and-nexttick/

Modules:

Search packets: npm search "what for" --long

Details (for koa module): npm view koa

or npmjs.com

install module: npm install koa

create paackage.json: npm init

uninstall module: npm remove koa

logs: module winston

Доступные команды пакетного менеджера NPM (англ.): https://docs.npmjs.com/cli/v8/commands


KOA

info https://koajs.com/

about some class, e.g. https://koajs.com/#context


Debug: node inspect my.js

debugger = statement as breakpoint, node inspect will stop on it, then 'cont' (use 'help' to see commands)

node --inspect my.js -> gives url, open chrome://inspect/#devices

     --inspect-brk   -> sdebug and stop at the first statement

Руководство по отладке Node.js   https://nodejs.org/ru/docs/guides/debugging-getting-started/


Router: npm install @koa/router  (koa must be istalled too)

curl -X GET localhost:3000  [&& echo]

curl -v -X OPTIONS localhost:3000


BODY parsing: npm install koa-body

Postman for linux => GetIt


MDN. HTTP: https://developer.mozilla.org/ru/docs/Web/HTTP

Fielding, Roy Thomas. Representational State Transfer (REST) (англ.): https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm

Официальная документация @koa/router (англ.): https://www.npmjs.com/package/koa-router

curl для Windows: https://curl.se/windows/

Официальная документация koa-body (англ.): https://www.npmjs.com/package/koa-body

Todo MVC project (the same app in different JS frameworks) https://todomvc.com/



MongoDB (https://mongodb.org) 

Официальные бесплатные курсы по MongoDB (англ.): https://university.mongodb.com/

Документация к драйверу MongoDB для Node.js: https://docs.mongodb.com/drivers/node/current/

Подключение к MongoDB из приложения на Node.js (англ.): https://docs.mongodb.com/drivers/node/current/quick-start/

Регистрация в MongoDB Atlas: https://www.mongodb.com/cloud/atlas/register

or local version  Products -> Community Edition -> Community Server

Для того, чтобы экспериментировать с базой данных и выполнять произвольные запросы, можно дополнительно установить MongoDB Compass

Строка подключения к локальной базе данных: mongodb://localhost.



tests

Джерард Месарош. Шаблоны тестирования xUnit. Издательство: М.: Вильямс Год: 2009. Выдержки на англ.: http://xunitpatterns.com/

Сайт проекта Mocha (англ.): https://mochajs.org/

Документация к модулю supertest (англ.): https://www.npmjs.com/package/supertest


mongoDb shell

show dbs => all existing dbs

use (db name) => switch to this db

show collections

db.(collection name).findOne()

db.<collection>.find({condition}, {fields: true or false}).sort({filds : -1 or 1}).skip(5).limit(2)



Вход в MongoDB Atlas: https://account.mongodb.com/account/login

Установка MongoDB shell: https://www.mongodb.com/try/download/shell

Документация к API MongoDB Shell (англ.): https://docs.mongodb.com/manual/reference/method/

Поиск документов в MongoDB shell (англ.): https://docs.mongodb.com/manual/reference/method/db.collection.find/#mongodb-method-db.collection.find

Создание, редактирование, чтение и удаление данных с помощью драйвера MongoDB для Node.js (англ.): https://docs.mongodb.com/drivers/node/current/fundamentals/crud/

Поиск документов через драйвер MongoDB для Node.js (англ.): https://docs.mongodb.com/drivers/node/current/fundamentals/crud/read-operations/retrieve/

Indexes of collections:

db.<collection>.getIndexes()


Создание документов в MongoDB shell (англ.):

https://docs.mongodb.com/manual/reference/method/db.collection.insertOne/#mongodb-method-db.collection.insertOne,

https://docs.mongodb.com/manual/reference/method/db.collection.insertMany/#mongodb-method-db.collection.insertMany

Создание документов через драйвер MongoDB для Node.js (англ.): https://docs.mongodb.com/drivers/node/current/fundamentals/crud/write-operations/insert/


updateOne({_id: searchId}, {$set: {"price" : NumberDecimal("200") } } ) -> {acknowledged:1, insertedId: null, matchedCount: 1, ModifiedCount: 1, upsertedCount: 0}

$inc $max $min $mul $rename $set $setOnInsert $currentDate $unset (deletes field)  ex. {$unset:{beds:true}}

updateMany

add to array field: {$push: {reviews: {comments: "Sample review" }}}

remove from array updateOne({_id: ObjectId("...")},  {$pull: { reviews: {"comment" : "Sample review"}}}

update operations: https://www.mongodb.com/docs/manual/reference/operator/update/

https://www.mongodb.com/docs/manual/reference/command/update/#mongodb-dbcommand-dbcmd.update


Редактирование документов в MongoDB shell (англ.):

https://docs.mongodb.com/manual/reference/method/db.collection.updateOne/#mongodb-method-db.collection.updateOne,

https://docs.mongodb.com/manual/reference/method/db.collection.updateMany/#mongodb-method-db.collection.updateMany

Редактирование документов через драйвер MongoDB для Node.js (англ.): https://docs.mongodb.com/drivers/node/current/fundamentals/crud/write-operations/change-a-document/

