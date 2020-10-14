---
title: jquery仿Toast
date: 2019-04-18 01:52:00
tags:
  - JavaScript
categories:
  - 代码
---
```
// 仿安卓toast
var Toast = function(config){
    this.context = config.context==null?$('body'):config.context;//上下文
    this.message = config.message;//显示内容
    this.time = config.time==null?3000:config.time;//持续时间
    this.left = config.left;//距容器左边的距离
    this.top = config.top;//距容器上方的距离
    this.init();
  }
var msgEntity;
  Toast.prototype = {
  //初始化显示的位置内容等
    init : function(){
      $("#toastMessage").remove();
      //设置消息体
      var msgDIV = new Array();
      msgDIV.push('<div id="toastMessage">');
      msgDIV.push('<span>'+this.message+'</span>');
      msgDIV.push('</div>');
      msgEntity = $(msgDIV.join('')).appendTo(this.context);
      //设置消息样式
      msgEntity.css({position:'absolute',bottom:'45%','z-index':'99',left:0,right:0,margin:'0 auto',borderRadius:'0.15rem',textAlign:'center','background-color':'black',width:'80%',padding:'0.2rem',color:'white',opacity:'0.7','font':'bold 0.4rem/0.4rem "宋体"'});
      msgEntity.hide();
      },
    //显示动画
    show :function(){
      var that = this;
      clearTimeout(timer);
      msgEntity.fadeIn(this.time/2);
      var timer = setTimeout(function(){
        msgEntity.fadeOut(that.time/2);
      },2000);
    } 
};
```
使用方法：
```
new Toast({context:$('body'),message:'您的手机号不存在，请重新输入'}).show();
```