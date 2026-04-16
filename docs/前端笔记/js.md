# JavaScript

| 概念                   | 参考                      |
| ---------------------- | ------------------------- |
| 数据类型               | [mdn-数据类型][101]       |
| 假值                   | [mdn-假值][102]           |
| 算符优先级             | [mdn-算符优先级列表][103] |
| 迭代器与生成器         | [mdn-迭代器与生成器][106] |
| new 运算符创建对象过程 | [mdn-new 运算符][107]     |

[101]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures
[102]: https://developer.mozilla.org/zh-CN/docs/Glossary/Falsy
[103]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#%E6%B1%87%E6%80%BB%E8%A1%A8
[106]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators#iterables
[107]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new#%E6%8F%8F%E8%BF%B0

| 效果                  | 参考                            |
| --------------------- | ------------------------------- |
| 指定 console 内容颜色 | [Node.js Console 颜色清单][201] |

| 代码库         | 描述                                     |
| -------------- | ---------------------------------------- |
| [Lodash][202]  | 通用方法库                               |
| [RxJS][203]    | 响应式编程                               |
| [uuid][204]    | 用于生成唯一键值                         |
| [p-queue][205] | 批量异步请求                             |
| [pako][206]    | 支持 deflate 及 gzip 算法的压缩/解压缩库 |
| [JSZip][207]   | zip 压缩库                               |

[201]: https://github.com/isLishude/blog/issues/179
[202]: https://lodash.com/
[203]: https://rxjs.dev/
[204]: https://github.com/uuidjs/uuid
[205]: https://github.com/sindresorhus/p-queue
[206]: https://github.com/nodeca/pako
[207]: https://github.com/Stuk/jszip

## 知识点

- 数值用 4 个字节表示，整数 (不使用小数点或指数计数法) 最多为 15 位。小数的最大位数是 17。
- 比较运算符 `>`、`>=`、`<`、`<=` 做判断时，有一个操作数为 NaN，则结果返回 false。
- 位运算符会自动将数值类型的操作数转换成整数。
- 可以用取反运算符 `~` 判断变量值是否等于 -1，例如 `~x === -(x + 1)`、`~-1 === 0`。
- 对于 null、undefined、字符串、对象等操作数进行取反时，返回结果都是 -1。
- for/in 语句可以遍历出对象及其原型上可枚举的方法及属性。注意，和 in 操作符不一样。
- 使用 `Array.prototype.fill()` 方法填充复杂类型变量时，数组每一项会指向同一个变量。
- 使用 `Number()` 方法转换数值时，undefined 转成 NaN，null 转成 0。
- `Object.is()` 方法判断两变量相等，不会强制转换两边的值，+0 与 -0 判为不等，NaN 与 NaN 判为相等。
- Set 对象允许存储任何类型的唯一值，无论是原始值或者是对象引用，判断类似于恒等 ===，但 NaN 只能存一个。
- 非严格模式中，undefined 可作为标识符（能被当作变量名来使用和赋值）。
- 不要在 script 标签内直接使用 await，有些环境支持，有些环境不支持。
- `pushState()` 和 `replaceState()` 方法不会触发 hashChange 事件。

## 归纳

| 检查/获取/遍历对象属性的方法 | 描述             | 自有属性 | 原型链 | 可枚举 | 不可枚举 | symbol |
| ---------------------------- | ---------------- | :------: | :----: | :----: | :------: | :----: |
| in                           | 判断属性是否存在 |    √     |   √    |   √    |    √     |   √    |
| Object.hasOwnProperty        | 判断属性是否存在 |    √     |   ×    |   √    |    √     |   √    |
| Object.propertyIsEnumerable  | 判断属性是否存在 |    √     |   ×    |   √    |    ×     |   √    |
| Object.keys                  | 获取属性         |    √     |   ×    |   √    |    ×     |   ×    |
| Object.getOwnPropertyNames   | 获取属性         |    √     |   ×    |   √    |    √     |   ×    |
| Object.getOwnPropertySymbols | 获取属性         |    √     |   ×    |   ×    |    ×     |   √    |
| Reflect.ownKeys              | 获取属性         |    √     |   ×    |   √    |    √     |   √    |
| for/in 循环                  | 遍历对象         |    √     |   √    |   √    |    ×     |   ×    |

| 变量声明方式 | 提升创建、初始化、赋值过程 |    可在声明前使用    |
| ------------ | :------------------------: | :------------------: |
| var          |           √ √ ×            | 可以，但为 undefined |
| let          |           √ × ×            |        不可以        |
| const        |           √ × ×            |        不可以        |
| function     |           √ √ √            |         可以         |
| class        |           √ × ×            |        不可以        |

## 正则表达式

| 概念               | 参考                          |
| ------------------ | ----------------------------- |
| 正则表达式转义字符 | [mdn-正则表达式转义字符][104] |
| 正则表达式断言     | [mdn-正则表达式断言][105]     |
| 正则表达式测试     | [RegExr][108]                 |

[104]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes
[105]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions
[108]: https://regexr.com/

## 示例

隐式转换：

::: code-group

```js [判断相等]
[] == ![]; // 输出 true

// 转换过程：
// 1. 首先执行取非运算（算符优先级 '!' > '=='），得到 [] == false
// 2. 遇到布尔值先转换成数字（双等号运算规则），得到 [] == 0
// 3. 复杂类型需转换成基本类型（调用 toString() 方法），得到 '' == 0
// 4. 再将字符串转换成数字，得到 0 == 0

"0" == false; // 输出 true

// 也是左右转换成数字，得到 0 == 0
```

```js [作加法]
`[] + {}`; // 结果为 "[object Object]"
// [] 转换为 ""，{} 转换为 "[object Object]"，相加为 "[object Object]"

`{} + []`; // 结果为 0
// {} 被解析为代码块，语句等价于 +[]，结果转换为 0
```

:::

使用生成器函数给对象提供 for/of 遍历方式：

```javascript
function* objectEntries(obj) {
  const propKeys = Reflect.ownKeys(obj); // 返回对象所有的属性，不管属性是否可枚举，包括 Symbol
  for (const propKey of propKeys) {
    yield [propKey, obj[propKey]];
  }
}
const jane = { first: "Jane", last: "Doe" };
for (const [key, value] of objectEntries(jane)) {
  console.log(`${key}: ${value}`);
}
// 输出 "first: Jane"，"last: Doe"
```

使用 Set 对象实现集合运算:

```javascript
let a1 = [1, 2, 3, 3];
let a2 = [2, 3, 4];

// 数组去重
let a3 = [...new Set(a1)];

// 求并集
let union = new Set([...a1, ...a2]); // Set {1, 2, 3, 4}
// 求交集
let intersect = new Set(a1.filter((x) => a2.has(x))); // set {2, 3}
// 求差集
let difference = new Set(a1.filter((x) => !a2.has(x))); // Set {1}
```

不使用额外变量交换两个变量的值：

```js
// 加减法
a = a + b;
b = a - b;
a = a - b;

// 按位异或法，假设 a = 10010011, b = 01010110
a ^= b; // a = 11000101
b ^= a; // b = 10010011
a ^= b; // a = 01010110

// 使用逗号运算符
a = [b, (b = a)][0];
```
