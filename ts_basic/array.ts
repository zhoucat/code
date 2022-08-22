// 数组
const baseArr :unknown[] = ['123', 1, true]
let arr1 :number[] = [1]
let arr2 :Array<string> = ['a', 'b']

// 元祖，可预防边界问题
let tuple :[number, string] = [123, 'abc']
// 长度为 "2" 的元组类型 "[number, string]" 在索引 "2" 处没有元素
// const [age, title, sex] = tuple

// 具名元组
let nameTuple :[name: string, age: number] = ['zhou', 18]