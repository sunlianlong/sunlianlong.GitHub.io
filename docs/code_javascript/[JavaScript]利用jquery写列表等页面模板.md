---
title: 利用jquery写列表等页面模板
date: 2019-04-18 01:59:00
tags:
  - JavaScript
categories:
  - 代码
---
jquery限制版本在1.8.2超过可能报错
```
jquery Syntax error, unrecognized expression
```
```
 function get_passenger_html(passenger) {
        var html = $('#temp').html(); // 获取HTML字符串模板
        var dom = $(html); // 先即将HTML字符转成DOM对象
        dom.attr("data-id",passenger.goodsMinorId).attr("data-stock",passenger.stock).attr("data-goodsID",passenger.goodsId);
        dom.find("img").attr("src",passenger.goodsImg);
        dom.find(".tradeName").html(passenger.goodsName);
        dom.find(".degree").html(passenger.style);
        dom.find(".price").html("￥"+passenger.price);
        dom.find(".number").html("x"+passenger.count);
        dom.find(".num2").html(passenger.count);
        dom.find(".colorA").html(passenger.goodsName);
        // dom.find('.name').html(passenger.name); // 找到存放乘客姓名的DOM节点并插入数据
        // dom.find('.tel').html(passenger.tel); // 找到存放乘客电话的DOM节点并插入数据
        // 把处理完毕的DOM转回HTML字符串并返回
        return dom.prop("outerHTML");
    }
var stringd = "";
循环
stringd += get_passenger_html(item);


<script id="temp" type="text/html">
  <ul class="section_ul clearfix">
    <li class="choice"><button class="btn"></button></li>
    <li class="picture"><img src=""/></li>
    <li class="info">
      <p class="tradeName"></p>
      <p class="degree"></p>
      <p class="general"><span class="priceNumber"><a class="price"></a><a class="number"></a></span></p>
    </li>
    <li class="editing">
      <div>
        <dl id="edit_dl">
          <dt class="num1">-</dt>
          <dd class="num2"></dd>
          <dd class="num3">+</dd>
        </dl>
      	<span class="colorA"></span>
      </div>
      <span class="del">删除</span>
    </li>
  </ul>
</script>
```