---
title: setInterval在vue中销毁实例
date: 2019-04-18 02:42:00
tags:
  - vue
categories:
  - 代码
---
在vue中如果setInterval不进行及时的销毁即使跳转到其他路由循环也是会一直进行的，即使前一个路由已经被销毁

1、setInterval事件和组件的生命周期没有直接关系。

2、setInterval会返回一个ID 值。setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。由 setInterval() 返回的 ID 值可用作 clearInterval() 方法的参数。

```
<script>
export default{
	created () {
    	this.insta = setInterval(function(){
            console.log(new Date())
        },1000)
    },
    beforeDestroy () {
        clearInterval(this.insta)
    }
	
}
</script>
```