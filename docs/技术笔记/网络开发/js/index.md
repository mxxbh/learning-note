# JavaScript

## 知识点

- 数值是用 4 个字节表示的，整数 (不使用小数点或指数计数法) 最多为 15 位。小数的最大位数是 17。
- 非严格模式中，undefined 可作为标识符（能被当作变量名来使用和赋值）。
- 比较运算符（>、>=、<、<=）做判断时，有一个操作数为 NaN，则结果返回 false。
- 位运算符会自动将数值类型的操作数转换成整数。
- 可以用取反运算符（~）判断变量值是否等于 -1，例如 ~x === -(x + 1)、~-1 === 0。
- 对于 null、undefined、字符串、对象等操作数进行取反时，返回结果都是 -1。
- for/in 语句可以遍历出对象及其原型上可枚举的方法及属性。
- 使用 Array.protoType.fill() 方法填充复杂类型变量时，数组每一项会指向同一个变量。
- 使用 Number() 方法转换数值时，undefined 转成 NaN，null 转成 0。
- Object.is() 方法判断两变量相等，不会强制转换两边的值，+0 与 -0 判为不等，NaN 与 NaN 判为相等。
- Set 对象允许存储任何类型的唯一值，无论是原始值或者是对象引用，判断类似于恒等 ===，但 NaN 只能存一个。
- 不要在 script 标签内直接使用 await，有些环境支持，有些环境不支持。

## 参考

- [JS 数据类型](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)
- [假值](https://developer.mozilla.org/zh-CN/docs/Glossary/Falsy)
- [算符优先级列表](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#%E6%B1%87%E6%80%BB%E8%A1%A8) 👍
- [正则表达式转义字符](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)
- [正则表达式断言](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions) 👍
- [new 运算符创建对象过程](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new#%E6%8F%8F%E8%BF%B0) 👍
- [迭代器与生成器](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators#iterables)
- [对比 CJS/AMD/UMD/ESM 模块](https://irian.to/blogs/what-are-cjs-amd-umd-and-esm-in-javascript/)
- [指定 console 内容文字颜色](https://github.com/isLishude/blog/issues/179)

## 归纳

判断属性存在的方式：

| 判断方式                    | 描述                                                       |
| --------------------------- | ---------------------------------------------------------- |
| in                          | 判断属性是否存在指定对象中，不区分是否来自继承，是否可枚举 |
| Object.hasOwnProperty       | 判断属性是自身的，而不是从原型链继承的                     |
| Object.propertyIsEnumerable | 判断属性是自有的，且是可枚举的                             |

获取属性的方式：

| 获取方式                     | 可枚举属性 | 不可枚举属性 | symbol 属性 | 继承属性 |
| ---------------------------- | :--------: | :----------: | :---------: | :------: |
| Object.keys                  |     √      |      ×       |      ×      |    ×     |
| Object.getOwnPropertyNames   |     √      |      √       |      ×      |    ×     |
| Object.getOwnPropertySymbols |     ×      |      ×       |      √      |    ×     |
| Reflect.ownKeys              |     √      |      √       |      √      |    ×     |

变量声明方式对比：

| 声明方式 | 提升创建、初始化、赋值过程 |    可在声明前使用    |
| -------- | :------------------------: | :------------------: |
| var      |           √ √ ×            | 可以，但为 undefined |
| let      |           √ × ×            |        不可以        |
| const    |           √ × ×            |        不可以        |
| function |           √ √ √            |         可以         |
| class    |           √ × ×            |        不可以        |

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

'0' == false; // 输出 true

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
const jane = { first: 'Jane', last: 'Doe' };
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
