class Person {
    name = "John"
    age = "30"
    constructor(name, age) {
        this.name = name || "dang", this.age = age || 18
    }
    eating () {
        console.log(this.name + ":" + 'eating');
    }
    static staticPerson () {
        console.log("staticPerson");
    }
}
let p1 = new Person()
console.log(p1);


// 继承
class Student extends Person {
    constructor(name, age) {
        // 继承在使用this之前必须调用父类的构造方法 super
        super(name, age)
    }
    eating () {
        super.eating()

    }
    running () {
        console.log(this.name + ":" + "running");
    }
    // 重写父类静态方法
    static staticPerson () {
        super.staticPerson()
        console.log("staticPerson1");
    }
}
// 子类继承的方法  放在父类的原型上共用
let stu = new Student("jian", 19)
console.log(stu.__proto__);
stu.eating()

// 子类可以调用父类的静态方法
Student.staticPerson()