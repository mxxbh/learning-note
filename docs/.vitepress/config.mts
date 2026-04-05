import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Learning Note",
  description: "Learning Note",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/index" },
      { text: "前端笔记", link: "/前端笔记/html" },
      { text: "功能开发", link: "/功能开发/页面功能/下载文件" },
      { text: "问题记录", link: "/问题记录/浏览器问题/低版本浏览器不支持Module语法" },
      { text: "Other", link: "/other" },
    ],
    sidebar: {
      "/前端笔记/": [
        {
          text: "基础",
          collapsed: false,
          items: [
            { text: "html", link: "/前端笔记/html" },
            { text: "css", link: "/前端笔记/css" },
            { text: "sass", link: "/前端笔记/sass" },
            {
              text: "js",
              link: "/前端笔记/js",
              collapsed: true,
              items: [
                { text: "事件循环", link: "/前端笔记/js-事件循环" },
                { text: "严格模式", link: "/前端笔记/js-严格模式" },
              ],
            },
            { text: "ts", link: "/前端笔记/ts" },
            { text: "angular", link: "/前端笔记/angular" },
            { text: "react", link: "/前端笔记/react" },
            { text: "vue", link: "/前端笔记/vue" },
            { text: "浏览器", link: "/前端笔记/浏览器" },
          ],
        },
        {
          text: "工程化",
          collapsed: false,
          link: "/前端笔记/工程化",
          items: [],
        },
        {
          text: "其他",
          collapsed: false,
          items: [
            {
              text: "webgl",
              link: "/前端笔记/webgl/",
              collapsed: true,
              items: [{ text: "threeJs", link: "/前端笔记/webgl/threeJs" }],
            },
            {
              text: "webgis",
              link: "/前端笔记/webgis/",
              collapsed: true,
              items: [{ text: "cesium", link: "/前端笔记/webgis/cesium" }],
            },
          ],
        },
      ],
      "/功能开发/": [
        {
          text: "页面功能",
          collapsed: false,
          items: [
            { text: "下载文件", link: "/功能开发/页面功能/下载文件" },
            { text: "添加默认图片", link: "/功能开发/页面功能/添加默认图片" },
            { text: "添加键盘事件", link: "/功能开发/页面功能/添加键盘事件" },
            { text: "实现响应式布局", link: "/功能开发/页面功能/实现响应式布局" },
          ],
        },
        {
          text: "页面样式",
          collapsed: false,
          items: [
            { text: "元素居中", link: "/功能开发/页面样式/元素居中" },
            { text: "元素两端对齐", link: "/功能开发/页面样式/元素两端对齐" },
            { text: "元素环绕", link: "/功能开发/页面样式/元素环绕" },
            { text: "文字字体设置", link: "/功能开发/页面样式/文字字体设置" },
            { text: "文字强调效果", link: "/功能开发/页面样式/文字强调效果" },
            { text: "文字颜色适应背景", link: "/功能开发/页面样式/文字颜色适应背景" },
            { text: "文字省略效果", link: "/功能开发/页面样式/文字省略效果" },
            { text: "图标拖拽", link: "/功能开发/页面样式/图标拖拽" },
            { text: "按钮效果", link: "/功能开发/页面样式/按钮效果" },
            { text: "背景效果", link: "/功能开发/页面样式/背景效果" },
            { text: "背景交融效果", link: "/功能开发/页面样式/背景交融效果" },
            { text: "边框渐变圆角", link: "/功能开发/页面样式/边框渐变圆角" },
            { text: "滚动条样式", link: "/功能开发/页面样式/滚动条样式" },
            { text: "滚动条吸附效果", link: "/功能开发/页面样式/滚动条吸附效果" },
          ],
        },
        {
          text: "页面性能",
          collapsed: false,
          items: [{ text: "优化性能", link: "/功能开发/页面性能/优化性能" }],
        },
      ],
      "/问题记录/": [
        {
          text: "浏览器问题",
          collapsed: false,
          items: [{ text: "低版本浏览器不支持Module语法", link: "/问题记录/浏览器问题/低版本浏览器不支持Module语法" }],
        },
        {
          text: "移动端问题",
          collapsed: false,
          items: [
            { text: "不方便调试", link: "/问题记录/移动端问题/不方便调试" },
            { text: "禁用默认触控", link: "/问题记录/移动端问题/禁用默认触控" },
            { text: "禁用默认按钮高亮效果", link: "/问题记录/移动端问题/禁用默认按钮高亮效果" },
            { text: "内容不能显示完全", link: "/问题记录/移动端问题/内容不能显示完全" },
            { text: "内容不能强制横屏", link: "/问题记录/移动端问题/内容不能强制横屏" },
            { text: "内容强制横屏时滚动条功能异常", link: "/问题记录/移动端问题/内容强制横屏时滚动条功能异常" },
            { text: "视频无法自动播放", link: "/问题记录/移动端问题/视频无法自动播放" },
            { text: "视频无法页面内播放", link: "/问题记录/移动端问题/视频无法页面内播放" },
            { text: "视频遮挡其他元素", link: "/问题记录/移动端问题/视频遮挡其他元素" },
          ],
        },
      ],
      "/其他/计算机科学与技术/": [
        { text: "数据结构", link: "/其他/计算机科学与技术/数据结构" },
        { text: "算法", link: "/其他/计算机科学与技术/算法" },
        { text: "软件工程", link: "/其他/计算机科学与技术/软件工程" },
        {
          text: "网络",
          link: "/其他/计算机科学与技术/网络",
          collapsed: true,
          items: [
            {
              text: "网络协议",
              collapsed: false,
              link: "/其他/计算机科学与技术/网络-传输层协议",
              items: [
                { text: "传输层协议", link: "/其他/计算机科学与技术/网络-传输层协议" },
                { text: "网络层协议", link: "/其他/计算机科学与技术/网络-网络层协议" },
                { text: "应用层协议", link: "/其他/计算机科学与技术/网络-应用层协议" },
              ],
            },
          ],
        },
      ],
      "/面试问答_前端/": [
        { text: "概述", link: "/面试问答_前端/概述" },
        { text: "JS", link: "/面试问答_前端/JS" },
      ],
    },
    socialLinks: [{ icon: "github", link: "https://github.com/mxxbh/learning-note" }],
  },
  base: "/learning-note",
  outDir: "./.vitepress/dist",
  lastUpdated: true,
  head: [["link", { rel: "icon", href: "/public/icon/icon-200.png" }]],
  // vite: {
  //   server: {
  //     open: true,
  //   },
  // },
});
