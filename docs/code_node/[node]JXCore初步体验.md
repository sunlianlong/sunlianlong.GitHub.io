---
title: JXCore初步体验
date: 2018-05-17 05:18:00
tags:
  - node
  - 部署
categories:
  - 代码
---
# JXcore 体验

JXcore 这是一个开源项目，引入了包装和源文件和其他资源加密成JX包一个独特的功能，类似jar。

### JXcore 安装

安装**JXcore**很简单，只要只需下载并解压包，它提供了JX二进制入手。因此，让我们遵循以下步骤：

#### 步骤 1
从 [http://jxcore.com/downloads](http://jxcore.com/downloads)下载包或者[JXCore-win-64](https://raw.githubusercontent.com/jxcore/jxcore-release/master/0311/jx_win64v8.zip), 根据您的操作系统和计算机体系结构。

#### 步骤 2
解压下载的文件 jx_rh64.zip 复制JX二进制到 /usr/bin 或 根据您的系统设置任何其他目录。
```
$ unzip jx_rh64.zip
$ cp jx_rh64/jx /usr/bin
```
#### 第3步
最后，设置PATH变量适当地运行JX在你喜欢任何地方。
```
$ export PATH=$PATH:/usr/bin
```
#### 第4步
可以通过发出一个简单的命令验证安装。如果一切正常，那么你会发现它打印其版本号如下：
```
$ jx --version
v0.10.40
```
### 打包代码
考虑经过保存的所有文件，包括Node.js的主文件index.js和所有本地安装的模块以下目录项:
```
d----         2017/1/19     14:30            config
d----         2017/1/19     15:14            lib
d----         2017/1/19     17:41            logs
d----         2017/1/19     14:37            middlewares
d----         2017/1/19     17:23            models
d----         2017/1/19     14:26            node_modules
d----         2017/1/19     16:17            public
d----         2017/1/19     14:46            routes
d----         2017/1/19     17:38            views
-a---         2017/1/19     17:45       2572 index.js
-a---         2017/1/19     17:57       3249 npm-debug.log
-a---         2017/1/19     17:57        729 package.json
```
要打包上面的项目，只需要到这个目录里面并发出以下命令JX，假设index.js是Node.js项目项文件：
```
$ jx package index.js index
```
在这里，您可以替代索引的任何其他包名，就使用它，因为我不想让我的主文件名为index.jx。然而，上面的命令将包一切，将创建下列两个文件：

* index.jxp 这是一个中间文件，其中包含编译项目所需的完整的项目细节。

* index.jx 这是具有完整的软件包，并准备发现客户端或生产环境中的二进制文件。

### 启动JX文件

考虑最初Node.js的项目运行如下：
```
$ node index.js command_line_arguments
```
现在，编译使用JXcore包后，就可以开始如下：
```
$ jx index.jx command_line_arguments
```