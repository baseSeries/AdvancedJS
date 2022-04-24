// JavaScript当中每个对象都有一个特殊的内置属性[[prototype]]
// 这个特殊的对象可以指向另一个对象
// 每个对象都有一个[[prototype]] 这个属性可以称之为对象的原型（隐式原型）

// 早起ECMA是没有规范去查看这个[[prototype]]属性

// 浏览器给对象中提供了一个属性 可以让我们查看这个原型对选哪个
// __proto__
let obj = { name: 'dang' }
console.log(obj.__proto__);

// ES5之后提供了Object.getPrototypeOf()
console.log(Object.getPrototypeOf(obj));


// 当获取obj中的属性会现在obj中查找 如果没找到就会往原型上查找
obj.__proto__ = { age: 18 }
obj.age //18
