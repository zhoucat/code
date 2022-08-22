// 将变量的已有类型更改为新指定类型的操作，指鹿为马，强行操作
// 编译后的代码可能在运行时错误

let unknownLet: unknown;

interface Person {
  name: string;
  age: number;
  speak ():void
}

// as 作为Person
(unknownLet as Person).speak();

// <> 可选使用
(<Person>unknownLet).speak();

// 可选代码提示
unknownLet = <Person>{
  name: '123',
  speak (str:string):void {
    console.log(str)
  }
}

// 编译后代码：
// unknownLet如果没有speak则运行错误
// let unknownLet;
// // as 作为Person
// unknownLet.speak();
// // <> 可选使用
// unknownLet.speak();
// unknownLet = {
//     speak(str) {
//         console.log(str);
//     }
// };

// 非空断言
declare const foo: {
  func?: () => ({
    prop?: number | null;
  })
};
// 非空链可能会运行错误
foo.func!().prop!.toString()
// 可选链，null/undefined就停止运行
foo.func?.().prop?.toString()