/*
 1.传入executor函数立即执行 给executor函数传入两个函数
 2.promise状态不可逆 保存resolve 或者reject状态和value值
 3.实现then框架
 4.在resolve或者reject中调用then中的回调 queueMir

*/
const PROMISE_STATUS_PENDING = "pending"
const PROMISE_STATUS_RESOLVE = "fulfilled"
const PROMISE_STATUS_REJECT = "rejected"
class MyPromise {
    constructor(executor) {
        this.status = PROMISE_STATUS_PENDING
        this.value = undefined
        this.reason = undefined
        this.onFulfilledFns = []
        this.onRejectedFns = []
        const resolve = (value) => {
            if (this.status === PROMISE_STATUS_PENDING) {
                console.log("resolve执行");
                this.status = PROMISE_STATUS_RESOLVE
                queueMicrotask(() => {
                    this.value = value
                    console.log("value");
                    this.onFulfilledFns.forEach(fn => fn(this.value))
                })

            }
        };
        const reject = (reason) => {
            if (this.status == PROMISE_STATUS_PENDING) {
                console.log("reject执行");
                this.status = PROMISE_STATUS_REJECT
                queueMicrotask(() => {
                    this.reason = reason
                    console.log("reason", reason);
                    this.onRejectedFns.forEach(fn => fn(this.reason))
                })

            }

        };
        executor(resolve, reject)
    }
    then (onFulfilled, onRejected) {
        onFulfilled && this.onFulfilledFns.push(onFulfilled)
        onRejected && this.onRejectedFns.push(onRejected)
        // return new Promise(resolve, reject)
    }
}

const myPromise = new MyPromise((resolve, reject) => {
    console.log('executor被直接调用');
    resolve("222")
    // reject("111")
});

// myPromise.then((res) => {
//     console.log("resolve result: " + res);
// }, err => {
//     console.log("resolve reject: " + err);
// })
// myPromise.then((res) => {
//     console.log("resolve result2: " + res);
// }, err => {
//     console.log("resolve reject2: " + err);
// })