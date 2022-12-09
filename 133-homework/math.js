/*
 * Домашнее задание: реализуйте функции sum, mul и avg
 */
module.exports = {
    sum: function(...args) {
     /* возвращает сумму аргументов */
     var s = 0;
     for(const a of args)
      s += a;
      return s;
      },
    mul: function(...args) {
     /* возвращает произведение аргументов */
     var p = 1;
     for(const a of args)
      p *= a;
      return p;
     },
    avg: function(...args) {
     /* возвращает среднее арифметическое аргументов */
     var s = 0;
     var c = 0;
     for(const a of args) {
      s += a;
      c++;
      }
      return c == 0? 0 : s / c;
      },
}