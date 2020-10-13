---
title: 解放F5--前端页面实时刷新
date: 2017-08-09 10:07:00
tags:
  - windows
  - 调试
categories:
  - 开发环境
---
#　解放F5--前端页面实时刷新

date: 2017-07-12 17:45

* * * * *

最近在研究前端自动化工具时一直在寻找一种方法或者工具能够满足同时监听多个页面代码修改并刷新的方法,之前手里有个gulp项目可以在本地起服务并对代码进行监听，但是只适用于单页面，然后近段时间翻看了几个用gulp+webpack构建的多页面项目源码，发现跟个人的需求总有不一致的地方，另外在周五也就是03.10偶然发现[gulp代理会导致服务端接收不到数据](https://segmentfault.com/q/1010000008657801)，目前正在研究解决办法。

正题：
	
实时刷新方法我目前用过的有三种，前两种就是gulp和webpack，都能启动服务并进行监听，网上资料很多，就不细说了，第三种是本文的重点也是对之前提到的需求的降级解决办法[Browsersync](http://www.browsersync.cn/)，暂时实现了静态页面直接启动服务监听文件修改，另外在我本地有个nginx服务，使用[Browsersync](http://www.browsersync.cn/)能够实现nginx服务端口代理监听

具体关于Browsersync可以查看[Browsersync中文官网](http://www.browsersync.cn/);

1. 先安装nodeJS并添加到环境变量

2. 全局安装browser-sync
```
npm install -g browser-sync
```

静态页面方法：
1. cd 项目目录
2. 
```
browser-sync start --server --files "**/*.css,**/*.html,**/*.js"
```

动态页面(php、nginx等)方法：
1. cd 项目目录
2. 
```
browser-sync start --proxy "本机ip/nginx配置路由/" --files "**/*.css,**/*.html,**/*.js"
```

备忘注意事项：
	当前方法并非最终解决方案，目前仅是使用了页面实时监听，多页面自动化仍需要寻找解决方案，另外关于动态页面使用browser-sync时proxy一定要代理本机ip而不是localhost，这是一个坑。
  