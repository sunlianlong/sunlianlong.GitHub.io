---
title: django中用到的几种定时任务
date: 2018-09-04 09:51:00
tags:
  - python
  - 定时任务
categories:
  - 代码
---
一、django-crontab定时任务
1. django-crontab安装
```
# 官方链接：github : https://github.com/kraiz/django-crontab
pip install django-crontab
```

2. django-crontab加入 ---> 将django-crontab加入到settings.py的INSTALLED_APPS
```
# 工程的主settings.py

INSTALLED_APPS = (
'django_crontab',
...
)
```

3.  自定义函数形式：django-crontab定时运行函数
```
# 首先在原来的app 中（与view.py同级）新建一个cron.py （名字可以任意，其实也可以放在view.py中，新建文件方便管理。）
def test():
    print 123
    #你要执行的任务函数
```

4. 在 settings.py中的最后增加
```
# 每五分钟执行一次test这个程序，并输出日志到 /home/test.log 中‘>>’表示追加写入，’>’表示覆盖写入
CRONJOBS = [
    ('*/5 * * * *', 'appname.cron.test','>>/home/test.log')
]
```

5. 启动
![](images/screenshot_1516257439396.png)
```
# 将任务添加并生效
python manage.py crontab add 

# 显示当前的定时任务 
python manage.py crontab show

# 删除所有定时任务 
python manage.py crontab remove
```

二、APScheduler定时任务------2.1.2 版本
1. APScheduler安装
```
pip install apscheduler==2.1.2 
```

2. 配置与函数编写
```
# APScheduler直接在view.py中添加即可，无需在settings.py中添加
# app的views.py文件中
# mytask为总函数，如果需要定时执行其他多个函数放在mytask中执行即可

from apscheduler.scheduler import Scheduler  
sched = Scheduler()  

# seconds=60表示每60s执行一次
@sched.interval_schedule(seconds=60)  
def mytask():  
    print('每60s执行一次')
sched.start()
```

3. 启动
```
# 随django启动而启动
python manager.py runserver 0.0.0.0:8000  
```

三、APScheduler定时任务------3.5.1 （2018.1.18时最新版本）
```
# -*- coding: utf-8 -*-
# 【python】Python任务调度模块 – APScheduler  
# pip install apscheduler
# 文章：https://www.cnblogs.com/yueerwanwan0204/p/5480870.html
# http://www.cnblogs.com/perfe/p/6604194.html
from apscheduler.schedulers.blocking import BlockingScheduler
def my_job(x):
	print(datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S'), x)
sched = BlockingScheduler()
sched.add_job(func=aps_test, args=('定时任务',), trigger='cron', second='*/5')

sched.add_job(func=aps_test, args=('一次性任务',), next_run_time=datetime.datetime.now() + datetime.timedelta(seconds=12))

sched.add_job(func=aps_test, args=('循环任务',), trigger='interval', seconds=3)

sched.start()
```