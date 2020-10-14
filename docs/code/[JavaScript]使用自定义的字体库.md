---
title: 使用自定义的字体库
date: 2019-04-18 02:40:00
tags:
  - JavaScript
categories:
  - 代码
---
1. 第一步

获取要使用字体的三种文件格式，确保能在主流浏览器中都能正常显示该字体。
.TTF或.OTF，适用于Firefox 3.5、Safari、Opera
.EOT，适用于Internet Explorer 4.0+
.SVG，适用于Chrome、IPhone
下面要解决的是如何获取到某种字体的这三种格式文件。
一般地，我们在手头上（或在设计资源站点已经找到）有该字体的某种格式文件，最常见的是.TTF文件，我们需要通过这种文件格式转换为其余两种文件格式。
字体文件格式的转换可以通过网站www.fontsquirrel.com或onlinefontconverter提供的在线字体转换服务获取。
这里推荐第一个站点，它允许我们选择需要的字符生成字体文件（在服务的最后一个选项），这样就大大缩减了字体文件的大小，使得本方案更具实用性。

2. 第二步

获取到三种格式的字体文件后，下一步要在样式表中声明该字体，并在需要的地方使用该字体。
特殊字体声明如下：
以下为引用的内容：
```
@font-face {
 font-family: 'fontNameRegular';
 src: url('fontName.eot');
 src: local('fontName Regular'),
              local('fontName'),
              url('fontName.woff') format('woff'),
              url('fontName.ttf') format('truetype'),
              url('fontName.svg#fontName') format('svg');
} 
```
在页面中需要的地方嵌套使用该字体：
以下为引用的内容：
```
p { font: 13px fontNameRegular, Arial, sans-serif; }
h1{font-family: fontNameRegular}
```