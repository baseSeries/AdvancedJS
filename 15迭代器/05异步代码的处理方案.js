// 1\回调
// 2、promise
//
function requestData (url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(url)
        }, 1000)
    })
}
// 1回调
// requestData("dang").then((response) => {
//     requestData(response + 'aaa').then((response) => {
//         requestData(response + 'bbb').then((response) => {
//             requestData(response + 'ccc').then((response) => {
//                 console.log(response);
//             })
//         })
//     })
// })
// 2 then返回值
// requestData("dang").then((response) => {
//     // 返回一个promise
//     return requestData(response + 'aaa')
// }).then((response) => {
//     return requestData(response + 'bbb')
// }).then((response) => {
//     return requestData(response + 'ccc')
// }).then((response) => {
//     console.log(response);
// })

// 3 使用generator函数
function* getData () {
    const response = yield requestData("dangDang")
    const response2 = yield requestData(response + "aaa")
    const response3 = yield requestData(response2 + "bbb")
    const response4 = yield requestData(response3 + "ccc")
    console.log(response4);
}
// 抽象为一个自动执行函数
// let iterator = getData("dangDang")
// iterator.next().value.then((response) => {
//     iterator.next(response).value.then((response) => {
//         iterator.next(response).value.then((response) => {
//             iterator.next(response).value.then((response) => {
//                 console.log(response);
//             })
//         })
//     })
// })
// 递归调用生成器函数
// const execGenerator = function (genFn) {
//     let generator = getData()
//     function exec (res) {
//         let result = generator.next(res)
//         if (result.done) {
//             return result.value //undefined
//         }
//         result.value.then((response) => {
//             exec(response)
//         })
//     }
//     exec()
// }
// execGenerator(getData)
// 4 co
const co = require('co')
co(getData)

// 5 async  await
// function* getData () {
//     const response = yield requestData("dangDang")
//     const response2 = yield requestData(response + "aaa")
//     const response3 = yield requestData(response2 + "bbb")
//     const response4 = yield requestData(response3 + "ccc")
//     console.log(response4);
// }
async function getData1 () {
    const response = await requestData("dangDang")
    const response2 = await requestData(response + "aaa")
    const response3 = await requestData(response2 + "bbb")
    const response4 = await requestData(response3 + "ccc")
    console.log(response4);
}
getData1()