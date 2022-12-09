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

to be continue...
