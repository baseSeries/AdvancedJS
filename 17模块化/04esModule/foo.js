// 1\导出
export const name = "dang"
export const age = 18

export function foo1 () {
    console.log(foo1());
}

// 2.export 导出和声明分开
const bar = {
    name: 'bob'
}

// export 语法导出一个大括弧 不是对象 不能定义成对象
export { bar, foo1 }


// 3export 导出起别名  导入的时候就要用别名
export { bar as bar1, foo1 as foo }

// 导出引入
// 1.
// export { bar } from "./bar.js"
// 2.
export * from "./bar.js"
