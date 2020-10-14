---
title: setTimeout函数传参
date: 2019-04-18 01:55:00
tags:
  - JavaScript
categories:
  - 代码
---
```
function log(text, textTwo) {
    console.log(text, textTwo);
}

setTimeout(log, 1000, 'Hello World!', 'And Mars!');

/*
 * # 输出
 * Hello World! And Mars!
 */
```