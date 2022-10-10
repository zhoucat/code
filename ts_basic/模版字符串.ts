// 基础
type Version = `${number}.${number}.${number}`
const v1:Version = '2.1.1'

// 泛型
type SizeRecord<Size extends string> = `${Size}-Record`;
type Size = 'Small' | 'Middle' | 'Large';
// "Small-Record" | "Middle-Record" | "Huge-Record"
type UnionSizeRecord = SizeRecord<Size>;

// 索引映射
interface Foo {
  name: string;
  age: number;
  job: () => void;
}
type ChangeListener = {
  on: (change: `${keyof Foo}Changed`) => void;
};
declare let listener: ChangeListener;
// 约束为 "nameChanged" | "ageChanged" | "jobChanged"
listener.on('nameChanged');

// as重映射修改键名
type CopyRename< T extends object> = {
  [k in keyof T as `on${Capitalize<string & k>}`]: T[k]
}
type RenameFoo = CopyRename<Foo>

// 专用类型工具 Uppercase、Lowercase、Capitalize Uncapitalize
type ToUppercase<T extends string> = `${Uppercase<T>}`
type ToLowercase<T extends string> = `${Lowercase<T>}`
type ToCapitalize<T extends string> = `${Capitalize<T>}`
type ToUncapitalize<T extends string> = `${Uncapitalize<T>}`
type name1 = ToUppercase<'zhou'> // "ZHOU"
type name2 = ToLowercase<'ZHOU'> // 'zhou'
type name3 = ToCapitalize<'zhou'> // "Zhou"
type name4 = ToUncapitalize<'ZHOU'> // "zHOU"

// 模式匹配
type ReverseName<T extends string> = T extends `${infer First} ${infer Last}` ? `${Capitalize<Last>} ${Uncapitalize<First>}` : T
type ReversedZhou = ReverseName<'Zhou guang'> // "Guang zhou"

type TrimLeft<T extends string> = T extends ` ${infer R}` ? TrimLeft<R> : T
type TrimRight<T extends string> = T extends `${infer L} ` ? TrimRight<L> : T
type Trim<T extends string> = TrimLeft<TrimRight<T>>

type _Include<
  Str extends string,
  Search extends string
> = Str extends `${infer _R1}${Search}${infer _R2}` ? true : false;

type Include<Str extends string, Search extends string> = Str extends ''
  ? Search extends ''
    ? true
    : false
  : _Include<Str, Search>;

type Split<
  Str extends string,
  Delimiter extends string
> = Str extends `${infer Head}${Delimiter}${infer Tail}`
  ? [Head, ...Split<Tail, Delimiter>]
  : Str extends Delimiter
  ? []
  : [Str];

type Join<
  List extends Array<string | number>,
  Delimiter extends string
> = List extends []
  ? ""
  : List extends [string | number]
  ? `${List[0]}`
  : List extends [string | number, ... infer Rest]
  // @ts-expect-error
  ? `${List[0]}${Delimiter}${Join<Rest, Delimiter>}`
  : string