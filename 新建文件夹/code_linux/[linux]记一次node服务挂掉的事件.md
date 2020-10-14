---
title: 记一次node服务挂掉的事件
date: 2018-08-15 10:10:00
tags:
  - node
  - mysql
  - 异常
categories:
  - linux
---
系统 centOS

首先进入服务器查看本地能否链接

由于是用pm2管理
pm2 list 列出所有用 PM2 启动的项目

pm2 logs 显示所有进程日志

0|www      | 数据库链接失败
0|www      | Error: connect ECONNREFUSED 127.0.0.1:3306
0|www      |     at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1161:14)
0|www      |     --------------------
0|www      |     at Protocol._enqueue (/home/node/markdownserver/node_modules/mysql/lib/protocol/Protocol.js:145:48)
0|www      |     at Protocol.handshake (/home/node/markdownserver/node_modules/mysql/lib/protocol/Protocol.js:52:23)
0|www      |     at Connection.connect (/home/node/markdownserver/node_modules/mysql/lib/Connection.js:130:18)
0|www      |     at Object.query (/home/node/markdownserver/database/db.js:8:20)
0|www      |     at /home/node/markdownserver/routes/index.js:14:5
0|www      |     at Layer.handle [as handle_request] (/home/node/markdownserver/node_modules/express/lib/router/layer.js:95:5)
0|www      |     at next (/home/node/markdownserver/node_modules/express/lib/router/route.js:137:13)
0|www      |     at Route.dispatch (/home/node/markdownserver/node_modules/express/lib/router/route.js:112:3)
0|www      |     at Layer.handle [as handle_request] (/home/node/markdownserver/node_modules/express/lib/router/layer.js:95:5)
0|www      |     at /home/node/markdownserver/node_modules/express/lib/router/index.js:281:22
PM2        | App [www] with id [0] and pid [27584], exited with code [1] via signal [SIGINT]
PM2        | Starting execution sequence in -fork mode- for app name:www id:0
PM2        | App name:www id:0 online

数据库挂了，查看数据库日志
查看数据库日志文件地址
cat /etc/my.cnf

tail -f /var/log/mysqld.log

```
2018-11-27T07:56:54.106090Z 0 [Warning] TIMESTAMP with implicit DEFAULT value is deprecated. Please use --explicit_defaults_for_timestamp server option (see documentation for more details).
2018-11-27T07:56:54.108089Z 0 [Note] /usr/sbin/mysqld (mysqld 5.7.20) starting as process 30517 ...
2018-11-27T07:56:54.120484Z 0 [Note] InnoDB: PUNCH HOLE support available
2018-11-27T07:56:54.120538Z 0 [Note] InnoDB: Mutexes and rw_locks use GCC atomic builtins
2018-11-27T07:56:54.120544Z 0 [Note] InnoDB: Uses event mutexes
2018-11-27T07:56:54.120548Z 0 [Note] InnoDB: GCC builtin __atomic_thread_fence() is used for memory barrier
2018-11-27T07:56:54.120552Z 0 [Note] InnoDB: Compressed tables use zlib 1.2.3
2018-11-27T07:56:54.120558Z 0 [Note] InnoDB: Using Linux native AIO
2018-11-27T07:56:54.134609Z 0 [Note] InnoDB: Number of pools: 1
2018-11-27T07:56:54.134751Z 0 [Note] InnoDB: Using CPU crc32 instructions
2018-11-27T07:56:54.237143Z 0 [Note] InnoDB: Initializing buffer pool, total size = 128M, instances = 1, chunk size = 128M
2018-11-27T07:56:54.237219Z 0 [ERROR] InnoDB: mmap(137428992 bytes) failed; errno 12
2018-11-27T07:56:54.237230Z 0 [ERROR] InnoDB: Cannot allocate memory for the buffer pool
2018-11-27T07:56:54.237237Z 0 [ERROR] InnoDB: Plugin initialization aborted with error Generic error
2018-11-27T07:56:54.237248Z 0 [ERROR] Plugin 'InnoDB' init function returned error.
2018-11-27T07:56:54.237254Z 0 [ERROR] Plugin 'InnoDB' registration as a STORAGE ENGINE failed.
2018-11-27T07:56:54.237261Z 0 [ERROR] Failed to initialize plugins.
2018-11-27T07:56:54.237265Z 0 [ERROR] Aborting

2018-11-27T07:56:54.237288Z 0 [Note] Binlog end
2018-11-27T07:56:54.436650Z 0 [Note] Shutting down plugin 'CSV'
2018-11-27T07:56:54.436951Z 0 [Note] /usr/sbin/mysqld: Shutdown complete
```

仔细阅读内容，有一句 Cannot allocate memory for the buffer pool 指明挂掉原因，内存不足
查看内存使用
free -m
              total        used        free      shared  buff/cache   available
Mem:            992         781          77          18         133          53
Swap:             0           0           0

只剩77MB内存了

重启服务器，重启相关服务