function foo () { }


console.log(foo.prototype); //{}

console.log(Object.getOwnPropertyDescriptor(foo, 'prototype'));
//{ value: {}, writable: true, enumerable: false, configurable: false }

console.log(Object.getOwnPropertyDescriptor(foo.prototype, 'constructor'));
// {
//     value: [Function: foo],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   }

// foo.prototype.constructor  又指向了foo 函数

console.log(foo.prototype.constructor == foo); //true