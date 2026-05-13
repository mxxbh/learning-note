# VUE 面试题

## 响应式原理是什么？

Vue 的响应式系统用于跟踪数据变化并触发视图更新。Vue 2 使用 `Object.defineProperty` 定义数据访问器，在读取时收集依赖，在写入时通知更新。Vue 3 使用 `Proxy` 来代理整个对象，能够拦截更多操作，并支持对象新增/删除属性、数组索引、`has`、`ownKeys` 等变化。

1. 创建响应式对象时，用 `Proxy` 包裹原始数据。
2. 读取属性时触发 `get`，收集依赖。
3. 修改属性时触发 `set`，触发依赖更新。
4. 删除属性时触发 `deleteProperty`，也可触发更新。

### Vue 3 选择 Proxy 的原因
Vue 2 的响应式系统基于 `Object.defineProperty`，因此存在一些本质限制：
- 无法检测对象属性的新增或删除，必须使用 `Vue.set` / `this.$set` 或 `Object.assign` 来手动补丁。
- 无法监听数组索引和 `length` 的变化，数组变更需要通过 `push`、`pop`、`splice` 等方法才能触发更新。
- 需要递归遍历对象，将每个属性逐层转换为 getter/setter，写法复杂且性能差。
- 只能拦截属性读取和写入，无法拦截 `has`、`ownKeys`、`deleteProperty` 等原生操作，响应式行为不够完整。

因此 Vue 3 改用 `Proxy`：
- 支持对对象属性的新增、删除、数组索引和长度变化的监听。
- 不需要递归遍历对象进行依赖收集，性能更好。
- 能拦截更多原生操作，语义更完整。
- 代码更简洁，可读性更好。

## 双向数据绑定的原理是什么？

双向数据绑定指的是数据变化更新视图，视图变化更新数据。
Vue 中常见的双向绑定是 `v-model`，它在组件内部本质上是：
- `value` 绑定数据到输入控件；
- 监听 `input`、`change` 等事件，将用户输入同步回数据。

```html
<input v-model="message" />

// 相当于
<input :value="message" @input="event => message = event.target.value" />
```

## 生命周期是什么？

Vue 组件生命周期是组件从创建、挂载、更新到销毁过程中的一系列阶段。每个阶段提供了对应的钩子函数，开发者可以在特定阶段执行自定义逻辑。

### 主要阶段
- `beforeCreate`：实例初始化、数据响应化前。
- `created`：实例已创建，数据响应已建立，但尚未挂载 DOM。
- `beforeMount`：模板编译完成，准备挂载。
- `mounted`：已挂载到真实 DOM，适合访问 DOM。
- `beforeUpdate`：响应式数据变化，DOM 更新前。
- `updated`：组件 DOM 已重新渲染。
- `beforeUnmount`（Vue 3）/`beforeDestroy`（Vue 2）：销毁前。
- `unmounted`（Vue 3）/`destroyed`（Vue 2）：销毁后，清理事件、定时器等。

### keep-alive 相关生命周期
- `activated`：组件被 `keep-alive` 缓存且激活时调用。
- `deactivated`：组件被 `keep-alive` 缓存但失活时调用。

使用 `<keep-alive>` 缓存组件时，组件不会走 `unmounted`/`destroyed`，而是进入缓存状态并触发 `deactivated`；重新显示时触发 `activated`。

## 单页应用是什么？

单页应用（SPA）是指整个应用在单个 HTML 页面内运行，通过路由机制动态加载和切换视图，而不是每次导航都加载完整页面。

- 页面不刷新，提升体验。
- 通过前端路由管理页面状态。
- 初次加载时通常加载一个应用壳，后续按需更新视图。

## slot 是什么？

`slot` 是 Vue 的插槽机制，用于实现组件内容分发，让父组件将内容传递给子组件的特定位置。

- 默认插槽：`<slot></slot>`。
- 具名插槽：`<slot name="header"></slot>`。
- 作用域插槽：子组件向父组件暴露数据，父组件使用插槽内容进行渲染。

### 示例
```html
<child>
  <template #header>Header 内容</template>
</child>
```

## nextTick 是什么？

`nextTick` 是 Vue 提供的异步 API，用于在 DOM 更新之后执行回调。因为 Vue 的 DOM 更新是异步批处理，数据改变后立即访问 DOM 可能仍是旧状态。

### 作用
- 等待当前渲染任务完成后执行逻辑。
- 常用于获取更新后的 DOM 尺寸、状态或执行第三方库操作。

### 示例
```js
this.count++;
this.$nextTick(() => {
  // DOM 已更新
});
```

## keep-alive 是什么？

`<keep-alive>` 是 Vue 的内置组件，用于缓存动态组件实例，避免组件切换时重复创建和销毁。

### 作用
- 保持组件状态和 DOM 状态。
- 提升性能，减少重复渲染。

### 示例
```html
<keep-alive>
  <component :is="viewName"></component>
</keep-alive>
```

## key 是什么?

`key` 是 Vue 在渲染列表或动态组件时用于标识节点的唯一值。它能帮助 Vue 更准确地复用和更新节点，避免错误的 DOM 重用。

### 作用
- 保证在列表更新时，节点之间的对应关系不会错乱。
- 用于强制重新渲染组件。

## v-show 和 v-if 的区别是什么？

- `v-if`：条件为 false 时直接不渲染元素，切换时会销毁/重建 DOM，适合频率较低的条件渲染。
- `v-show`：始终渲染元素，通过 CSS `display: none` 控制显示隐藏，适合频繁切换的场景。

### 区别
- 性能：`v-if` 首次条件不满足时不渲染，`v-show` 始终渲染。
- 适用：`v-if` 适合条件变化少；`v-show` 适合频繁显示/隐藏。

## DIFF 算法是什么？

DIFF 算法是 Vue 在虚拟 DOM 更新时比较新旧 VNode 树差异的过程。它通过最小化 DOM 操作，计算高效更新方案。

### Vue 的 diff 策略
- 同层比较，不跨层级移动节点。
- 先比较 `key`，再比较节点类型。
- 对于列表使用双端指针和 `key` 来优化最小移动。

## Tree-shaking 是什么？

Tree-shaking 是一种消除 JavaScript 中未使用代码的优化技术。通过静态分析模块依赖，构建工具可以剔除未引用的导出，减小最终包体积。

### Vue 相关
- Vue 3 的模块化设计更利于 Tree-shaking。
- 需要配合 ES 模块语法（`import`/`export`）和支持 Tree-shaking 的打包工具。

## 组件间数据传递的方式有哪些？

常见组件间通信方式：
- 父子组件：`props` 传递数据，`$emit` 或 `emit` 触发事件。
- 兄弟组件：通过共同父组件中转，或使用事件总线、状态管理。
- 祖孙组件：`provide` / `inject`。
- 跨层级/跨页面：Vuex、Pinia、全局状态管理、EventBus、localStorage、URL 参数等。
