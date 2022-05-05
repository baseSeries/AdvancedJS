
{
    // proxy 是个新增的类 创建代理
    // 如果想监听一个对象的操作 可以先创建一个代理对象
    // 之后对对象的所有操作 通过代理对象完成  代理对象可以监听到原对象的操作
    //  trp  重写捕获器
}
{
    //监听对象的操作
    // oOject.defineProperty
    const obj = { name: 'dang', age: 18 }
    const proxyObj = new Proxy(obj, {
        // 获取值时的捕获器
        // target时obj
        get (target, key) {
            // 在捕获器中操作
            return target[key]
        },
        // 设置值时的捕获器
        set (target, key, newVal) {
            // 在捕获器中操作
            target[key] = newVal
        },

        // 其他捕获器
        // 监听in的捕获器
        has (target, key) {
            console.log(`监听对象in操作`);
            return key in target
        },
        // 监听delete捕获器
        deleteProperty (target, key) {
            console.log(`监听对象delete操作`);
            delete target[key]
        }
        // getPrototypeOf
        // isExtensible (target,key) {}
        // getOwnPropertyDescriptor(target, key){}

        // 针对函数
        // apply 函数调用操作的捕获器
        // construct new操作符的捕获器

    }) //第一个参数原对象 第二个参数捕获器
    proxyObj.name = "bob"
    proxyObj.age = 22
    console.log(obj.name, obj.age);

    console.log('name' in proxyObj);

    delete proxyObj.name


}

{
    // proxy apply construct
    function foo () {
        console.log(this.name);

    }

    let proxyFoo = new Proxy(foo, {
        apply (target, thisArg, argArray) {
            console.log(target, thisArg, argArray);
            return target.apply(thisArg, argArray)

        },
        construct (target, argArray, newTarget) {
            console.log("new 调用");
            return new target(...argArray)
        }
    })
    proxyFoo.apply({ name: 'bob' }, ["aaa"])
    new proxyFoo("abc", 'da')
}
