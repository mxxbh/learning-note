# HTML 面试题

## 异步加载脚本的方式有哪些？

HTML 中加载脚本的默认方式是同步的，会阻塞 HTML 解析，直到脚本下载并执行完成。
为了优化性能，可以使用 `async` 或 `defer` 属性实现异步加载。

- **async**：下载异步，执行立即，可能乱序。
- **defer**：下载异步，执行延迟，按序执行。
- 如果脚本不依赖 DOM 或其他脚本，使用 `async`；否则使用 `defer`。

### async 属性
- 异步下载脚本，不阻塞 HTML 解析。
- 下载完成后立即执行脚本，可能在 HTML 解析完成前执行。
- 多个 async 脚本的执行顺序不保证，按下载完成的顺序执行。
- 适合独立、不依赖其他脚本的代码（如统计脚本）。

示例：
```html
<script src="script1.js" async></script>
```

### defer 属性
- 异步下载脚本，不阻塞 HTML 解析。
- 等待 HTML 解析完成后，按脚本在文档中的顺序执行。
- 适合需要依赖 DOM 或其他脚本的代码。

示例：
```html
<script src="script2.js" defer></script>
```
