# Vue

> 背景：[Vue][001]、[playground][002]、[CLI][003]、

[001]: https://cn.vuejs.org/
[002]: https://play.vuejs.org/
[003]: https://cli.vuejs.org/zh/

| 工具             | 描述                 |
| ---------------- | -------------------- |
| [Devtools][004]  | 浏览器调试工具       |
| [Volar][005]     | VS Code 代码提示插件 |
| [Vite][006]      | 构建工具             |
| [Vite 插件][008] | Vite 插件集合        |
| [VitePress][007] | 文档生成工具         |

[004]: https://devtools.vuejs.org/
[005]: https://marketplace.visualstudio.com/items?itemName=Vue.volar
[006]: https://cn.vitejs.dev/
[007]: https://vitepress.dev/zh/
[008]: https://github.com/vitejs/awesome-vite#plugins

| 代码库              | 描述     |
| ------------------- | -------- |
| [Router][201]       | 路由     |
| [Pinia][202]        | 状态管理 |
| [Element Plus][203] | 组件库   |

[201]: https://router.vuejs.org/zh/
[202]: https://pinia.vuejs.org/zh/core-concepts/
[203]: https://element-plus.org/zh-CN/

## 知识点

- 模板定义中的布尔属性取值为真值或空字符串会被包含，为其他假值时会被忽略。
- 样式赋值支持填入多个值，系统会保留最后一个被浏览器支持的值，例如 `<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>`。
- `.exact` 事件修饰符表示确切匹配系统按键，例如 `@click.ctrl.exact` 表示仅当只按下 ctrl（没有 shift alt 其他按键）时点击触发。
- `v-show` 不支持在 `<template>` 元素上使用，也不能和 `v-else` 搭配使用。
- `v-if` 优先级高于 `v-for`。
- 组件名推荐使用驼峰形式（便于区分 Vue 组件和原生 HTML 元素），而组件属性还是推荐使用连字符形式。
