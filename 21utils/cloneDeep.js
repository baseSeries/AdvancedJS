function isObject (value) {
    let typeValue = typeof value
    return typeValue != null && (typeValue == "object" || typeValue == "function")
}

let s1 = Symbol("aaa")
let s2 = Symbol("bbb")
function cloneDeep (originValue, map = new WeakMap()) {
    // 如果是symbol的value  根据需求判断是否需要再创建一个symbol
    if (typeof originValue == "symbol") return originValue
    //函数类型 直接返回 复用
    if (typeof originValue == "function") {
        return originValue
    }

    if (!isObject(originValue)) {
        return originValue
    }
    if (map.has(originValue)) {
        return map.get(originValue)
    }
    let newObject = Array.isArray(originValue) ? [] : {}
    map.set(originValue, newObject)
    for (let key in originValue) {
        newObject[key] = cloneDeep(originValue[key], map)
    }
    // 如果symbol作为key for in 遍历不出来
    let symbols = Object.getOwnPropertySymbols(originValue)
    for (let sKey of symbols) {
        // let newSKey =Symbol(sKey.description)
        newObject[sKey] = cloneDeep(originValue[sKey], map)
    }
    return newObject
}
let obj = {
    name: "dang",
    address: {
        id: 110000,
        city: "北京"
    },
    [s1]: "symbol",
    foo: function () { console.log(this.name) },
    [s1]: "aaa",
    s2: s2,
    hobbies: ["eating"]
}
obj.info = obj
let newObj = cloneDeep(obj)
newObj.address.id = 22222
console.log(newObj.info.info.info);
