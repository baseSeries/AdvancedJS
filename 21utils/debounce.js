// 防抖 debounce
//超过time事件 执行最后一次函数 清空之前的定时器
function debounce (fn, time, immediate = false, resultCallback) {
    let timer = null
    let isInvoke = false
    const _debounce = function (...args) {
        return new Promise(function (resolve, reject) {
            timer && clearTimeout(timer)
            if (immediate && !isInvoke) {
                const result = fn.apply(this, args)
                resolve(result + "promise")
                if (resultCallback && typeof resultCallback == 'function') resultCallback(result)
                isInvoke = true
            }
            timer = setTimeout(() => {
                const result = fn.apply(this, args)
                resolve(result + "promise")
                if (resultCallback && typeof resultCallback == 'function') resultCallback(result)
                isInvoke = false
            }, time)
        })


    }
    _debounce.cancel = function () {
        if (timer) clearTimeout(timer)
        isInvoke = false
        timer = null
    }
    // 取消定时器
    return _debounce



}
