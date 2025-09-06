# Vue

## 知识点

- 模板定义中的布尔属性取值为真值或空字符串会被包含，为其他假值时会被忽略。
- 样式赋值支持填入多个值，系统会保留最后一个被浏览器支持的值，例如 `<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>`。
- `.exact` 事件修饰符表示确切匹配系统按键，例如 `@click.ctrl.exact` 表示仅当只按下 ctrl（没有 shift alt 其他按键）时点击触发。
- `v-show` 不支持在 `<template>` 元素上使用，也不能和 `v-else` 搭配使用。
- `v-if` 优先级高于 `v-for`。
- 组件名推荐使用驼峰形式（便于区分 Vue 组件和原生 HTML 元素），而组件属性还是推荐使用连字符形式。

## 参考

- [Vue 官网](https://cn.vuejs.org/)
- [Vue - playground](https://play.vuejs.org/ '在线试用')
- [Vue - CLI](https://cli.vuejs.org/zh/ '命令行工具')
- [Vue - Devtools](https://devtools.vuejs.org/ '浏览器调试工具')
- [Vue - Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar 'VS Code 代码提示插件')
- [Vite](https://cn.vitejs.dev/ '构建工具') 👍
- [Vite - 插件](https://github.com/vitejs/awesome-vite#plugins 'Vite 打包插件')
- [VitePress](https://vitepress.dev/zh/ '文档生成工具')
- [【功能库】Router](https://router.vuejs.org/zh/ '路由库')
- [【功能库】Pinia](https://pinia.vuejs.org/zh/core-concepts/ '状态管理库')
- [【模板库】Element Plus](https://element-plus.org/zh-CN/)
