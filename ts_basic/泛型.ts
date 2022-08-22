// 类似函数的形参，被内部消费

// 在类型别名中
type GenericType<T> = T | number | string
// 默认参数
type NormalGenericType<T = 'zhou'> = T | number | string
const testNormalGeneric: NormalGenericType = 'zhou'
// 多泛型参数
type MoreGenericType<Input, SecondInput, ThirdInput> = Input | SecondInput | ThirdInput | number
// 应用：
// 将所有属性改为可选
type Optional<T> = {
  [K in keyof T]? : T[K]
}

// 条件筛选：
// 结合extends约束，T extends U T是否是U的子类型
// type xxx<T> = T extends U ? X : Y
type Diff<T, U> = T extends U ? never : T
type T1 = Diff<'a'|'b'|'c', 'b'|'e'> // 'a' | 'c'

// 对象类型中的泛型
interface Response<TData = unknown> {
  code: number,
  msg: string,
  data: TData,
  err?: string
}
interface User {
  name: string,
  age: number
}
async function fetchUser():Promise<Response<User>> {
  return
}

// 函数中泛型，被返回值/内部逻辑消费
function genericFun <T>(input: T): T {
  return
}
genericFun("zhou"); // 返回字面量类型 "zhou"
genericFun(18);

// 多泛型关联,例如loadsh中的pick
function pick<T extends Object, U extends keyof T>(object: T, ...props: Array<U>): { [K in U] : T[U]}{
  return object
}
const aa = pick({a: 1, b: 2}, 'a')

// class中使用泛型，属性、方法等消费
class Queue<TElementType> {
  private _list: TElementType[];

  constructor(initial: TElementType[]) {
    this._list = initial;
  }

  // 入队一个队列泛型子类型的元素
  enqueue<TType extends TElementType>(ele: TType): TElementType[] {
    this._list.push(ele);
    return this._list;
  }

  // 入队一个任意类型元素（无需为队列泛型子类型）
  enqueueWithUnknownType<TType>(element: TType): (TElementType | TType)[] {
    return [...this._list, element];
  }

  // 出队
  dequeue(): TElementType[] {
    this._list.pop();
    return this._list;
  }
}
const numberQueue = new Queue([1])
numberQueue.enqueue('2') // 类型“string”的参数不能赋给类型“number”的参数
numberQueue.enqueueWithUnknownType('3')

// 总结：泛型使类型推导可以由外部参数动态决定