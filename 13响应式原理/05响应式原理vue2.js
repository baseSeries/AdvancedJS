// 对象的响应式
const obj = { name: 'dang', age: 22 }
// 定义个全局的参数 暂存watchFn中的callback  取巧  存在就往对应的dep中添加
let activeReactiveFn = null
/*
优化 ：1depend
        2 reactiveFns 使用set 去重
*/
// 依赖收集
class Depend {
    // 每次创建都有一个
    constructor() {
        this.reactiveFns = new Set();
    }
    addDepend (fn) {
        this.reactiveFns.add(fn)
    }
    depend () {
        activeReactiveFn && this.reactiveFns.add(activeReactiveFn)
    }
    notify () {
        this.reactiveFns.forEach(cb => cb())
    }
}
// 响应式函数返回
function reactive (obj) {
    Object.keys(obj).forEach(key => {
        let value = obj[key]
        Object.defineProperty(obj, key, {
            get () {
                let dep = getDepend(obj, key)
                dep.depend()
                return value
            },
            set (newValue) {
                value = newValue
                let depend = getDepend(obj, key)
                depend.notify()
            }
        })
    })
    return obj
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


let proxyObj = reactive(obj)


// 收集副作用函数
function watchFn (cb) {
    activeReactiveFn = cb
    cb()
    activeReactiveFn = null
}


watchFn(() => {
    console.log(proxyObj.age, "新函数");
    console.log(proxyObj.age, "新函数");
})
// function bar () {
//     console.log("普通函数");
// }
console.log("--------------------------");
// 当属性修改的时候 遍历执行函数
// proxyObj.name = "bob"
proxyObj.age = 18


let objFoo = reactive({ height: 188 })
watchFn(() => {
    console.log(objFoo.height);
})
objFoo.height = 199
