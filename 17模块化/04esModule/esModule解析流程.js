// 分为三个阶段
// 1 构建 根据地址查找js文件 并下载 解析成模块记录 module record
// 2 实例化 对模块记录进行实例化 并分配内存空间 解析模块的导入和导出语句 把模块指向对应的内存地址
// 3 运行 运行代码 计算值 并且将值填充到内存地址中

// 导出模块内部可以修改变量值 导入模块不能修改导入的变量值