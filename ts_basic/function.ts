// 使用
// params和return声明分开
// ?：可选参数
// xxx = xxx: 带默认值的可选参数
const baseFun = (item:string[]):number => {
  return item.length
}
// 整体声明
type BaseFun = (item: string) => number
const baseAllFun: BaseFun = item => item.length

// void:表示没有声明返回值
function noReturn (item: number) {}

// 可选参数
// 在函数逻辑中注入可选参数默认值
function foo1 (name: string, age?: number): number {
  const inputAge = age || 18; // 或使用 age ?? 18
  return name.length + inputAge
}

// 直接为可选参数声明默认值
function foo2(name: string, age: number = 18): number {
  const inputAge = age;
  return name.length + inputAge
}

// rest参数
function restFun (id: string, ...rest:[age: number, sex: string]) {
  return {
    id,
    age: rest[0],
    sex: rest[1]
  }
}
console.log(restFun('zhou', 18, 'nan'))

// 异步函数
async function asyncFunc(): Promise<void> {}

// 函数重载,小的写前面
// type Add = <T[]>(value :T[]) => T;
// const add:Add = (...rest) => {
//   const first = rest[0]
//   if (typeof first === 'string') {
//     return rest.join('')
//   }
//   if (typeof first === 'number') {
//     return rest.reduce((pre, cur) => pre + cur)
//   }
// }

// console.log(add(1,4,5))
// console.log(add('a', 'b', 'c'))