---
title: 操作cookie
date: 2018-10-16 09:46:00
tags:
  - php
categories:
  - 代码
---
#### php中，使用$_COOKIE['名字']) 来获取指定名字的cookie值，使用 empty()来判断值是否为空；

#### 例如：

```php
if(!empty($_COOKIE['username'])){
    echo $_COOKIE['username'];
}
```

#### 设置cookie的值，并且为 httpOnly(不允许脚本修改cookie)

```php
setcookie("username","18",NULL, NULL, NULL, NULL, TRUE);
```
#### setcookie()有七个字段，分别为：

```php
 setcookie(string name,string value,int expire,string path,string domain,bool secure,bool $httponly);
 /*
 name为cookie的名字,

value为cookie的值,

expire为过期时间的秒级时间戳(默认为0,代表内存cookie,关闭浏览器即失效)

path为cookie的路径,浏览器在发送cookie是只会发送对应路径及祖先级路径的cookie,如cookieA设置在根下,cookieB设置在/dir/下,访问dir的请求会带着cookieB和cookieA,但访问根路径的请求只会带着cookieA

domain为cookie的域名,只能设置为当前域或当前域的上级域。例如:一个在a.b.com的页面,可以设置domain为a.b.com,b.com,设置为a.b.com只能在a.b.com中访问cookie,若直接设置为b.com,则可以在其他b.com域下访问

secure为true会对cookie进行HTTPS加密传输

httponly为true时,只能通过请求发送cookie,使用javascript无法读取httponly的cookie,安全性更高
*/
 ```

#### 删除cookie 设置expire时间为过去即可；

#### 删除当前会话的所有cookie
```php
foreach($_COOKIE as $key=>$val){
    setcookie($key,"",time()-100);
}
```