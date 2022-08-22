// 枚举，对对象类型的拓展
enum NUMS {
  "url1",
  "url2",
  WX_URL = "url3"
}
const Url = NUMS[1]
// 双向映射,仅限数字映射
// 编译结果
// var NUMS;
// (function (NUMS) {
//     NUMS[NUMS["url1"] = 0] = "url1";
//     NUMS[NUMS["url2"] = 1] = "url2";
//     NUMS["WX_URL"] = "url3";
// })(NUMS || (NUMS = {}));
// const Url = NUMS[1];

// 常量枚举
const enum Deploy {
  API_URL = "url1",
  H5_URL = "url2",
  WX_URL = "url3"
}
const apiUrl = Deploy.API_URL
// 编译结果
// const apiUrl = "url1"