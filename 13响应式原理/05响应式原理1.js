// 对象的响应式
const obj = { name: 'dang', }


// 响应式数组
const reactiveFns = []


// 收集副作用函数
function watchFn (cb) {
    reactiveFns.push(cb)
}

watchFn(foo)

watchFn(() => {
    console.log("dmock");
})
function foo () {
    const newName = obj.name
    console.log("dangDang");
    console.log(obj.name);
}
function bar () {
    console.log("普通函数");
}

// 当属性修改的时候 遍历执行函数
obj.name = "bob"
reactiveFns.forEach(fn => fn())

// 缺陷 所有依赖都收集到了一个数组中 没办法区分哪个对象的哪个属性的修改  函数都会被触发