// 函数也是一个对象
function foo () { }
foo.__proto__

// 函数因为式一个函数 所以还会多出来一个显式原型属性：prototype
console.log(foo.prototype);

// 当使用new关键字调用函数的时候 内部会把this的隐式原型__proto__赋值为函数的显示原型getPrototypeOf
let p1 = new foo()
let p2 = new foo()
p1.__proto__ == foo.prototype
p2.__proto__ = foo.prototype


function Person () {

}
let pp1 = new Person
let pp2 = new Person

// 修改对象的__proto__  或者构造函数的prototype 都指向了原型对象
// pp1.__proto__.name = "bobo"
Person.prototype.name = "bobo"
console.log(pp2.name);