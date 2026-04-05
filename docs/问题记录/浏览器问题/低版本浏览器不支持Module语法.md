# 低版本浏览器不支持 ES Module 语法

部分低版本浏览器中不支持 ES Module 语法，js 代码不能正常执行。

## 方式一

使用 [ES Module Shims](https://github.com/guybedford/es-module-shims)。

```html
<script async src="https://ga.jspm.io/npm:es-module-shims@2.8.0/dist/es-module-shims.js"></script>
```
