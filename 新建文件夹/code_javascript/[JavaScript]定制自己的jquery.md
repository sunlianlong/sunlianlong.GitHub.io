---
title: 定制自己的jquery
date: 2019-04-18 01:56:00
tags:
  - JavaScript
categories:
  - 代码
---
date: 2017-01-12 09:58

* * * * *

使用git下载jquery最新代码，如果失败将git:更换成https:试试:

```bash
git clone git://github.com/jquery/jquery.git
```

进入jquery文件夹并执行build命令:
```bash
cd jquery && npm run build
```
build出来的代码会在"./dist/"文件夹下, 其中包括jquery.js、jquery.min.js、jquery.min.map三个文件。

如果想要定制属于自己的jquery, 需要下载 [grunt-cli地址](https://github.com/gruntjs/grunt-cli) 或执行命令:

```
npm install -g grunt-cli
```
使用下面命令判断grunt是否安装成功:
```
grunt -V
```

现在可以运行grunt相关命令，在这里，可以像执行`npm run build`命令一样执行下面命令，建立一个完整的jquery版本:
```
grunt
```
执行下面命令查看grunt的其他命令:
```
grunt -help
```


一些可以排除的示例模块：
```
ajax: 所有的ajax功能: $.ajax(), $.get(), $.post(), $.ajaxSetup(), .load(),传输，以及ajax事件简略的表达方式如.ajaxStart().
ajax/xhr：只能排除The XMLHTTPRequestAJAX 传输
ajax/script: 只能排除<script>标签的AJAX传输，用于检索脚本
ajax/jsonp: 只能排除JSONP的AJAX传输,取决于ajax/script传输
css: .css()方法。同时移除所以依赖于css的模块（包括 effects, dimensions和offset）
css/showHide：使用类或明确使用.css()方法设置display属性时可排除非动画的.show(), .hide()以及.toggle()方法，同时移除effects模块
不宜用的--deprecated： 在文档中被标志为不宜用但还没被移除的方法
尺寸--dimensions： width()及.height()方法，包括inner-及outer-修饰的方法
特效--effects： .animate()方法及其简略的表达方式如.slideUp()或 .hide("slow")
事件--event： .on()和.off()方法以及所有的事件功能函数。同时移除event/alias
事件/别名--event/alias： 所有事件附加/触发的简写方式如.click() or .mouseover()
事件/焦点--event/focusin： 对 focusin及 focusout事件的跨浏览器支持
事件/触发--event/trigger： .trigger()和.triggerHandler()方法，被用于alias 及focusin 模块中
偏移--offset： .offset(), .position(), .offsetParent(), .scrollLeft()以及 .scrollTop()方法
包装--wrap： .wrap(), .wrapAll(), .wrapInner()以及.unwrap()方法
核心/准备--core/ready： 如果将scripts标签置于body底部，排除ready模块。所有与jQuery()函数相关的准备callbacks函数都会被立即调用。然而，jQuery(document).ready()将不能作为一个函数并且.on("ready", ...)以及与其类似的方法将不会被触发
延迟--deferred：排除jQuery.Deferred，同时移除 jQuery.Callbacks。注意所有依赖于jQuery.Deferred的模块如(AJAX, effects, core/ready) 并不会被移除并且会要求jQuery.Deferred。可以引入自己的jQuery.Deferred或将这些模块一块移除(grunt custom:-deferred,-ajax,-effects,-core/ready).
exports/global: 排除全局jQuery变量($ and jQuery)对于window的依附
exports/amd: 排除AMD 定义

有个特殊的情况，可以使用一个特殊标志grunt custom:-sizzle来替换Sizzle
sizzle：Sizzle选择器引擎。当这个模块被排除，会用基于浏览器的querySelectorAll基本选择引擎来替换他，但这个不支持jQuery选择器扩展以及增强语义。可在selector-native.js 文件中查看详情
注意：排除Sizzle模块会同时排除所有的jQuery选择器扩展如（effects/animatedSelector and css/hiddenVisibleSelectors）。
```

删除所有 `ajax` 相关模块:

```
grunt custom:-ajax
```

删除 **css** 同时删除了依赖 `css`的模块: **effects**, **offset**, **dimensions**.

```
grunt custom:-css
```

删除多个模块:

```
grunt custom:-ajax,-css,-deprecated,-dimensions,-effects,-event/alias,-offset,-wrap
```
