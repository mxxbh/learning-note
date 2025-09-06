# css

## 知识点

- `scroll-behavior: smooth` 加超链接锚点 `#id` 可以实现页面滚动效果。
- 过去绝对定位元素的包含块是第一个 position 属性值不为 static 的祖先元素，现在 transform 属性值不为 none 的元素也可以作为绝对定位元素的包含块。
- z-index 只能用在相对定位、绝对定位、固定定位和 flex 布局下的子元素上。
- `display: contents` 表示元素本身不生成盒模型，相当于内部元素上升了一级。
- 设置 `touch-action: manipulation` 可解决双击缩放手势引起的点击事件延迟现象。
- 伪类选择器与类选择器的优先级相同，伪元素选择器与标签选择器的优先级相同。

## 参考

- 最新 css 资讯 [CSS DB](https://cssdb.org/)
- 最新 css 资讯 [CSS Triggers](https://csstriggers.com/)
- [CSS 参考手册](https://css.doyoe.com/)
- [绘制形状参考](https://css-tricks.com/the-shapes-of-css/)
- [背景效果参考](https://projects.verou.me/css3patterns/)
- [图片特效参考](https://bennettfeely.com/image-effects/)
- [图片滤镜参考](https://demo.cssworld.cn/new/11/3-10.php)

## 属性

- border、text-shadow、box-shadow 属性的默认值是 currentcolor

| 部分属性                                                                      | 描述                                     |
| ----------------------------------------------------------------------------- | ---------------------------------------- |
| [resize](https://developer.mozilla.org/zh-CN/docs/Web/CSS/resize)             | 设置元素是否可调整尺寸                   |
| [aspect-ratio](https://developer.mozilla.org/zh-CN/docs/Web/CSS/aspect-ratio) | 设置盒子纵横比                           |
| [caret-color](https://developer.mozilla.org/zh-CN/docs/Web/CSS/caret-color)   | 定义插入光标的颜色                       |
| [appearance](https://developer.mozilla.org/zh-CN/docs/Web/CSS/appearance)     | 控制 UI 控件的基于操作系统主题的原生外观 |

## 属性值

| 全局属性值                                                                   | 描述                                     |
| ---------------------------------------------------------------------------- | ---------------------------------------- |
| [initial](https://developer.mozilla.org/zh-CN/docs/Web/CSS/initial)          | 表示取默认值                             |
| [unset](https://developer.mozilla.org/zh-CN/docs/Web/CSS/unset)              | 表示未设置，属性值从父元素继承和取默认值 |
| [currentcolor](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value) | 表示元素的 color 属性值                  |

## 单位

> [参考](https://css.doyoe.com/values/index.htm)

长度单位：

- 绝对单位：1 in (英寸) = 2.54 cm (厘米) = 25.4 mm (毫米) = 101.6 q (1/4 毫米) = 72 pt (磅) = 6 pc (派卡) = 96 px (像素)
- 相对单位：

| 相对单位 | 描述                                                       |
| -------- | ---------------------------------------------------------- |
| em       | 相对于当前字体尺寸                                         |
| ex       | 相对于字符 `x` 的高度，通常为字体高度的一半                |
| ch       | css 3 引入，相对单位，通常是数字 `0` 的宽度                |
| rem      | css 3 引入，相对单位，相对于根元素 (即 html 元素) 字体尺寸 |
| vw       | css 3 引入，相对单位，视口宽度百分比                       |
| vh       | css 3 引入，相对单位，视口高度百分比                       |
| vmax     | css 3 引入，相对单位，相对于视口的宽度或高度中较大的那个   |
| vmin     | css 3 引入，相对单位，相对于视口的宽度或高度中较小的那个   |

角度单位：

- 1 turn (圈) = 360 deg (度) = 400 grad (梯度) = 6.283 rad (弧度)

时间单位：

- 1 s (秒) = 1000 ms (毫秒)

频率单位：

- 1 khz (千赫) = 1000 hz (赫兹)
