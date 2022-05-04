// Async iterators
// ES10
// flat 降维

const nums = [10, [20, [30], [40]], [50], 60]

const newNum = nums.flat()

// flatMap
// 限制性map的回调函数  再执行flat
// nums.flatMap()


//
// Object.entries()  //对象转二维数组
// Object.fromEntries()  //二维数组转对象

//"http://baidu.com/api/users?name=dang&age=18"
const queryString = "name=dang&age=18"

const queryParams = new URLSearchParams(queryString)
console.log(queryParams);
// console.log(Object.entries(queryParams));
const paramsObj = Object.fromEntries(queryParams)
console.log(paramsObj);



// ES11
let str = ''
str.trimStart()
str.trimEnd()


//