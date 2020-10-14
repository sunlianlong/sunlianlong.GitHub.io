---
title: sublime3插件记录
date: 2017-04-12 10:01:00
tags:
  - windows
  - 工具
categories:
  - 开发环境
---
# sublime3

date: 2016-02-12 09:58

* * * * *

使用的是[流风清音的汉化版本](http://haojian138.blog.163.com/)


#sublime Text3个人常用的插件说明

### 使用说明：

在github上面下载到本地解压到sublime Text3安装路径下的data/package/ 下

## AutoFileName
文件路径补全
![""](http://img.blog.csdn.net/20160311102513521)

下载地址：[github](https://github.com/BoundInCode/AutoFileName "AutoFileName" )

#### BracketHighlighter
高亮显示匹配的括号、引号和标签
![""](http://images2015.cnblogs.com/blog/296669/201512/296669-20151211152539199-1823010647.png)

下载地址：[github](https://github.com/facelessuser/BracketHighlighter/ "BracketHighlighter" )

#### emmet
html/CSS快速编辑（原名Zen Coding）
![""](http://images2015.cnblogs.com/blog/296669/201512/296669-20151211160108058-1510778042.gif)

下载地址：[github](https://github.com/sergeche/emmet-sublime "emmet" )

#### Less
less的语法高亮

下载地址：[github](https://github.com/danro/LESS-sublime/ "Less" )

#### less2Css	
安装成功后就可以保存时自动编译LESS

```
下面安装Less2Css,跟上面一样ctrl+shift+p>install Package搜索Less2Css按Enter就可以安装了,
Less2Css插件依赖lessc这个工具,在windows下可以下载或者用git cloneless.js-windows到本地目
录.然后把目录地址加入到环境变量PATH的中,如D:\less.js-windows-master：
```

![""](http://www.daqianduan.com/wp-content/uploads/2015/08/win10.jpg)

```
设置好之后,通过快捷键 Windows徽标键+R键 调出运行窗口,输入cmd,在命令行中输入lessc,如果有如下提示则表示设置成功:
C:\Users\Fdream>lessc
lessc.wsf: no input files
Usage:
Single file: cscript //nologo lessc.wsf input.less [output.css] [-compre
Directory: cscript //nologo lessc.wsf inputdir outputdir [-compress]

(上面的这个步骤有时候cmd时会出现错误,打印不出来,可以略过)

这时关掉Sublime Text 3再重新打开就可以在Sublime Text 3中打开或者新建一个less文件,按下
Ctrl+S保存,此时应该会在less文件的相同目录下生成同名的css文件.

来段代码试试吧:

@width:300px;
@fonts:12px bold 'Source Code Pro', Menlo, Consolas, Monaco, monospace;
.header{
    color:#5c5c5c;
    .title{
        font:@fonts;
        width:@width;
    }
    .content{
        width:@width;
        height:300px;
    }
}
.footer{
    font:@fonts;
    width:@width + 100px;
}
```

#### side Bar

SideBarEnhancements 
侧边栏增强

```
安装此插件,点击工具栏的preferences > package setting > side bar > Key Building-User,键
入以下代码,这里设置按Ctrl+Shift+C复制文件路径,按F1~F5分别在firefox、chrome、IE、safari、
opera浏览器预览效果,当然你也可以自己定义喜欢的快捷键,最后注意代码中的浏览器路径要以自己
电脑里的文件路径为准.

[
    { "keys": ["ctrl+shift+c"], "command": "copy_path" },
    //firefox
    { "keys": ["f1"], "command": "side_bar_files_open_with",
             "args": {
                "paths": [],
                "application": "C:\\software\\Mozilla Firefox\\firefox.exe",
                "extensions":".*" //匹配任何文件类型
            }
    },
    //chrome
    { "keys": ["f2"], "command": "side_bar_files_open_with",
            "args": {
                "paths": [],
                "application": "C:\\Google\\Chrome\\Application\\chrome.exe",
                "extensions":".*"
            }
     },
    //ie
     { "keys": ["f3"], "command": "side_bar_files_open_with",
             "args": {
                "paths": [],
                "application": "C:\\Program Files\\IE\\iexplore.exe",
                "extensions":".*"
            }
    },
    //safari
    { "keys": ["f4"], "command": "side_bar_files_open_with",
            "args": {
                "paths": [],
                "application": "C:\\software\\Browser\\Safari\\safari.exe",
                "extensions":".*"
            }
     },
     //opera
     { "keys": ["f5"], "command": "side_bar_files_open_with",
             "args": {
                "paths": [],
                "application": "C:\\software\\Browser\\opera\\opera.exe",
                "extensions":".*"
            }
    }
]
```

    下载地址：[github](https://github.com/titoBouzout/SideBarEnhancements "side Bar" )

#### SublimeTmpl
快速生成文件模板，html、css、javascript、php、python、ruby六种类型

```
SublimeTmpl默认的快捷键
ctrl+alt+h html
ctrl+alt+j javascript
ctrl+alt+c css
ctrl+alt+p php
ctrl+alt+r ruby
ctrl+alt+shift+p python
```

下载地址：[github](https://github.com/kairyou/SublimeTmpl "SublimeTmpl" )

#### tag
HTML/XML标签缩进、补全和校验
    下载地址：[github](https://github.com/titoBouzout/Tag "Tag" )

#### Autoprefixer
浏览器前缀支持(Node.js依赖)
    下载地址：[github](https://github.com/postcss/autoprefixer "Autoprefixer" )

#### sublimeCodeIntel
代码自动完成引擎
    下载地址：[github](https://github.com/SublimeCodeIntel/SublimeCodeIntel "sublimeCodeIntel" )

#### sublimeLinter
代码错误提示

```
1. nodeJs https://nodejs.org/en/下载Node.js，并进行安装 
2. cmd(管理员模式) npm install-g jshint   JS语法查错
3. jshint-v   可查看安装的jshint版本 
4. npm install -g csslint   css语法查错
5. csslint --version   可查看安装的csslint版本 
6. 最后 回到你的sublime，体验语法查错强大吧
```

教程[wiibii博客](http://www.wiibil.com/website/sublimelinter-jshint-csslint.html "sublimeLinter" )

下载地址：[github](https://github.com/SublimeLinter "sublimeLinter" )（包含多个分支）


#### codeFormatter
默认快捷键ctrl+alt+F，默认可以对html、js、css格式代码

下载地址：[github](https://github.com/akalongman/sublimetext-codeformatter/ "codeFormatter" )

#### JsFormat
js序列化恢复未压缩时候的排版。按快捷键Ctrl+Alt+F即可

下载地址：[github](https://github.com/jdc0589/JsFormat "JsFormat" )

#### color Highlighter
颜色功能 (装上无效果，期待测试)
![""](http://images2015.cnblogs.com/blog/296669/201512/296669-20151211153521699-315615562.gif)

下载地址：[github](https://github.com/Monnoroch/ColorHighlighter "ColorHighlighter" )

#### MarkDown Editing 
支持Markdown语法高亮；支持Github Favored Markdown语法；自带3个主题 
#### OmniMarkupPreviwer 
实时在浏览器中预览

```
Ctrl+Alt+O: Preview Markup in Browser. 
Ctrl+Alt+X: Export Markup as HTML. 
Ctrl+Alt+C: Copy Markup as HTML.
```

## 将Sublime Text3添加到右键菜单中

把以下代码，复制到SublimeText3的安装目录，然后重命名为：sublime_addright.inf，然后右击安装就可以了。

```
[Version]
Signature="$Windows NT$"

[DefaultInstall]
AddReg=SublimeText3

[SublimeText3]
hkcr,"*\\shell\\SublimeText3",,,"用 SublimeText3 打开"
hkcr,"*\\shell\\SublimeText3\\command",,,"""%1%\sublime_text.exe"" ""%%1"" %%*"
hkcr,"Directory\shell\SublimeText3",,,"用 SublimeText3 打开"
hkcr,"*\\shell\\SublimeText3","Icon",0x20000,"%1%\sublime_text.exe, 0"
hkcr,"Directory\shell\SublimeText3\command",,,"""%1%\sublime_text.exe"" ""%%1"""
```

## 删除sublime Text3右键菜单

把以下代码，复制到SublimeText3的安装目录，然后重命名为：sublime_delright.reg，然后双击就可以了

```
Windows Registry Editor Version 5.00
[-HKEY_CLASSES_ROOT\*\shell\SublimeText3]
[-HKEY_CLASSES_ROOT\Directory\shell\SublimeText3]
```