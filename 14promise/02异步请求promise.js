// pending --> fulfilled or rejected  状态不可逆

/*
 resolve(参数)
    1> 普通的值或者对象
    2> 传入一个Promise
        那么当前的Promise的状态会由传入的Promise来决定
    3> 传入一个对象 当这个对象实现了thenable方法，那么也会执行then方法
        并且当前promise的状态会由then方法来决定
*/

// 2
const newPromise = new Promise((resolve, reject) => {
    // resolve("fulfilled");
    reject("rejected")
})

new Promise((resolve, reject) => {
    console.log("exectutor pending");
    // 1
    // resolve("fulfilled");
    // reject("rejected")

    // 2 传入一个Promise  当前promise的状态由传入的promise的状态决定
    // resolve(newPromise)

    // 3 传入一个带有then方法的对象
    const obj = {
        then (resolve, reject) {
            // resolve("resolve message")
            reject("rejected message")
        }
    }
    reject(obj)
}).then(
    res => console.log(res, 'fulfilled'),
    err => console.log(err, 'rejected')
).catch(err => console.log(err, 'rejected1'))
