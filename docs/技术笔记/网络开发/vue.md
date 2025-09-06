# Vue

## 知识点

- 模板定义中的布尔属性取值为真值或空字符串会被包含，为其他假值时会被忽略。
- 样式赋值支持填入多个值，系统会保留最后一个被浏览器支持的值，例如 `<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>`。
- `.exact` 事件修饰符表示确切匹配系统按键，例如 `@click.ctrl.exact` 表示仅当只按下 ctrl（没有 shift alt 其他按键）时点击触发。
- `v-show` 不支持在 `<template>` 元素上使用，也不能和 `v-else` 搭配使用。
- `v-if` 优先级高于 `v-for`。
- 组件名推荐使用驼峰形式（便于区分 Vue 组件和原生 HTML 元素），而组件属性还是推荐使用连字符形式。
