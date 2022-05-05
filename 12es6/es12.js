// FinalizationRegistry
// 监控一个对象被垃圾回收机制回收时候的回调
let finalizationRegistry = new FinalizationRegistry((val) => {
    console.log(val + "被销毁了");

});
let obj = { name: 'dang' }
// 1.
// let info = obj //不会被销毁
//2. weakMap
// let weakMap = new WeakMap()
// weakMap.set(obj, obj)
// 3.WeakRef
let info = new WeakRef(obj)


finalizationRegistry.register(obj, 'obj')
// finalizationRegistry.register(info, "info") //不会别销毁
// finalizationRegistry.register(weakMap, "info")太麻烦
// console.log(weakMap);

finalizationRegistry.register(info, "info")

// 获取弱引用对象

// console.log(info.deref()); //{ name: 'dang' }

obj = null




// 逻辑赋值运算
//  ||=  逻辑或赋值运算
let message1 = ''
message1 ||= "default value"
console.log(message1);

//  &&=  逻辑与赋值运算
let message2 = "dang"
message2 &&= "default1 value"
console.log(message2);
//  ??=  逻辑控赋值运算
let message3 = "1"
message3 &&= "default2 value"
console.log(message3);