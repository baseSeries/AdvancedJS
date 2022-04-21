
//
function add (x, y, z) {
    return x + y + z
}

function add2 (x) {
    return function (y) {
        return function (z) {
            return x + y + z
        }
    }
}
console.log(add2(10)(20)(30));
// 简化柯里化
let sum3 = x => y => z => x + y + z
console.log(sum3(10)(20)(30));

// 柯里化
// 一个函数处理的问题尽可能的单一
// 1 +2   2：*2  3： **


function makeAdders (count) {
    return function (num) {
        return count + num;
    }
}
let add4 = makeAdders(5)
add4(10)
add4(10)
add4(10)

// 实现柯里化函数
// 接收一个函数 并且返回已经柯里化之后的函数
function dangCurrying (fn) {
    // 需要返回一个函数
    return function curried (...args) {
        // 柯里化 函数必须要保证传入的函数的参数足够时才会执行
        // fn.length  就是函数所需参数
        if (args.length >= fn.length) {
            // 当前this指向外部调用的对象
            // 调用函数
            // fn(...args)
            // fn.call(this,...args)\
            return fn.apply(this, args)
        } else {
            // 如果参数不够 需要再返回一个函数
            // 巧 此时还需要循环调用curried
            function curried2 (...args2) {
                // 再次调用的剩余参数
                // this指向再次调用的函数
                return curried.apply(this, [...args, ...args2])
            }
            return curried2

        }
    }


}
let curried = dangCurrying(add)


console.log(curried(10, 20)(30));
console.log(curried(10)(20)(30));