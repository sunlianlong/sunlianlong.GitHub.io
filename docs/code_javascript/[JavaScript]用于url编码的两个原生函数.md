---
title: 用于url编码的两个原生函数
date: 2019-04-18 02:04:00
tags:
  - JavaScript
categories:
  - 代码
---
%3A%2F%2F  为 :// 的URL编码。
js中有专门的URL编码和解码的方法。
decodeURIComponent() 函数可对 encodeURIComponent() 函数编码的 URI 进行解码
例如：
```
var aa = "http://cheetah.m.v.6.cn/pay/callback?succ=Y";
var bb = encodeURIComponent(aa);
var cc ="http%3A%2F%2Fcheetah.m.v.6.cn%2Fpay%2Fcallback%3Fsucc%3DY";
var dd = decodeURIComponent(cc);
alert(aa === dd);
alert(bb === cc);
```
encodeURI()与decodeURI()是成对来使用的，浏览器的地址栏有中文或其他英文字符的话，可能会出现不可预期的错误，或者地址栏避免出现中文的话，可以用encodeURI把非英文字符转化为英文编码，再用decodeURI把字符还原回来。
注：decodeURI()方法相当于java中的java.net.URLDecoder.decode(URIString, "UTF-8") ，encodeURI()方法相当于java中的java.net.URLEncoder.encode(URIString, "UTF-8")。
用法如下：
在url中传参时，用encodeURI进行编码：
var url=baseUrl + '/standard/detailOpinion.html?listType='+encodeURI(“中文");
传到页面取值时，再用decodeURl进行解码：
$("#listType").val(decodeURI(getUrlParamByKey('listType')));
 
对中文编码后，参数形如“%BC%D3%C3%DC"，编码后如果参数太长就会超出地址栏URL长度限制，这时就不能再使用地址栏编码传参。
如果是从父页面传参到弹出的子页面，则可以在子页面直接从父页面取值，不需要再作为参数传值：
$("#listType").val(opener.$("#listType").val());
