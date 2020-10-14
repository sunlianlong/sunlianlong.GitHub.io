---
title: express的日志中间件morgan的使用
date: 2018-09-12 09:15:00
tags:
  - node
categories:
  - 代码
---
Morgan中的时间使用的是格林威治时间，目前个人做法是修改Morgan的index.js中的clfdate函数，然后使用data[clf]：
```
// /node_modules/morgan/index.js 351行
function clfdate (dateTime) {
  var hour = dateTime.getUTCHours() + 8
}

// app.js
app.use(morgan("[:date[clf]] :method :url :status :res[content-length] - :response-time ms", {stream: accessLogStream}));

```

Morgan预定义了5中输出格式：
* combined
```
:remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"
```
* common
```
:remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]
```
* dev
```
:method :url :status :response-time ms - :res[content-length]
```
* short
```
:remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms
```
* tiny
```
:method :url :status :res[content-length] - :response-time ms
```
express-generator生成的express项目默认使用dev格式，我们也可以使用除5中预定义格式外的自定义格式，修改app.js如下：
```

var logger = require('morgan');

app.use(morgan("[:date[clf]] :method :url :status :res[content-length] - :response-time ms", {stream: accessLogStream}));

```
重新运行项目，并使用curl访问http后的log如下:
```
[17/Aug/2017:07:38:47 +0000] GET / 304 - - 4.409 ms
[17/Aug/2017:07:38:53 +0000] GET / 304 - - 1.209 ms
[17/Aug/2017:08:06:58 +0000] GET / 304 - - 1.000 ms

```
写入日志文件：
```
var logger = require('morgan');
var fs = require('fs')

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'})

// setup the logger
app.use(logger('combined', {stream: accessLogStream}))
```
每天一个日志：
```
var logger = require('morgan');
var fs = require('fs')
var FileStreamRotator = require('file-stream-rotator')

var logDirectory = __dirname + '/logs'

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

// create a rotating write stream
var accessLogStream = FileStreamRotator.getStream({
  filename: logDirectory + '/access-%DATE%.log',
  frequency: 'daily',
  verbose: false
})

// setup the logger
app.use(logger('combined', {stream: accessLogStream}))
```