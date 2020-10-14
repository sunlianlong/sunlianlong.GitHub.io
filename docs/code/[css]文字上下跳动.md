---
title: 文字上下跳动
date: 2019-04-18 01:49:00
tags:
  - css
categories:
  - 代码
---
```html
<!DOCTYPE html5>
<head>
    <style>
		body{
			background:#ccc;
		}

@-webkit-keyframes ball-pulse-sync {
  33% {
    -webkit-transform: translateY(10px);
            transform: translateY(10px); }
  66% {
    -webkit-transform: translateY(-10px);
            transform: translateY(-10px); }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0); } }

@keyframes ball-pulse-sync {
  33% {
    -webkit-transform: translateY(10px);
            transform: translateY(10px); }
  66% {
    -webkit-transform: translateY(-10px);
            transform: translateY(-10px); }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0); } }

.ball-pulse-sync > div:nth-child(1) {
  -webkit-animation: ball-pulse-sync 0.6s -0.14s infinite ease-in-out;
          animation: ball-pulse-sync 0.6s -0.14s infinite ease-in-out; }

.ball-pulse-sync > div:nth-child(2) {
  -webkit-animation: ball-pulse-sync 0.6s -0.07s infinite ease-in-out;
          animation: ball-pulse-sync 0.6s -0.07s infinite ease-in-out; }

.ball-pulse-sync > div:nth-child(3) {
  -webkit-animation: ball-pulse-sync 0.6s 0s infinite ease-in-out;
          animation: ball-pulse-sync 0.6s 0s infinite ease-in-out; }
.ball-pulse-sync > div:nth-child(4) {
  -webkit-animation: ball-pulse-sync 0.6s 0.14s infinite ease-in-out;
          animation: ball-pulse-sync 0.6s 0.14s infinite ease-in-out; }
.ball-pulse-sync > div {
    color: #fff;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
  display: inline-block; }

    </style>
</head>
<body>
<div class="ball-pulse-sync">
    <div>元</div>
    <div>青</div>
    <div>商</div>
    <div>城</div>
</div>
</body>

```