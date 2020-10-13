---
title: 使用nodemailer模块发送邮件
date: 2017-10-25 01:35:00
tags:
  - node
  - 邮件
categories:
  - 代码
---
今天使用nodemailer模块发送邮件虽然遇到点问题，最后还是成功了，测试的是QQ邮箱发送给其他邮箱，使用时密码那块填写的不是密码，而是授权码，该码从邮箱的设置中获取[什么是授权码](http://service.mail.qq.com/cgi-bin/help?subtype=1&&id=28&&no=1001256)

config.js
```
module.exports = {
       //邮件配置
    email: {
        service: 'QQ',
        user: 'XXXXX@qq.com',
        pass: '填写授权码',
    }
}

```
index.js
```
/**
 *
 * @Description 邮件发送 
 * 调用方法:sendMail('amor_zhang@qq.com','这是测试邮件', 'Hi Amor,这是一封测试邮件');
 */

var nodemailer = require('nodemailer')
var smtpTransport = require('nodemailer-smtp-transport');
var config = require('./config')

smtpTransport = nodemailer.createTransport(smtpTransport({
    service: config.email.service,
    auth: {
        user: config.email.user,
        pass: config.email.pass
    }
}));

/**
 * @param {String} recipient 收件人
 * @param {String} subject 发送的主题
 * @param {String} html 发送的html内容
 */
var sendMail = function (recipient, subject, html, fn) {
    smtpTransport.sendMail({
        from: config.email.user,
        to: recipient,
        subject: subject,
        html: html

    }, function (error, response) {
        fn(error, response)
        smtpTransport.close()
    });
}

 module.exports = sendMail;

```