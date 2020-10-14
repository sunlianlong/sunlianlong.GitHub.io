---
title: JS的Number类型精度计算
date: 2019-05-27 08:15:00
tags:
  - JavaScript
categories:
  - 代码
---
ES6 在Number对象上面，新增一个极小的常量Number.EPSILON。根据规格，它表示 1 与大于 1 的最小浮点数之间的差。

Number.EPSILON实际上是 JavaScript 能够表示的最小精度。误差如果小于这个值，就可以认为已经没有意义了，即不存在误差了。

Number.EPSILON可以用来设置“能够接受的误差范围”。比如，误差范围设为 2 的-50 次方（即Number.EPSILON * Math.pow(2, 2)），即如果两个浮点数的差小于这个值，我们就认为这两个浮点数相等。

检查等式左右两边差的绝对值是否小于最小精度，才是正确的比较浮点数的方法
```javascript
0.1 + 0.2 === 0.3 // false



```