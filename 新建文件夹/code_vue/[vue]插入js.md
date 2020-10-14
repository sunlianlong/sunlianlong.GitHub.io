---
title: 插入js
date: 2019-04-18 02:42:00
tags:
  - vue
categories:
  - 代码
---
```
<template>
	<remote-js src="https://g.alicdn.com/dingding/dinglogin/0.0.2/ddLogin.js"></remote-js>
</template>
<script>
export default{
    components: {
        'remote-js': {
          render(createElement) {
            return createElement('script', { attrs: { type: 'text/javascript', src: this.src }});
          },
          props: {
            src: { type: String, required: true },
          }
        }
    },
}
</script>
```