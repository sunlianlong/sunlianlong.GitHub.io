---
title: win7开启睡眠模式不断网
date: 2018-04-18 10:07:00
tags:
  - 调试
  - windows
categories:
  - 开发环境
---
# win7睡眠模式开启不断网
### 一、注册表
1. 点击开始，在运行命令行中输入regedit，打开系统注册表
![](images/screenshot_1533802551789.png)![](images/screenshot_1533802576135.png)
2. 在注册表中，依次点击进入 HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SessionManager\Power。
 ![](images/screenshot_1533802609750.png)
 ![](images/screenshot_1533802641040.png)
 3. 在右侧窗口空白处单击鼠标右键，新建一个“DWORD（32-位）值”，并命名为“AwayModeEnabled”。
 ![](images/screenshot_1533802723686.png)
 ![](images/screenshot_1533802739438.png)
 
 4. 双击AwayModeEnabled，在“数值数据”里输入“1”（16进制），然后点击“确定”
 ![](images/screenshot_1533802770020.png)
 ![](images/screenshot_1533802786401.png)
 ### 二、电源管理
1. 打开控制面板，找到电源选项。
![](images/screenshot_1533802836997.png)
2. 找到目前正在使用的电源计划，点击“更改计划设置”，在新窗口中选择“更改高级电源设置”。其中，“关闭显示器”即多长时间之后显示器自动关闭，可根据自己需要进行设置。
![](images/screenshot_1533802880487.png)
![](images/screenshot_1533802896702.png)

3. 找到“睡眠”选项，对于台式机来说，将“在此时间后休眠”设置为从不。对于笔记本的话也类似，将其设置为从不。
![](images/screenshot_1533802929896.png)

### 三、设备管理

1. 单击开始按钮![](images/screenshot_1533802263586.png)按钮，在“计算机”选项上单击右键，选择“属性”选项。

2. 在“系统”窗口中单击左上角的“设备管理器”链接文字，打开“设备管理器”窗口：如图1所示
![](images/screenshot_1533802272553.png)

3. 展开“网络适配器”项目，在网卡对应的项目上单击右键，选择“属性”选项：如图2所示
![](images/screenshot_1533802283729.png)

4. 在弹出的对话框中打开“电源管理”选项卡，然后取消选择“允许计算机关闭此设备以节约电源”复选框，最后单击“确定”按钮即可：如图3所示
![](images/screenshot_1533802319267.png)



## [关于teamviewer](https://www.teamviewer.com/zhCN/)
teamviewer是一个远程管理软件，设置个人密码
![](images/screenshot_1533803164162.png)
![](images/screenshot_1533803199228.png)
