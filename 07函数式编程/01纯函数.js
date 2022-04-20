// 纯函数
// 确定的输入 一定会产生确定的输出
// 执行的过程中 不会产生副作用(side effect)


let names = ['abc', 'bar', 'foo2', 'bar2']
// slice 纯函数
let sliceName = names.slice(0, 3)
console.log(names, sliceName);
// splice 不是纯函数
let spliceName = names.splice(2, 1)
console.log(spliceName);
console.log(names);