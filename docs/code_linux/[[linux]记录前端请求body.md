---
title: 利用nginx日志功能记录前端请求body
date: 2018-04-12 10:12:00
tags:
  - nginx
categories:
  - linux
---
业务请求中如何携带hash值，并不会带到服务器上，仅能在浏览器中获取到hash值，使用 log_format 来格式化日志数据，在access_log和error_log地址后面加上log_format的名称。

[Nginx内置变量以及日志格式变量参数详解](http://www.cnblogs.com/wjoyxt/p/6178731.html)

```
http {
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';
    log_format  dm escape=json '$remote_addr - $remote_user [$time_local] "$request" '
                               '$status $body_bytes_sent "$http_referer" '
                               '"$http_user_agent" "$http_x_forwarded_for" req_body:"$request_body"';
    access_log  /var/log/nginx/access.log main;
    server {
    	listen       8560;# 业务线
    	server_name  www.sll.com;
    	access_log  /var/log/nginx/sll8560.access.log main;
    	error_log  /var/log/nginx/sll8560.error.log;
    	client_max_body_size     10m;

    	location / {
            index index.html index.php;
            root /data/webstatic/;
            try_files $uri $uri/ /index.html;
    	}#end
    	location /dingxiangsdk/{
            proxy_set_header Host $host;
            proxy_set_header X-Real-Ip $remote_addr;
            proxy_set_header X-Forwarded-For $remote_addr;
            proxy_pass http://127.0.0.1:8091/;
            access_log /var/log/nginx/sll8560.access.log dm;
    	}#业务代理
	}                        
}
```