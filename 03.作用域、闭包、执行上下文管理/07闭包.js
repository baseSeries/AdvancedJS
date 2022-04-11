/*
* 闭包  Closure
计算机科学：词法闭包 函数闭包  是在支持头等函数的编程语言中，实现词法绑定的一种技术
            闭包在是线上是一个结构体，它存储了一个函数很一个关联的环境
            闭包和函数最大的区别在于 当捕捉闭包时，它的自由变量会在捕捉时确定，这样即使脱离了捕捉的上下文
            也能照常运行
JavaScript：
*/

function foo () {
    return function bar () { console.log("bar") };
}
let cb = foo();
cb()
