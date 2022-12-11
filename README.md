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
