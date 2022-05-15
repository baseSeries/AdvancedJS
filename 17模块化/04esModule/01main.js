// import 导入 export
// 1.导入
import { name, age } from "./foo.js"

// 2导入起别名
import { name as name1, age } from "./foo.js"

// 3 导入所有的内容放到一个对象中
import * as foo from "./foo"
console.log(foo.name);


console.log(name, age);
console.log("main");


//import 函数返回的是promise
import("./bar.js").then(res => {
    console.log(res.bar('bar'), 'res');
})

// ES11新增的特性
// meta属性本身也是一个对象 {url:"当前模块所在的路径"}
console.log(import.meta);