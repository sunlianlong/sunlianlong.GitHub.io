---
title: 标签下面1px横线--after清除浮动
date: 2019-04-18
tags:
  - css
categories:
  - 代码
---
```
.home{
        margin:0 0.3rem 0.02rem;
        height:1.2rem;
        position: relative;
       &::after {
            content: '';
            display: block;
            left: 0;
            width: 100%;
            position: absolute;
            bottom: 0;
            height: 1px;
            background: #f1f2f3;

            
     -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    -ms-transform: scaleY(0.5);
    transform: scaleY(0.5);
        }

}



.clearfix:after{
     content:".";        
     display:block;        
     height:0;        
     clear:both;        
     visibility:hidden;        
}
```