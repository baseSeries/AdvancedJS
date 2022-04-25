// 父类
function Person (name, age) {
    this.name = name,
        this.age = age
}
Person.prototype.eating = function () {
    console.log(this.name + "eating");
}

// 子类
function Student (name, age) {
    Person.call(this, name, age)
    this.sno = 111
}
// 原型链继承
Student.prototype = new Person()

Person.prototype.studying = function () {
    console.log(this.name + "studying");
}

let student = new Student("dang", 18)
console.log(student);
student.eating()

/*
弊端
1.父类被调用两次
2.父类原型对象上会多很多没有用的属性
*/
