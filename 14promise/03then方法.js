// then方法是对象方法

const promise = new Promise((resolve, reject) => {
    resolve()
})
console.log(promise.__proto__);
console.log(Object.getOwnPropertyDescriptors(promise.__proto__));

//1> 同一个promise可以被多次调用then方法
//   当我们resolve方法被回调时 所有的then方法都会被执行
// 2>then方法传入的'回调函数'可以有返回值
// then 方法本身也有返回值 他的返回值是promise
//      1、如果返回的是普通值 或者对象 这个值会被作为一个新的promise的resolve的值
//      2、如果返回的是promise  会将promise当做参数传入then方法内部新创建的promise的resolve  (当promise的resolve参数是一个promise)
//      3、 如果返回的是一个带有then方法的对象 则会在新返回的promise中调用obj.then  并将obj.then方法中的结果当做promise resolve或者reject的参数(当promise的resolve参数是一个带有then方法的对象)

// 1>
// promise.then(res => console.log(res), err => console.error(err))

// promise.then(res => console.log(res), err => console.error(err))

// promise.then(res => console.log(res), err => console.error(err))

// 2>
// promise.then(res =>
//     new Promise(resolve => {
//         setTimeout(
//             () => { resolve("aabbaa"); },
//             3000
//         )
//     })
// ).then(res => res + 'bbb').then(res => console.log(res))

// 3>
promise.then(res => {
    return {
        then: (resolve, reject) => {
            resolve("222")
        }
    }
}
).then(res => res + 'bbb').then(res => console.log(res))
