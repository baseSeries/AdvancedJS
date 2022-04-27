// 对象的原型继承、
// 创建一个新对象 将新对象的原型指向 老对象的原型  然后返回这个对象
let obj = { name: 'dang' }

// 1
function createPrototype1 (obj) {
    let newObj = {}
    Object.setPrototypeOf(newObj, obj)
    return newObj
}
// 2
function createPrototype2 (obj) {
    function Fn () { }
    Fn.prototype = obj

    return new Fn()
}
// 3
let info3 = Object.create(obj)
let info = createPrototype1(obj)
console.log(info, info.__proto__);
let info2 = createPrototype2(obj)
console.log(info2, info2.__proto__);
console.log(info3, info3.__proto__);