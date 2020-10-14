---
title: 利用jquery实现触发其他元素的点击事件--待测试
date: 2019-04-18 01:58:00
tags:
  - JavaScript
categories:
  - 代码
---
```
$("#a").click(function(){
	$("#b").trigger("click");//触发b的click事件
});
```