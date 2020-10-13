---
title: NUXT应用实践
date: 2019-04-17 04:14:00
tags:
  - node
  - vue
categories:
  - 代码
---
# vue服务端渲染框架 NUXT 实践

由于个人原因只是写了demo实践了NUXT，并没有部署到生产环境上（我会告诉你我不会做服务器监控么？）
### 项目中遇到的问题及解决方案：

1. axios并发请求报错及cookie处理
项目中使用了axios作为项目请求框架，遇到的第一个问题就是[axios并发请求没有发送成功](https://segmentfault.com/q/1010000010737563)，虽然现在解决了问题，但是还有疑问待解决，报错信息：
```
__WEBPACK_IMPORTED_MODULE_2_nuxt___default.a is not a constructor
```
由于NUXT渲染路由时并不一定在服务端，NUXT官方提供了一个方法：asyncData用于在路由中初始化数据，该方法与mothods、created等同级，具体方法说明请查看[NUXT官网](https://zh.nuxtjs.org/)，这里使用了 isServer来判断当前渲染是在服务端还是客户端，根据环境获取cookie，cookie为单独写的方法
```
// nuxt.config.js
module.exports = {
  plugins: [
    { src: '~plugins/assemblies/', ssr: false },
    { src: '~plugins/ios', ssr: false }
  ]
}
```
```
//plugins/axios.js
import * as axios from 'axios'
let options = {}
// The server-side needs a full url to works
options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
export default axios.create(options)

```
```
//plugins/cookietools.js
// 读取cookies--传入整个cookie字符串
export function getCookie (cookie, name) {
  var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  if (cookie) {
    var arr = cookie.match(reg)
    if (arr) return unescape(arr[2])
    else return null
  } else {
    return null
  }
}
```
```
// index.vue
<script>
import axios from '~/plugins/axios'
import {getCookie} from '~/plugins/cookietools'
export default {
  async asyncData ({isServer, req, error, query, redirect}) {
    console.log('这是 路由：index')
    let appid = null
    if (isServer) {
      if (Object.keys(query).length === 0) {
        appid = getCookie(req.headers.cookie, 'xxappid')
      } else {
        appid = query.appid
      }
    } else {
      if (Object.keys(query).length === 0) {
        appid = getCookie(document.cookie, 'xxappid')
      } else {
        appid = query.appid
      }
    }
    let [order, appInfo] = await Promise.all([
      axios.post('/api/queryOrder', {
        appId: appid,
        uuid: uuid
      }),
      axios.post('/api/getAppInfo', {
        appId: appid
      })
    ]).catch(err => {
      error({ statusCode: err.response.status, message: err.response.statusText })
    })
    return {
      order: order.data, // 订单信息
      appInfo: appInfo.data.appInfo, // CP信息
      query: {
        appid: appid
      }
    }
  },
  data () {
    return {
      appInfo: null,
    }
  },
  head () {
    return {
      title: `定向流量包`
    }
  }
}
</script>
```

2. 组件渲染问题

当前大部分的vue组件都是没有做SSR兼容，导致在NUXT使用会报很多很多的错，解决办法只有一个：重写组件。
例如：
```
// 	/components/top.vue
<template>
    <p>{{top.title}}</p>
</template>
<script>
export default{
  props: {
    top: {
      title: '测试组件'
    }
  },
  methods: {
  }
}
</script>
```
```
// /plugins/assemblies/index.js
import Vue from 'vue'
import top from '~/components/top.vue'
Vue.use(top)
```
```
// nuxt.config.js
module.exports = {
    plugins: [
        { src: '~plugins/assemblies/', ssr: false }
    ]
}
```
```
// index.vue中使用
<top :top="data或者asyncData的数据"></top>
```
或者在组件中直接引用
```
// index.vue 该方法不需要配置plugins和nuxt.config.js
<template>
	<div>
		<top :top="{title:'测试头部组件'}"></top>
    </div>
</template>
<script>
import top from '~/components/top.vue'
export default {
	components: {
        top
      }
}
</script>
```

所有配置：
1. node
2. vue cli
3. pm2
4. nuxt
5. express
6. log4js
7. mysql

使用vue-cli初始化项目
```
vue init nuxt/express mynuxtexpress
```
更新依赖包：
```
npm install
```
下载其他需要使用的其他依赖包
```
npm install axios --save
```
以下包只有需要记录请求和链接mysql需要用到
```
npm install log4js body-parser mysql --save
```
本地电脑测试环境：
```
npm run dev
```
服务器环境：
```
//  第一步
npm run build

// 第二步
pm2 start ./build/main.js
```