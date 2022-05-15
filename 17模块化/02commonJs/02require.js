// require 的查找规则
require(X)
//相对路径
//1. X是Node核心模块 path http 会直接返回
const path = require('path')
//2. 路径 "./"  "../"
// abc 被当做一个文件 abc.js abc.json  abc.node
// 如果都没有找到 会把abc当做一个文件夹 查找文件夹下的index.js index.json index.node
// 如果还没有找到 not found
const abc = require("../abc")

// 3.X不是路径也不是核心模块
// 会寻找 当前路径的node_modules 下的dang/index.js
// 如果没找到 往上层目录的node_modules的dang/index.js 如果再没找到 再往上层 直到更根目录
const dang = require("dang")





//