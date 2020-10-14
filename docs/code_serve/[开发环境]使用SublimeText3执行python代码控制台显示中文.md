---
title: 使用SublimeText3执行python代码控制台显示中文
date: 2018-08-07 09:58:00
tags:
  - 工具
  - windows
categories:
  - 开发环境
---
用ST3编写Python想输出中文，根据什么都不显示，但自己开个cmd用python 加载此脚本却显示正常， 那么问题出在st3的编码问题上，可能默认的Python build没指定编码，找了半天也不知道其配置在哪里，索性自己新建一个：

Tools->Build system->New Build System...，输入如下json数据然后保存文件名为pythonCh.sublime-build：
    
 ```
{  
  "shell_cmd": "Python $file",  
  "file_regex": "^[ ]*File \"(...*?)\", line ([0-9]*)",  
  "selector": "source.python",  
  "encoding": "cp936"  
}  
```

如果你用的是简体中文系统，encoding一定要cp936而不是utf8。BuildSystem选择上面新建的Build 环境pythonCh, 然后Ctrl-B，中文应可以出来了