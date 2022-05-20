var x = 1
function foo (x, y = function () { x = 3; console.log(x, "1"); }) {
    console.log(x, "2");
    var x = 2
    y()
    console.log(x, "3");
}
foo()
console.log(x, "4");

// 全局作用域 x=0
// 参数有默认值 形成参数作用域  x=3
// 函数作用域  foo函数内部作用域