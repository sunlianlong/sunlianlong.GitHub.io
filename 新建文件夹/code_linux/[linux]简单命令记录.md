---
title: 简单命令记录
date: 2016-07-17 10:14:00
tags:
  - 命令
  - shell
  - xshell
categories:
  - linux
---
```
vim 文件名  打开文件  :set number 显示行号  :q!退出  :wq!保存退出

find -name '关键字'  查找文件

ls --a 查看隐藏文件

临时将当前账号权限和环境提升至root  sudo su root

使用chmod改变文件访问许可权限
chmod -R 777 文件目录  
chmod -r 777 文件目录  
常见权限：
	444 r--r--r--
	600 drw-------
	644 drw-r--r--
	666 drw-rw-rw-
	700 drwx------
	744 drwxr--r--
	755 drwxr-xr-x
	777 drwxrwxrwx
rm -rf filename 删除指定文件/文件夹（包含所有子文件）不显示对话框
mv 原文件夹/文件  目标文件夹  移动文件/文件夹
cp-r 原文件夹/文件  目标文件夹  复制文件/文件夹

sudo su root 当前账号权限提升到root账号


sz命令是利用ZModem协议来从Linux服务器传送文件到本地，一次可以传送一个或多个文件。相对应的从本地上传文件到Linux服务器，可以使用rz命令

常用参数

-a 以文本方式传输（ascii）。

-b 以二进制方式传输（binary）。

-e 对控制字符转义（escape），这可以保证文件传输正确。

如果能够确定所传输的文件是文本格式的，使用 sz -a files

如果是二进制文件，使用 sz -be files

sz filename
```