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
      { text: "功能开发", link: "/功能开发/html" },
      { text: "问题记录", link: "/问题记录/html" },
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
      "/开发记录/": [
        {
          text: "基本功能",
          collapsed: false,
          items: [
            {
              text: "img指定默认图片",
              link: "/开发记录/基本功能/img指定默认图片",
            },
            { text: "添加键盘事件", link: "/开发记录/基本功能/添加键盘事件" },
            { text: "下载文件", link: "/开发记录/基本功能/下载文件" },
            { text: "优化性能", link: "/开发记录/基本功能/优化性能" },
            {
              text: "响应式布局方案",
              link: "/开发记录/基本功能/响应式布局方案",
            },
          ],
        },
        {
          text: "实现CSS效果",
          collapsed: false,
          items: [
            { text: "元素居中", link: "/开发记录/实现CSS效果/元素居中" },
            {
              text: "元素两端对齐",
              link: "/开发记录/实现CSS效果/元素两端对齐",
            },
            { text: "元素环绕", link: "/开发记录/实现CSS效果/元素环绕" },
            {
              text: "滚动条效果",
              collapsed: true,
              items: [
                { text: "样式", link: "/开发记录/实现CSS效果/滚动条效果/样式" },
                {
                  text: "吸附效果",
                  link: "/开发记录/实现CSS效果/滚动条效果/吸附效果",
                },
              ],
            },
            {
              text: "文字字体设置",
              link: "/开发记录/实现CSS效果/文字字体设置",
            },
            {
              text: "文字随滚动变色",
              link: "/开发记录/实现CSS效果/文字随滚动变色",
            },
            {
              text: "文字颜色适应背景",
              link: "/开发记录/实现CSS效果/文字颜色适应背景",
            },
            {
              text: "段落文字省略效果",
              link: "/开发记录/实现CSS效果/段落文字省略效果",
            },
            {
              text: "背景颜色交融效果",
              link: "/开发记录/实现CSS效果/背景颜色交融效果",
            },
            {
              text: "边框圆角渐变",
              link: "/开发记录/实现CSS效果/边框圆角渐变",
            },
            { text: "可拖拽图标", link: "/开发记录/实现CSS效果/可拖拽图标" },
            {
              text: "好看的文字效果",
              link: "/开发记录/实现CSS效果/好看的文字效果",
            },
            {
              text: "好看的按钮效果",
              link: "/开发记录/实现CSS效果/好看的按钮效果",
            },
            {
              text: "好看的背景效果",
              link: "/开发记录/实现CSS效果/好看的背景效果",
            },
          ],
        },
        {
          text: "浏览器问题",
          collapsed: false,
          items: [
            {
              text: "ES Module 语法不支持",
              link: "/开发记录/浏览器问题/ES Module 语法不支持",
            },
          ],
        },
        {
          text: "移动端问题",
          collapsed: false,
          items: [
            { text: "调试", link: "/开发记录/移动端问题/调试" },
            {
              text: "内容显示在安全区域",
              link: "/开发记录/移动端问题/内容显示在安全区域",
            },
            { text: "内容横屏显示", link: "/开发记录/移动端问题/内容横屏显示" },
            { text: "禁用默认触控", link: "/开发记录/移动端问题/禁用默认触控" },
            { text: "按钮异常高亮", link: "/开发记录/移动端问题/按钮异常高亮" },
            {
              text: "滚动条无法正常滚动",
              link: "/开发记录/移动端问题/滚动条无法正常滚动",
            },
            {
              text: "视频播放默认全屏",
              link: "/开发记录/移动端问题/视频播放默认全屏",
            },
            {
              text: "视频无法自动播放",
              link: "/开发记录/移动端问题/视频无法自动播放",
            },
            {
              text: "视频遮挡其他元素",
              link: "/开发记录/移动端问题/视频遮挡其他元素",
            },
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
