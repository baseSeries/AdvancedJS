// 异步请求 使用回调函数来拿到异步请求的结果


class Person {
    constructor(callback) {
        let foo = function () { }
        let bar = function () { }
        callback(foo, bar)
    }
}

// resolve --> foo    reject --> bar
const promise = new Promise((resolve, reject) => {
    console.log("promise 会被立即执行");
    reject("execute")
})
promise.then(res => console.log(res), res => console.log(res, 'reject')).catch(res => console.log(res, 'reject2'))
promise.catch(res => console.log(res))