# CSS 面试题

## 盒子模型是什么?

CSS 盒子模型描述了元素在页面中占据的空间，由内容（content）、内边距（padding）、边框（border）和外边距（margin）组成。

### 标准盒模型（W3C 盒模型）
- `width` 和 `height` 只包括内容区域。
- 总宽度 = `width` + `padding-left` + `padding-right` + `border-left` + `border-right` + `margin-left` + `margin-right`。

### IE 盒模型（怪异盒模型）
- `width` 和 `height` 包括内容、内边距和边框。
- 总宽度 = `width` + `margin-left` + `margin-right`（其中 `width` 已包含 padding 和 border）。

### 切换盒模型
使用 `box-sizing` 属性：
- `box-sizing: content-box;`（默认，标准盒模型）
- `box-sizing: border-box;`（IE 盒模型）

## BFC 是什么？

BFC（Block Formatting Context）是 CSS 中的块级格式化上下文，是页面中的一个渲染区域，具有独立的布局规则。

### 触发条件
- 根元素（`<html>`）
- 浮动元素（`float` 不为 `none`）
- 绝对定位元素（`position: absolute/fixed`）
- 行内块元素（`display: inline-block`）
- 表格单元格（`display: table-cell`）
- 弹性盒子（`display: flex/inline-flex`）
- 网格布局（`display: grid/inline-grid`）
- `overflow` 不为 `visible` 的块元素

### 作用
- 清除浮动：包含浮动元素，避免高度塌陷。
- 防止 margin 合并：相邻块级元素的垂直 margin 会合并，可将两个元素放在不同的 BFC 内，防止这种合并现象。
- 防止元素被浮动覆盖：BFC 内的元素不会与外部浮动元素重叠。

示例：
```css
.container {
  overflow: hidden; /* 触发 BFC */
}
.float-left {
  float: left;
}
```

::: tip
清除浮动还可以使用 [clear][20260513001] 属性
:::

[20260513001]: https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Properties/clear

## 回流与重绘是什么？

回流（Reflow）和重绘（Repaint）是浏览器渲染过程中的两个阶段，用于更新页面显示。

### 重绘（Repaint）
- 仅改变元素的视觉样式（如颜色、背景），不影响布局。
- 浏览器重新绘制元素的外观。
- 触发条件：改变 `color`、`background-color`、`visibility` 等。

### 回流（Reflow）
- 重新计算元素的几何属性和位置，影响整个文档布局。
- 比重绘更耗性能，可能导致整个页面重新布局。
- 触发条件：改变 `width`、`height`、`margin`、`padding`、`display`、`position` 等。

### 优化建议
- 避免频繁操作 DOM，使用批量更新（如 `documentFragment`）。
- 使用 `transform` 和 `opacity` 代替布局属性变化（触发硬件加速）。
- 减少回流：使用 `position: absolute/fixed` 减少对其他元素的影响。

## grid 网格布局是什么？

CSS Grid Layout（网格布局）是一种二维布局系统，用于创建复杂的网格结构，支持行和列的精确控制。

### 基本概念
- **网格容器**：设置 `display: grid` 的元素。
- **网格项**：容器内的直接子元素。
- **网格线**：划分网格的线条。
- **网格轨道**：行或列之间的空间。
- **网格单元格**：行和列交叉形成的区域。

### 主要属性
- `grid-template-columns`：定义列的尺寸。
- `grid-template-rows`：定义行的尺寸。
- `grid-gap`（或 `gap`）：设置网格项之间的间距。
- `grid-column` / `grid-row`：指定网格项的位置和跨度。

示例：
```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* 三列，中间列占 2 份 */
  grid-template-rows: 100px auto 100px; /* 三行，中行自适应 */
  gap: 10px;
}

.grid-item {
  grid-column: 1 / 3; /* 跨越第 1 到第 3 列 */
}
```

### 优势
- 灵活的二维布局。
- 响应式设计：使用 `fr` 单位和媒体查询。
- 简化复杂布局，无需浮动或定位。