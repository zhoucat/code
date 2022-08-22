// 类型别名type

type ObjType = {
  name: string;
  age: number;
}
type Handler = (e: Event) => void;

// 组合
// 联合类型,有一个就行
interface NameStruct {
  name: string;
}
interface AgeStruct {
  age: number;
}
type lianhe = NameStruct | AgeStruct
// 交叉类型，必须都有
type jiaocha = NameStruct & AgeStruct
// 如果两个类型不兼容，则合并为never
type incompatible = number & string

// 索引

// 索引签名，在接口或类型别名中，快速声明一个键值类型一致的类型结构：
interface AllKeyStringTypes {
  [key: string]: number
}
const stringNumber: AllKeyStringTypes = {
  "1": 10,
  2: 200
}

// 索引类型查询 keyof：将对象所有的键组合变成联合类型
interface ObjKeys {
  id: 1,
  name: 'zhou'
}

type logKeys = keyof ObjKeys

// 索引类型访问
interface interRecord {
  A: number,
  B: String,
  C: true
}
type typeA = interRecord['A'] // number

// 结合keyof取对象所有值的类型
type ValueTypes = interRecord[keyof interRecord] // number | true | String


// 映射，in,将联合类型每一个都映射出来
type clone <T> = {
  [K in keyof T]: T[K]
}
type newInterRecord = clone<interRecord>
