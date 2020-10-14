---
title: ionic环境搭建
date: 2016-02-12 02:03:00
tags:
  - windows
categories:
  - 开发环境
---
# ionic环境搭建

date: 2016-02-12 09:58

* * * * *

### Ionic环境搭建，并创建工程

用于ionic与vue的UI框架vonic

[vonic文档](https://wangdahoo.github.io/vonic/docs/)

[源码](https://github.com/wangdahoo/vonic)

#### 1. 准备工作

下载 下载地址:[Node.js](https://nodejs.org/ "NodeJs" ),[Sublime Text3汉化破解版](http://pan.baidu.com/s/1gfnZsjD "流风清音" ) (密码1024),[java JDK](http://www.oracle.com/technetwork/java/javase/downloads/java-archive-downloads-javase7-521261.html?ssSourceSiteId=otncn#jdk-7u80-oth-JPR "java JDK" )（androidSDK运行环境），[Android SDK中国镜像](http://www.androiddevtools.cn/ "Android SDK" ) (Android编译);

#### 2. 配置环境变量

[Android SDK Manager和AVD Manager使用(win7_64bit下测试)](http://www.cnblogs.com/kangjianwei101/p/5621238.html "Android SDK Manager和AVD Manager使用(win7_64bit下测试)" )
[Android开发环境配置（win7_64bit）](http://www.cnblogs.com/kangjianwei101/p/5267044.html "Android开发环境配置（win7_64bit）" )
[java JDK 设置说明](http://jingyan.baidu.com/article/6dad5075d1dc40a123e36ea3.html "java JDK 设置说明" )
###### android 环境变量设置:
```
ANDROID_HOME    D:\Program Files\adt\sdk              （对应sdk路径）  
       path     %ANDROID_HOME%\platform-tools;  
       path     %ANDROID_HOME%\tools;  
```

#### 3. 安装ionic、cordova等，运行命令提示符（管理员） 输入
1.  将cordova和ionic包安装到全局环境中(可供命令行使用):

```
npm install -g cordova ionic

由于GFW，很多插件下载不下来，我们可以使用淘宝镜像来解决这个问题：

npm install -g cnpm --registry=https://registry.npm.taobao.org

安装完成后，以后所有的插件都使用cnpm这个命令来进行安装:

cnpm install -g ionic cordova  
```
2. 进入你要创建项目的路径：
```
cd E:\ionic\Project
```
3. 创建一个名为myApp的还有tabs的项目(ionic start project-name optional-template) 可选模板为sidemenu 侧滑、tabs 底部tab切换、blank 空白）其他模板点击[这里](https://github.com/driftyco?utf8=%E2%9C%93&query=ionic-starter "这里" ):
```
ionic start myApp tabs
```
4. 使用chrome调试,启动ionic服务端：
```
ionic serve    按提示选择一个网络设备
```
5. myApp就为项目名称,进入myApp这个文件夹:
```
cd myApp
```
6. 添加android平台:
```
ionic platform add android
```  
7. 生成androidapk:
```
ionic build android
```
8. 在android模拟器或真机中模拟:
```
ionic emulate android
```
9. 其中f和g可以合并为:
```
ionic run android
```
即生成apk，并在模拟器或真机中模拟。

#### 4. 更新ionic等
1. 更新cordova及ionic包
```
npm update -g cordova ionic
``` 
2. 更新已建ionic项目中的js类库，命令行中先进入项目所在目录，然后运行：
```
ionic lib update
```

#### 5. 展现ionic项目结果（显示在iOS和Android上的样式）
```
ionic serve --lab
```

#### 6. 查看ionic版本(当前最新版本为2.1.0)
```
ionic -v
```

#### 7. 部分android与ios表现不同问题
```
在www文件下的app.js文件中添加如下代码
.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    //设置默认返回按钮的文字 
    $ionicConfigProvider.backButton.previousTitleText(false).text('返回');
    // 设置全局 $http 超时
    $httpProvider.interceptors.push('timeoutHttpIntercept');
    // 配置选项卡，让tab在iOS和Android都显示在底部
    $ionicConfigProvider.tabs.position('bottom');
    $ionicConfigProvider.tabs.style('standard');
    //让nav标题在iOS和Android上都居中显示
    $ionicConfigProvider.navBar.alignTitle('center');

}
```
#### 8. ionic安装插件常用命令
```
常见插件查找网站：

http://ngcordova.com/docs/plugins

http://cordova.apache.org/plugins/

$ ionic plugin list //列出所有已安装插件

$ ionic plugin remove [插件名] //插件卸载

$ ionic plugin add [插件名|插件git地址] //插件安装

$ ionic –help //查看帮助文件
```

# Ionic集成crosswalk;提高用户体验(有问题,待测试)
#### 1. 网上测试优缺点
1. 优点：

```
4.4版本以下系统，性能明显提升，页面滚动流畅度大大提升，页面切换卡顿感减少。

4.4版本以上系统，性能稍有提升，页面滚动流畅度稍有提升，页面切换卡顿感减少。

5.0系统版本模拟器，性能提升很少，页面滚动流畅度有改观，页面切换无变化。
```
2. 缺点：

```
安装包体积增加约18mb(自身测试增加28mb)。
```
3. 原因：

```
4.4版本以下的系统使用的是Webkit内核,从4.4开始才使用Chromium内核,而5.0系统也不过使用了
Chromium 37内核,这里直接换成了Chromium 39,性能提升不言而喻。
```

#### 2. 集成crosswalk
1. 安装
```
cordova plugin add cordova-plugin-crosswalk-webview
```
2. 运行ionic项目
```
ionic run android
```
3. 调试ionic项目
```
通过ionic run android运行App之后，在谷歌浏览器中输入：
chrome://inspect
再然后点击inspect进入调试页面
```

# ionicconfig.xml的设置
#### 1. APP名字
```
config.xml--name标签
```
#### 2. 生成APP图标和启动画
```
resources =>icon.png（应用图标，最小192x192px，不带圆角）
            splash.png（启动屏幕，最小2208x2208px，中间区域1200x1200px）
            (可以是png、psd、ai)

执行 ionic resources
```
