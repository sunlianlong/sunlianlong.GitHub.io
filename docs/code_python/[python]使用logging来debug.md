---
title: 使用logging来debug
date: 2017-07-12 09:57:00
tags:
  - python
  - 调试
categories:
  - 代码
---
date: 2017-07-12 17:45

* * * * *

#### 在Python中最简单的莫过于使用print()来调试输出，但是有另外一种方法是使用logging来调试

```python
import logging
logging.basicConfig(level=logging.INFO)

# 然后在需要的地方使用
logging.info('-----输出---->>>>> %s' % bug)
```

logging允许你指定记录信息的级别，有debug，info，warning，error等几个级别，当我们指定level=INFO时，logging.debug就不起作用了。同理，指定level=WARNING后，debug和info就不起作用了。这样一来，你可以放心地输出不同级别的信息，也不用删除，最后统一控制输出哪个级别的信息。logging的另一个好处是通过简单的配置，一条语句可以同时输出到不同的地方，比如 console 和文件

#### 用 FileHandler 把记录写进文件中
```python
import logging

logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)

# create a file handler

handler = logging.FileHandler('hello.log')
handler.setLevel(logging.INFO)

# create a logging format

formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)

# add the handlers to the logger

logger.addHandler(handler)

logger.info('Hello baby')
```