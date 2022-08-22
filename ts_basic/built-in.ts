// 任意类型any，这时类型推推导无效
// 谨慎使用,尤其是类型断言as any

// 显式
let log = (message: any): void => {}

// 隐式，noImplicitAny开关
// let foo;
// function func (a, b) {}

// 可以接受任意类型的值，也可以赋值给其他任意类型的变量

let anyVar: any = 123
anyVar = '123'
const numVar: number = anyVar

// 未知类型unknown
let unknownVar:unknown = '123'

// 可以再次赋值为任意类型
unknownVar = 123
// 只能赋值给unknown和any类型的变量
const unknown1Var: any = unknownVar

// 什么都没有，最底层类型：never

// 类型层级
// any/unknown => 原始/对象类型 => 字面量类型/void => never

// 主要用于类型检查，在编译阶段提醒对遗漏类型分支的处理

declare const strOrNum: string | number | Function;

if (typeof strOrNum === "string") {
  console.log("str!");
} else if (typeof strOrNum === "number") {
  console.log("num!");
} else {
  // 不能将类型“Function”分配给类型“never”
  const _exhaustiveCheck: never = strOrNum;
  throw new Error(`Unknown input type: ${_exhaustiveCheck}`);
}
