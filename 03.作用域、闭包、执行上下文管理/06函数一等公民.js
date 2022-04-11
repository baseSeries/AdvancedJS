// function foo (arg) {
//     console.log(arg);
// }

// foo(123)

//函数当做参数传入
function foo (a) {
    a()
}

function bar () {
    console.log('arg');
}
foo(bar)

// 函数作为返回值
{
    // function foo (arg) {
    //     function bar () { console.log(arg); }
    //     return bar
    // }
    // let barFn = foo(123)
    // barFn()


    // 函数当作返回值携带参数
    function makeAdders (count) {
        function add (num) {
            return count + num
        }
        return add
    }
    let add5 = makeAdders(5)
    console.log(add5(5));

    // 高阶函数 如果一个函数接收另一个函数作为参数或者该函数返回另一个函数 那这个函数成为高阶函数


}
{
    let nums = [1, 2, 3, 4, 5, 6, 7]
    // 常用的高阶函数
    nums.forEach(element => {

    });

    Array.prototype.MyFilter = function (cb) {
        // 当前this指向数组
        let myNumArr = this
        let nums = []
        for (let i = 0; i < myNumArr.length; i++) {
            let flag = cb(myNumArr[i], i, myNumArr)
            flag && nums.push(myNumArr[i])
        }
        return nums
    }
    let myNums = nums.MyFilter((item, index, arr) => {
        return item > 4
    })
    console.log(myNums);

    // find  findIndex
    // map
    // reduce


}