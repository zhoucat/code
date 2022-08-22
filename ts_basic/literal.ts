// 字面量类型，对原始类型的拓展
type School = {
  type: '公办'|'民办';
  num: 50 | 100 | 300 | 500;
}
const gzSchool:School = {
  type: '公办',
  num: 300
}

// const会将变量类型推导为字面量类型
const valConst = 'zhou'