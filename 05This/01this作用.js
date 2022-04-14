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