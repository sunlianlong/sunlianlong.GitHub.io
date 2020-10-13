---
title: vue多种皮肤简单想法
date: 2019-04-18 02:42:00
tags:
  - vue
categories:
  - 代码
---
多种皮肤的先决条件是先把样式写好，然后给body指定样式来对应不同的皮肤

app.vue是进入页面时必须加载的地方，所有可以在app.vue中添加created方法来控制body的样式
```
export default {
  name: 'app',
  created () {
    var body = document.getElementsByTagName('body')[0];
    body.className = 'whitebg';
  }
}

```
如果通过url传参控制皮肤，则可以使用
```
export default {
  name: 'app',
  created () {
    var bg = this.$route.query.bgcolor; 
    var body = document.getElementsByTagName('body')[0];
    body.className = bg;
  }
}
```

如果是点击选择可以使用localStorage来存储点击后的颜色，进入页面判断是否选过其他皮肤，没选过则使用默认，选过则使用缓存的皮肤名