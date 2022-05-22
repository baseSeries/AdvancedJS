// 节流 根据一定频率执行fn
function throttle (fn, interval, options) {
    let { leading, trailing, resultCallback } = options
    let oldTime = 0
    let timer = null
    const _throttled = function (...args) {
        return new Promise((resolve, reject) => {
            // 当前时候减去上次执行时间 和间隔时间比较  得到是否执行
            let nowTime = Date.now()
            // 控制第一次进来是否执行 interval - (nowTime - oldTime) -> (nowTime - oldTime)=0 -第一次最好等于零->
            // nowTime = oldTime
            if (!oldTime && !leading) oldTime = nowTime
            let remain = interval - (nowTime - oldTime)
            if (remain <= 0) {
                if (timer) {
                    clearTimeout(timer)
                    timer = null
                }
                const result = fn.apply(this, args)
                resolve(result)
                resultCallback && resultCallback(result)
                oldTime = Date.now()
                // 如果执行了当前 就不再设置setTimeout
                return
            }
            if (trailing && !timer) {
                timer = setTimeout(() => {
                    timer = null
                    // 如果leading是true 代表立即执行 当第二次及以上时
                    // 会先执行timer 再执行remain<0中的函数 为避免 oldTime应该
                    // 为缩小nowTime和oldTime的时间间隔
                    oldTime = leading ? Date.now() : 0
                    let result = fn.apply(this, args)
                    resolve(result)
                    resultCallback && resultCallback(result)
                }, remain)
            }
        })


    }
    _throttled.cancel = () => {
        timer && clearTimeout(timer)
        oldTime = 0
        timer = null
    }
    return _throttled
}