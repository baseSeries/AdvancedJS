// commonJs  cjs
//  node 每个文件都是一个单独的模块
// 导出
exports.name = 'common';
module.exports = {}
// 导入
require('文件名')

//
const obj1 = { name: 'data', }
const obj2 = obj1
function bar () { return obj2 }
const obj3 = bar()




// 2\
exports.name = 'dang'
exports.age = 18


// 源码
module.exports = {}
exports = module.exports
// 此时exports 和module.exports 都指向了同一个对象的引用
// 当exports.name的时候 module.exports指向的对象也会修改


// 最后导出的一定是module.exports
// 所以exports = {name: 'dang', age:19} 不能导出