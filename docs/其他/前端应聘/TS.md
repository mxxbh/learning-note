# TS 面试题

## 泛型是什么？

泛型（Generics）是 TypeScript 中用于处理多种数据类型的工具，可以在保持类型安全的情况下，让函数、接口或类根据输入类型灵活工作。

- 泛型使代码具有更强的复用性，不必为每种数据类型重复编写相似实现。
- 在使用时可以指定类型参数，也可以让 TypeScript 通过类型推断自动推断。
- 不同于 `any`，泛型在泛型类型和具体类型之间保留类型信息，避免丢失类型检查能力。

```ts
function identity<T>(value: T): T {
  return value;
}

const result1 = identity<string>("hello");
const result2 = identity(123); // 类型推断为 number
```

### 常见用法
- 泛型函数：`function foo<T>(arg: T): T {}`
- 泛型接口：`interface Box<T> { value: T }`
- 泛型类：`class Queue<T> { ... }`
- 泛型约束：`function foo<T extends { length: number }>(arg: T) {}`

### 应用场景
- 数据结构实现（栈、队列、链表等）
- 通用工具函数（拷贝、排序、组合等）
- API 请求/响应类型定义
- 函数式编程中的组合和柯里化
