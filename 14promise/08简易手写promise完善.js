/*
 1.传入executor函数立即执行 给executor函数传入两个函数
 2.promise状态不可逆 保存resolve 或者reject状态和value值
 3.实现then框架
 4.在resolve或者reject中调用then中的回调 queueMir

*/
const PROMISE_STATUS_PENDING = "pending"
const PROMISE_STATUS_RESOLVE = "fulfilled"
const PROMISE_STATUS_REJECT = "rejected"

const execFunWithCatchError = (fn, value, resolve, reject) => {
    try {
        let values = fn(value)
        resolve(values)
    } catch (e) {
        reject(e)
    }
}
class MyPromise {
    constructor(executor) {
        this.status = PROMISE_STATUS_PENDING
        this.value = undefined
        this.reason = undefined
        this.onFulfilledFns = []
        this.onRejectedFns = []
        const resolve = (value) => {
            if (this.status === PROMISE_STATUS_PENDING) {
                queueMicrotask(() => {
                    if (this.status != PROMISE_STATUS_PENDING) return
                    this.value = value
                    this.status = PROMISE_STATUS_RESOLVE
                    this.onFulfilledFns.forEach(fn => fn(this.value))
                })
            }
        };
        const reject = (reason) => {
            if (this.status == PROMISE_STATUS_PENDING) {
                queueMicrotask(() => {
                    if (this.status != PROMISE_STATUS_PENDING) return
                    this.reason = reason
                    this.status = PROMISE_STATUS_REJECT
                    this.onRejectedFns.forEach(fn => fn(this.reason))
                })
            }
        };
        try {
            executor(resolve, reject)
        } catch (err) {
            reject(err)
        }

    }
    then (onFulfilled, onRejected) {
        // 支持链式回调  返回一个 新的promise
        return new MyPromise((resolve, reject) => {
            // 当状态是确定的resolve或者reject 应该立即执行回调函数
            if (this.status == PROMISE_STATUS_RESOLVE) {
                // try {
                //     let value = onFulfilled?.(this.value)
                //     resolve(value)
                // } catch (e) {
                //     reject("then rejected")
                // }
                execFunWithCatchError(onFulfilled, this.value, resolve, reject)

            } else if (this.status == PROMISE_STATUS_REJECT) {
                // try {
                //     let reason = onRejected?.(this.reason)
                //     // 链式调用不管是resolve 还是reject 有返回值都会走resolve回调
                //     resolve(reason)
                // } catch (e) {
                //     reject("then rejected")
                // }
                execFunWithCatchError(onRejected, this.reason, resolve, reject)

            } else if (this.status == PROMISE_STATUS_PENDING) {
                // 否则应存储起来等待回调
                // 取巧 为了改变新的promise状态 并且获取回调函数的结果
                // onFulfilledFns传入一个回调函数  在函数内部执行onFulfilled或者onRejected拿到返回结果

                onFulfilled && this.onFulfilledFns.push(() => {
                    // try {
                    //     let value = onFulfilled(this.value)
                    //     resolve(value)
                    // } catch (e) {
                    //     reject("then rejected")
                    // }
                    execFunWithCatchError(onFulfilled, this.value, resolve, reject)
                })


                onRejected && this.onRejectedFns.push(() => {
                    // try {
                    //     let reason = onRejected(this.reason)
                    //     resolve(reason)
                    // } catch (e) {
                    //     reject("then rejected")
                    // }
                    execFunWithCatchError(onRejected, this.reason, resolve, reject)
                })
            }
        })
    }
}

const myPromise = new MyPromise((resolve, reject) => {
    resolve("222")
    // reject("111")
    // throw new Error("executor message")

});

// 多次调用then方法
// myPromise.then((res) => {
//     console.log("resolve result1: " + res);
// }, err => {
//     console.log("resolve reject1: " + err);
// })
// myPromise.then((res) => {
//     console.log("resolve result2: " + res);
// }, err => {
//     console.log("resolve reject2: " + err);
// })

// 当状态确定的时候  延迟调用then方法
// setTimeout(() => {
//     myPromise.then((res) => {
//         console.log("res3" + res);
//     }, error => {
//         console.log("res3" + error);
//     })
// })
myPromise.then((res) => {
    console.log("res1 resolve:", res);
    // throw new Error("then  message")
    return "aaa"
    // return new Promise((resolve, reject) => {
    //     resolve("123")
    // })
}, err => {
    console.log("res1 reject", err);
    return "bbb"
}).then((res) => {
    console.log("res2 resolve:", res);
}, err => {
    console.log("res2 reject", err);
})
