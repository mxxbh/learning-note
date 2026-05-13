# WEB 面试题

## 浏览器缓存机制是什么？

浏览器缓存通过存储资源副本减少网络请求，提升性能。分为强缓存和协商缓存。

### 强缓存
- 直接使用本地缓存，不发送请求。
- 控制字段：`Cache-Control`（优先，`max-age`、`no-cache`）、`Expires`（绝对时间）。
- 命中时状态码 200（from cache）。

### 协商缓存
- 发送请求到服务器验证资源是否更新。
- 控制字段：`ETag`（资源唯一标识）与 `If-None-Match`、`Last-Modified` 与 `If-Modified-Since`。
- 命中时状态码 304（Not Modified）。

### 刷新行为
- 普通刷新（F5）：协商缓存生效，强缓存可能失效。
- 强制刷新（Ctrl+F5）：忽略所有缓存，重新请求。

## 如何判断元素是否在可视区域中？

使用 `getBoundingClientRect()` 或 `IntersectionObserver` API。

### getBoundingClientRect()
```js
const rect = element.getBoundingClientRect();
const inView = rect.top >= 0 && rect.left >= 0 &&
               rect.bottom <= window.innerHeight &&
               rect.right <= window.innerWidth;
```

### IntersectionObserver
```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 元素进入可视区域
    }
  });
});
observer.observe(element);
```


## 防止重复提交如何实现？

### 前端
- 按钮禁用：提交后禁用按钮。
- 节流/防抖：限制提交频率。

### 后端
- 唯一标识：使用 token 或 session 校验。
- 数据库锁：防止并发插入。

## 懒加载如何实现？

### 图片懒加载
```html
<img data-src="image.jpg" alt="lazy" />
```
```js
const images = document.querySelectorAll('img[data-src]');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      observer.unobserve(img);
    }
  });
});
images.forEach(img => observer.observe(img));
```

### 组件懒加载
```js
const LazyComponent = () => import('./LazyComponent.vue');
```

## 首屏加载速度如何提高？

- 压缩资源：Gzip、图片压缩。
- CDN：分发静态资源。
- 懒加载：延迟加载非关键资源。
- 预加载：`<link rel="preload">`。
- SSR/SSG：服务端渲染。
- 代码分割：按需加载。

## 大文件上传过程的断点续传如何实现？

### 分片上传
将文件分割成小块，逐个上传。

### 断点续传
- 记录上传进度（localStorage 或服务器）。
- 失败时从断点继续上传。
- 使用 `File.slice()` 分片，`XMLHttpRequest` 或 `fetch` 上传。

### 示例
```js
const chunkSize = 1024 * 1024; // 1MB
for (let i = 0; i < file.size; i += chunkSize) {
  const chunk = file.slice(i, i + chunkSize);
  // 上传 chunk
}
```

## 单点登录如何实现？

### 基于 Cookie
- 用户登录后，设置共享 Cookie。
- 其他应用验证 Cookie。

### 基于 Token
- 登录后获取 JWT Token。
- 其他应用携带 Token 请求验证。

### OAuth
- 使用第三方认证服务（如 Google）。

## 多页面间的通信方式有哪些？

### 同域
- `localStorage` / `sessionStorage`：监听 `storage` 事件。
- `BroadcastChannel`：广播消息。
- `SharedWorker`：共享工作线程。

### 跨域
- `postMessage`：窗口间消息传递。
- CORS：服务器设置允许跨域。
- WebSocket：实时通信。

## 常见攻击方式有哪些？

### XSS（跨站脚本）
- 攻击：注入恶意脚本。
- 防御：输入过滤、输出编码、CSP（Content Security Policy）。

### CSRF（跨站请求伪造）
- 攻击：利用用户身份发送恶意请求。
- 防御：CSRF Token、SameSite Cookie、Referer 检查。

### SQL 注入
- 攻击：恶意 SQL 语句。
- 防御：预编译语句、参数化查询、输入验证。

## HTTP 常见状态码有哪些？

- 1xx：信息响应（100 Continue）。
- 2xx：成功（200 OK、201 Created）。
- 3xx：重定向（301 Moved Permanently、302 Found）。
- 4xx：客户端错误（400 Bad Request、401 Unauthorized、404 Not Found）。
- 5xx：服务器错误（500 Internal Server Error、502 Bad Gateway）。

## HTTP 与 HTTPS 的区别是什么？

- HTTP：明文传输，不安全。
- HTTPS：基于 SSL/TLS 加密，安全。
- 端口：HTTP 80，HTTPS 443。
- 证书：HTTPS 需要 CA 证书。
- 性能：HTTPS 加密开销略高，但现代优化（如 HTTP/2）差异小。

## HTTP1.0/1.1/2.0 的区别是什么？

- HTTP/1.0：无连接，每次请求建立新连接。
- HTTP/1.1：持久连接（Keep-Alive）、管道化、缓存控制。
- HTTP/2.0：多路复用、头部压缩、二进制协议、服务器推送。

## TCP 与 UDP 的区别是什么？

- TCP：面向连接、可靠、有序、流量控制。
- UDP：无连接、不保证可靠性、快速、低延迟。
- 适用：TCP 用于文件传输、HTTP；UDP 用于视频流、DNS。