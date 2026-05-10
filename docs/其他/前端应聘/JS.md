# JS 面试题

## 数据类型有哪些？

JavaScript 共有八种数据类型，分别是   `undefined`、`null`、`boolean`、`number`、`string`、`symbol`、`bigInt`、`object`。
其中 symbol 和 bigInt 是 ES6 中新增的数据类型，symbol 是创建后独一无二且不可变的数据类型，用于解决全局变量冲突问题，bigInt 是数字类型，可以表示任意精度格式的整数，可以安全地存储和操作大整数，即使这个数已经超出了 Number 能够表示的安全整数范围。

分为原始数据类型和引用数据类型（对象、数组和函数）。
- 原始类型的值直接存储在栈中。引用类型的值存储在堆中，且在栈中存放指向堆内存的地址。
- 原始类型赋值，是生成对应不同的地址的相同值。引用类型赋值，是将对象的内存地址赋值给另一个变量（两个变量指向堆内存中同一个对象）。

堆和栈的概念存在于数据结构和操作系统内存中，
- 数据结构中，栈中数据的存取方式为先进后出。堆是一个优先队列，是按优先级来进行排序的，优先级可以按照大小来规定。
- 操作系统中，内存被分为栈区和堆区。占据空间小、大小固定、频繁使用的数据会存放在栈区。占据空间大、大小不固定的数据存放在堆区。栈区内存由编译器自动分配释放，存放函数的参数值，局部变量的值等，操作方式类似于数据结构中的栈。堆区内存一般由开发着分配释放，若开发者不释放，程序结束时可能由垃圾回收机制回收。

## 数据类型检测方式有哪些？

1、typeof

```js
console.log(typeof 0); // number
console.log(typeof "0"); // string
console.log(typeof true); // boolean
console.log(typeof Symbol(0)); // symbol
console.log(typeof BigInt(0)); // bigint
console.log(typeof undefined); // undefined
console.log(typeof null); // object 注意！ [!code warning]
console.log(typeof []); // object 注意！ [!code warning]
console.log(typeof function () {}); // function 注意！ [!code warning]
console.log(typeof {}); // object
```

2、instanceof，用于判断构造函数的 prototype 属性是否出现在对象的原型链中，只能判断引用数据类型，不能判断基本数据类型。

```js
console.log([] instanceof Array); // true
console.log(function () {} instanceof Function); // true
console.log({} instanceof Object); // true
```

::: details instanceof 实现方式示例
```js
function myInstanceof(left, right) {
  let proto = Object.getPrototypeof(left);
  let prototype = right.prototype;

  while (true) {
    if (!proto) return false;
    if (proto === prototype) return true;
    proto = Object.getPrototypeof(proto);
  }
}
```
:::

3、Object.prototype.toString.call

```js
console.log(Object.prototype.toString.call(0)); // [object Number]
console.log(Object.prototype.toString.call("0")); // [object String]
console.log(Object.prototype.toString.call(true)); // [object Boolean]
console.log(Object.prototype.toString.call(undefined)); // [object Undefined]
console.log(Object.prototype.toString.call(Symbol(0))); // [object Symbol]
console.log(Object.prototype.toString.call(BigInt(0))); // [object BigInt]
console.log(Object.prototype.toString.call({})); // [object Object]
console.log(Object.prototype.toString.call([])); // [object Array]
console.log(Object.prototype.toString.call(null)); // [object Null]
console.log(Object.prototype.toString.call(function () {})); // [object Function]
```

## 字符串常用方法有哪些？

示例方法：
```js
"hello world".charAt(0); // "h"
"hello world".charCodeAt(0); // 104
"hello world".concat("!"); // "hello world!"
"hello world".indexOf("o"); // 4
"hello world".lastIndexOf("o"); // 7
"hello world".match(/o/g); // ["o", "o"]
"hello world".replace("o", "0"); // "hell0 world"
"hello world".search(/o/); // 4
"hello world".slice(3, 7); // "lo w"
"hello world".substr(3, 7); // "lo worl"
"hello world".substring(3, 7); // "lo w"
"hello world".split(" "); // ["hello", "world"]
"hello world".repeat(2); // "hello worldhello world"
"hello world".toLowerCase(); // "hello world"
"hello world".toUpperCase(); // "HELLO WORLD"
"   hello world   ".trim(); // "hello world"
"   hello world   ".trimStart(); // "hello world   "
"   hello world   ".trimEnd(); // "   hello world"
"hello world".padstart(15, "*"); // "****hello world"
"hello world".padEnd(15, "*"); // "hello world****"
"hello world".includes("o"); // true
"hello world".startsWith("h"); // true
"hello world".endsWith("d"); // true
```

## 数组常用方法有哪些？

构造函数：
```js
Array.from([1, 2, 3], (x) => x * x); // [1, 4, 9]
Array.of(1, 2, 3); // [1, 2, 3]
Array(); // []
Array(3); // [, , ,]
Array(3, 11, 8); // [3, 11, 8]
```

实例方法：
```js
[1, 2, 3, 4, 5].copyWithin(0, 3); // [4, 5, 3, 4, 5]
[1, 2, 3, 4, 5].fill(0); // [0, 0, 0, 0, 0]
[1, 2, 3].pop(); // 方法返回弹出的内容 3，数组的内容变为 [1, 2]
[1, 2].push(3); // 方法返回数组长度 3，数组的内容变为 [1, 2, 3]
[1, 2, 3].shift(); // 方法返回弹出的内容 1，数组的内容变为 [2, 3]
[1, 2, 3].unshift(0); // 方法返回数组长度 4，数组的内容变为 [0, 1, 2, 3]
[1，2].concat([3, 4]); // [1, 2, 3, 4]
[1, 2, 3].slice(0, 2); // [1, 2]
[1, 2, 3].splice(1, 1, 4, 5); // 方法返回被删除的元素 [2]，数组的内容变为 [1, 4, 5, 3]
[1, 2, 3].reverse(); // [3, 2, 1]
[1, 2, 3].sort((a, b) => b - a); // [3, 2, 1]
[1, 2, 3].forEach((x, i) => doString(x, i)); // 遍历
[1, 2, 3].map((x, i) => doString(x, i)); // 遍历
[1, 2, 3].entries(); // Array Iterator {0 => 1, 1 => 2, 2 => 3}
[1, 2, 3].keys(); // Array Iterator {0, 1, 2}
[1, 2, 3].values(); // Array Iterator {1, 2, 3}
[1, 2, 3].some((x) => x > 2); // true
[1, 2, 3].every((x) => x > 0); // true
[1, 2, NaN].includes(NaN); // true
[1, 2, 3].find((x) => x > 1); // 2
[1, 2, 3].findIndex((x) => x > 1); // 1
[1, 2, 3, 2].indexOf(2); // 1
[1, 2, 3, 2].lastIndexOf(2); // 3
[1, 2, 3].filter((x) => x > 1); // [2, 3]
[1, 2, 3].reduce((acc, x) => acc + x, 0); // 6
[1, 2, 3].join("-"); // "1-2-3"
[2, 3, 4].flatMap((x) => [x, x * 2]); // [2, 4, 3, 6, 4, 8]
[1, [2], [[3]]].flat(2); // [1, 2, 3]
```

:::tip
只有排序方法 (sort、reverse) 和增删元素的方法（push、pop、shift、unshift、splice）会改变原数组，其他方法不会改变原数组，只会返回一个新的数组。
:::

## Promise 常用方法有哪些？

构造函数：[Promise.all()][2026041901]、[Promise.race()][2026041902]、[Promise.allSettled()][2026041903]
```js
Promise.all([p1, p2, p3]); // 列表所有项均 fulfilled 时才会 fulfilled，若有一项达到 rejected 就会 rejected
Promise.allSettled([p1, p2, p3]); // 列表所有项均完成（fulfilled 或 rejected）时才会 fulfilled
Promise.any([p1, p2, p3]); // 列表任一项 fulfilled 就会 fulfilled，所有项 rejected 时才会 rejected
Promise.race([p1, p2, p3]); // 列表第一项完成时就会完成，第一项 fulfilled 就会 fulfilled，第一项 rejected 就会 rejected
Promise.resolve(value); // 返回一个以给定值解析后的 Promise 对象
Promise.reject(reason); // 返回一个以给定理由拒绝后的 Promise 对象
```

[2026041901]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
[2026041902]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/race
[2026041903]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled

## var、let、const 的区别？

- 变量提升/暂时性死区。var 存在变量提升，即变量可以在声明之前调用（值为 undefined）。let 和 const 不存在变量提升，即所声明的变量一定要在声明后使用，否则报错。
- 块级作用域。var 不存在块级作用域，let 和 const 存在块级作用域。
- 重复声明。var 允许重复声明变量，let 和 const 在同一作用域不允许重复声明变量。
- 修改声明的变量。var 和 let 可以，const 声明一个只读的常量。一旦声明，常量的值就不能改变。
- 使用。尽量使用 const，其他情况下大多使用 let，避免使用 var。

## null、undefined 的区别？

- undefined 和 null 都是基本数据类型（两种基本数据类型）。
- undefined 不是一个保留字，可以使用 undefined 来作为一个变量名，但是这样做是非常危险的。可以通过一些方法获得安全的 undefined 值，比如 void 0。
- 使用 typeof 进行判断时，null 类型会返回 "object"。
- 使用双等号进行比较时会返回 true，使用三个等号会返回 false。

## ==、===、Object.is 的区别？

使用双等号 `==` 进行相等判断时，如果两边的类型不一致，则会进行强制类型转化后再进行比较。
使用三等号 `===` 进行相等判断时，如果两边的类型不一致时，不会做强制类型准换，直接返回 false。
使用 `Object.is` 来进行相等判断时，一般情况下和三等号的判断相同，它处理了一些特殊的情况，比如-0 和 +0 不再相等，两个 NaN 是相等的。

## for/in、for/of 的区别？

for/of 是 ES6 新增的遍历方式，允许遍历含有 iterator 接口的数据结构（数组、对象等）。

区别：
- for/in 遍历获取的是对象的键名，for/of 获取的是对象的键值。
- for/in 会遍历对象的整个原型链，性能非常差，而 for/of 只遍历当前对象。
- 对于数组的遍历，for/in 会返回数组中包括原型链上的所有可枚举属性，for/of 只返回数组的下标对应的属性值。

总结：
for/in 主要是用于遍历对象，不适用于遍历数组。
for/of 可以用来遍历数组、类数组对象、字符串、Set、Map、Generator 对象。

## ajax、fetch、axios 的区别？

AJAX（Asynchronous JavaScript and XML），无需重新加载整个网页的情况下，能够更新部分网页。
使用 XMLHttpRequest 对象来实现，但配置和调用方式混乱，且基于事件的异步模型不友好。

fetch，号称是 ajax 的替代品，是在 ES6 出现的，使用了 ES6 中的 promise。
fetch 不是 ajax 的进一步封装，而是原生 js，没有使用 XMLHttpRequest 对象。

fetch 的优点：
- 语法简洁，更加语义化，脱离了 XHR，是 ES 规范里新的实现方式。
- 基于标准 Promise 实现，支持 async/await。
- 更加底层，提供的 API 丰富（request, response）。

fetch 的缺点：
- fetch 只在网络请求报错执行 reject，把状态码 400、500 的请求都当做成功的请求。
- fetch 默认不会带 cookie，需要添加配置项 `fetch(url, {credentials: 'include'})`
- fetch 没有办法原生监测请求的进度，而 XHR 可以。

Axios 是一种基于 Promise 封装的 HTTP 客户端。其浏览器端发起 XMLHttpRequests 请求，node 端发起 http 请求。
支持 Promise API，支持监听或转化请求和结果，支持取消请求，能自动转换 json 数据，其客户端支持抵御 XSRF 攻击。

## 箭头函数是什么？

- 箭头函数是 ES6 引入的简化函数写法。
- 箭头函数自身没有 this，它的 this 是定义时继承自外层最近的非箭头函数作用域的 this，并且不可被修改（不能通过 bind/call/apply 方法修改）。
- 没有 arguments 参数集合，需要获取全部参数只能用剩余运算符 ...args。
- 不能作为构造函数，无法使用 new 关键字创建实例，会直接报错。
- 没有 prototype 原型。
- 不能使用 yield 关键字，无法作为生成器函数。

## new 是什么？

new 操作符的实现步骤如下：
1. 创建一个对象
2. 将构造函数的作用域赋给新对象（也就是将对象的__proto__属性指向构造函数的prototype属性）
3. 执行构造函数中的代码，构造函数中的this指向该对象（也就是为这个对象添加属性和方法）
4. 如果构造函数返回引用类型（对象/数组/函数），返回该值；否则返回第一步创建的新对象。

new 一个箭头函数的会报错。箭头函数是 ES6 中的提出来的，它没有 prototype，没有自己的 this 指向，更不可以使用 arguments，上面的第 2、3 步没有办法执行,所以不能 new 一个箭头函数。

## this 是什么？

this 指向调用这个方法的对象。

在实际开发中，this 的指向可以通过四种调用模式来判断。
第一种是函数调用模式，一个函数不是对象的属性，直接作为函数来调用时，this 指向全局对象。
第二种是方法调用模式，一个函数作为一个对象的方法来调用时，this 指向这个对象。
第三种是构造器调用模式，一个函数用 new 调用时，函数执行前会新创建一个对象，this 指向这个新创建的对象。
第四种是 apply/call/bind 调用模式，这三个方法都可以显示的指定函数的 this 指向。
这个函数的 this 指向除了使用 new 时会被改变，其他情况下都不会改变。

四种方式的优先级从高到低依次是构造器调用模式、apply/call/bind 调用模式、方法调用模式、函数调用模式。

apply 和 call 方法的作用一模一样，区别仅在于传入参数的形式的不同。
apply 方法接收两个参数，一个是 this 绑定的对象，一个是参数数组。
call 方法接收的参数，第一个是 this 绑定的对象，后面的其余参数是传入函数执行的参数。
 
bind 方法接收一个对象参数，返回 this 绑定了传入对象的新函数。

## Generator 是什么？

Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同。

```js
// 定义 generator 函数
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

// 使用 generator 函数
const hw = helloWorldGenerator();
hw.next(); // { value: 'hello', done: false }
hw.next(); // { value: 'world', done: false }
hw.next(); // { value: 'ending', done: true }
hw.next(); // { value: undefined, done: true }
```

使用生成器函数给对象提供 for/of 遍历方式：

```js
function* objectEntries(obj) {
  const propKeys = Reflect.ownKeys(obj); // 返回对象所有的属性，不管属性是否可枚举，包括 Symbol
  for (const propKey of propKeys) {
    yield [propKey, obj[propKey]];
  }
}
const jane = { first: "Jane", last: "Doe" };
for (const [key, value] of objectEntries(jane)) {
  console.log(`${key}: ${value}`);
}
```

## Proxy 是什么？

Proxy 是 ES6 中新增的功能，可以用来自定义对象中的操作。
Vue3.0 中使用 Proxy 代替 Object.defineProperty 来实现数据响应式。
使用 Object.defineProperty 实现数据响应式，需要一层层递归为每个属性添加代理，并且新增的属性不能监听到。
使用 Proxy 则可以一次添加对对象的代理，完美监听所有属性的数据变化。

## Decorator 是什么？
装饰器是 ES 提案（目前还不是正式标准）的语法糖，本质是高阶函数，能够在不修改原代码的基础上，对类、类方法、属性进行功能扩展与增强。

- 属于语法糖，依赖编译转译（浏览器原生不支持），需要 Babel + @babel/plugin-proposal-decorators 插件编译。
- 不修改原代码，只做功能增强，无侵入式扩展。
- 可以叠加多个装饰器，多个装饰器由下至上执行。
- 底层基于 Object.defineProperty 属性描述符实现。

## weakMap、weakSet 是什么？
Map，键值对，键可以是任意类型。Set，不重复值集合，成员任意类型。WeakMap、WeakSet 是它们的弱引用版本。

弱引用区别于强引用。强引用是指，只要对象数据被强引用，垃圾回收器就不会回收，这样容易造成内存泄漏。而弱引用的作用是，外部所有强引用消失后，对象直接被回收，集合里的数据自动清空。

弱引用数据结构不支持遍历，是因为弱引用的对象随时可能被回收，遍历结果可能变化，引擎无法稳定遍历，所以直接限制遍历 API。

### WeakMap
WeakMap 是键值对集合，键只能是对象，弱引用。可用于存储对象的额外附属数据/元数据，缓存 DOM 元素数据/对象私有属性，并防止内存泄漏。

- 键（key）只能是对象，不能是基本数据类型。
- 键所指向的对象，如果没有其他地方引用，会被 JS 垃圾回收（GC）自动回收。一旦对象被回收，WeakMap 里对应的键值对自动消失。
- 不可遍历，无法获取长度（没有 size 属性），只有 4 个方法：`get()`、`set()`、`has()`、`delete()`。

### WeakSet
WeakSet 是不重复集合，成员只能是对象，弱引用。可用于判断某个对象是否存在，存储一组不重复、临时的对象引用，标记对象，并防止内存泄漏。

- 成员只能是对象，不能是基本数据类型。
- 成员对象无其他引用时，被 GC 回收，集合内自动清除。
- 不可遍历，无法获取元素个数，只有 3 个方法：`add()`、`has()`、`delete()`。

## DOM 是什么？

DOM 指的是文档对象模型，是把文档当做一个对象，这个对象主要定义了处理网页内容的方法和接口。

## BOM 是什么？

BOM 指的是浏览器对象模型，是把浏览器当做一个对象，这个对象主要定义了与浏览器进行交互的方法和接口。

BOM 的核心是 window，而 window 对象具有双重角色，它既是通过 js 访问浏览器窗口的接口，又是全局对象。
在网页中定义的任何对象、变量、函数都会作为全局对象的属性或者方法存在。
window 对象含有 location、navigator、screen、document 等子对象。

## 对象创建的方式有哪些?

一般使用字面量的形式直接创建对象，但是这种创建方式对于创建大量相似对象的时候，会产生大量的重复代码。

js 和一般的面向对象语言不同，在 ES6 之前没有类的概念。
但可以使用函数来进行模拟，从而产生出可复用的对象创建方式，常见的有以下几种：
- 工厂模式。主要工作原理是用函数来封装创建对象的细节，从而通过调用函数来达到复用的目的。但只是简单的复用代码，没有建立起对象和类型间的关系。
- 构造函数模式。js 中只要一个函数是通过 new 来调用，就可以把它称为构造函数。执行构造函数首先会创建一个对象，然后将对象的原型指向构造函数的 prototype 属性，然后将执行上下文中的 this 指向这个对象，最后再执行整个函数，如果返回值不是对象，则返回新建的对象。因为 this 的值指向了新建的对象，因此可以使用 this 给对象赋值。这样所创建的对象和构造函数建立起了联系，可以通过原型来识别对象的类型。
- 原型模式。每个函数都有一个 prototype 属性，它包含了通过构造函数创建的所有实例都能共享的属性和方法。因此可以使用原型对象来添加公用属性和方法，从而实现代码的复用。这种方式没有办法通过传入参数来初始化值，且如果存在引用类型如 Array 这样的属性，那么所有实例将共享一个对象，一个实例对引用类型值进行修改会影响所有的实例。
- 组合使用构造函数模式和原型模式。这是创建自定义类型的最常见方式，通过构造函数来初始化对象的属性，通过原型对象来实现函数方法的复用。
- 动态原型模式。这种模式将原型方法赋值的创建过程移动到了构造函数的内部，通过对属性是否存在的判断，可以实现仅在第一次调用函数时对原型对象赋值一次的效果。这一种方式很好地对上面的混合模式进行了封装。
- 寄生构造函数模式。这种模式和工厂模式的实现基本相同，它主要基于一个已有的类型，在实例化时对实例化的对象进行扩展。这样既不用修改原来的构造函数，也能够扩展对象。它和工厂模式一样，无法实现对象的识别。

## 对象继承的方式有哪些?

### 原型链继承

示例：
```js
// 父类
function Parent() {}
// 子类
function Child() {}
// 核心：原型链继承
Child.prototype = new Parent();
Child.prototype.constructor = Child;
```

缺点：
- 引用类型属性所有实例共享，改一个全变。
- 子类无法向父类传参。

### 构造函数继承

示例：
```js
function Parent(name) {
  this.name = name;
}
Parent.prototype.say = function () {
  console.log("父类方法");
};

function Child(name) {
  // 核心：借用构造函数
  Parent.call(this, name);
}

const c1 = new Child("子类");
console.log(c1.name);
```

优点：
- 不存在引用共享的问题。
- 支持传参。

缺点：
- 继承不到父类原型上的方法。

### 组合继承（原型链 + 构造函数）
组合继承是结合上述两种方式，通过借用构造函数实现属性的继承，通过将子类型的原型设置为父类型的实例来实现方法的继承。

示例：
```js
function Parent(name) {
  this.name = name;
  this.arr = [1, 2, 3];
}
Parent.prototype.say = function () {
  console.log("父类原型方法");
};

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}
Child.prototype = new Parent();
Child.prototype.constructor = Child;
```

缺点：
- 父类构造函数执行了两次。

### 原型式继承
基于已有的对象来创建新的对象，是向函数中传入一个对象并返回一个以这个对象为原型的对象。
这种方式不是为了创造一种新的类型，只是对某个对象实现一种简单继承，ES5 中定义的 `Object.create()` 方法就是原型式继承的实现。

示例：
```js
const parentObj = {
  name: "父对象",
  arr: [1, 2, 3],
  say: function () {
    console.log("原型式继承");
  }
};

const childObj = Object.create(parentObj);
```

缺点：
- 引用属性依旧共享，适合单纯对象浅继承

### 寄生式继承
封装一个函数，内部创建对象、增强方法再返回。

示例：
```js
function createChild(obj) {
  const o = Object.create(obj);
  o.run = function () {
    console.log("子类独有方法");
  };
  return o;
}

const parent = { name: "父" };
const child = createChild(parent);
console.log(child.name);
child.run();
```

缺点：
- 函数复用差，每个实例都创建一遍方法。

### 寄生组合继承
不用 new Parent() 污染子类原型，用空函数中转。
只执行一次父类构造，无属性冗余，ES5 最优继承。

示例：
```js
function Parent(name) {
  this.name = name;
}
Parent.prototype.say = function () {
  console.log("父类方法");
};

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

// 核心：空函数中转
function Fn() {}
Fn.prototype = Parent.prototype;
Child.prototype = new Fn();
Child.prototype.constructor = Child;

const c1 = new Child("小红", 20);
c1.say();
console.log(c1.name, c1.age);
```

### ES6 class 继承（语法糖，底层还是寄生组合）

示例：
```js
class Parent {
  constructor(name) {
    this.name = name;
  }
  say() {
    console.log("ES6 父类方法");
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name); // 必须先调用 super
    this.age = age;
  }
  run() {
    console.log("子类独有方法");
  }
}

const c1 = new Child("Child", 22);
c1.say();
c1.run();
```

## 类型转换机制是什么？

- 显示转换，方法包括：`Number()`、`parseInt()`、`String()`、`Boolean()`。
- 隐式转换，常见发生场景：
  - `if`、`while` 语句
  - 比较运算 `==`、`!=`、`>`、`<`
  - 算术运算 `+`、`-`、`*`、`/`、`%`
  - 取反 `!`
- 在 `+` 运算中，存在字符串时会转换成字符串进行拼接，不存在时会转换为数值进行相加。
- 在 `==` 判断中，
  - null == undefined → true（仅此一对特殊）
  - 数字 vs 字符串 → 字符串转数字
  - 布尔值 → 先转数字
  - 对象 vs 基本类型 → 对象转原始值

常见转换：
| 原始值    | 转换为布尔值 | 转换为数值                             | 转换为字符串 |
| --------- | ------------ | -------------------------------------- | ------------ |
| true      | true         | 1                                      | 'true'       |
| false     | false        | 0                                      | 'false'      |
| 0         | false        | 0                                      | '0'          |
| ''        | false        | 0                                      | ''           |
| null      | false        | 0  <Badge type="warning">注意</Badge>  | 'null'       |
| undefined | false        | NaN <Badge type="warning">注意</Badge> | 'undefined'  |
| NaN       | false        | NaN                                    | 'NaN'        |


## 作用域、作用域链是什么？

全局作用域：
最外层函数和最外层函数外面定义的变量拥有全局作用域，所有未定义直接赋值的变量自动声明为全局作用域，所有 window 对象的属性拥有全局作用域。
全局作用域有很大的弊端，过多的全局作用域变量会污染全局命名空间，容易引起命名冲突。

函数作用域：
声明在函数内部的变量拥有函数作用域，一般只有固定的代码片段可以访问到。
作用域是分层的，内层作用域可以访问外层作用域，反之不行。

块级作用域：
使用 ES6 中新增的 let 和 const 指令可以声明块级作用域，块级作用域可以在函数中创建，也可以在一个代码块中的创建（由{ }包裹的代码片段）。
let 和 const 声明的变量不会有变量提升，也不可以重复声明，在循环中比较适合绑定块级作用域，这样就可以把声明的计数器变量限制在循环内部。

作用域链：
在当前作用域中查找所需变量，但该作用域没有这个变量，那这个变量就是自由变量。
如果在当前作用域找不到该变量，就会去父级作用域查找，依次向上级作用域查找，直到访问到 window 对象，这一层层的关系就是作用域链。
作用域链的作用是保证对执行环境有权访问的所有变量和函数的有序访问，通过作用域链，可以访问到外层环境的变量和函数。
作用域链的本质上是一个指向变量对象的指针列表。变量对象是一个包含了执行环境中所有变量和函数的对象。
作用域链的前端始终都是当前执行上下文的变量对象。全局执行上下文的变量对象（也就是全局对象）始终是作用域链的最后一个对象。

## 闭包是什么？

本质就是函数嵌套函数，内部函数引用了外部函数的变量或参数。
外部函数执行完毕后，被引用的变量不会被垃圾回收。

运用场景：
- 私有化变量：避免全局污染，创建私有变量
- 保存状态：像上面的计数器，持久保存数据
- 函数柯里化：实现参数复用
- 模块化开发：早期 JS 模块化的核心方案

缺点：
- 过度使用会导致内存泄漏

## 执行栈、执行上下文是什么？

- 执行上下文：代码运行时的环境容器（存变量、this、作用域链）。
- 执行栈（调用栈）：用来顺序管理所有执行上下文的栈结构，后进先出。

执行上下文类型：
- 全局执行上下文：默认创建，包含全局对象和全局作用域。
- 函数执行上下文：每次调用函数时创建，包含函数的参数。
- Eval 执行上下文：eval 内部代码运行产生。

## 深拷贝、浅拷贝是什么？

- 浅拷贝：只拷贝表层，引用类型只拷贝地址，新旧对象共享堆内存，改一个互相影响。
- 深拷贝：层层完整拷贝，开辟全新堆内存，新旧对象完全独立，互不影响。

常见浅拷贝写法：
```js
let newObj1 = {...oldObj}; // 对象扩展运算符

let newObj2 = Object.assign({}, oldObj); // Object.assign()
```

常见深拷贝写法：
```js
/**
 * 使用 JSON.parse 方法。
 * 适用于纯对象，无法复制函数、正则、Date、undefined、undefined、Symbol
 * 无法处理循环引用
 */
let newObj1 = JSON.parse(JSON.stringify(oldObj));

/**
 * lodash 库的 cloneDeep 方法。
 */
let newObj2 = _.cloneDeep(oldObj);

/**
 * window 对象的 structuredClone 方法。
 * 适用于纯对象，无法复制函数、undefined、Symbol
 */
let newObj3 = structuredClone(oldObj);
```

## 原型、原型链是什么？

构造函数的内部都有一个 prototype 属性，指向一个对象，这个对象包含了可以由该构造函数的所有实例共享的属性和方法。
当使用构造函数新建一个对象后，在这个对象的内部将包含一个指针，这个指针指向构造函数的 prototype 属性对应的值，在 ES5 中这个指针被称为对象的原型。
一般来说不应该能够获取到这个值，但现在浏览器中都实现了 `__proto__` 属性来访问这个属性，但是最好不要使用这个属性，因为它不是规范中规定的。
ES5 中新增了一个 `Object.getPrototypeOf` 方法，可以通过这个方法来获取对象的原型。

访问对象属性时，如果对象内部不存在这个属性，那它就会去它的原型对象里找这个属性，这个原型对象又会有自己的原型，于是就这样一直找下去，也就是原型链。
原型链的尽头一般都是 `Object.prototype`，这也是新建的对象为什么能够使用 `toString` 等方法。

JS 对象是通过引用来传递的，创建的每个新对象实体中并没有一份属于自己的原型副本。修改原型时，与之相关的对象都会继承这一改变。

原型链的终点是 `Object.prototype.__proto__`，即 `null`。

## 模块化是什么？

模块（Module），是能够单独命名并独立地完成一定功能的程序语句的集合。
模块化的好处：代码抽象、代码封装、代码复用、依赖管理。
模块化的类型：AMD、CMD、CommonJS、ES6 Module。

### AMD（Asynchronous ModuleDefinition，异步模块定义）

采用异步方式加载模块。代表库：requireJS。

- 异步加载模块，不会阻塞页面渲染。
- 提前执行：依赖模块先全部加载完、全部执行，再执行主模块。
- 依赖前置：写代码时就要把所有依赖提前声明在数组里。
- 适合浏览器，但是语法偏繁琐。

### CMD

浏览器规范，兼顾 AMD 异步 + CommonJS 书写风格，后期逐渐被淘汰。代表库：SeaJS。

- 异步加载。
- 延迟执行：加载完模块先不执行，用到才执行。
- 依赖就近：依赖写在代码内部，哪里用哪里引入，书写更自然。

### CommonJs

Node.js 原生模块规范，浏览器不原生支持。

- 所有代码都运行在模块作用域，不会污染全局作用域。
- 同步加载的，运行时加载（代码运行到才加载模块）。
- 模块在首次执行后就会缓存，再次加载只返回缓存结果，如果想要再次执行，可清除缓存。
- require 返回的值是被输出的值的拷贝，模块内部的变化也不会影响这个值。
- 浏览器同步加载会阻塞渲染，不适合前端浏览器。

```js
// 导出
module.exports = {}
exports.xxx = xxx
// 导入
const xxx = require('xxx')
```

### ES6 Moudle

ES6 在语言标准的层面上实现了模块功能，支持浏览器、Node，是目前前端、工程化（Webpack/Vite）的通用标准。

- 编译时加载（静态加载），静态解析，性能更好，支持 Tree Shaking。
- 导出的是值的引用（动态绑定），模块内部值变化，外部导入同步更新。
- 多次重复执行同样的导入，只会执行一次。
- 使用 `import()` 方法进行动态加载。
- 不允许对模块导入的变量进行赋值（CommonJS 可以），但导入的对象的属性可被修改（不推荐这么做）。

```js
// A 文件中定义导出
export function funcA() {
  return "hello world A";
}

// B 文件中定义导出
export default function () {
  return "hello world B";
}

// C 文件中导入 A、B 文件的方法
import * as moduleA from './A.js';
import moduleB from './B.js';
moduleA.funcA(); // 输出 hello world A
moduleB(); // 输出 hello world B
```

## 尾递归是什么？

尾递归/尾调用是指在函数的最后一步再调用一次函数。

代码执行是基于执行栈的，当在一个函数里调用函数时，会保留当前的执行上下文，再新建另外一个执行上下文加入栈中。
使用尾调用，可以不必再保留当前的执行上下文，从而节省了内存，这就是尾调用优化。

## 高阶函数是什么？

接收函数作为参数，或者返回一个函数的函数，就叫高阶函数。

作用：
- 抽象通用逻辑，复用代码
- 封装逻辑，专注业务
- 实现防抖、节流、柯里化、闭包
- 数组遍历加工简化代码

## 防抖、节流是什么？

- 防抖（debounce），触发后延迟执行，期间再次触发，重新计时，只认最后一次。
- 节流（throttle），固定时间内，只能执行一次，到点才放行，稀释频率。

## 事件模型是什么？

::: info
- `event.stopPropagation()` 可以阻止事件在捕获或冒泡阶段的传播。在父元素捕获阶段事件回调中调用，事件将不再向下传递。在子元素冒泡阶段事件回调中调用，事件将不再向上冒泡。
- `event.stopImmediatePropagation()` 可以阻止事件冒泡和同一元素上其他事件的执行。
:::

### 原始事件模型（DOM0级）

可以在HTML代码中直接绑定或通过JS代码绑定。
```html
<input type="button" onclick="func()">
```
```js
dom.onclick = (e) => console.log(e)
```

缺点：
- 只能冒泡，不能捕获。
- 同一事件只能绑定一个回调。

### 标准事件模型（DOM2级）

通过 `addEventListener()` 方法进行绑定。

分为捕获、目标、冒泡三个阶段：
- 捕获阶段：从 window → 文档 → 父元素 → 目标元素 从上往下抓
- 目标阶段：到达当前点击的元素本身
- 冒泡阶段：从目标元素 → 父元素 → 文档 → window 从下往上往上冒

## 事件代理是什么？

利用事件冒泡，把子元素事件绑定到父元素上。

好处：
- 减少事件绑定，性能更好
- 动态绑定，减少重复工作

## 事件循环机制是什么？

先执行同步 → 再清空所有微任务 → 再执行一个宏任务 → 循环往复。

> 参考：[js-事件循环](/前端笔记/js-事件循环)

## 正则表达式是什么？

正则表达式是用来匹配、检索、替换、校验字符串的一套规则语法。
JS 里正则是内置对象，可以自定义匹配模式，用来精准控制字符、位数、格式、特殊字符等。

> 参考：[js-正则表达式](/前端笔记/js-正则表达式)

## 函数式编程是什么？

函数式编程是一种编程范式，核心思想是：把函数当作一等公民，用纯函数、不可变数据、组合函数来写代码，尽量避免副作用。

特点：
- 纯函数，相同输入得到相同输出，没有副作用，不依赖外部状态。
- 不可变数据，数据一旦创建就不能修改，修改数据只能创建新数据（深拷贝）。
- 组合函数/柯里化，通过组合小函数来构建复杂功能，提升代码复用性和可读性。
- 函数作为一等公民，函数可以作为参数传递给其他函数，也可以作为其他函数的返回值。

优点：
- 代码更简洁、易读、易测试。
- 更容易实现并行计算，提升性能。

缺点：
- 学习曲线较陡，初学者可能不太适应。
- 过度使用函数式编程可能导致性能问题，尤其是在大量数据处理时。

## 异步编程的方式有哪些?

### 回调函数 & 事件监听
- 这种方式有一个缺点，多个回调函数嵌套的时候会造成回调函数地狱，代码耦合度太高，不利于代码维护。

### promise
- promise 是一个对象，可以获取异步操作的消息，将嵌套的回调函数转换为链式调用，避免了地狱回调，比传统的回调函数和事件更合理、更强大，但有时会造成多个 then 的链式调用，也可能造成代码语义不明确。
- Promise 的实例有三个状态：Pending（进行中）、Resolved（已完成）、Rejected（已拒绝）。当把一件事情交给 promise 时，它的状态就是 Pending，任务完成后状态就变成 Resolved，任务失败就变成 Rejected。一旦从进行状态变成为其他状态就不能再更改。
- Promise 无法取消，一旦新建它就会立即执行，无法中途取消。如果不设置回调函数，Promise 内部抛出的错误，不会反应到外部。处于 pending 状态时，无法得知目前进展多少（刚刚开始还是即将完成）。

### generator
- generator 可以在函数的执行过程中，将函数的执行权转移出去，在函数外部还可以将执行权转移回来。
- 当遇到异步函数执行的时候，将函数执行权转移出去，当异步函数执行完毕时再将执行权给转移回来。因此在 generator 内部对于异步操作的方式，可以以同步的顺序来书写。
- 使用这种方式需要考虑何时将函数的控制权转移回来。

### async/await
- async 函数是 generator 和 promise 实现的一个自动执行的语法糖，内部自带执行器，当函数内部执行到一个 await 语句的时候（await 也只能在 async 函数内部使用），如果语句返回一个 promise 对象，那么函数将会等待 promise 对象的状态变为 resolve 后再继续向下执行。可以将异步逻辑转化为同步顺序来书写。
- async 函数会返回一个 Promise 对象。未设置返回值时，会返回 `Promise.resolve(undefined)`。

### 处理异步错误

- 对于回调函数，采用回调函数的形式处理错误。
- 对于 Promise，使用 `.catch()` 链式统一捕获，也可以在 `.then` 第二个参数局部捕获。
- 对于 async/await，用 `try‑catch` 包裹 `await` 代码块捕获，是目前最推荐的方式。
- 通过 `unhandledrejection` 事件捕获全局未处理的 `Promise` 错误。
- 通过 `window.onerror` 事件捕获全局未处理的普通错误。

## ES6 数组、对象、函数有哪些扩展？

- 扩展运算符的应用。
- 新增数组构造函数：Array.from()、Array.of()。
- 新增数组实例方法：find()、findIndex()、fill()、copyWithin()、entries()、keys()、values()、includes()、flat()、flatMap()。

## 内存泄漏的情况有哪些?

- 意外的全局变量。由于使用未声明的变量，而意外的创建了一个全局变量，这个变量一直留在内存中无法被回收。
- 被遗忘的计时器或回调函数。设置了 setInterval 定时器，而忘记取消它，如果循环函数有对外部变量的引用，那这个变量会被一直留在内存中而无法被回收。
- 脱离 DOM 的引用。获取一个 DOM 元素的引用，而后面这个元素被删除，由于一直保留了对这个元素的引用，所以它也无法被回收。
- 闭包。不合理的使用闭包，从而导致某些变量一直被留在内存当中。

## 本地存储的方式有哪些？
## 如何解决数字精度丢失问题？

## 如何获取安全的 undefined 值？

undefined 可以被当作变量来使用和赋值，直接赋值 undefined 会有可能出现问题。  
表达式 void 没有返回值，因此返回结果是 undefined。void 并不改变表达式的结果，只是让表达式不返回值。  
因此可以用 void 0 来获得 undefined。

## 如何实现自执行函数 IIFE？
