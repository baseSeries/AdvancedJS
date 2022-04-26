// 类的声明
class Person {
    // 一个类只能有一个构造函数
    // 1在内存中创建一个对象
    // 2将类的原型属性赋值给创建出来的对象
    // 3将对象赋值给函数this 绑定this
    // 4执行函数体中代码
    // 5自动返回创建出来的对象
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this._address = "北京市"
    }
    get address () {
        // 拦截获取操作
        return this._address;
    }
    set address (address) {
        // 拦截设置操作
        this._address = address;
    }
    eating () {
        console.log(this.name + "eating");
    }
    running () {
        console.log(this.age + "running");
    }
    // 类的静态方法
    static createPerson () {

        let names = ["abc", 'cba', 'das']
        let nameIndex = Math.floor(Math.random() * names.length)
        let name = names[nameIndex]
        let age = Math.floor(Math.random() * 100)
        return new Person(name, age)
    }
}



console.log(Object.getOwnPropertyDescriptors(Person.prototype));

let p1 = new Person("dang", 19);
p1.address = "河南啊"
console.log(p1.address);


let p2 = Person.createPerson()
console.log(p2);