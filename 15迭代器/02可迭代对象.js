// 迭代器对象 iterator protocol 迭代器协议
// 可迭代对象
// 一个对象实现了iterable protocol 协议时  它就是一个可迭代对象
// 这个对象要求必须实现@@iterator方法 在代码中使用[Symbol.iterator]访问

// 创建一个迭代器对象访问数组
const iterableObj = {
    names: ["abc", "def", "get"],
    [Symbol.iterator]: function () {
        let index = 0
        //   返回一个迭代器
        return {
            next: () => {
                if (index < this.names.length) {
                    return { done: false, value: this.names[index++] }
                } else {
                    return { done: true, value: undefined }
                }
            }
        }
    }
}

const iterable = iterableObj[Symbol.iterator]()
// console.log(iterable.next());
// console.log(iterable.next());
// console.log(iterable.next());
// console.log(iterable.next());


// 内置的可迭代对象
// Array Map Set String
// arguments NodeList

// 使用场景
const names = ["abc", "def", "get"]
//1. for of
// for of  就是接收一个可迭代对象  通过done的值来判断是否终止
for (const item of iterableObj) {
    console.log(item);
}
//2. 展开语法
const newArr = [...names, ...iterableObj]
console.log(newArr);
// 注意对象的展开语法是es9新增的特殊语法 不是使用的可迭代对象
let obj = { ...{ name: 'dang' } }

// 3.解构语法
// 迭代器通过next拿到value 重新赋值给数组
const [name1, name2] = names

// 注意对象的解构语法是es9新增的特殊语法 不是使用的可迭代对象
let { name } = { ...{ name: 'dang' } }

// 4.  Set
const set = new Set(iterableObj)

// Promise.all
Promise.all(iterableObj).then(res => console.log(res))