// 默认绑定  隐式绑定  显示绑定 new 绑定

// 默认绑定级别最低
// 显示绑定高于隐式绑定
let obj = {
    foo: function () { console.log(this) }
};

// 显示绑定高于隐式绑定 call apply
obj.foo.call("abc") //abc
obj.foo.apply("abc") //abc

// bind  高于隐式绑定
let bar = obj.foo.bind("abc")
bar() //abc

// 更明显的绑定
function foo () { console.log(this) }
let obj1 = { foo: foo.bind("aaa") }

obj.foo() //aaa



{
    // new 优先级高于隐式绑定
    let obj = { foo: function () { console.log(this) } }
    let fn = new obj.foo()

}

{
    // new  优先级高于显示绑定
    // new bind
    function foo () { console.log(this) }
    let bar = foo.bind("aaa")
    let obj = new bar() //foo
}

//new > 显示绑定(call/apply/bind) >隐式绑定 > 默认绑定


// 特殊处理   bind apply call 当传入null或者undefined 会自动将this指向window
foo.call(null)
foo.apply(undefined)
foo.bind(null)


{

    // 函数间接引用

    let obj1 = { foo: function () { console.log(this) } }
    let obj2 = {};

    // obj2.bar = obj.foo
    // obj2.bar() //obj2

    // 注意  需要在上一行代码最后添加分号 表示结束
    (obj2.bar = obj.foo)() //window

}