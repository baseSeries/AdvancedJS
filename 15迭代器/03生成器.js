/*
生成器是es6中新增的一种函数控制、使用的方案。
可以更加灵活的控制函数的暂停 继续

生成器函数在关键字function 后面加个*
生成器函数可以使用yield关键字控制函数流程
生成器函数返回值是一个generator(生成器) 生成器实际上就是一个特殊的迭代器
*/


function* foo (num) {
    console.log("start");

    const value1 = num + 10
    console.log(value1);
    const n = yield value1  //如果需要有返回值 在yield后面添加返回值

    const value2 = n + 20
    console.log(value2);
    const m = yield value2

    const value3 = m + 30
    console.log(value3);
    yield value3 //遇到yield 暂停函数
    console.log("end");

    return 100  //return 结束函数
}
// 生成器函数可以产地参数
const generator = foo(5)
console.log(generator); //迭代器 调用next

// generator.next()
// generator.next(10)
// generator.next(20)
// generator.next(30)


// return  在中间过程中 如果调用return 会在当前yield 和上个yield之间添加return 结束函数
// generator.next()
// generator.return(100)


//如果抛出异常 没有进行异常捕获会终止代码
generator.next()
generator.throw()