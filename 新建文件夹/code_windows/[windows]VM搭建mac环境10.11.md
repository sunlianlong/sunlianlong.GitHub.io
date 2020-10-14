---
title: VM搭建mac环境10.11
date: 2016-03-11 10:06:00
tags:
  - windows
  - 虚拟机
categories:
  - 开发环境
---
# VM搭建mac环境10.11

date: 2016-02-12 09:58

* * * * *

[来源百度经验:Windows下 VM12虚拟机安装OS X 10.11(详细教程)](http://jingyan.baidu.com/article/363872ec206a356e4ba16f30.html)

### 前提
* 下载软件securable
* 运行该软件，测试结果能安装64位系统，hardware为 YES,并且LOCKED ON的话你就可以安装黑苹果系统了,如果不是下图就不用向后面看了
![](images/screenshot_1501039759791.png)
* 开机时进入BIOS界面找到Configuration > Intel Virtual Technology > Enabled 即可
* 主板不一样其BIOS中显示关键词也不一样的，主要是找到Virtual或Virtualization将其设置为Enabled。
![](images/screenshot_1501039789314.png)
### 工具/原料
* Mac OS X 10.11 镜像文件（链接：http://pan.baidu.com/s/1pL8HE59 密码：cq4d）（此镜像为网络收集，如果觉得有问题自己找谢谢。）
*  unlocker208文件（链接：http://pan.baidu.com/s/1bpftVjT 密码：dp2g）
* VMware Workstation12（http://blog.sina.com.cn/s/blog_af49f8090102wqmw.html）
### 方法/步骤
1.  首先下载安装 vmware workstation12，先不忙运行软件。
![](images/screenshot_1501039813829.png)
2. 下载解压unlocker208文件，找到点击运行 **win-install.cmd** 这一步很关键，否则vm12就无法识别OS X系统
![](images/screenshot_1501039833275.png)
![](images/screenshot_1501039859041.png)
3.  然后打开运行vmware workstation12，选择创建新的虚拟机
![](images/screenshot_1501039875127.png)
4.  选择典型，然后下一步
![](images/screenshot_1501039913470.png)
5.  选择安装程序光盘映像文件，点击选择CDR镜像文件路径 . **当然你也可以自己是用自己的镜像。但是最好是下载后缀名为cdr的**
![](images/screenshot_1501039938907.png)
6.  选择Apple Mac OS X ，然后选择OS X 10.11 版本 ，**如果第二步unlocker文件没有处理好的话，这个地方可能就不会出现Apple Mac OS X。如果不行，可以多下载几个unlocker试试**
![](images/screenshot_1501039954898.png)
7.  然后依次根据 **新建虚拟机向导** 提示选择，最后完成创建。
![](images/screenshot_1501039980568.png)
![](images/screenshot_1501039993615.png)
![](images/screenshot_1501040009530.png)
8.  然后点击开启虚拟机
![](images/screenshot_1501040028312.png)
9.  首次运行时，会出现错误提示。这时不要着急，先关闭运行的虚拟机
![](images/screenshot_1501040040844.png)
10.  找到在之前的创建新的虚拟机时， **设置的虚拟机位置** 。打开该目录，找到 **OS X xx.xx.vmx** 文件（这里的文件是：OS X 10.11.vmx），右键用记事本方式打开，找到 **smc.present = “TRUE”** 
![](images/screenshot_1501040055071.png)
11.  在 **smc.present = “TRUE”** 后面，手动添加一句 **smc.version = 0** 然后保存关闭，再重新启动虚拟机，就不会报错了
![](images/screenshot_1501040068470.png)
12.  如果在安装中出现 **蓝屏boot manager** 的现象， 一般都是 **下载的镜像文件有问题** 导致 。建议你可以重新找些cdr镜像文件，我这里提供的镜像文件已经测试过，完美通过
![](images/screenshot_1501040078285.png)
13.  最后根据安装向导提示安装操作。然后到安装OS Ｘ时，会提示 **ＯS X Base System 没有足够空间安装** 
![](images/screenshot_1501040094244.png)
![](images/screenshot_1501040101696.png)
14.  这时点击屏幕上方的 **实用工具** 选项。选择 **磁盘工具**  。**选中 vmware workstation SATA hard drive media**
![](images/screenshot_1501040109347.png)
15.  选择 **抹除** 选项，格式选择 **OSＸ扩展日志式** ，方案选择 **ＧＵＩＤ**。抹除后，退出 **磁盘工具**
![](images/screenshot_1501040119090.png)
16.  这时会再次在安装 **OSX**，这时会出多出现一个盘符，选择这个盘安装
![](images/screenshot_1501040129169.png)
17.  慢慢等待安装成功！！！！！！
### 注意事项 
*  **os x 系统镜像**文件 一般下载**CDR**格式的
*  在运行 win-install.cmd时，可以先完成把**vm12**退出完