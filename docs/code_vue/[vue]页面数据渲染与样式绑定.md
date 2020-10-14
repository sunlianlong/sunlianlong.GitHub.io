---
title: 页面数据渲染与样式绑定
date: 2019-04-18 02:44:00
tags:
  - vue
categories:
  - 代码
---
v-if不会渲染到页面，v-show显示隐藏，会渲染到页面上，使用SSR时需要用v-show,v-if可能报错：
```
[Vue warn]: The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render
```

# 类名与样式绑定、计算属性
v-for后面需要加上 :key 值为字符串或数字类型
```
<div id="app">
  
</div>
```
```
var app = new Vue({
  el: '#app',
  data: {
    message: '页面加载于 ' + new Date(),
    seen:true
  }
})
<template>
     <div>
     	<p v-bind:style="msgstyle">{{ message }}</p>
        <span v-bind:title="message">
        鼠标悬停几秒钟查看此处动态绑定的提示信息！
        </span>
        <p v-if="seen">现在你看到我了</p>
        <p v-else>现在你看不到我了</p>
        <p v-show="seen">现在你看到我了</p>
        <img :src="image">
        <p v-bind:class="{ 'primary': true }" v-on:click="getimage">获取图片</p>
        <i :class='img'></i>
        <ul>
        	<li v-for='item in searchData' :key="item.id"><i :class="(item.id==0)?'yidong':(item.id==1)?'dianxin':'liantong'"></i>{{item.name}}</li>
        </ul>
    </div>
</template>
<script>
export default{
    data(){
        return{
        	message: '页面加载于 ' + new Date(),
            search:'', // 过滤关键字
            image:'', // 图片地址
            seen:true,
            allShops:[{
            	name:'Jhon',
                id:0
            },{
            	name:'Shims',
                id:1
            },{
            	name:'Jim',
                id:2
            }],
            img:'',
            msgstyle:{
            	color:'red',
                lineHeight:'100px',
                fontSize:'30px'
            }
        }
    },
    computed:{
        searchData:function(){
            var search = this.search;
            if (search) {
                return this.allShops.filter(function(shop) {
                    return Object.keys(shop).some(function(key) {
                        return String(shop[key]).indexOf(search) > -1
                    })
                })
            }
            return this.allShops;
        }
    },
    created () {
        this.getimage();
    },
    methods:{
        getimage(){ 
        	var that = this;
			this.$http.get('/api')
            .then(res){
            	that.image = res.data.image
                that.img = 'liantong';
                that.search = 'J';
            }
        }
    }
}

</script>
<style>
.primary{
	color:#red
}
.dianxin{
    background-image:url(../images/dianxin.png)
}
.liantong{
    background-image:url(../images/liantong.png)
}
.yidong{
    background-image:url(../images/yidong.png)
}
</style>
```