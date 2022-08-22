// 对象
const baseObj :Record<string, unknown> = {
  'age': 12
}

interface Good {
  readonly id: string;
  readonly name: string;
  price: number;
  num: number;
  des?: string;
  delFun?: Function
}

const xiGua: Good = {
  id: '1',
  name: '西瓜',
  price: 10,
  num: 20,
  des: '麒麟瓜'
}