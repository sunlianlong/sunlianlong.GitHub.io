---
title: 判断微信
date: 2019-04-18 01:59:00
tags:
  - JavaScript
categories:
  - 代码
---
```
window.onload = function(){
    if(isWeiXin()){
        var p = document.getElementsByTagName('p');
        p[0].innerHTML = window.navigator.userAgent;
    }
}
function isWeiXin(){
    var ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
    }else{
        return false;
    }
}
```