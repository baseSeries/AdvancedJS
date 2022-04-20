{
    // arrow function 箭头函数
    () => { }
    // 箭头函数不会绑定this arguments
    let name = ''
    let foo = () => { console.log(this) }
    // foo() //window
    // let obj = { foo: foo }
    // obj.foo() //window
    // foo.call("abc")//window

}

{
    // 箭头函数寻找this 使用场景
    let obj = {
        data: [],
        name: "dang",
        getData: () => {

            //      setTimeout(function () { console.log(this); }
            setTimeout(() => { console.log(this) })
        },
    }
    obj.getData()
}
{
    var name = "dang"
    var person = {
        name: 'person1',
        foo1: function () { console.log(this.name) },
        foo2: () => { console.log(this.name) }
    }
    // person.foo1()
    person.foo2()

} {

    // 对象没有作用域
}