// 打开数据库 和数据库建立连接
// 数据库如果存在就打开 如果不存在就创建新的数据库
let dbRequest = indexedDB.open("dang")
dbRequest.onerror = function (e) {
    console.log("打开数据库失败~");
}
// 数据库连接成功的回调
dbRequest.onsuccess = function (event) {
    console.log("连接成功");
    db = event.target.result
}
// 第一次打开、或者版本发生升级的回调
dbRequest.onupgradeneeded = function (event) {
    const db = event.target.result
    // 创建一些存储对象
    // keyPath users表的主键
    db.createObjectStore('users', { keyPath: 'id' })
}


class Users {
    constructor(id, name, age) {
        this.id = id
        this.name = name
        this.age = age
    }
}
const users = [
    new Users(100, "dang", 18),
    new Users(101, "jian", 20),
    new Users(102, "bo", 19)
]
let buttons = document.querySelectorAll('button')
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function (event) {
        // 第一个参数 字符串或者数组  对应的表 第二个参数 操作的权限
        const transaction = db.transaction("users", "readwrite")
        const store = transaction.objectStore("users")
        switch (i) {
            case 0:
                console.log("点击新增");
                for (let user of users) {
                    const request = store.add(user)
                    request.onsuccess = function (event) {
                        console.log(`${user.name}添加成功`);
                    }
                    request.onerror = function (event) {
                        console.log(`${user.name}添加失败`);
                    }
                }
                transaction.oncomplete = function () {
                    console.log("本次添加完成");
                }
                break
            case 1:
                console.log("点击查询");
                // 单个查询 知道主键
                // let request = store.get(100)
                // request.onsuccess = function (event) {
                //     let result = event.target.result
                //     console.log(result);
                // }
                // 全部查询 获取游标 指针
                const getRequest = store.openCursor()
                getRequest.onsuccess = function (event) {
                    const cursor = event.target.result
                    if (cursor) {

                        if (cursor.value.name == "jian") {
                            console.log(cursor.value);
                        } else {
                            cursor.continue()
                        }

                    } else {
                        console.log("查询完成");
                    }
                }
                break
            case 2:
                console.log("点击修改");
                const updateRequest = store.openCursor()
                updateRequest.onsuccess = function (event) {
                    const cursor = event.target.result
                    if (cursor) {
                        if (cursor.value.name == "jian") {
                            let value = cursor.value
                            value.name = "jianJian"
                            cursor.update(value)
                        } else {
                            cursor.continue()
                        }
                    } else {
                        console.log("查询完成");
                    }
                }
                break
            case 3:
                console.log("点击删除");
                const deleteRequest = store.openCursor()
                deleteRequest.onsuccess = function (event) {
                    const cursor = event.target.result
                    if (cursor) {
                        if (cursor.key == 101) {
                            cursor.delete()
                        } else {
                            cursor.continue()
                        }
                    } else {
                        console.log("删除成功");
                    }
                }
                break
        }
    }
}

/*
 连接数据库 open ("操作数据库")
 连接成功的回调 失败的回调 第一次打开、版本升级的回调
 连接成功之后需要保存一个全局的db ""

 对应的操作 db.transaction（[需要操作的表]，操作的权限） 返回一个transaction
 transaction.objectStore(需要操作的表) 返回一个store
 新增： store.add(item) 成功的回调 失败的回调
 查询  1、单个查询 根据主键查询 store.get(主键)
        2、查询全部 通过游标 指针 store.openCursor  返回一个getRequest
            在getRequest的成功的回调中 游标每次返回一个对象  调用continue返回下一个
修改   通过游标 指针 store.openCursor  返回一个getRequest
          在getRequest的成功的回调中 游标每次返回一个对象
          操作对象 cursor.update(value)
          调用continue返回下一个
删除   通过游标 指针 store.openCursor  返回一个getRequest
          在getRequest的成功的回调中 游标每次返回一个对象
          操作对象 cursor.delete() 不用指定要删除哪一个 因为游标指向了删除对象
          调用continue返回下一个


*/