// 父类
function Person () {
    this.name = "dang"
}
Person.prototype.eating = function () {
    console.log(this.name + "eating");
}

// 子类
function Student () {
    this.name = "dang"
}

// 原型链继承
Student.prototype = new Person()
Person.prototype.studying = function () {
    console.log(this.name + "studying");
}

let student = new Student()
student.eating()

// 弊端
/*
1 打印子类实例 无法看到继承属性
2 创建多个实例对象  父类中如果是引用类型对象  当一个实例添加或者删除时 会影响所有子类实例
3 实现类的过程也交给传参
*/