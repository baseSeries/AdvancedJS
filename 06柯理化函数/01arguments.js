function foo (num1, num2, num3) {
    // arguments 类数组
    // 3中常见的操作
    // length
    // 索引值 arguments[1]
    // arguments.callee    //当前函数
    console.log(arguments);
    console.log(Array.from(arguments));
    console.log([...arguments]);
    // 改变this
    console.log(Array.prototype.slice.call(arguments));
    console.log([].slice.call(arguments));

}
foo(10, 20, 30, 40)

// 箭头函数没有argument
// 箭头函数中使用arguments 会往上层作用域中查找
function foo1 () {
    let foo2 = () => {
        console.log(arguments);
    }
    return foo2
}
let bar1 = foo1(123);
bar1() //123

// 箭头函数中使用剩余参数
function foo3 (num1, num2, ...args) {
    console.log(args);
}
foo3(123, 456, 789, 1011)