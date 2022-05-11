// 异步函数
// async  await
// sync  同步的
// async function foo1 () {

// }
// const foo2 = async () => {

// }
// class Foo {
//     async bar () {

//     }
// }

// 1.异步函数的返回值一定是个promise
async function foo1 () {
    console.log("内部之星1");
    console.log("内部之星2");
    console.log("内部之星3");
    // 返回一个值
    // return 123
    // 返回一个带then的对象
    // return {
    //     then:function(resolve, reject){
    //         resolve("aaaaa")
    //     }
    // }
    // 返回一个promise对象
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve("dangdangdnag")
    //     }, 1000)
    // })

    // async 抛出异常 会被当做异步函数返回的promise的reject的值
    throw new Error("foo error message")
}
console.log("before foo");
const promise = foo1()
console.log("after foo");
promise.then(res =>
    console.log('res', res)
).catch(err => console.log(err))
console.log("end");
