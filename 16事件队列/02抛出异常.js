// 函数错误处理
function sum (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('type error')
    }
    return a + b;
}
// throw 抛出错误 如果没有对throw做接收处理 程序会终止
console.log(sum(true, 2));
console.log("继续运行");

// throw 可以抛出基本数据类型
// throw 100
// throw true
// throw "100"
// 一般来说都会抛出一个对象 Error 的实例
// error有很多子类
// TypeError  SyntaxError RangeError


function foo () {
    throw new Error("foo error");
}
function bar () {
    try {
        foo();
    } catch (e) {
        console.log(e);
    }
    foo();
}
function test () {
    bar();
}
// throw 抛出异常处理的两种方法
// 1、第一种不处理 异常会进一步抛出 直到顶层的调用
// 如果顶层也没有处理异常 就会终止程序
// 2、try catch

test()