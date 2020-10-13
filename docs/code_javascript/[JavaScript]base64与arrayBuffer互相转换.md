---
title: base64与arrayBuffer互相转换
date: 2019-04-18 01:49:00
tags:
  - JavaScript
categories:
  - 代码
---
```
function arrayBufferToBase64(buffer){
    var binary = "";
    var bytes = new Unit8Array(buffer);
    var len = bytes.byteLength;
    for(var i = 0;i<len;i++){
        binary += String.fromCharCode(bytes[i]);
    }
	return window.btoa(binary);
}


function _base64ToArrayBuffer(base64) {
    var binary_string =  window.atob(base64.split(",")[1]);
    var len = binary_string.length;
    var bytes = new Uint8Array( len );
    for (var i = 0; i < len; i++)        {
    	bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
};

```
