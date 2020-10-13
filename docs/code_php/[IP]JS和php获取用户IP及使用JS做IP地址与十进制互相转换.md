---
title: JS和php获取用户IP及使用JS做IP地址与十进制互相转换
date: 2019-04-18 02:02:00
tags:
  - JavaScript
  - php
categories:
  - 代码
---
JS
```
<script src="http://pv.sohu.com/cityjson?ie=utf-8"></script> 
<script type="text/javascript"> 
document.write(returnCitySN["cip"]+','+returnCitySN["cname"]) 
</script>

returnCitySN：
{cip: "183.15.177.92", cid: "440300", cname: "广东省深圳市"}
```
PHP
```
<?php
function GetIP(){ 
if (getenv("HTTP_CLIENT_IP") && strcasecmp(getenv("HTTP_CLIENT_IP"), "unknown")) 
$ip = getenv("HTTP_CLIENT_IP"); 
else if (getenv("HTTP_X_FORWARDED_FOR") && strcasecmp(getenv("HTTP_X_FORWARDED_FOR"), "unknown")) 
$ip = getenv("HTTP_X_FORWARDED_FOR"); 
else if (getenv("REMOTE_ADDR") && strcasecmp(getenv("REMOTE_ADDR"), "unknown")) 
$ip = getenv("REMOTE_ADDR"); 
else if (isset($_SERVER['REMOTE_ADDR']) && $_SERVER['REMOTE_ADDR'] && strcasecmp($_SERVER['REMOTE_ADDR'], "unknown")) 
$ip = $_SERVER['REMOTE_ADDR']; 
else 
$ip = "unknown"; 
return($ip); 
}
echo GetIP();

?>
```

ip地址为二进制数字

```
var REG =/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
function ipToInt(IP){
    var xH = "",result = REG.exec(ip);
    if(!result) return -1;
    return (parseInt(result[1]) << 24 
        | parseInt(result[2]) << 16
        | parseInt(result[3]) << 8
        | parseInt(result[4]))>>>0;
}
function intToIp(INT){
    if(INT < 0 || INT > 0xFFFFFFFF){
        throw ("The number is not normal!");
    }
    return (INT>>>24) + "." + (INT>>16 & 0xFF) + "." + (INT>>8 & 0xFF) + "." + (INT & 0xFF);
}
var ip = '192.168.3.14';
var intip = ipToInt(ip)
console.log(intip)
console.log(intToIp(intip))
```