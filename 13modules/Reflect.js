// Reflect 是一个对象 反射

// 作用
// 提供了很多操作js对象的方法 有点像Object中操作对象的方法

// Object.getPrototypeOf()
// Reflect.getPrototypeOf()

// 常见方法
// 刚好和Proxy的方法一致  has  get set delete ......

const obj = { name: 'dang', age: 19 }
const proxyObj = new Proxy(obj, {
    get (target, key, receiver) {
        // target[key]
        return Reflect.get(target, key)
    },
    set (target, key, value, receiver) {
        // target[key] = value
        const result = Reflect.set(target, key, value)
        //    result 是否设置成功
    }
})
proxyObj.name = 'dangD'

console.log(obj.name);
