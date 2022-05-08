// iterator  迭代器
// generate  生成器

// 迭代器对象 有一个特定的next方法
// next 无参或者一个参数函数 返回一个应当拥有done  value属性的对象
// done:Boolean
//  value 值 done为true时 value 可省略

// const iterator = {
//     next: function () {
//         return { done: true, value: 123 };
//     }
// }

const names = ["abc", "def", "get"]

// 创建一个迭代器对象来访问数组
let index = 0
const namesIterator = {
    next () {
        if (index < names.length) {
            return { done: false, value: names[index++] }
        } else {
            return { done: true, value: undefined }
        }
    }
}
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());

// 生成迭代器函数
const createIteratorForAnnAy = (arr) => {
    let index = 0
    return {
        next: () => {
            if (index < arr.length) {
                return { done: false, value: arr[index++] }
            } else {
                return { done: true, value: undefined }
            }
        }
    }
}
const nums = [10, 20, 30]
const numsIterator = createIteratorForAnnAy(nums)
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());

// 无限迭代器  就是done永远不为true
// 不管调用多少次 都有效
{
    next: () => {
        return { done: false, value: index++ }
    }
}
