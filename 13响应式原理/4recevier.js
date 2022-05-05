const obj = {
    _name: "dang0",
    get name () {
        return this._name
    },
    set name (val) {
        this._name = val
    }
}
// 当使用代理对象的时候 通过get set属性访问时的this指向当前代理对象的原对象
// 不能够被代理对象的get set 捕获器监听  get set 捕获器只会执行一次 receiver
// receiver 参数就是代理对象 传入到Reflect 中会修改原对象get set中的this 指向代理对象
// 这样 代理对象的get set 捕获器就能监听到私有属性的变化
const proxyObj = new Proxy(obj, {
    // receiver就是当前代理对象  === proxyObj
    get (target, key, receiver) {
        console.log('获取----' + key);
        return Reflect.get(target, key, receiver) //Reflect.get第三个参数是this
    },
    set (target, key, value, receiver) {
        console.log('修改----' + key);
        Reflect.set(target, key, value, receiver) //Reflect.set第三个参数是this
    }
})

// obj.name = "bob"
// console.log(obj.name);
proxyObj.name = "bob"
console.log(proxyObj.name);
