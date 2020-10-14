---
title: 监控横竖屏（屏幕高度与屏幕宽度比）
date: 2019-04-18 01:57:00
tags:
  - JavaScript
categories:
  - 代码
---
```
var mql = window.matchMedia("(orientation: portrait)");
// 如果有匹配，则我们处于垂直视角
if(mql.matches) {
    // 直立方向
    alert("1")
} else {
    //水平方向
    alert("2")
};
// 添加一个媒体查询改变监听者
mql.addListener(function(m) {
    if(m.matches) {
        // 改变到直立方向
        alert("改变到直立方向");
        // document.getElementById("test").innerHTML="改变到直立方向";
    }
    else {
        alert("改变到水平方向");
        // document.getElementById("test").innerHTML="改变到水平方向";
        // 改变到水平方向
    }
});
```