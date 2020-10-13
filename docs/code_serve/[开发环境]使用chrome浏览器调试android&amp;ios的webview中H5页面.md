---
title: 使用chrome浏览器调试android&amp;ios的webview中H5页面
date: 2018-05-16 10:08:00
tags:
  - 调试
categories:
  - 开发环境
---
# 使用chrome浏览器调试android&ios的webview中H5页面

[谷歌浏览器调试内嵌Android WebView的H5页面](https://jingyan.baidu.com/article/1974b289448f78f4b1f7748d.html)

[谷歌浏览器调试内嵌IOS WebView的H5页面](https://jingyan.baidu.com/article/ca41422f06418b1eae99edb5.html)


### 先期条件：
IOS:
1. 打debug包而不是release包，证书也要用debug证书
2. npm 安装插件
```
PS C:>npm install -g remotedebug-ios-webkit-adapter
C:\Users\Administrator\AppData\Roaming\npm\remotedebug_ios_webkit_adapter -> C:\Users\Administrator\AppData\Roaming\npm\
node_modules\remotedebug-ios-webkit-adapter\out\index.js
+ remotedebug-ios-webkit-adapter@0.2.2
added 120 packages in 38.854s
```
3. 运行remotedebug_ios_webkit_adapter
```
PS C:>remotedebug_ios_webkit_adapter --port=9000
```
4. 找到remotedebug-ios-webkit-adapter包地址，在node_modules/vs-libimobile文件夹下新建 x64文件夹
 
5. 下载[ios-webkit-debug-proxy](https://github.com/google/ios-webkit-debug-proxy/releases/download/v1.8/ios-webkit-debug-proxy-1.8-win64-bin.zip)包后，解压该包到上述文件夹下
6. 在 x64 文件夹下运行ios_webkit_debug_proxy
```
PS C:\Users\Administrator\AppData\Roaming\npm\node_modules\remotedebug-ios-webkit-a
dapter\node_modules\vs-libimobile\x64>ios_webkit_debug_proxy

Listing devices on :9221
Unable to connect to 瀛欒繛榫欑殑 iPhone (b9a9c08475914881a0a82cda5125161a253491
95)
  Please verify that Settings > Safari > Advanced > Web Inspector = ON
```
7. ios 手机设置->Safari浏览器->高级 打开JavaScript和web检查器

android：

1. 4.4版本及以上
2. 在webView设置中加如下代码
```
if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT){
         webView.setWebContentsDebuggingEnabled(true);
    }
```
3. 打开 开发者调试

### 
1. 打开 chrome浏览器

chrome://inspect/#devices

2. 手机进入app的webview中H5页面

![](images/screenshot_1533704581790.png)

3. 点击 inspect

