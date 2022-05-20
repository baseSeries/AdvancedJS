// cookie  小甜饼  小型文本文件

// 内存cookie 没有设置过期时间 浏览器关闭会自动删除
// 硬盘cookie 设置过期时间且时间不为0或者负数 需要手动或者到期时才会删除

// 过期时间 expires  max-age
// expires
// max-age

// cookie作用域
// Domain 指定哪些主机可以接受cookie
// 如果没有指定 默认是origin  不包括子域名
// 如果指定Domain 则包含子域名 domain=baidu.com  则www.baidu.com  dev.baidu.com都可以

// path  路径或者子路径
// path: "/index"
// path: "/index/doc"
