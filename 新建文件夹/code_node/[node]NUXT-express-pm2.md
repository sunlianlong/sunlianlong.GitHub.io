---
title: NUXT-express-pm2
date: 2017-08-18 07:23:00
tags:
  - node
  - vue
categories:
  - 代码
---
生成模板项目
```
vue init nuxt/express firstnuxtexpress
```
下载依赖
```
npm install
```
编译
```
npm run build
```
测试运行
```
npm run start
```
下载node的进程管理pm2
```
npm install -g pm2
```
使用pm2启动应用
```
pm2 start ./build/main.js
```
![](images/screenshot_1502941666989.png)


**PM2**主要命令：
```
$ npm install pm2 -g            # 命令行安装 PM2
$ pm2 start app.js              # 启动进程，自动重启
$ pm2 start app.js -i 4         # 后台运行pm2，启动4个进程
$ pm2 start app.js --name="api" # 开启进程并命名为 "api"
$ pm2 start app.js --watch      # 当文件变化时自动重启
$ pm2 start script.sh           # 开启 bash script
 
$ pm2 list                      # 列出所有用 PM2 启动的项目
$ pm2 monit                     # 监视所有进程
$ pm2 show [app-name]           # 显示指定名称进程的所有信息
 
$ pm2 logs                      # 显示所有进程日志
$ pm2 logs [app-name]           # 显示指定项目进程日志
$ pm2 flush						# 清空所有日志
 
$ pm2 stop all                  # 停止所有进程
$ pm2 stop 0                    # 停止id为0的进程
$ pm2 restart all               # 重启所有进程
$ pm2 reload all                # 0秒停机重载进程 (用于 NETWORKED 进程)
$ pm2 gracefulReload all        # 优雅地重新加载集群模式中的所有应用程序
$ pm2 delete all                # 杀死全部进程
$ pm2 delete 0                  # 杀死指定进程0
$ pm2 scale api 10              # 把api的应用扩展到10个实例
$ pm2 reset [app-name]          # 重置[app-name] 重启数量
 
$ pm2 startup                   # 创建开机自启动命令
$ pm2 save                      # 保存当前应用列表
$ pm2 resurrect                 # 重新加载保存的应用列表
$ pm2 update                    # 保存项目，杀掉pm2所有进程并重新启动
$ pm2 generate                  # 生成一个示例JSON配置文件
```