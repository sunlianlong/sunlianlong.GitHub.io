---
title: 格式化日期
date: 2019-04-18 01:57:00
tags:
  - JavaScript
  - 时间格式化
categories:
  - 代码
---
```
function formatTime(NUM) {
      var date = new Date( NUM ) ;
      var year = date.getFullYear()
      var month = date.getMonth() + 1
      var day = date.getDate()

      var hour = date.getHours()
      var minute = date.getMinutes()
      var second = date.getSeconds()
      return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
    }
    function formatNumber(n) {
      n = n.toString()
      return n[1] ? n : '0' + n
    }
    console.log(new Date());
    console.log(formatTime(1495443091000));
```