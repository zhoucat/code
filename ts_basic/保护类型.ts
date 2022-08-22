// 类型查询 typeof
const typeOfName = "zhou";

type typeOfType = typeof typeOfName // 'zhou'

// 类型守卫

// is类似类型断言，但是可以指定类型
function isString(input: unknown): input is string {
  return typeof input === "string";
}

function moreType(input: string | number) {
  if (isString(input)) {
    // 正确了
    (input).replace("123", "123")
  }
  if (typeof input === 'number') { }
  // ...
}

export type Falsy = false | "" | 0 | null | undefined;

export const isFalsy = (val: unknown): val is Falsy => !val;

// in，判断key是够在obj中，必须是当前类型独有的key
// instanceof或者独立key也可以达到守卫
interface faceA {
  A: string;
  C: () => void;
  kind: 'A'
}
interface faceB {
  B: string;
  D: () => void;
  kind: 'B'
}
function inFun(input: faceA | faceB) {
  if ('A' in input) {
    input.C();
  } else {
    input.D()
  }
}
function kindFun(input: faceA | faceB) {
  if (input.kind === 'A') {
    input.C();
  } else {
    input.D()
  }
}

// 断言守卫 assert：判断条件不通过时，断言守卫需要抛出一个错误

let strName: any = 'zhou';

function assertIsNumber(val: any): asserts val is number {
  if (typeof val !== 'number') {
    throw new Error('Not a number!');
  }
}
// 不是number则抛出错误
assertIsNumber(strName);

// number 类型！
strName.toFixed();
