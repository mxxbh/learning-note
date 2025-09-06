# image 元素指定默认图片

`<img>` 元素加载图片异常时，可以自动使用默认图片。

## 方式一

监听 `onerror` 事件。

```html
<img src="http://xxx.jpg" alt="图片" onerror="this.onerror = ''; this.src='http:\/\/default.jpg'" />
```
