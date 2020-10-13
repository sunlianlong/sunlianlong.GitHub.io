---
title: 查看日志
date: 2017-05-30 10:14:00
tags:
  - 调试
categories:
  - linux
---
在命令行下使用tail可以实时查看文件变化，该命令可用于查看实时日志
grep为linux下查找指定字符的命令，在windows下也有相似的命令，即 findstr
```
// 查看文件中带response关键字的日志

grep response all.log 在all.log查找带response的日志

// 会把filename里最尾部的内容显示在屏幕上,并且不断刷新,使你看到最新的文件内容

tail -f filename

// 过滤response关键字并实时打印 filename 信息 windows下grep替换成findstr
tail -f filename | grep resopnse

// 查看文件后10行内容

tail -10 /etc/passwd 或 tail -n 10 /etc/passwd 

```