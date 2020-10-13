---
title: 操作php
date: 2018-04-11 10:13:00
tags:
  - php7
  - php
categories:
  - linux
---
```
php启动命令：systemctl start httpd.service 关闭 systemctl stop httpd.service restart重启
文件目录：/var/www/html/ 默认80端口
7.0以上启动mysql  systemctl start mysql  / systemctl stop mysql

redis启动与关闭 service redis start / service redis stop
tar安装目录：/usr/local/src/redis-3.2.9/
tomocat 进入目录执行 ./startup.sh和./shutdown.sh
tar安装目录：/usr/local/tomcat/bin/ 默认8080端口
```