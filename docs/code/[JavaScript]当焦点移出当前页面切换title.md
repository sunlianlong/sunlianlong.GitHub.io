---
title: 当焦点移出当前页面切换title
date: 2019-04-18 01:55:00
tags:
  - JavaScript
categories:
  - 代码
---
```
document.addEventListener("visibilitychange",
  function() {
     document.title = document.hidden ? "出BUG了，快看！": "前端！"
  }
);
```

小tips:通过document.hidden来判断当前页面是否在前台（有些app内不被支持）