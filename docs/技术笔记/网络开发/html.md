# HTML

## 知识点

- 更改 `<input>` 元素 value 时，修改 property 不会影响其 Attribute，但更改 Attribute 会同时更改 property。
- 可通过 `<map>` 元素定义具有多个不同热点区域的跳转链接。
- 行内元素的 margin、padding、border 属性在水平方向上效果正常，在竖直方向上会渲染、会影响父元素对 overflow 的判断、不会影响布局效果。
- 给元素设置 tabindex 属性使其支持 focus 及 blur 事件。
- iframe 中存在激活状态，内嵌网页和外层网页只在激活时触发自身绑定的事件。

## 参考

- [MDN 参考](https://developer.mozilla.org/zh-CN/docs/Web/HTML)
- [菜鸟教程参考](https://www.runoob.com/html/html-tutorial.html)
- [W3school 参考](https://www.w3school.com.cn/tags/index.asp)
- [HTML 元素参考](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element)

## 标签

导入 css:

```html
<link rel="stylesheet" href="./xxx.css" type="text/css" />
```

添加网页图标:

```html
<link rel="icon" href="./asset/img/ICON-s.png" />
```

代码模板:

::: code-group

```html [html5 整体结构]
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title></title>
  </head>
  <body>
    <header>header</header>
    <nav>nav</nav>
    <main>
      <article>
        <section>section1</section>
        <section>section2</section>
      </article>
      <aside>aside</aside>
    </main>
    <footer>footer</footer>
  </body>
</html>
```

```html [html4 整体结构]
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!--
  HTML 4.01 Strict 
  <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
  
  HTML 4.01 Transitional
  <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

  HTML 4.01 Frameset
  <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">

  XHTML 1.0 Strict
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

  XHTML 1.0
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

  XHTML 1.0 Frameset
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">

  XHTML 1.1
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
-->
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="Content-Language" content="zh-cn" />
    <title></title>
  </head>
  <body></body>
</html>
```

```html [表单结构]
<form action="">
  <fieldset>
    <legend>表单</legend>
    <p>
      <label for="name">账号：</label>
      <input type="text" id="name" />
    </p>
    <p>
      <label for="pw">密码：</label>
      <input type="password" id="pw" required />
    </p>
    <input type="submit" value="登录" class="subButton" />
  </fieldset>
</form>
```

```html [表格结构]
<table border="1">
  <caption>
    标题
  </caption>
  <thead>
    <tr>
      <th>表格</th>
      <th>数据</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>小标题1</th>
      <td>数据</td>
    </tr>
  </tbody>
</table>
```

:::

## import-map

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script type="importmap">
      {
        "imports": {
          "example": "https://xxx.js",
          "lodash": "https://cdn.jsdelivr.net/npm/lodash@4.17.21/+esm"
        }
      }
    </script>
  </head>
  <body>
    <script type="module">
      import _ from 'lodash';
      console.log(_.now());
    </script>
  </body>
</html>
```

## 响应式设计

| 设备类型               | 宽度范围                |
| ---------------------- | ----------------------- |
| 大屏幕（大桌面显示器） | 1200px < width          |
| 中等屏幕（桌面显示器） | 992px < width <= 1200px |
| 小屏幕（平板）         | 768px < width <= 992px  |
| 超小屏幕（手机屏幕）   | width <= 768px          |

## Manifest

> [Manifest](https://developer.mozilla.org/zh-CN/docs/Web/Manifest)

## 字符实体

> [字符实体](https://www.runoob.com/html/html-entities.html)

## 文档语言

> [语言代码参考](https://www.w3school.com.cn/tags/html_ref_language_codes.asp)
