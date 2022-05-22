class BoEventBus {
    constructor() {
        this.eventList = {}
    }
    on (eventName, eventCallback) {
        let handlers = this.eventList[eventName]
        if (!handlers) {
            handlers = []
            this.eventList[eventName] = handlers
        }
        this.eventList[eventName].push(eventCallback)
    }
    off (eventName, fnName) {
        let handlers = this.eventList[eventName]
        if (handlers) {
            let flags = true
            handlers.forEach((callback, index, arr) => {
                if (callback.name == fnName) {
                    flags = false
                    arr.splice(index, 1)
                }
            })
            if (flags) {
                delete this.eventList[eventName]
            }
        } else {
            this.eventList = {}
        }
    }
    emit (eventName, ...param) {
        let handlers = this.eventList[eventName]
        if (handlers) {
            handlers.forEach(handler => handler(...param))
        }
    }
}
const eventBus = new BoEventBus()

// main.js
eventBus.on("abc", function abc (params) {
    console.log("监听abc", params);
})
eventBus.on("abc", function abc1 (params) {
    console.log("监听abc1", params);
})
eventBus.on("aaa", function aaa1 (params) {
    console.log("监听aaa1", params);
})
eventBus.emit("abc", 'abc参数')
eventBus.emit("aaa", 'aaa参数')
eventBus.off("abc", 'abc')
// eventBus.off("abc")
// eventBus.off("abc")
// eventBus.off("aaa")
// eventBus.off()
console.log(eventBus.eventList);