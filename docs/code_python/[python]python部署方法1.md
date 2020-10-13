---
title: python部署方法1
date: 2018-10-26 09:54:00
tags:
  - python
  - 部署
categories:
  - 代码
---
# python3项目部署

### 先期工作：
1. 使用 python的 virtualenv 模块创建一个虚拟环境来作为工作环境 [方法传送门](https://www.liaoxuefeng.com/wiki/0014316089557264a6b348958f449949df42a6d3a2e542c000/001432712108300322c61f256c74803b43bfd65c6f8d0d0000)
2. 在本地导出当前项目依赖，在目标机器安装依赖
```
# 你可以用pip导出你的dependency:
$ pip freeze > requirements.txt
# 然后在通过以下命令安装dependency:
$ pip install -r requirements.txt
```

1. 本地文件复制到目标机器上
2. 删除各模块内 migrations 文件夹下除 __init__.py 外其他所有文件
3. 注意修改项目文件夹下 settings.py的 数据库设置
4. 执行下面两条命令初始化数据库
```
python manage.py makemigrations
python manage.py migrate
```
5. 执行下面命令创建超级管理员
```
# 首先我们要新建一个用户名，用来登陆管理网站，可以使用如下命令：
python manage.py createsuperuser
# 输入想要使用的用户名：
Username (leave blank to use 'administrator'): user01
# 输入email：
Email address: (在这里输入你的自己的邮箱帐号--可置空)
# 输入密码，需要输入两次，并且输入密码时不会显示出来(8位中英文混合)：
Password:
Password (again):
# 当两次密码都相同的时候，就会提示超级帐号创建成功。
Superuser created successfully.
```
6. 运行服务：
```
python manage.py runserver
```

[Django REST framework 的快速入门教程](http://blog.csdn.net/ppppfly/article/details/51082252)