---
title: php构建JSON对象方法
date: 2018-09-11 09:45:00
tags:
  - php
  - JSON
categories:
  - 代码
---
PHP 生成JSON 格式主要使用json_encode()函数。这个函数的输入参数支持PHP数组和对象类型。
查阅网上的例子通常都是使用数组的，也有个别使用对象生成。但实际项目中，我们要生成的JSON格式往往比较复杂，有多层的嵌套，而且通常需要包含一个json根节点。在这种情况下如果使用数组其实是非常困难的，因为把数据包装成适合的数组格式本就非常困难。


怎么办呢？答案是使用对象进行封装，利用PHP非常松散的弱类型特点，将可以非常轻松并且清晰的实现JSON进行生成。


1.首先定义一个类，名称随便，只要一个空的类定义即可，我习惯命名为JsonObject。
```
class JsonObject
{
}
```

2.然后就可以使用这个类啦。
   举个简单的例子，比如我们要生成这样一个json字符串：
```
   {"Person"：{"Name"："ZangKaifeng","Sex":"男"}}
```

   代码如下：
   
```
$jsonString=new JsonObject();
$jsonString->Person=new JsonObject();
$jsonString->Person->Name="ZangKaifeng";
$jsonString->Person->Sex=urlencode("男");

echo urldecode( json_encode($jsonString));
```
  大功告成了。是不是非常的简单和结构清晰呢？如果里面遇到json数组类型的也是一样的处理方式。以后遇到再复杂的JSON格式也不怕了。


运行以后问题又来了，输出的json字符串中文是类似这种：\u8fd9，不是我们想要的中文。怎么办呢？需要先对非英文字符进行编码，使用urlencode函数。然后在对生成的json进行解码就可以了，具体修改代码如下：
```
$jsonString=new JsonObject();
$jsonString->Person=new JsonObject();
$jsonString->Person->Name="ZangKaifeng";
$jsonString->Person->Sex="男";

echo json_encode($jsonString);
```

本以为没问题了，再输出网址的时候又遇到到了问题，例如要在json中包含一个网址： **http://www.abc.com/a.jpg** ，出问题了。经过json_encode函数后，/ 都被加了转移字符，变成这个样子： **http:\/\/www.abc.com\/a.jpg** 。如何解决呢？办法如下：
json_encode函数有两个参数，我们添加第二个参数就可以了。不过这个只能应用在PHP 5.4.0以上。参数由以下常量定义：
```
JSON_HEX_QUOT, JSON_HEX_TAG, JSON_HEX_AMP, JSON_HEX_APOS, 

JSON_NUMERIC_CHECK, JSON_PRETTY_PRINT,JSON_UNESCAPED_SLASHES, 

JSON_FORCE_OBJECT, JSON_UNESCAPED_UNICODE
```

为了解决我们的问题，只需要使用JSON_UNESCAPED_SLASHES常量即可，代码如下：
```
json_encode($jsonString,JSON_UNESCAPED_SLASHES);
```


我们发现这些常量里有一个**JSON_UNESCAPED_UNICODE**，这个名字看起来跟编码有关系，没错，使用这个常量就可以解决我们之前说的中文编码的问题了，可以抛弃urlencode和urldecode了，真是太棒了。


再补充一句：json_encode只支持两个参数，所以要使用多个常量怎么办呢？办法就是多个常量直接用|分隔。如下代码就可以同时解决斜线和中文的问题啦：
```
json_encode($jsonString,JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
```