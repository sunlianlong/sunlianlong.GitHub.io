---
title: ES6之模板字符串
date: 2019-04-18 01:51:00
tags:
  - JavaScript
categories:
  - 代码
---
```
// 为JavaScript提供了简单的字符串插值功能，从此以后，你可以通过一种更加美观、更加方便的方式向字符串中插值

var page = 3
var name = `${page}是3`
console.log(name)
```
```
// 用于毫不起眼的错误消息提示
function authorize(user, action) {
  if (!user.hasPrivilege(action)) {
    throw new Error(
      `用户 ${user.name} 未被授权执行 ${action} 操作。`);
  }
}
```
```
// 模板字符串可以多行书写:
$("#warning").html(`
  <h1>小心！>/h1>
  <p>未经授权打冰球可能受罚
  将近${maxPenalty}分钟。</p>
`);
```