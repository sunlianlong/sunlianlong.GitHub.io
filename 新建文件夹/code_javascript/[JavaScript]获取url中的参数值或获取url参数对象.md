---
title: 获取url中的参数值或获取url参数对象
date: 2019-04-18 01:57:00
tags:
  - JavaScript
categories:
  - 代码
---
```
// 获取指定url参数的值：
// key为参数中的名字
function urlParam(key) {
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
};


// 获取url中的参数，并返回一个对象
function getRequestData() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = {};
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
        }
    }
    return theRequest;
};

// 生成一个带参数的url
function createUrl(obj) {
    var length = obj && obj.length,
        idx = 0,
        url = obj.url + '?';
    for (var key in obj) {
        if (key != 'url' && obj[key] !== null) {
        	url += (key + '=' + encodeURIComponent(obj[key]) + '&');
        }
    }
    return url.substring(0, url.lastIndexOf('&'));
}
```

是用方法：

```
// url = "file:///C:/Users/Administrator/Desktop/index.html?a=11&b=2&c=3&url=http://www.baidu.com";

var obj = getRequestData();

console.log(obj);// Object {a: "11", b: "2", c: "3", url: "http://www.baidu.com"}

console.log(createUrl(obj));// http://www.baidu.com?a=11&b=2&c=3

console.log(urlParam("a"));// 11

```
