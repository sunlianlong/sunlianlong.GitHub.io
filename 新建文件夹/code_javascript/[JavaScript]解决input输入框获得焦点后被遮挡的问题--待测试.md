---
title: 解决input输入框获得焦点后被遮挡的问题--待测试
date: 2019-04-18 01:58:00
tags:
  - JavaScript
categories:
  - 代码
---
```
$("input").on("focus",function(){
    this.scrollIntoView();
})


var height = document.body.scrollHeight;
window.addEventListener('resize', function(){
    if(document.body.scrollHeight == height){
        $("footer").css("display","block");
    }else{
        $("footer").css("display","none");
    }
},false);
```