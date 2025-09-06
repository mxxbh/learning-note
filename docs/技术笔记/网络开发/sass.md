# sass

## 知识点

- 使用连字符 `-` 和下划线 `_` 会被判定为相等，例如，$font-size 和 $font_size 会指向同一个变量。
- 用连字符或下划线开头定义的变量会被认定是私有变量，当别的模块导入当前模块后也不能直接使用该变量。
- 用 `!default` 指定默认值，例如 `$string: "xxx" !default` 表示 $string 未定义或为 null 时，会被赋值 xxx。
- 通过 `opacify` 或 `transparentize` 函数调整颜色 alpha 值（透明度）。

## 参考

- [sass](https://sass-lang.com/documentation/)
- [playground](https://www.sassmeister.com/)
