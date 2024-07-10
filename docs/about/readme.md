---
title: 联系方式
date: 2019-10-02
categories:
  - 个人
---

## 源代码平台

[github](https://github.com/sunlianlong) :sunlianlong

[码云](https://gitee.com/sllhome) :sllhome

<button id="test">测试微信小程序</button>
<script>
  document.getElementById("test").addEventListener("click",function(){
    console.log("正在测试");
    wx.miniProgram.navigateTo({url: '/pages/tabBar/extUI/extUI'});
  })
</script>
