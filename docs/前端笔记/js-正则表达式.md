# 正则表达式

> 参考：[正则表达式测试 RegExr][20260509001]

[20260509001]: https://regexr.com/

正则表达式是用来匹配、检索、替换、校验字符串的一套规则语法。

## 创建方式

```js
// 字面量（常用）：const reg = /规则/标志;
const reg = /\w\d/g;

// 构造函数：const reg = new RegExp("规则","标志");
const reg = new RegExp("\w\d","g");
```

## 字符类

> 参考：[正则表达式字符类][20260509002]

[20260509002]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes

| 常见字符 | 描述                           |
| -------- | ------------------------------ |
| `.`      | 匹配除换行符以外的任何单个字符 |
| `\d`     | 匹配一个数字字符               |
| `\D`     | 匹配一个非数字字符             |
| `\w`     | 匹配一个字母、数字或下划线字符 |
| `\W`     | 匹配一个非字母、数字或下划     |
| `\s`     | 匹配一个空白字符               |
| `\S`     | 匹配一个非空白字符             |

## 断言

> 参考：[正则表达式断言][20260509003]

[20260509003]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions

| 常见断言  | 描述                                        |
| --------- | ------------------------------------------- |
| `^`       | 匹配输入字符串的开始位置                    |
| `$`       | 匹配输入字符串的结束位置                    |
| `\b`      | 匹配一个单词边界                            |
| `\B`      | 匹配非单词边界                              |
| `x(?=y)`  | 先行断言，仅当“x”后面跟着“y”时匹配“x”       |
| `x(?!y)`  | 先行否定断言，仅当“x”后面不跟着“y”时匹配“x” |
| `(?<=y)x` | 后行断言，仅当“x”前面跟着“y”时匹配“x”       |
| `(?<!y)x` | 后行否定断言，仅当“x”前面不跟着“y”时匹配“x” |

## 量词

> 参考：[正则表达式量词][20260509004]

[20260509004]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers

### 贪婪匹配

默认情况下，正则表达式中的量词是贪婪的，即它们会尽可能多地匹配字符。
要实现非贪婪匹配，可以在量词后面添加一个问号 `?`，使其变为非贪婪模式。

```js
const str = "abc123def456";
const r1 = str.match(/\d+/g); // 贪婪匹配，结果为 ["123", "456"]
const r2 = str.match(/\d+?/g); // 非贪婪匹配，结果为 ["1", "2", "3", "4", "5", "6"]
```

## 标志

> 参考：[正则表达式标志][20260509005]

[20260509005]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions#%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E6%A0%87%E5%BF%97

| 常见标志 | 描述                                                   |
| -------- | ------------------------------------------------------ |
| `g`      | 全局搜索                                               |
| `i`      | 不区分大小写搜索                                       |
| `m`      | 多行搜索，允许 ^ 和 $ 匹配换行符                       |
| `s`      | 允许 . 匹配换行符                                      |
| `u`      | 使用unicode码的模式进行匹配                            |
| `y`      | 执行“粘性(sticky)”搜索，匹配从目标字符串的当前位置开始 |

## 示例

```js
const regPhone = /^1[3-9]\d{9}$/; // 匹配 11 位手机号
const regEmail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+\.[a-zA-Z]{2,}$/; // 匹配邮箱地址
const regIdCard = /^\d{17}[\dXx]$/; // 匹配身份证号码
```