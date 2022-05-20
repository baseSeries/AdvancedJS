// 节流 根据一定频率执行fn
function throttle (fn, interval) {
    let oldTime = 0
    return function () {
        // 当前时候减去上次执行时间 和间隔时间比较  得到是否执行
        let nowTime = Date.now()
        let remain = interval - (nowTime - oldTime)
        if (remain <= 0) {
            fn()
            oldTime = Date.now()
        }
    }
}