---
title: 操作shell
date: 2018-11-05 09:55:00
tags:
  - node
  - shell
  - xshell
categories:
  - 代码
---
尝试了三种操作shell,把各种应用环境和方法简单列一下：

1. pexpect  应用于自动填写账号、密码、交互的回答 本地操作
 ```
import pexpect
cmd = 'svn info %s --username %s --password %s' % (project.comeurl, project.comename, project.comepassword)
run = pexpect.spawn(cmd)
result = 1
try:
    index = run.expect(['Host not found', 'emporarily or accept', "Last Changed Date", 'could not connect to server', 'Username:', 'Repository not found:', 'RSA key fingerprint is SHA256', 'please relocate']) # expect可接受字符串和数组
    print(index)
    if index == 0:
        msg = 'svn域名不正确'
    elif index == 1:
        run.sendline('t')
        key = run.expect(['Last Changed Date', "don't exist", 'Username:', 'Repository not found:'])
        if key == 0:
            result = 0
            msg = '成功'
        elif key == 1:
            msg = 'svn地址不正确'
        elif key == 2:
            run.close(force=True)
            msg = '用户名或密码不正确'
        else:
            msg = 'svn地址不正确'
    elif index == 2:
        result = 0
        msg = '成功'
    elif index == 3:
        msg = '连接不上svn服务器，请检查内外网域名'
    elif index == 4:
        run.close(force=True)
        msg = '用户名或密码不正确'
    elif index == 5:
        msg = 'svn地址不正确'
    elif index == 6:
        run.sendline('yes')
        result = 0
        msg = '成功'
    else:
        msg = 'svn地址不正确'
except Exception as err:
    print(err)
    result = 1
    msg = '未知异常'
finally:
    data = {"result": result, "msg": msg}
    return HttpResponse(json.dumps(data))
 ```
2. subprocess 可查看保留每一步shell的输出，便于返回数据 本地操作
```
import subprocess
cmd = 'git clone %s %s/code' % (project.comeurl, path)
out = subprocess.call(cmd, shell=True) # out为0表示成功 1为失败
cmd = 'cd %s/code && git log --pretty=oneline' % (path)
vers=subprocess.getstatusoutput(cmd) # 返回一个数组，第一个值为0表示成功
print(vers)
```
3. paramiko 操作远程服务器