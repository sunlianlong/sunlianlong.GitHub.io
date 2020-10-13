---
title: 服务端向客户端单向推送信息
date: 2018-06-22 09:47:00
tags:
  - 实时消息
  - php
categories:
  - 代码
---
#### 使用 **Server-Sent Events(简称SSE)** 推送

Tips: 不所有浏览器都支持SSE

### index.html：
```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Basic SSE Example</title>
  </head>
  <body>
    <pre id="x">Initializing...</pre>
    <script>
    var es = new EventSource("basic_sse.php");
    es.addEventListener("message", function(e){
      document.getElementById("x").innerHTML += "\n" + e.data;
      },false);
    </script>
  </body>
</html>
```
### basic_sse.php：
```php
<?php
header("Content-Type: text/event-stream");
while(true){
  echo "data:".date("Y-m-d H:i:s")."\n\n";
  @ob_flush();@flush();
  sleep(1);
  }
?>
```