let foo = 'foo';
const bar = 'bar';


// var 会有作用于提升
var test = 'test '

// let const 不会作用域提升
// 在let const 定义的变量在没有被赋值前是不能被调用的
// 但是在执行上下文阶段被创建出来

// 和window 的关系
//VO AO GO -->老的定义
//VO --> VE 变量环境   每一个执行上下文会关联一个环境变量中，
// 在执行代码中变量和函数的生命会作为环境记录添加到变量环境中


// 块级作用域
{
    // block code

}
// if switch  for  都是快级作用域

// 使用let const 定义到的循环 每次都会形成一个新的作用域 如果循环没有对】
// 定义的变量做操作  可以使用 const
// 暂时性死去  TDZ

var foo1 = "foo"
if (true) {
    // 暂时性死区
    // console.log(foo1);
    let foo1 = "2"
}
function bar1 () {
    // 暂时性死区
    console.log(foo1);
    let foo1 = foo
}
