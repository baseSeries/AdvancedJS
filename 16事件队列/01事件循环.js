// queue 队列
// 先进先出

// console.log("start");

// setTimeout(() => {
//     console.log("setTimeout");
// }, 1000)

// console.log("end");


// 宏任务微任务
setTimeout(() => {
    console.log("setTimeout");
}, 0)
queueMicrotask(() => {
    console.log('queueMicrotask');
})
Promise.resolve('12').then(res => {
    console.log(res, "promise");
})
// 先执行微任务再执行宏任务