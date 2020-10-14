---
title: 如何飞速将文章变为视频
date: 2020-04-02
tags:
  - 工具
categories:
  - 技术
---

## 1. 获取 key

在 `readText.js` 中更改 voice 为 voiceBd 或者 voiceAli ，切换接口平台。

**但切记，因为接口有并发限制，务必要到相应的平台去注册自己的 key。方法如下：**

#### 百度 AI

注册百度 AI。

[注册申请方法](https://ai.baidu.com/ai-doc/SPEECH/jk38y8gno)

按照文档，注册账号，新建应用，获取 APP_ID, API_KEY, SECRET_KEY。

然后填入`src\baiduSpeech.js`中第 7 行的 client 参数。

```
var client = new AipSpeechClient(APP_ID, API_KEY, SECRET_KEY);
```

#### 阿里 AI

https://nls-portal.console.aliyun.com/applist

到阿里云注册，新建智能语音交互项目，开通，获取 Key 和 Secret。到`speechAli.js`文件中进行替换。

## 2. 准备输入文件和参数

执行 `npm i` 安装依赖。还需要安装 ffmpeg 并配置系统变量 path，至命令行窗口输入 `ffmpeg` 能找到程序为止。

复制 templete 目录并粘贴，重命名为如'0225'目录，修改其中的 input/input.txt 为你想要制作的文章。（如示例段落间放一个空行方便分段）。

然后拷贝若干横版 jpg 图片（最好 16:9）放入 0225/pic 目录用于轮播制作视频。**也支持从图库中随机抽选**：修改 `src/init.js` 中间中的图库地址 `let picAllSourceFolder = path.resolve("/picall");` ，将你的图库中绝对路径填入，替换 `/picall` （我的代码在 d 盘，图库地址为'D:/picall/')，当然要先清空在项目 0225/pic 文件夹，程序会抽选并拷入。

如需替换背景音乐请重命名并替换 `input/bgm.mp3`，会根据视频时长循环播放。

### 3.生成视频

生成就简单了。修改 index.js 中 `global.config = initPath("./0226");`中的为你重命名后的目录如'./0225'，然后 `node index.js`。生成的结果视频为 `0225/merged/final.mp4`。

## todo

- [ ] 美化字幕，最好动画

- [x] 字幕超长遮挡

- [x] 文章自动断句。

- [ ] 文章自动抓取分析。

- [x] 多图

- [ ] 多图切换和滤镜

- [ ] 片头 水印 和片尾

用什么方式：

1. 将片头图片作为背景图的一张。需要保证图片不循环，同时添加固定一张图片为片头。标题文字用 drawtext 或者是图片通过 svg 叠加生成。语音和字幕增加固定秒数的偏移量。（现在图片结果为 7 秒，做片头太长。）

2. 将图片生成同尺寸视频，然后视频拼接。（图像压制多一次，性能差）。

