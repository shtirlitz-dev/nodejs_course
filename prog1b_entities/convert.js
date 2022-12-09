const data = require('./entities.json')

function convertCPs(cps) {
  var s = '';
  for(const cp of cps) {
    //s += `&#${cp};`; // dec
    s += `&#x${Number(cp).toString(16)};`; // hex
  }
  return s;
}

var entities = [];

for(const key in data) {
  if(!key.endsWith(';'))  // see "&yen;" and "&yen" without ';'
    continue;
  entities.push([key, convertCPs(data[key].codepoints)]);
}

function cmpstr(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
entities.sort((a, b) => cmpstr(a[0], b[0]));

for(const e of entities) {
  console.log(`{"${e[0]}", "${e[1]}"},`);
}
