
let obj = { name: 'dang', age: 20 }
let reactiveReactionFn = null
// Dep 函数
class Depend {
    constructor() {
        this.reactiveReactions = new Set();
    }
    depend () {
        reactiveReactionFn && this.reactiveReactions.add(reactiveReactionFn)
    }
    notify () {
        this.reactiveReactions.forEach(fn => fn())
    }

}

// dep数据结构
const weakMap = new WeakMap()
function getDepend (obj, key) {
    let map = weakMap.get(obj)
    if (!map) {
        map = new Map()
        weakMap.set(obj, map)
    }
    let depend = map.get(key)
    if (!depend) {
        depend = new Depend()
        map.set(key, depend)
    }
    return depend
}

// 监听函数
function watchFn (fn) {
    reactiveReactionFn = fn
    fn()
    reactiveReactionFn = null
}

// 处理所有对象返回代理对象
function reactive (obj) {
    return new Proxy(obj, {
        get (target, key, receiver) {
            let dep = getDepend(target, key)
            dep.depend()
            return Reflect.get(target, key, receiver)
        },
        set (target, key, value, receiver) {
            // 先设置  再通知更新
            Reflect.set(target, key, value, receiver)
            let dep = getDepend(target, key)
            dep.notify()
        }
    })
}
let proxyObj = reactive(obj)


watchFn(function () {
    console.log(`name: ${proxyObj.name} 属性修改`);
})

watchFn(function () {
    console.log(`age: ${proxyObj.age}属性修改`);

})
watchFn(function () {
    console.log(`木有属性修改`);
})

let info = { eating: 'eat' }
let proxyInfo = reactive(info)
watchFn(function () {
    proxyInfo.eating
    console.log(`${proxyInfo.eating}:属性修改`);
})

proxyObj.name = "bob"
proxyObj.name = "bob1"
proxyObj.name = "bob2"
proxyObj.age = 22
console.log(obj);
proxyInfo.eating = "dada"
