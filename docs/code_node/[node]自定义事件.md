---
title: 自定义事件
date: 2019-04-17 09:36:00
tags:
  - node
categories:
  - 代码
---
2017.10.25

```
'use strict';
const greeter = new events.EventEmitter();
greeter.on('welcome', function(){
    console.log('hello');
});
greeter.emit('welcome');
```