
Function.prototype.dangCall = function (thisArg, ...args) {
    // arguments
    // this 指向调用的函数
    let fn = this
    // thisArg的边界处理
    thisArg = (thisArg != undefined && thisArg != null) ? Object(thisArg) : Window

    // thisArg 传入的要绑定的this
    let fns = Symbol('fn')
    thisArg[fns] = fn

    // 通过隐式绑定 调用fn 将调用的函数this指向传入的thisArg
    thisArg.fn(...args) //arguments

    // 然后再删除fn属性
    delete thisArg.fn
}

Function.prototype.dangApply = function (thisArg, args = []) {
    let fn = this
    thisArg = thisArg ? Object(thisArg) : Window
    thisArg["fn"] = fn
    thisArg.fn(...args)
    delete thisArg.fn
}

let name = 'bo'
function foo (num1, num2) {
    console.log(num1 + num2);
    console.log(this.name);
}
function bar (num1, num2) {

    console.log(this.name);
}

// 通过隐式绑定给call绑定了foo this 指向foo
foo.dangCall({ name: 'dang' }, 1, 2)
bar.dangApply({ name: 'bo' },)
