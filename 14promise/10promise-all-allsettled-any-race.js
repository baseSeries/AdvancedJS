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
        // catch方法调用then方法 只传入了onRejected
        onRejected = onRejected || (error => { throw error })
        // finally方法传入都会执行  传入的函数需要返回传入的值
        onFulfilled = onFulfilled || (value => value)
        // 支持链式回调  返回一个 新的promise
        return new MyPromise((resolve, reject) => {
            // 当状态是确定的resolve或者reject 应该立即执行回调函数
            if (this.status == PROMISE_STATUS_RESOLVE) {
                execFunWithCatchError(onFulfilled, this.value, resolve, reject)

            } else if (this.status == PROMISE_STATUS_REJECT) {
                execFunWithCatchError(onRejected, this.reason, resolve, reject)

            } else if (this.status == PROMISE_STATUS_PENDING) {
                // 否则应存储起来等待回调
                // 取巧 为了改变新的promise状态 并且获取回调函数的结果
                // onFulfilledFns传入一个回调函数  在函数内部执行onFulfilled或者onRejected拿到返回结果

                onFulfilled && this.onFulfilledFns.push(() => {
                    execFunWithCatchError(onFulfilled, this.value, resolve, reject)
                })
                onRejected && this.onRejectedFns.push(() => {
                    execFunWithCatchError(onRejected, this.reason, resolve, reject)
                })
            }
        })
    }
    catch (onRejected) {
        // 因为catch 后可能还有finally 所以要return出去
        return this.then(undefined, onRejected)
    }
    finally (onFulfilled) {
        // finally不管是成功还是失败都会调用onFulfilled函数 所以在then方法 中传入两个不管前面的函数是成功还是失败 都会执行finally中的方法
        this.then(() => {
            onFulfilled()
        }, () => {
            onFulfilled()
        })
    }
    static resolve (value) {
        return new MyPromise((resolve, reject) => resolve(value))
    }
    static reject (reason) {
        return new MyPromise((resolve, reject) => reject(reason))
    }
    static all (promises) {
        return new MyPromise((resolve, reject) => {
            let resolveArr = []
            promises.forEach((promise, index) => {
                promise.then((res) => {
                    resolveArr.push(res)
                    if (index == promises.length - 1) {
                        resolve(resolveArr)
                    }
                }, err => {
                    reject(err)
                })
            })
        })
    }
    static allSettled (promises) {
        return new MyPromise((resolve, reject) => {
            const resolveArr = []
            promises.forEach((promise, index) => {
                promise.then((res) => {
                    resolveArr.push({ status: PROMISE_STATUS_RESOLVE, result: res })
                    if (index == promises.length - 1) {
                        resolve(resolveArr)
                    }
                }, err => {
                    resolveArr.push({ status: PROMISE_STATUS_REJECT, result: err })
                    if (index == promises.length - 1) {
                        resolve(resolveArr)
                    }
                })
            })
        })
    }
    static race (promises) {
        return new MyPromise((resolve, reject) => {
            promises.forEach((promise, index) => {
                promise.then(resolve, resolve)
            })
        })
    }
    static any (promises) {
        return new MyPromise((resolve, reject) => {
            promises.forEach((promise, index) => {
                promise.then(resolve, (err) => {
                    if (index == promises.length - 1) {
                        reject(new Error("all reject"))
                    }
                })
            })
        })
    }
}

const p1 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        reject("p1")
    }, 3000);
})
const p2 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        reject("p2")
    }, 2000);
})
const p3 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        reject("p3")
    }, 3000);
})
// MyPromise.all([p1, p2, p3]).then(
//     res => console.log(res), err => console.log(err)
// )
// MyPromise.allSettled([p1, p2, p3]).then(
//     res => console.log(res), err => console.log(err)
// )
// MyPromise.race([p1, p2, p3]).then(
//     res => console.log(res), err => console.log(err)
// )
MyPromise.any([p1, p2, p3]).then(
    res => console.log(res), err => console.log(err)
)
