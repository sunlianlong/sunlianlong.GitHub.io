---
title: 微信--去缓存方法记录
date: 2019-04-18 02:40:00
tags:
  - JavaScript
categories:
  - 代码
---
1. 在使用window.location.href跳转页面时，在url后面加上“?datetime=”+new Date().getTime();保证每次浏览的网页是最新的。

2. js或css更新后，在html引用的地方更新版本号，例如scr="../js/demo.js?v=20160420"。

3. 对于图片url后不建议加时间戳，否则微信的图片缓存机制将失效，严重影响网页浏览速度，但是可以使用版本号。