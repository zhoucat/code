class Animal1 {
  Move () {}
}
class People extends Animal1 {
  Walk () {}
}

// method 声明
interface MethodInter {
  func(arg: string): number;
}

// property 声明
interface PropertyInter {
  func: (arg: string) => number;
}

// 参数兼容父类，在strictFunctionTypes：true并且采用property写法时生效
type FuncArgType<T> = (arg:T) => void;
type checkArgType = FuncArgType<Animal1> extends FuncArgType<People> ? 1 : 2 // 1

// 返回值兼容子类
type FuncReturnType<T> = (arg:unknown) => T;
type checkReturnType = FuncReturnType<People> extends FuncReturnType<Animal1> ? 1 : 2 // 1