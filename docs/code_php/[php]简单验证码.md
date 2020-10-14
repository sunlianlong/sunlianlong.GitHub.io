---
title: 简单验证码
date: 2018-07-19 09:48:00
tags:
  - php
  - 验证码
categories:
  - 代码
---
```
<?php
$width=200;                                              //图像宽度
$height=40;                                             //图像高度
$img=imagecreatetruecolor($width,$height);               //创建图像
$white=imagecolorallocate($img,255,255,255);             //白色
imagefill($img,0,0,$white);                              //将背景设置为白色

function GetRandColor($img){
     return imagecolorallocate($img,mt_rand(0,255),mt_rand(0,255),mt_rand(0,255));//随机颜色
}
// 创建一个选取字符库
$string = join("",array_merge(range(0,9),range('a','z'),range('A','Z')));

// 生成四位随机颜色随机字符串
$len = 4;
for($i=0;$i<$len;$i++){
    $size = mt_rand(20,28);
    $angle = mt_rand(-15,15);
    $x = 20+40*$i;
    $y = 30;
    $fontFile =  './LATINWD.TTF';
    $randColor = GetRandColor($img);
    $text = str_shuffle($string)[0];
    
    // imagettftext(操作画布，文字大小，倾斜角度，X方向，Y方向，颜色，字体库，显示文字) 
    imagettftext($img,$size,$angle,$x,$y,$randColor,$fontFile,$text);
}

// 干扰元素 50个随机颜色点
$pointCount = 50;
for($i=0;$i<$pointCount;$i++){
    $randColor = GetRandColor($img);
    imagesetpixel($img,mt_rand(0,$width),mt_rand(0,$height),$randColor);
}

// 干扰元素 三条线

$lineCount = 3;
for($i=0;$i<$lineCount;$i++){
    $randColor = GetRandColor($img);
    imageline($img,mt_rand(0,$width),mt_rand(0,$height),mt_rand(0,$width),mt_rand(0,$height),$randColor);
};

// 干扰元素 三条圆弧

$lineCount = 3;
for($i=0;$i<$lineCount;$i++){
    $randColor = GetRandColor($img);
    imagearc($img,mt_rand(0,$width),mt_rand(0,$height),mt_rand(0,$width/2),mt_rand(0,$height/2),mt_rand(100,360),mt_rand(100,360),$randColor);
};



header("content-type: image/png");                    //输出图像的MIME类型
imagepng($img);                                       //输出一个PNG图像数据
imagepng($img,'1.png');                               //在本地保存这个图片
imagedestroy($img);                                      //清空内存
```