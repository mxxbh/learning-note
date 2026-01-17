## JavaScript 有哪些数据类型，它们的区别？

JavaScript 共有八种数据类型，分别是 `undefined`、`Null`、`Boolean`、`Number`、`String`、`Object`、`Symbol`、`BigInt`。
其中 Symbol 和 BigInt 是 ES6 中新增的数据类型。

- Symbol 代表创建后独一无二且不可变的数据类型，它主要是为了解决可能出现的全局变量冲突的问题。
- BigInt 是一种数字类型的数据，它可以表示任意精度格式的整数，使用 BigInt 可以安全地存储和操作大整数，即使这个数已经超出了 Number 能够表示的安全整数范围。

这些数据可以分为原始数据类型和引用数据类型：原始数据类型（Undefined、Null、Boolean、Number、String）引用数据类型（对象、数组和函数）
两种类型的区别在于存储位置的不同，原始数据类型直接存储在栈（stack）中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储；引用数据类型存储在堆（heap）中的对象，占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。

堆和栈的概念存在于数据结构和操作系统内存中，
在数据结构中，栈中数据的存取方式为先进后出；堆是一个优先队列，是按优先级来进行排序的，优先级可以按照大小来规定。
在操作系统中，内存被分为栈区和堆区，栈区内存由编译器自动分配释放，存放函数的参数值，局部变量的值等。其操作方式类似于数据结构中的栈。堆区内存一般由开发着分配释放，若开发者不释放，程序结束时可能由垃圾回收机制回收。

## 数据类型检测的方式有哪些？

1、typeof

```js
console.log(typeof 0); // number
console.log(typeof "0"); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof Symbol(0)); // symbol
console.log(typeof BigInt(0)); // bigint
console.log(typeof {}); // object
console.log(typeof []); // object 注意！ [!code warning]
console.log(typeof null); // object 注意！ [!code warning]
console.log(typeof function () {}); // function 注意！ [!code warning]
```

2、instanceof

instanceof 只能正确判断引用数据类型，而不能判断基本数据类型。

```js
console.log([] instanceof Array); // true
console.log(function () {} instanceof Function); // true
console.log({} instanceof Object); // true
```

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

## intanceof 操作符的实现原理及实现

instanceof 运算符用于判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置。

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

## 如何获取安全的 undefined 值？

undefined 可以被当作变量来使用和赋值，直接赋值 undefined 会有可能出现问题。  
表达式 void 没有返回值，因此返回结果是 undefined。void 并不改变表达式的结果，只是让表达式不返回值。  
因此可以用 void 0 来获得 undefined。

## Object.is() 与比较操作符 “===”、“==” 的区别？

使用双等号（==）进行相等判断时，如果两边的类型不一致，则会进行强制类型转化后再进行比较。
使用三等号（===）进行相等判断时，如果两边的类型不一致时，不会做强制类型准换，直接返回 false。
使用 Object.is 来进行相等判断时，一般情况下和三等号的判断相同，它处理了一些特殊的情况，比如-0 和 +0 不再相等，两个 NaN 是相等的。

## 如果 new 一个箭头函数的会怎么样？

箭头函数是 ES6 中的提出来的，它没有 prototype，也没有自己的 this 指向，更不可以使用 arguments 参数，所以不能 New 一个箭头函数。

new 操作符的实现步骤如下：
1. 创建一个对象
2. 将构造函数的作用域赋给新对象（也就是将对象的__proto__属性指向构造函数的prototype属性）
3. 指向构造函数中的代码，构造函数中的this指向该对象（也就是为这个对象添加属性和方法）
4. 返回新的对象

所以，上面的第二、三步，箭头函数都是没有办法执行的。