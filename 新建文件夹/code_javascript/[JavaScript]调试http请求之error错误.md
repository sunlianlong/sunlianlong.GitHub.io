---
title: 调试http请求之error错误
date: 2019-04-18 02:02:00
tags:
  - JavaScript
categories:
  - 代码
---
ajax:
```
error: function (err) {
   console.log(err.statusText);
}
```
axios:
```
.catch(function (error) {
 console.log(error.response.status+" "+error.response.statusText);
}); 
```