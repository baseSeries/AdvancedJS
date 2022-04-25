// class Person {
//     constructor() {

//     }

// }
// function Person () {

// }
{
    // 工厂方法  产生想要的对象

    function createPerson (name, age, height, address) {
        return {
            name,
            age,
            height, address,
            eating () {
                console.log(this.name + "在吃");
            },
            running () {
                console.log(this.name + "在跑步");
            }
        }
    }
    var p1 = createPerson("张三", 18, 18.8, "北京市");
    let p2 = createPerson("李四", 18, 18.8, "上海市");
    // 工厂模式的缺点
    console.log(p1, p2);
}

{
    // 构造函数  构造器 constructor
    // new 调用的的操作
    // 1.在内存中创建一个对象
    // 2.设置对象的原型  对下内部的原型被赋值为构造函数的原型
    // 3.将构造函数内部的this指向创建出来的对象  this=obj、
    // 4.执行函数代码块
    // 5.如果构造函数没有返回非空对象，则返回创建出来的新对象

    function Person (name, age, height, address) {
        this.name = name
        this.age = age
        this.height = height
        this.address = address
        this.eating = function () { console.log(this.name + "吃东西") }
        this.running = function () { console.log(this.name + "跑步") }
    }
    let p1 = createPerson("张三", 18, 18.8, "北京市");
    let p2 = createPerson("李四", 18, 18.8, "上海市");
    console.log(p1, p2);

}
{

}
