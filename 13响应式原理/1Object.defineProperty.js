

{
    //监听对象的操作
    // oOject.defineProperty
    const obj = { name: 'dang', age: 18 }
    Object.defineProperty(obj, 'name', {
        get: function () {
            console.log("属性获取监听",)
        },
        set (value) {

            console.log("属性修改监听");

        }
    })
    obj.name = "bob" //属性修改监听

    obj.name;  // 属性获取监听
}
{
    // oOject.defineProperty
    const obj = { name: 'dang', age: 18 }
    Object.keys(obj).forEach(key => {
        let value = obj[key]
        Object.defineProperty(obj, key, {
            get () {
                console.log(key + "属性获取监听",)
                return value
            },
            set (val) {
                console.log(key + "属性修改监听",)
                value = val
            }
        })
    })
    obj.name = "bob" //属性修改监听
    obj.age = 22 //属性修改监听
    obj.name;  // 属性获取监听
    obj.age  // 属性获取监听
    console.log(obj.name, obj.age);

    // 缺点
    // 设计初衷不是进行属性监听
    // 对对象新增属性 删除属性 不能够进行动态监听
}
