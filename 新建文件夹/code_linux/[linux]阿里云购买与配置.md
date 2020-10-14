---
title: 阿里云购买与配置
date: 2018-03-09 10:12:00
tags:
  - 阿里云
  - 环境搭建
categories:
  - linux
---
[CentOS 7.4 下配置 LNMP](https://jingyan.baidu.com/article/215817f7a10bfb1eda14238b.html)

[Centos7 PHP的安装和配置](https://www.cnblogs.com/lightsrs/p/7899676.html)

[CentOS 6.9 安装php5.6](http://blog.csdn.net/zhaozuosui/article/details/48394409)

由于购买的是阿里云的ECS服务器，所以需要到阿里云官网ECS控制台配置一下安全组，[经典案例](https://help.aliyun.com/document_detail/58746.html?spm=5176.doc25475.2.6.5N1Y9y#web)


在 CentOS 7 系统上:

$ sudo systemctl restart nginx
$ sudo systemctl restart php-fpm 

在 CentOS 6 系统上:

$ sudo service nginx restart
$ sudo service php-fpm restart 