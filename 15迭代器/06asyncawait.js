function requestData () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve("res")
            reject("111")
        })
    })
}
async function foo () {
    // 1 普通值 直接返回
    // const res = await 1
    // 2 await 一个带then方法的对象
    // 3 await 一个promise
    const res = await requestData()
}



// reject
// 如果await 后面的promise进入reject await 会报错会被当做
// 整个async函数的错误 需要在调用async函数的时候catch一下
foo().catch(err => console.log(err))