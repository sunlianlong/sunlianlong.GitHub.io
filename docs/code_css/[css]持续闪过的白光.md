---
title: 持续闪过的白光
date: 2019-04-18
tags:
  - css
categories:
  - 代码
---
```html
<!doctype html>  
<html>  
<head>  
<meta charset="utf-8">  
<title>闪光图片</title>  
<style>  
*{ margin:0; padding:0;}  
.box{  
    position: relative;  
    box-shadow: 0 0 10px #FFF;  
}
.doudong{
	position: relative;  
    box-shadow: 0 0 10px #FFF;  
}
em{  
    position: absolute;  
    left: -180px;  
    top: 0;  
    width: 180px;  
    height: 110px;  
    background-image: -moz-linear-gradient(0deg,rgba(255,255,255,0),rgba(255,255,255,0.5),rgba(255,255,255,0));  
    background-image: -webkit-linear-gradient(0deg,rgba(255,255,255,0),rgba(255,255,255,0.5),rgba(255,255,255,0));
    transform: skewx(-25deg);  
    -o-transform: skewx(-25deg);  
    -moz-transform: skewx(-25deg);  
    -webkit-transform: skewx(-25deg);  
}
.em{  
    left:180px;  
    -moz-transition:0.5s;  
    -o-transition:0.5s;  
    -webkit-transition:0.5s;  
    transition:0.5s;  
}  
</style>
</head>  
<body>  
    <div class="box">  
        <a href="#"><img src="http://ww3.sinaimg.cn/large/6b002b97gw1esbsin2dhcj205002uglf.jpg"></a>  
        <em></em>
        <script>
		    	var em = document.getElementsByTagName("em")[0];
		    	var flag = true;
		    	setInterval(function(){
		    		if(flag){
		    			flag = false;
		    			em.setAttribute("class","em");
		    		}else{
		    			flag = true;
		    			em.removeAttribute("class");
		    		}
		    	}, 500);
		    </script>
    </div>
</body>  
</html>
```