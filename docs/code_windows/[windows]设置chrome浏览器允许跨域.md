---
title: 设置chrome浏览器允许跨域
date: 2020-10-22 10:16:00
tags:
  - windows
  - chrome
categories:
  - 开发环境
---

1. 在C盘新建文件夹MyChromeDevUserData
```
C:\MyChromeDevUserData
```

2. 复制chrome快捷方式，并右键->属性->快捷方式->目标 添加--disable-web-security --user-data-dir=C:\MyChromeDevUserData
```
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir=C:\MyChromeDevUserData
```
