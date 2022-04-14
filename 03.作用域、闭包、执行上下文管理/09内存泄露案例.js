function createArray () {
    // 1 4个字节
    var arr = new Array(1024 * 1024).fill(1)
    return function () { console.log(arr.length); }
}

let arrFn = []

for (let i = 0; i < 100; i++) {
    setTimeout(() => {
        arrFn.push(createArray())
    }, i * 100)

}

setTimeout(() => {

    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            arrFn.pop()
        }, i * 100)

    }
}, 10000)
