//模块第一次被引入时，模块中的代码会被运行依次。
// 多次加载只会运行一次 会有缓存
// 如果循环引用  依次加载  深度优先搜索DFS depth first search  广度优先搜索BFS breadth first search


//缺点 CommonJS 模块加载是同步的 意味着只有等对应模块加载完毕 才会被运行
// 但在浏览器会阻塞js代码执行
