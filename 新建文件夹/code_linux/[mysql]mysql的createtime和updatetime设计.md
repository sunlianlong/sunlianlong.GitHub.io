---
title: mysql的createtime和updatetime设计
date: 2018-07-18 10:11:00
tags:
  - mysql
  - 时间格式化
  - xshell
categories:
  - linux
---
sql执行下面类似这样的代码建表
```
CREATE TABLE `device` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    `toid` INT(10) UNSIGNED NOT NULL DEFAULT '0' COMMENT 'toid',
    `createtime` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `updatetime` TIMESTAMP NOT NULL COMMENT '最后更新时间',
    PRIMARY KEY (`id`),
    UNIQUE INDEX `toid` (`toid`)
)
COMMENT='设备表'
COLLATE='utf8_general_ci'
ENGINE=InnoDB;
```
然后在插入时插入当前时间到createtime和updatetime,
更新时间只更新updatetime;
```
insert device set toid=11,createtime=’2012-11-2 10:10:10’,updatetime=’2012-11-2 10:10:10’

update device set toid=22,updatetime=’2012-11-2 10:10:10’ where id=1
```

[MYSQL删除表的记录后如何使ID从1开始](http://www.cnblogs.com/no7dw/archive/2010/04/16/1713240.html)