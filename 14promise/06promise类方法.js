// 转成promise
let obj = { name: 'data' }
// Promise.resolve()  参数的情况
// 1.传入普通值或者对象
const promise = Promise.resolve(obj)
// 相当于
// function foo () {
//     return new Promise((resolve, reject) => resolve(obj))
// }
// const promise = foo()

// 2.传入一个promise
const promise2 = Promise.resolve(new Promise((resolve, reject) => resolve("1")))
console.log(promise2);

// 3.传入一个带then方法的对象
const promise3 = Promise.resolve({ then: (res) => res("22") })
console.log(promise3);

// Promise.reject()
// 参数不分情况  都会返回传入的值
const rejectPromise = Promise.reject("122")
console.log(rejectPromise);
rejectPromise.then((res) => console.log(res, 'res1'))
    .catch(error => console.log("error", error))



const p1 = new Promise((resolve, reject) => resolve("1"))
const p2 = new Promise((resolve, reject) => resolve("2"))
const p3 = new Promise((resolve, reject) => resolve("3"))

//  Promise.all
// 当所有的promise状态都变成fulfilled 在返回结果
//1. 返回结果是个数组 顺序和传入的数组一直
// 2.当所有的结果都是resolve才能正常返回 当遇到一个reject 则整个结果都是reject
Promise.all([p1, p2, p3]).then(res =>
    console.log(res, "all")
).catch(err => console.log(err, 'errAll'))

// Promise.allSettled
// 当所有promise都有结果再返回
Promise.allSettled([p2, p1, p3]).then((res) =>
    // 结果是数组对象 有状态
    console.log(res)
)


// Promise.race 竞技/竞赛
// 只要有一个状态改变 就返回结果

Promise.race([p2, p1, p3]).then(res => console.log(res))

// Promise.any
// 只返回第一个fulfilled结果
// 如果所有的结果都是reject 会等所有promise都变成reject
Promise.any([p3, p1, p2, p3]).then((res) =>
    console.log(res)).catch(error => console.log(error))