// with 会产生自己的作用域
let name = "dang"
function foo () {
    let obj = { name: 'foo' };
    with (obj) {
        console.log(name);
    }
}
foo()
// eval
// 代码可读性  篡改
let jsStr = `console.log('bobo')`
eval(jsStr)

// use strict
// 抛出问题 静默错误
let obj = {}
Object.defineProperty(obj, 'name', { writable: false, configurable: true, enumerable: true, value: 1 })
obj.name = "lal"
console.log(obj);