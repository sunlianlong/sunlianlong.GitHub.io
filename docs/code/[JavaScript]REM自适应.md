---
title: REM自适应
date: 2019-04-18 01:54:00
tags:
  - JavaScript
categories:
  - 代码
---
```
(function (doc, win) {
    var docEl = doc.documentElement,   
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth,
                clientHeight = docEl.clientHeight;
            if (!clientWidth) return;
            console.log(clientWidth/clientHeight <= 1);
            if(clientWidth/clientHeight <= 1){
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
                return;
            }else if(clientWidth/clientHeight > 1){
                docEl.style.fontSize = 100 * (clientHeight / 640) + 'px';
                return;
            }   
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
```