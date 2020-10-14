---
title: 批量修改图片名称
date: 2018-09-15 09:56:00
tags:
  - python
  - 修改图片名称
  - 批量
categories:
  - 代码
---
import os
filenames = os.listdir(os.getcwd()) # 当前执行文件所在目录下的所有文件、文件夹集合

for name in filenames:
	if '.jpg' in name:
		pass
	else:
		filenames.remove(name)

for num in range(0,len(filenames)):
	if(num<10):
		print()
		print(filenames[num])
		os.rename(filenames[num],'0'+str(num)+'.jpg')
	else:
		os.rename(filenames[num],str(num)+'.jpg')