---
title: ReactNative环境搭建
date: 2016-02-12 10:05:00
tags:
  - windows
  - react
categories:
  - 开发环境
---
一、 环境

1. node环境

2. android sdk

3. react-native-cli

3. Genymotion模拟器（暂时使用的是30天个人试用版，依赖VirtualBox）

二、启动

1. 启动React Native Server： 

```
react-native start
```

2. 打开VirtualBox，打开Genymotion模拟器

3. 另开一个cmd:

```
cd android

gradlew.bat installDebug
```

3. android\app\build\outputs\apk里面的apk文件拖到Genymotion中安装执行：

4. 浏览器打开下面链接：

```
http://localhost:8081/index.android.bundle?platform=android
```