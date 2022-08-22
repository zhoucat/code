// 原始类型
const str: string = 'zhou';
const num: number = 24;
const male: boolean = false;
const undef: undefined = undefined;
const nul: null = null;
const obj: object = { str, num, male };
const bigintVar1: bigint = 9007199254740991n;
const bigintVar2: bigint = BigInt(9007199254740991);
const symbolVar: symbol = Symbol('unique');

// null和undefined在非strictNullChecks时，作为其他类型的子类型
const strNull: string = null
const strUndef: string = undefined

