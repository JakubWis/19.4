'use strict';

// 1
var a = 'Hello',
    b = 'World',
    sayHello = a + ' ' + b;
console.log('Task 1: ' + sayHello);

//2
var multiply = function multiply(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};
console.log('Task 2: 2 * 5 = ' + multiply(2, 5) + ', but 2 * 1 = ' + multiply(2));

//3
var average = function average() {
  for (var _len = arguments.length, num = Array(_len), _key = 0; _key < _len; _key++) {
    num[_key] = arguments[_key];
  }

  return num.reduce(function (x, y) {
    return x + y;
  }) / num.length;
};
console.log('Task 3: average of 1,3,6,6 is equal to ' + average(1, 3, 6, 6));

//4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log('Task 4: average of 1, 5, 5, 5, 4, 3, 3, 2, 1 is equal to ' + average.apply(undefined, grades));

//5
var MsStrange = [1, 4, 'Iwona', false, 'Nowak'];
var name = MsStrange[2],
    sur = MsStrange[4];

console.log(name + ' ' + sur);
