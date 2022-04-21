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