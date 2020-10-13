---
title: inputplaceholder颜色
date: 2019-04-18 01:45:00
tags:
  - css
categories:
  - 代码
---

```
::-webkit-input-placeholder { /* WebKit browsers */
　　color:#b4b4b4;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
　　color:#b4b4b4;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
　　color:#b4b4b4;
}
:-ms-input-placeholder { /* Internet Explorer 10+ */
　　color:#b4b4b4;
}
```

```
input::input-placeholder{
	color:#1FBAF3;
}
input::-webkit-input-placeholder, textarea::-webkit-input-placeholder { 
	color:#1FBAF3;
}
input:-moz-placeholder, textarea:-moz-placeholder { 
	color:#1FBAF3;
}
input::-moz-placeholder, textarea::-moz-placeholder { 
	color:#1FBAF3;
}
input:-ms-input-placeholder, textarea:-ms-input-placeholder { 
	color:#1FBAF3;
}
```
不显示滚动条
```
::-webkit-scrollbar {
    width: 0px;
}
```