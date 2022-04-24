// 面向对象的三个特性 封装 继承 多态

// 原型链 prototype chain
let obj = { name: "dang" }

console.log(obj.address);
// 在当前对象中查找 如果没找到 会去对象的原型 __proto__ 上去找
// [Object null prototype]
// 该对象有原型属性 但是原型属性指向null 是顶层原型
// 该对象有很多默认属性和方法
