---
title: VsCode和Sublimetext3的网络请求工具
date: 2017-07-13 10:06:00
tags:
  - windows
  - 调试
categories:
  - 开发环境
---
# VsCode和Sublimetext3的网络请求工具

date: 2017-07-12 09:45

* * * * *

### 前言

之前一直在用Sublime Text 3 ，后来看到 VSCode 就卸载了，在使用了2个月后的今天决定卸载 VSCode , 原因在于 VSCode 对于我本人来讲在打开速度上来说还是显的稍微慢了一些，另外在于文件切换的问题上虽然用插件还是不太适应，然后又重新安装回 Sublime , 在此记录一下两个工具在 调试http请求 的工具

### 一、sublime

使用 package control 安装 HTTP Requester 和 PrettyJSON 两个插件

使用方法:

1. HTTP Requester 安装完毕后，在文件中书写一下两种代码，需要在行中顶格书写，可在任何文件任何地方书写，选中需要调试的请求，选择鼠标右键菜单中的：HTTP Requester 或者按下快捷键：Ctrl + Alt + r 即可，请求成功或失败都会新建一个新文件里面显示结果（更多内容查看插件的 readme.md）：

![](http://sunlianlong.top/assets/iamges/2017-7-12/0712101308.png)

![](http://sunlianlong.top/assets/iamges/2017-7-12/0712101730.png)

![](http://sunlianlong.top/assets/iamges/2017-7-12/0712101931.png)

2. 由于使用 HTTP Requester 请求返回的json数据都在一行，需要使用 PrettyJSON 格式下数据，快捷键 Ctrl + Alt + j 该命令就不发截图了。

### 二、VS code

使用 Ctrl/Cmd+P (或 Ctrl/Cmd + E) 输入 ext install rest-client 来下载 rest-client 插件

使用方法：

1. 插件安装完毕后需要reload一下来重载插件，请注意 VSCode 界面上方的提示，该插件需要使用 .http 文件来编写，VSCode 可以在 插件商店 直接看到 插件的 readme，请仔细阅读，与 sublime 不同的是 这里在请求的后面需要加上 http/1.1 ，另外 post 请求的 body 与 content-type 需要隔一行而 sublime 需要写下面标识，请求成功或失败都会新建一个新文件里面显示结果
```
POST_BODY:
```

```
### 这是注释  post请求
POST http://api.example.com/api http/1.1
content-type: application/json

{
    "id":4
}

### get 请求
GET http://api.example.com/api?a=1&b=2 http/1.1
```