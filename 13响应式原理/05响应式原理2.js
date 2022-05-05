// 对象的响应式
const obj = { name: 'dang', age: 22 }
// 定义个全局的参数 暂存watchFn中的callback  取巧  存在就往对应的dep中添加
let activeReactiveFn = null

// 依赖收集
class Depend {
    // 每次创建都有一个
    constructor() {
        this.reactiveFns = []
    }
    addDepend (fn) {
        this.reactiveFns.push(fn)
    }
    notify () {
        this.reactiveFns.forEach(cb => cb())
    }
}
// 创建依赖的数据结构  weakMap --> Map --name :fns
const weakMap = new WeakMap()
// 通过这个函数 设置dep  和获取dep
function getDepend (target, key) {
    let map = weakMap.get(target)
    if (!map) {
        map = new Map()
        weakMap.set(target, map)
    }
    let depend = map.get(key)
    if (!depend) {
        depend = new Depend()
        map.set(key, depend)
    }
    return depend
}


let proxyObj = new Proxy(obj, {
    get (target, key, receiver) {
        let dep = getDepend(target, key)

        dep.addDepend(activeReactiveFn)
        return Reflect.get(target, key, receiver)
    },
    set (target, key, value, receiver) {
        Reflect.set(target, key, value, receiver)
        let dep = getDepend(target, key)

        dep.notify()
    }
})


// 收集副作用函数
function watchFn (cb) {
    activeReactiveFn = cb
    cb()
    activeReactiveFn = null
}

//
watchFn(foo)

watchFn(() => {
    console.log(proxyObj.name, "dmock");
})
function foo () {
    console.log("dangDang");
    console.log(proxyObj.name);
}
watchFn(() => {
    console.log(proxyObj.age, "age");
})
watchFn(() => {
    console.log(proxyObj.name, "新函数");
    console.log(proxyObj.age, "新函数");
})
// function bar () {
//     console.log("普通函数");
// }
console.log("--------------------------");
// 当属性修改的时候 遍历执行函数
proxyObj.name = "bob"
// proxyObj.age = 18