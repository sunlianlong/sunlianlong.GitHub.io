---
title: nginx操作记录
date: 2017-10-13 10:11:00
tags:
  - nginx
  - shell
  - xshell
categories:
  - linux
---
## 简单命令：
1. 启动nginx：
```
cd Program Files (x86)/nginx-1.11.7/
nginx

pause

```
2. 测试 nginx 配置：
```
nginx -t reload
```

3. 重启 nginx ：
```
nginx -s reload
```

4. 关闭 nginx：
```
nginx -s stop
```

## 配置：

1. 首先找到nginx.conf或者nginx.conf.default 或者是default里面的这部分，并增加修改:
```
server {
    listen       80;
    server_name  localhost;

    #charset koi8-r;

    #access_log  logs/host.access.log  main;

    location / {  			#所有以/开头的地址，实际上是所有请求
        root /data/qianduan;  		#请求访问的文件地址
        index  index.html index.htm;    #首页响应地址
    }
     location /getjson/{  		#代理服务端请求
            proxy_set_header Host $host;
            proxy_set_header X-Real-Ip $remote_addr;
            proxy_set_header X-Forwarded-For $remote_addr;
            proxy_pass http://127.0.0.1:8091/; #服务端真实地址
	}
}
```

## 前端使用方法：
```
var url = "/getjson/";
$.ajax({
	url: url + "get/data",
	type: "post",
	dataType: "json",
	data: JSON.stringify({"id":1})
}).done(function(res){
	console.log(res);
});
```

nginx 配置 ssl：
```
 server {
	 listen       443;
 	server_name  ted.sunlianlong.top; # 改你的host
 	root /data/php/; # 根目录为web
 	index index.php;
	 access_log  /var/log/nginx/php.access.log;
	 error_log  /var/log/nginx/php.error.log;
 	ssl on;  # 设置ssl打开
 	ssl_certificate   /usr/share/nginx/server.pem;  # 从https提供方获取
 	ssl_certificate_key /usr/share/nginx/server.key; # 从https提供方获取

	location / {
		try_files $uri $uri/ /index.php$is_args$args;
	}

	location /yy {
		proxy_pass http://www.51changke.com:80/;
	}

	location ~ \.php$ {
		try_files $uri = 404;
		fastcgi_pass   127.0.0.1:9000;
		fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
		include        fastcgi_params;
	}
}
```
# nginx----正式环境、测试环境，nginx解决了跨域问题

### 一、nginx代理配置方法：
使用nginx配置服务器环境：
 1. conf ==> nginx.conf中添加：
```
location /apisdk/ {这个地方对应JS文件中的url声明}{
	proxy_set_header Host $host;
	proxy_set_header X-Real-Ip $remote_addr;
	proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
	proxy_pass  http://115.236.19.138:9787/; 这里是服务器地址；
}
```
 2. 使用方法：
 ```
var url = "/apisdk/";
发送请求  url: url+"getFindList",
服务器地址：http://115.236.19.138:9787/getFindList;
```
测试环境与正式环境都按照相同的方法配置


### 二、nginx打印代理后的post请求参数：

由于代码都是运行在客户端中，当调试某种bug时常常需要复现错误场景，但是有些时候是无法还原的，那么在前端中能否有后台的日志系统么？答案是有的，那就是使用nginx的日志系统
#### 第一种方法：
```
场景及限制：
1. 必须使用nginx代理
2. nginx中想利用$request_body命令只有location中用到proxy_pass,fastcgi_pass,scgi_pass命令时，该变量才有值
3. 仅依赖nginx，不需要其他环境
```
步骤：
1. 在 nginx.conf的中http配置log_format 变量
```
http {
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';
                      
    log_format  dm escape=json '$remote_addr - $remote_user [$time_local] "$request" '
                               '$status $body_bytes_sent "$http_referer" '
                               '"$http_user_agent" "$http_x_forwarded_for" "$request_body"';
     
    access_log  /var/log/nginx/access.log main;
    
    
    include /etc/nginx/conf.d/*.conf;
}
```
说明：log_format 为必须，main和 dm为后面在记录 access_log和error_log中需要使用的变量名，后面的字符串为需要输出的日志字符串，注意在 **dm** 中有一个 **escape=json**表示以json字符串的格式输出，如果缺少此项则会输出类似：\x22 \x9B \x5C \x09 \x08 等字符，不便于阅读和处理。

2. 在conf.d下的的 .conf的server中，找到需要添加body日志的localtion中配置access_log和error_log
```
server {
    listen       8560;   # 定向流量SDK
    server_name  wxqas.yayaim.com;
    access_log  /var/log/nginx/localhost.access.log;
    error_log  /var/log/nginx/localhost.error.log;
    client_max_body_size     10m;

    location / {
            index index.html index.php;
            root /data/vueprograms/dingxiangsdk/dist;
            try_files $uri $uri/ /index.html;
    }#end
    location /dingxiangsdk/{
            proxy_set_header Host $host;
            proxy_set_header X-Real-Ip $remote_addr;
            proxy_set_header X-Forwarded-For $remote_addr;
            proxy_pass http://127.0.0.1:8091/;
            access_log /var/log/nginx/localhost.access.log dm;
    }#定向流量sdk
}

```
注意：
access_log一定要放到location中，不要直接替换server中的access_log，原因在于替换后其他的请求都不会被输出到日志中，只有post请求会放到日志中

#### 第二种方法：
使用lua语言来获取request_body，据说很方便，日后什么时候学习lua再研究这种方法
更新2018-09-14：阿里云服务器已经添加 openresty 集成了 nginx_lua

参考资料：
[nginx 获取 post body值](http://blog.csdn.net/yangguanghaozi/article/details/52367118)

[nginx日志中$request_body 十六进制字符(\x22\x9B\x5C\x09\x08...)完美解决方案](https://juejin.im/post/5949e0f7128fe1006a627cc0)


### 三、nginx配置html文件无缓存
```
location / {
        index index.html index.php; // 访问根目录默认文件
        root /data/gslh5;   // 代理根目录
        try_files $uri $uri/ /index.html; // vue使用
        add_header Cache-Control no-store; // 无缓存头
}
```