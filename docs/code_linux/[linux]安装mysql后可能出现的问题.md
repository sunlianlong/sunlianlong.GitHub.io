---
title: 安装mysql后可能出现的问题
date: 2018-04-12 10:13:00
tags:
  - mysql
categories:
  - linux
---
登陆后进行操作提示You must SET PASSWORD before executing this statement 
```
mysql> create database yan1; 
ERROR 1820 (HY000): You must SET PASSWORD before executing this statement 
mysql> SET PASSWORD = PASSWORD('123456'); 
Query OK, 0 rows affected (0.03 sec) 

mysql> create database yan1; 
Query OK, 1 row affected (0.00 sec) 
```

使用 Navicat 连接不了数据库 报错:1130-host ... is not allowed to connect to this MySql server
```
可能是你的帐号不允许从远程登陆，只能在localhost。这个时候只要在localhost的那台电脑，登入mysql后，更改 "mysql" 数据库里的 "user" 表里的 "host" 项，从"localhost"改称"%"

sudo mysql -u root -p

mysql>use mysql;

mysql>update user set host = '%' where user = 'root';

mysql>select host, user from user;

mysql>FLUSH   PRIVILEGES;
```