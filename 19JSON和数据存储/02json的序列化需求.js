const obj = {
    name: 'dang',
    age: 18, hobbies: ["吃", '喝']
}
// 1对象转json
let strObj = localStorage.setItem('obj', JSON.stringify(obj));

//2 JSON.stringify 的第二个参数 replacer 传入数组 设定哪些是需要转化的
JSON.stringify(obj, ['name', 'age'])

//3 也可传入一个回调函数 可以操作回调函数中的key和value
JSON.stringify(obj, (key, value) => {
    if (key === "age") {
        return value + 1
    }
    return value
})
//4 第三个参数是格式化 方便阅读 默认是空格  也可以传入相应的字符串
JSON.stringify(obj, null, 2)

//5 如果被转化的对象有toJSON方法 那么JSON.stringify(obj)返回值会是toJSON的返回值



// JSON.parse
// strObj
// 第二个参数可以传入个回调函数
JSON.parse(strObj, (key, value) => {
    if (key == "age") {
        return value - 1
    }
    return value
})


// JSON.parse SON.stringify 实现深拷贝
// 但是如果对象中有函数 则无能为力
