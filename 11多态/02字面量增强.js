let name = "dang"
let age = 18

let obj = {
    // 属性简写
    name, age,
    // 方法简写
    foo () {

    },
    // 计算属性名
    [name + age + '123']: 'dangDang'
} //字面量
