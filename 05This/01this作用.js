let obj = {
    name: 'dang',
    eating: function () { console.log(this.name); },
    running: function () { console.log(this.name); }
}
obj.eating()  //dang

// this 在浏览器中 this --> window
//       在node环境下 this --> {}
// node 执行->加载->编译->放到一个函数->执行这个函数.call({})

{
    // 不同的this指向
    function foo () {
        console.log(this);
    }
    foo() //window
    var obj1 = {
        name: "dang",
        foo: foo
    }
    obj1.foo() //obj
    foo.call('abc') //abc

}

{
    // 默认绑定  显示绑定  隐示绑定 new
    // 1
    function foo () { }
    foo() //独立函数调用 this 指向window

    //2 独立函数调用
    function foo1 () {
        console.log(this);//window
    }
    function foo2 () {
        console.log(this);//window
        foo1()
    }
    function foo3 () {
        console.log(this);//window
        foo2()
    }
    foo3()

    // 3
    function foo4 () {
        return function () { console.log(this); }
    }
    let fn = foo4();
    fn() //window

    // 4
    let obj = { name: "dang", foo: function () { console.log(this) } }
    let foo5 = obj.foo
    foo5() //window

    //5
    function foo6 () { console.log(this); }
    let obj1 = { name: "dang", foo: foo6 }
    let fn2 = obj1.foo
    fn2() //window


}
{
    // 隐式绑定
    // 通过某个对象发起调用 1
    function foo () { console.log(this); }
    let obj = { foo: foo }
    obj.foo()//window

    // 2
    let obj1 = { name: "obj1", foo: function () { console.log(this); } }
    let obj2 = { name: "obj2", bar: obj1.foo }
    obj2.bar()//obj2
}
{
    // 显示绑定 call apply   bind
    function foo () { console.log(this); }
    let obj = { name: 'obj' }
    foo.call(obj) //obj
    foo.apply(obj)//obj

    function bar () { console.log(this); }
    let newBar = foo.bind(obj)
    // 默认绑定和显示绑定  显示绑定优先级高
    newBar()//obj
}
{
    // new 绑定
    function Foo () { } //类
    new Foo()
    // new 开辟一个新内存
    // 创建一个新对象 将对象和this绑定
    // 返回这个对象
}