const PROMISE_STATUS_PENDING = 'pending';
const PROMISE_STATUS_FULFILLED = 'fulfilled';
const PROMISE_STATUS_REJECT = 'rejected';
const tryCatchWithPromiseChian = function (callback, value, resolve, reject) {
    try {
        const res = callback(value)
        resolve(res)
    } catch (e) {
        reject(e)
    }
}
class MyPromise {
    constructor(executor) {
        this.status = PROMISE_STATUS_PENDING;
        this.value = undefined;
        this.reason = undefined;
        this.onFulfilledFns = []
        this.onRejectedFns = []
        const resolve = function (value) {
            if (this.status === PROMISE_STATUS_PENDING) {
                queueMicrotask(() => {
                    if (this.status != PROMISE_STATUS_PENDING) return
                    this.value = value;
                    this.status = PROMISE_STATUS_FULFILLED;
                    this.onFulfilledFns.forEach(fn => fn(this.value))
                })
            }
        }
        const reject = function (reason) {
            if (this.status === PROMISE_STATUS_PENDING) {
                queueMicrotask(() => {
                    if (this.status != PROMISE_STATUS_PENDING) return
                    this.reason = reason;
                    this.status = PROMISE_STATUS_REJECT;
                    this.onRejectedFns.forEach(fn => fn(this.reason))
                })
            }
        }
        try {
            executor(resolve, reject)
        } catch (e) {
            reject(e)
        }


    }
    then (onFulfilled, onRejected) {
        onFulfilled = onFulfilled || (value => value)
        // 不是返回  是向上抛出err
        onRejected = onRejected || (err => { throw err })
        return new MyPromise((resolve, reject) => {
            if (this.status === PROMISE_STATUS_FULFILLED) {
                tryCatchWithPromiseChian(onFulfilled, this.value, resolve, reject)
            } else if (this.status === PROMISE_STATUS_REJECT) {
                tryCatchWithPromiseChian(onRejected, this.reason, resolve, reject)
            } else if (this.status === PROMISE_STATUS_PENDING) {
                this.onFulfilledFns.push(() => {
                    tryCatchWithPromiseChian(onFulfilled, this.value, resolve, reject)
                })
                this.onRejectedFns.push(() => {
                    tryCatchWithPromiseChian(onRejected, this.reason, resolve, reject)
                })
            }
        })
    }
    catch (onRejected) {
        // 因为catch 后可能还有finally 所以要return出去
        return this.then(undefined, onRejected)
    }
    finally (onFulfilled) {
        this.then(onFulfilled, onFulfilled)
    }
    static resolve (value) {
        return new Promise((resolve, reject) => resolve(value))
    }
    static reject (reason) {
        return new Promise((resolve, reject) => reject(reason))
    }
    static all (promises) {
        return new MyPromise((resolve, reject) => {
            let resolveArr = []
            promises.forEach((promise, index) => {
                promise.then((res) => {
                    resolveArr.push(res)
                    if (index == promises.length - 1) resolve(resolveArr)
                }, (err) => {
                    reject(err)
                })
            })

        })
    }
    static allSettled (promises) {
        return new MyPromise((resolve, reject) => {
            let resolveArr = []
            promises.forEach((promise, index) => {
                promise.then(res => {
                    resolveArr.push({ status: PROMISE_STATUS_FULFILLED, result: res })
                    if (index == promises.length - 1) resolve(resolveArr)
                }, err => {
                    resolveArr.push({ status: PROMISE_STATUS_REJECT, result: err })
                    if (index == promises.length - 1) resolve(resolveArr)
                })
            })
        })
    }
    static race (promises) {
        return new MyPromise((resolve, reject) => {
            promises.forEach((promise, index) => {
                promise.then(resolve, reject)
            })
        })
    }
    static any (promises) {
        return new MyPromise((resolve, reject) => {
            promises.forEach((promise, index) => {
                promise.then(resolve, (err) => {
                    if (index == promises.length - 1) reject(new Error("any error"))
                })
            })
        })
    }
}
const promise = new Promise((resolve, reject) => {
    resolve("123")
    // reject("ddd")
})
promise.then(res => console.log("1res:", res), err => console.log("1err:", err))
    .then(res => {
        console.log("1res-chain:", res)
        // throw new Error("then error")
    })
    .catch(err => console.log("catch", err))
    .finally((res) => {
        console.log("finally");
    })
// promise.then(res => console.log("2res:" + res), err => console.log("2reject:", err))