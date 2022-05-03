// 标签模板字符串
function tagFn (m, n, x) {
    console.log(m, n, x); //[ 'dang', 'bo', '' ] jian 18

}
let jian = "jian"
let age = 18
tagFn`dang${jian}bo${age}`


function rest (x, y, z = 1, ...args) {
    console.log(x, y, z, args);
}
rest(1, 2, 1, 5)


// 数值的方式
const num1 = 100 //十进制
const num2 = 0b110 //二进制
const num3 = 0o110 //八进制
const num4 = 0x110 //十六进制

// BigInt

const num5 = 10_000_100

const num6 = n100_000_000_000_000


// description
let fn = Symbol("描述")
console.log(fn.description);
const obj3 = {
    [fn]: 'bobo'
}

obj[fn] = "na"

Object.defineProperty(obj, fn, {
    value: "mam",
    writable: true, configurable: true, enumerable: true
})

console.log(obj[fn]);
// 使用symbol作为key的属性名 在遍历。Object.keys等中是获取不到symbol的值
console.log(Object.getOwnPropertySymbols(obj));

// symbol.for  symbol.keyFor
//
const sa = Symbol.for("aaa")
const sb = Symbol.for("aaa")
console.log(sa == sb); //true

const key = Symbol.keyFor(sa)
const sc = Symbol.for(key)
console.log(sc == sa); //true