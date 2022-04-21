// 组合函数
function double (num) {
    return num * 2
}
function square (num) {
    return num ** 2
}
// 固定了内部使用的方法
function composeFn (count) {
    return double(square(count))
}
console.log(composeFn(10));

// 可以灵活传入方法函数
function composeFn1 (m, n) {
    return function (count) {
        return m(n(count))
    }
}
let compose = composeFn1(double, square)
console.log(compose(10));


// 通用版本
function composeFn2 (...fns) {
    let flags = fns.every(item => typeof item == "function")
    if (!flags) throw new TypeError("Exception Argument must Function")
    return function compose (...args) {
        let index = 0
        let result = fns[index].apply(this, args)
        while (++index < fns.length) {
            result = fns[index].call(this, result)
        }
        return result
    }
}
let compose2 = composeFn2(double, square)
console.log(compose2(10));


Function.prototype.bindDang = function (thisArg, ...args) {
    let fn = this //foo
    let fns = Symbol()
    thisArg[fns] = fn
    return function (...args2) {
        thisArg[fns](...args, ...args2)
        delete thisArg[fns]
    }

}
function foo (num1, num2) {
    console.log(this, num1 + num2);
}
let bar = foo.bindDang({ name: 'bo' }, 10)
bar(20)
