let obj = { name: 'dang' }
// 这个对象obj 相当于new Object()  他的原型指向 顶层对象Object原型


// 函数即是一个对象有又是一个函数
// 所以 Foo.prototype ={construct:Foo}
// 当创建对象的时候会自动创建函数的显示原型prototype 里面会自动包含construct属性 指向函数本身Foo

// 所以  Foo.__proto__ = Function.prototype
//对象会有隐式原型  指向Function原型
// Function.prototype = {constructor:Function}
function Foo () {

}