// Object.defineProperty
let obj = { _sex: "不知道" }
// 属性描述符
// 数据属性描述符   configurable enumerable value writable
// 存取属性描述符  configurable enumerable get set
Object.defineProperty(obj, 'name', {
    // configurable?: boolean; 是否可删除 可修改
    // 当通过对象直接定义属性时 默认值为true  当通过属性描述符定义属性时 默认值为false

    // enumerable?: boolean; 是否可枚举  打印是否可见
    // 当通过对象直接定义属性时 默认值为true  当通过属性描述符定义属性时 默认值为false

    // writable?: boolean; 是否可修改
    // 当通过对象直接定义属性时 默认值为true  当通过属性描述符定义属性时 默认值为false

    // value?: any; 读取属性时会返回这个值 修改也是这个值
    // 默认为undefined

    // get?(): any;
    // set?(v: any): void;
})
Object.defineProperty(obj, "age", {
    value: 18,
    configurable: true,
    enumerable: true,
    writable: true
})
let obj1 = { _sex: "不知道" }
let dep = {
    add () { },
    notify () { }
}
// 使用场景
// 对一些私有变量的保护  不对外暴露
// 当截获某个属性被访问或者赋值的时候 进行其他操作  如vue2中属性的劫持
Object.defineProperty(obj1, "sex", {
    enumerable: true,
    configurable: true,
    get () {
        dep.add()
        return this._sex
    },
    set (val) {
        dep.notify()
        this._sex = val
    }
})
console.log(obj1);

<<<<<<< HEAD
// 定义多个属性描述符
let obj3 = {
    get getAddress () {
        return this._address
    },
    set setAddress (val) {
        this._address = val
    }
}
Object.defineProperties(obj3, {
    _address: {
        value: "北京",
        writable: true,
        configurable: false,
        enumerable: false,
    },
    address: {
        configurable: true, enumerable: true,
        get () {
            return this._address
        },
        set (value) {
            this._address = value
        }
    }
})
console.log(obj3.address);
obj3.address = "周口"
console.log(obj3.address);
console.log(obj3.address);
=======
// 属性描述符获取
Object.getOwnPropertyDescriptor(obj1, "sex")
Object.getOwnPropertyDescriptors(obj1) //所有属性的描述符

// 对象的方法
let obj4 = {
    name: "bo",
}
// 禁止对象添加新属性
// Object.preventExtensions(obj)
obj.height = 1.8

// 禁止对象配置/删除里面的属性
Object.seal(obj)

// 属性冻结 不能修改
Object.freeze(obj4)
>>>>>>> 23fab4a74381d2041c56f4b81148228b29250044
