import { Nominal } from './类型的兼容性以及层级';
// 判断原理
// 1.结构化类型系统：基于类型的结构判断，鸭子类型，ts的判断方法
// typeClass2包含typeClass1
class typeClass1 {
  eat() { }
}

class typeClass2 {
  bark() { }
  eat() { }
}

function testTypeClass(cat: typeClass1) { }

testTypeClass(new typeClass2())

// 2.标称类型系统： 基于类型名称的判断
export declare class protectTag<T> {
  protected __tag__: T
}
export type Nominal<T, U extends string> = T & protectTag<U>
export type CNY = Nominal<number, 'CNY'>;

export type USD = Nominal<number, 'USD'>;

const CNYCount = 100 as CNY;

const USDCount = 100 as USD;

function addCNY(source: CNY, input: CNY) {
  return (source + input) as CNY;
}

addCNY(CNYCount, CNYCount);

// 报错了！
addCNY(CNYCount, USDCount);


// 判断类型兼容性的方法

// 赋值： a = b b的类型则是a的类型的子类型
declare let source: string;
declare let anyType: any;
declare let neverType: never;
anyType = source;
// 不能将类型“string”分配给类型“never”。
neverType = source;

// 层级
type TypeChain = never extends 'linbudu'
  ? 'linbudu' extends 'linbudu' | '599'
  ? 'linbudu' | '599' extends string
  ? string extends String
  ? String extends Object
  ? Object extends any
  ? any extends unknown
  ? unknown extends any
  ? 8
  : 7
  : 6
  : 5
  : 4
  : 3
  : 2
  : 1
  : 0

// any,unknown
// Object 顶层原型
// String，Boolean，Number 装箱类型
// string等基础类型
// 123，true等字面量类型
// never