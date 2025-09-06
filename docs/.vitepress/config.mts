import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Learning Note',
  description: 'Learning Note',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '技术笔记', link: '/技术笔记/网络开发' },
      { text: '功能实现', link: '/功能实现/技术调研/优化性能' },
      { text: '开发记录', link: '/开发记录/浏览器兼容问题/ES Module 语法不支持' },
      { text: 'Other', link: '/other' },
    ],
    sidebar: {
      '/技术笔记/': [
        {
          text: '网络开发',
          collapsed: false,
          items: [
            { text: 'html', link: '/技术笔记/网络开发/html' },
            { text: 'css', link: '/技术笔记/网络开发/css' },
            { text: 'sass', link: '/技术笔记/网络开发/sass' },
            {
              text: 'js',
              link: '/技术笔记/网络开发/js/',
              collapsed: true,
              items: [
                { text: '事件循环', link: '/技术笔记/网络开发/js/事件循环' },
                { text: '严格模式', link: '/技术笔记/网络开发/js/严格模式' },
              ],
            },
            {
              text: 'ts',
              link: '/技术笔记/网络开发/ts/',
            },
            { text: 'angular', link: '/技术笔记/网络开发/angular' },
            { text: 'react', link: '/技术笔记/网络开发/react' },
            { text: 'vue', link: '/技术笔记/网络开发/vue' },
            {
              text: 'webgl',
              link: '/技术笔记/网络开发/webgl/',
              collapsed: true,
              items: [{ text: 'threeJs', link: '/技术笔记/网络开发/webgl/threeJs' }],
            },
            {
              text: 'webgis',
              link: '/技术笔记/网络开发/webgis/',
              collapsed: true,
              items: [{ text: 'cesium', link: '/技术笔记/网络开发/webgis/cesium' }],
            },
            { text: '浏览器', link: '/技术笔记/网络开发/浏览器' },
          ],
        },
        {
          text: '计算机科学与技术',
          collapsed: true,
          items: [
            { text: '数据结构', link: '/技术笔记/计算机科学与技术/数据结构' },
            { text: '算法', link: '/技术笔记/计算机科学与技术/算法' },
            { text: '网络', link: '/技术笔记/计算机科学与技术/网络' },
            { text: '软件工程', link: '/技术笔记/计算机科学与技术/软件工程' },
          ],
        },
        {
          text: '其他',
          collapsed: true,
          items: [{ text: 'window', link: '/技术笔记/其他/window' }],
        },
      ],
      '/功能实现/': [
        {
          text: 'CSS效果',
          collapsed: false,
          items: [
            { text: '元素居中', link: '/功能实现/CSS效果/元素居中' },
            { text: '元素两端对齐', link: '/功能实现/CSS效果/元素两端对齐' },
            { text: '元素环绕', link: '/功能实现/CSS效果/元素环绕' },
            {
              text: '滚动条效果',
              collapsed: true,
              items: [
                { text: '样式', link: '/功能实现/CSS效果/滚动条效果/样式' },
                { text: '吸附效果', link: '/功能实现/CSS效果/滚动条效果/吸附效果' },
              ],
            },
            { text: '文字字体设置', link: '/功能实现/CSS效果/文字字体设置' },
            { text: '文字随滚动变色', link: '/功能实现/CSS效果/文字随滚动变色' },
            { text: '文字颜色适应背景', link: '/功能实现/CSS效果/文字颜色适应背景' },
            { text: '段落文字省略效果', link: '/功能实现/CSS效果/段落文字省略效果' },
            { text: '背景颜色交融效果', link: '/功能实现/CSS效果/背景颜色交融效果' },
            { text: '边框圆角渐变', link: '/功能实现/CSS效果/边框圆角渐变' },
            { text: '可拖拽图标', link: '/功能实现/CSS效果/可拖拽图标' },
            { text: '好看的文字效果', link: '/功能实现/CSS效果/好看的文字效果' },
            { text: '好看的按钮效果', link: '功能实现/CSS效果/好看的按钮效果' },
            { text: '好看的背景效果', link: '功能实现/CSS效果/好看的背景效果' },
          ],
        },
        {
          text: 'JS功能',
          collapsed: false,
          items: [
            { text: 'img指定默认图片', link: '/功能实现/JS功能/img指定默认图片' },
            { text: '添加键盘事件', link: '/功能实现/JS功能/添加键盘事件' },
            { text: '下载文件', link: '/功能实现/JS功能/下载文件' },
          ],
        },
        {
          text: '移动端功能',
          collapsed: false,
          items: [
            { text: '调试', link: '/功能实现/移动端功能/调试' },
            { text: '内容显示在安全区域', link: '/功能实现/移动端功能/内容显示在安全区域' },
            { text: '内容横屏显示', link: '/功能实现/移动端功能/内容横屏显示' },
            { text: '实现屏幕键盘', link: '/功能实现/移动端功能/实现屏幕键盘' },
            { text: '禁用默认触控', link: '/功能实现/移动端功能/禁用默认触控' },
          ],
        },
        {
          text: '技术调研',
          collapsed: false,
          items: [
            { text: '优化性能', link: '/功能实现/技术调研/优化性能' },
            { text: '响应式布局方案', link: '/功能实现/技术调研/响应式布局方案' },
          ],
        },
      ],
      '/开发记录/': [
        {
          text: '浏览器兼容问题',
          collapsed: false,
          items: [
            { text: 'ES Module 语法不支持', link: '/开发记录/浏览器兼容问题/ES Module 语法不支持' },
          ],
        },
        {
          text: '移动端兼容问题',
          collapsed: false,
          items: [
            { text: '按钮异常高亮', link: '/开发记录/移动端兼容问题/按钮异常高亮' },
            { text: '滚动条无法正常滚动', link: '/开发记录/移动端兼容问题/滚动条无法正常滚动' },
            { text: '视频播放默认全屏', link: '/开发记录/移动端兼容问题/视频播放默认全屏' },
            { text: '视频无法自动播放', link: '/开发记录/移动端兼容问题/视频无法自动播放' },
            { text: '视频遮挡其他元素', link: '/开发记录/移动端兼容问题/视频遮挡其他元素' },
          ],
        },
      ],
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
  base: '/pages/learning-note',
  outDir: '../../../dist/learning-note',
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/public/icon/icon-200.png' }]],
  // vite: {
  //   server: {
  //     open: true,
  //   },
  // },
});
