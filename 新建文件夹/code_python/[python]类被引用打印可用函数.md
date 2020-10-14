---
title: 类被引用打印可用函数
date: 2018-10-23 09:55:00
tags:
  - python
categories:
  - 代码
---
mi.py
```
import os

def mulitple():
	row = 1
	while row <= 9:
		col = 1
		while col <= row:
			print('%d * %d = %d' % (col, row, col * row), end='\n')
			col += 1
		print('')
		row += 1

if __name__ == '__main__':
	mulitple()
```
2.py
```
import mi

for x in mi.__dict__:
	print(x)
```
输出：
```
__name__
__doc__
__package__
__loader__
__spec__
__file__
__cached__
__builtins__
os
mulitple
```