const promise = new Promise((resolve, reject) => {
    resolve("222")
    // reject("222")
    // throw new Error("rejected status")
})
//1. 当executor抛出异常 也会嗲用错误捕获的回调函数
// promise.then(undefined, err => { console.log(err); })

//2.通过catch 方法来传入错误捕获的回调函数
// promise/a+
// promise.catch(err => { console.log(err) })

// catch 捕获异常
// 1.catch会捕获执行过程中的所有异常 先执行promise 然后是then 如果then中返回的是
// promise 也会捕获异常
promise.then(res => {
    // return "123"
    // return new Promise((resolve, reject) => {
    //     reject("then reject status")
    // })
    throw new Error("rejected status")
}).catch(err => { console.log(err) })


// 3.拒绝捕获的问题
// const promise1 = new Promise((resolve, reject) => {
//     reject("121212")
// })

//当这么调用then和catch的时候 是两次互不影响的调用
// 当promise1中的executor中抛出异常或者调用reject
// then方法中并没有对异常捕获的处理程序 会导致程序出错

// promise1.then(res => console.log(res))

// promise1.catch(err => console.log(err))


// catch的返回值
const promise2 = new Promise((resolve, reject) => {
    reject("12121212")
})
promise2.then(res => console.log(res))
    .catch(err => {
        console.log(err)
        return "234"  //then
        // return new Promise((resolve, reject) => {
        //     reject("121212")
        // })  //catch
    }).then((res) => {
        console.log(res + "then status");
    }).catch(err => { console.log("err") })