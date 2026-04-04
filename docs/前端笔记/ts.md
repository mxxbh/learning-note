# TypeScript

> 参考：[TypeScript][001]、[中文网][002]、[playground][003]

[001]: https://www.typescriptlang.org/
[002]: https://www.tslang.cn/docs/home.html
[003]: https://www.typescriptlang.org/play

## 知识点

- 声明变量时不指定类型就是隐式的 any，此时该变量可以赋任何类型的值。但一旦赋值，该变量就会变为所赋值的类型。

## 示例

定义函数的两个参数存在关联关系：

```typescript
// 指定第一个参数为 A 时，第二个参数的类型自动确定为 { age: number }
// 指定第一个参数为 B 时，第二个参数的类型自动确定为 { size: number }
type Params = { name: "A"; value: { age: number } } | { name: "B"; value: { size: number } };
function test<T extends Params["name"]>(name: T, value: Extract<Params, { name: T }>["value"]) {}
```

获取数组值的类型：

```ts
const test = [1, '2', true, undefined] as const；
type TestValue = typeof test[number]； // TestValue: true | 1 | "2" | undefined
```

获取枚举键与值的类型：

```ts
enum Text {
  A = "a",
  B = "b",
  C = "c",
}
type AllKey = keyof typeof Text; // AllKey: 'A' | 'B' | 'C'
type AllValue = `${Text}`; // AllValue: 'a' | 'b' | 'c'
```

类的函数属性会添加到原型上：

```ts
// 原代码
class H1 {
  name1 = "h1";
  name2 = () => "h1";
  constructor() {
    this.name3 = "h1";
    this.name4 = () => "h1";
  }
  name5() {
    return "h1";
  }
}

// 实际效果
var H1 = (function () {
  function H1() {
    this.name1 = "h1";
    this.name2 = function () {
      return "h1";
    };
    this.name3 = "h1";
    this.name4 = function () {
      return "h1";
    };
  }
  H1.prototype.name5 = function () {
    return "h1";
  };
  return H1;
})();
```
