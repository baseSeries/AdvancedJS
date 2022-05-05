// 数据结构 Set Map WeakSet WeakMap
// Set
let set = new Set();
set.add(10);
set.add(10);
console.log(set); //{10}

set.add({})
set.add({})
console.log(set);//{10,{},{}}

let obj = {}
set.add(obj)
set.add(obj)

console.log(set);//{10,{},{},{}}

const names = ["aaa"]
const setArr = [...new Set(names)]; //iterable 参数是可迭代对象

setArr.size //1
setArr.delete("aaa")
setArr.has("aaa")
setArr.clear()

// set 遍历
// setArr.forEach
// for  of

{

    // WeakSet
    // 只能存放对象类型 不能存放基本数据类型
    // 存放对象是弱引用
    const weakSet = new WeakSet();
    weakSet.add({})

    // 对对象是弱引用
    let obj = { name: "dang" }  //可达
    weakSet.add({})
    weakSet.has({})
    weakSet.delete({})

    // weakSet 不能遍历
    // 应用场景
    // 自己定义的构造函数不允许改变this调用里面的方法

    let personWeak = new WeakMap();
    class Person {
        constructor() {
            personWeak.add(this)
        }
        running () {
            if (!personWeak.has(this)) {
                throw new Error("只能使用构造函数创建的对象调用方法")
            }
            console.log('running');
        }

    }
    let p = new Person()
    let obj12 = { name: "dang" }
    p.running()
    p.call(obj12).running()

}

{
    // Map
    //    当使用对象作为对象的key 会把对象转化为字符串【object object]

    const map = new Map()
    map.set({}, "aaa")

    const map2 = new Map([[{}, "bb"], [{}, 'cc']])
    map2.set({}, "")
    map.get({})
    map.has("key")
    map.delete("key")
    map.clear()
}

{
    // WeakMap
    // key 只能是对象
    // key对对象的引用是弱引用

    // weakMap不能遍历
    // let weakMap = new WeakMap()
    // weakMap.set("1", 10)
    // weakMap.get('1')
    // weakMap.has("1")
    // weakMap.delete("1")


    // 应用场景
    // vue3中的响应式原理
    let obj1 = { name: "dang", age: 18 }
    function Obj1ChangeNameFn1 () {
        console.log("Obj1ChangeNameFn1");
    }
    function Obj1ChangeNameFn2 () {
        console.log("Obj1ChangeNameFn2");
    }
    function Obj1ChangeAgeFn1 () {
        console.log("Obj1ChangeAgeFn1");
    }
    function Obj1ChangeAgeFn2 () {
        console.log("Obj1ChangeAgeFn2");
    }
    let obj2 = { name: "bo", age: 13 }
    function Obj2ChangeNameFn1 () {
        console.log("Obj2ChangeNameFn1");
    }
    function Obj2ChangeNameFn2 () {
        console.log("Obj2ChangeNameFn2");
    }

    // 创建weakMap
    const weakMap = new WeakMap()

    // 对依赖进行收集
    // 收集obj1的数据结构
    let obj1Map = new Map()
    obj1Map.set('name', [Obj1ChangeNameFn1, Obj1ChangeNameFn2])
    obj1Map.set('age', [Obj1ChangeAgeFn1, Obj1ChangeAgeFn2])
    weakMap.set(obj1, obj1Map)
    // 处理obj2的数据结构
    let obj2Map = new Map()
    obj2Map.set('name', [Obj2ChangeNameFn1, Obj2ChangeNameFn2])
    weakMap.set(obj2, obj2Map)

    // 如果数据发生改变
    // proxy /Object.defineProperty
    // 监听到数据发生变化
    obj1.name = "james"
    const targetMap = weakMap.get(obj1)
    const fns = targetMap.get('name')
    fns.forEach(item => item())


}
