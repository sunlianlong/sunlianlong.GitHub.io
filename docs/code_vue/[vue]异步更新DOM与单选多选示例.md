---
title: 异步更新DOM与单选多选示例
date: 2019-04-18 02:44:00
tags:
  - vue
categories:
  - 代码
---
建议熟读此翻译文章，能够更好理解vue的相应属性原理：
[vue的响应式原理](https://cn.vuejs.org/v2/guide/reactivity.html)

### 实践：

开发中经常会遇到多选、单选等功能，例如购物车、选择商品规格等地方。

实现上述功能最常规的做法是给数组中的每个对象添加一个属性值来作为是否选中的判断，而该属性仅客户端使用，所以服务端返回的数据中是没有这个字段的，在此要实现多选、单选功能有两种做法：
1. 在数据赋值到data之前处理好数据，这样可直接使用vue的相应原理来工作：
```
<template>
	<ul>
        <li v-for="(shop,index) in shopCarts">
            <i @click='at(shop, index)' class="rt" :class="{ lf: shop.checked}"></i>
            <h3 class="clamp">{{shop.goodsName}}</h3>
        </li>
    </ul>
</template>
<script>
	import { mapActions } from 'vuex'
	export default{
        data(){
            return {
              shopCarts:[]
            }
        },
        created () {
            var self = this;
            this.getCart().then(function(res){
                var shopCarts = res.data.shopCarts;
                shopCarts.forEach(function(item){
                    item.checked = false;
                });
                self.shopCarts = shopCarts;
            });
        },
        methods:{
          ...mapActions([
            'getCart'
          ]),
          at(item, index){
            this.shopCarts[index].checked = !item.checked;
          }
        }
    }
</script>
<style scoped>
	.rt{
        background-image:url(../../libs/img/rt.png);
    }
    .lf{
        background-image:url(../../libs/img/lf.png);
    }
</style>
```
2. 不需处理数据，在点击的时候使用 Vue.nextTick(callback) 。回调函数在 DOM 更新完成后就会调用$set方法，可同样实现：
```
<template>
	<ul>
        <li v-for="(shop,index) in shopCarts">
            <i @click='at(shop, index)' class="rt" :class="{ lf: shop.checked}"></i>
            <h3 class="clamp">{{shop.goodsName}}</h3>
        </li>
    </ul>
</template>
<script>
	import { mapActions } from 'vuex'
	export default{
        data(){
            return {
              shopCarts:[]
            }
        },
        created () {
            var self = this;
            this.getCart().then(function(res){
                self.shopCarts = res.data.shopCarts;
            });
        },
        methods:{
        ...mapActions([
        	'getCart'
        ]),
        at(item, index){
        	var that = this;
			this.$nextTick(function () {
				that.$set(item,'checked',!item.checked);
			});
          }
        }
    }
</script>
<style scoped>
	.rt{
        background-image:url(../../libs/img/rt.png);
    }
    .lf{
        background-image:url(../../libs/img/lf.png);
    }
</style>
```