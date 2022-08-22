// 抽象类
abstract class Animal {
  abstract name: string;
  abstract food: string;
  abstract say(): void;
  abstract eat(food: string): void;
}

// 派生类
// public：此类成员在类、类的实例、子类中都能被访问。
// private：此类成员仅能在类的内部被访问。
// protected：此类成员仅能在类与子类中被访问
class Dog implements Animal {
  constructor (name :string, food: string = '骨头') {
    this.name = name
    this.food = food
  }
  public food: string;
  readonly name: string
  protected baohu () {}
  private siyou () {}
  static jingtai = 'static'
  say () {
    console.log('汪汪汪')
  }
  
  eat (food: string) {
    this.food += (', ' + food)
    console.log(`eat ${this.food}`)
  }
}
// 静态属性
console.log(Dog.jingtai)
// 方法在原型
console.log(Dog.prototype)
// 属性在实例
const hashiqi = new Dog('哈士奇')
console.log(hashiqi)
hashiqi.eat('沙发')
hashiqi.say()

// 继承
class jinDog extends Dog {
  constructor ({ name, food = '骨头', type = '缉毒'} : { name: string, food: string, type: string}) {
    super(name, food);
    this.type = type;
  }
  type: string
  // override保证父类一定有这个方法
  override say () {
    console.log('这里有小姐姐')
  }
}
const saoHuangDog = new jinDog({ name: '大黄', food: '肉', type: '扫黄'})
saoHuangDog.say()

// 接口和类
// 接口只能约束类的共有成员
interface Yuan {
  speed: number
  walk() :void
}

// 接口 extends 继承接口
interface Human extends Yuan {
  name: string,
  eat() :void
}

interface Buru {
  huxi() :void
}

// class implements interface
class Yazhouren implements Human, Buru {
  constructor (public name :string, public speed :number) {
    this.name = name
    this.speed = speed
  }
  eat () {
    console.log(`${this.name} eat`)
  }
  sleep () {
    console.log(`${this.name} sleep`)
  }
  walk () {
    console.log(`${this.name} walk ${this.speed}`)
  }
  huxi () {
    console.log(`${this.name} huxi`)
  }
}

let chinaPerson = new Yazhouren('zhou', 100)
chinaPerson.eat()
chinaPerson.sleep()
chinaPerson.walk()
chinaPerson.huxi()