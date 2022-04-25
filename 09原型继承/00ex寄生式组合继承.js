
// 组合继承

function Person (name, age) {
    this.name = name;
    this.age = age;

}
Person.prototype.eating = function () {
    console.log(this.name + ":" + "eating");
}

function Student (name, age, son) {
    Person.call(this, name, age)
    this.son = son;

}

function createObject (superType) {
    function Fn () { }
    Fn.prototype = superType.prototype
    return new Fn()
}
function CreatePrototype (subType, superType) {
    // 创建一个新的对象 并且将这个新的对象赋值给Student
    // let obj = Object.create(parentType.prototype);
    let obj = createObject(superType)

    // 1
    // obj.constructor = subType

    subType.prototype = obj
    // 2
    subType.prototype.constructor = subType;
}
CreatePrototype(Student, Person)



Student.prototype.studying = function () {
    console.log(this.name + ":" + "studying");
}

let student = new Student("dang", 18, 100);
console.log(student);
student.eating()

//

let obj = { name: "dang", }
let info = Object.create(obj, {
    address: {
        value: "党党",
        enumerable: true,
    }

})
console.log(info);
console.log(info.__proto__);

console.log(Object.hasOwnProperty('name'));
console.log(Object.hasOwnProperty('address'));


// in   只要存在属性就行 不管是对象上还是原型中
console.log("address" in info);

// instanceof
// 用于检测构造函数的prototype 是否出现在某个实例对象的原型链上
