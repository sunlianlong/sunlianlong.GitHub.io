---
title: 复选框美化
date: 2019-04-18
tags:
  - css
categories:
  - 代码
---
```
<style>
  .radio_box{ display:inline-block; position:relative;}

  .radio_box label{ width:15px; height:15px; position:absolute; top:0; left:0; border:2px solid #ef4949; border-radius:50%; background:#fff; cursor:pointer;}

  .radio_box input:checked + label:after{ content:''; width:9px; height:9px; position:absolute; top:3px; left:3px; background:#ef4949; border-radius:50%;}

  .check_box em{ margin:0 0 0 5px;}
 </style>

<h2>单选框:</h2>
<span class="radio_box">
  <input type="radio" id="radio_1" name="radio" checked>
  <label for="radio_1"></label>
  <em>选项1</em>
</span>
<br><br>
<span class="radio_box">
  <input type="radio" id="radio_2" name="radio">
  <label for="radio_2"></label>
  <em>选项2</em>
</span>
```