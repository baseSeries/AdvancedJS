// class  类的声明
class Person {

}
// 类的表达式
// let Person1 = class {}

Person.prototype
Person.__proto__
Person.prototype.constructor

let person = new Person();
console.log(person.__proto__ == Person.prototype);
