{
    setTimeout(function () {
        console.log(this);//window
    }, 1000)
    setTimeout(() => {
        console.log(this);//上层作用于的this
    }, 1000)

    // 监听点击
    let el = document.createElement('div')
    el.onclick = function () {
        console.log(this);//el
    }
    el.addEventListener('click', function () {
        console.log(this) //el   fn.call(el)
    })

    // 3数组 forEach map filter find
    let names = [1, 2, 3, 4]
    names.forEach(function () {
        console.log(this) //'abc'
    }, "abc")
}