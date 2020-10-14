---
title: log4js记录日志
date: 2017-10-25 02:23:00
tags:
  - node
  - 日志
categories:
  - 代码
---
2017.10.25

[Log4js原理解析](http://blog.csdn.net/hfty290/article/details/42844085)
[Log4js配置详解](http://blog.csdn.net/hfty290/article/details/42843737)
[Log4js多进程陷阱与避免](http://blog.csdn.net/hfty290/article/details/42843303)

由于log4js更新，v2版本 replaceConsole 属性被移除了，写此文章记录一下使用方法
```
const log4js = require("log4js");
const log4js_config = require("./logConf.js");
log4js.configure({
  "appenders": {
    "console": {
      "type": "console"
    },
    "info": {
      "type": "dateFile",
      "filename": "./logs/all.log",
      "encoding": "utf-8",
      "pattern": ".yyyy-MM-dd.log",
      "maxLogSize": 10,
      backups: 5,
      "layout": {
        "type": "pattern",
        "pattern": "[%d{ISO8601}][%5p  %z  %c] %m"
      },
      "compress": true
    },
  },
  "categories": {
    "default": {
      "appenders": [
        "console",
        "info"
      ],
      replaceConsole: true,
      "level": "all"
    }
  }
});
<!-- getLogger为空默认使用categories的default对象 -->
const logger = log4js.getLogger();
<!-- 自己实现console到日志文件中 -->
console.log = logger.info.bind(logger);
logger.info("this is info");
logger.warn("this is warn");
logger.debug("this is debug");
logger.error("this is error","1031d0k10k",11,'d');
console.log(11111111111111)
```