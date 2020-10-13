---
title: 安装mysql
date: 2017-08-29 10:16:00
tags:
  - windows
  - mysql
categories:
  - 开发环境
---
[mysql下载链接](https://dev.mysql.com/get/Downloads/MySQL-5.7/mysql-5.7.20-winx64.zip)

mysql 版本 5.7 没有 ini文件

1. 下载解压之后可以将该文件夹改名，放到合适的位置

2. 配置环境
```
我的电脑->属性->高级->环境变量
选择PATH,在其后面添加: 你的mysql bin文件夹的路径 (如:C:\Program Files\MySQL\MySQL Server 5.6\bin )
```
3. 通过DOS窗口输入net start mysql时，却提示服务名无效 解决

* 首先我们先进入mysql的安装目录下的bin目录
*  之后打开DOS命令窗口（一定要管理员身份打开，不然会报错），进入该目录下（一定要进入该目录，否则操作错误）。
* 输入命令：mysqld --install。提示安装服务成功。
* 如果要卸载服务，可以输入如下命令：mysqld --remove。提示移除服务成功。

4. MySQL 服务正在启动。MSQL服务无法启动。服务没有报告任何错误。请键入NET HELPMSG 3534 已获得更多的帮助。解决

* mysqld  --initialize 初始化data目录即可。

打开终端win+r输入cmd回车即可打开；
```
net start mysql

net stop mysql
```

如果使用root账号无法登陆：
```
1. 找到安装目录的data文件夹下的.err文件
2. 全文搜索  [Note] A temporary password is generated for root@localhost: password
就是password的位置；
```