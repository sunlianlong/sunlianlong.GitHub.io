---
title: 微信JS-SDK授权
date: 2018-09-12 09:49:00
tags:
  - php
  - SDK
categories:
  - 代码
---
##  获取JSSDK授权必须具有写文件的权限

两个文件，index.php为业务文件，依赖jssdk.php，jssdk.php为微信官方提供的demo文件，仅对  **httpGet**  函数做了部分修改。

index.php：
```php
<?php
require_once "jssdk.php";
$jssdk = new JSSDK("appId", "appKey");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
	<title>获取JS-SDK授权</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
</head>
<body>
  <h1>获取JS-SDK授权</h1>
	<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
	  <script>
	    wx.config({
	      debug: true,
	      appId: '<?php echo $signPackage["appId"];?>',
	      timestamp: <?php echo $signPackage["timestamp"];?>,
	      nonceStr: '<?php echo $signPackage["nonceStr"];?>',
	      signature: '<?php echo $signPackage["signature"];?>',
	      jsApiList: [
	      "onMenuShareWeibo",
          "onMenuShareTimeline",
          "onMenuShareQQ",
          "onMenuShareAppMessage"
	      ]
	    });
	    function fnWxShare() {
	        var _title = [
	            '修改分享title成功！'
	        ];
	        var _msg = [
	            '你知道操作成功就OK了'
	        ];
	        var _img = ("http://m.tranquilscience.com/user/img/skreap.jpg");
	        if (!wx) {
	            return;
	        }
	        wx.onMenuShareTimeline({
	            title: _msg[0],
	            link: pasename,
	            imgUrl: _img,
	            success: function () {
	            }
	        });
	        var _options = {
	            title: _title[0],
	            link: pasename,
	            desc: _msg[0],
	            imgUrl: _img,
	            success: function () {
	            }
	        };
	        wx.onMenuShareAppMessage(_options);
	        wx.onMenuShareQQ(_options);
	        wx.onMenuShareWeibo(_options);
	        wx.onMenuShareTimeline(_options);
	    }
      
      wx.ready(function () {
          fnWxShare();
      });
      wx.error(function (res) {
          alert(res.errMsg);
      });
	  </script>
</body>
</html>
```

jssdk.php：
```php
<?php
class JSSDK {
  private $appId;
  private $appSecret;

  public function __construct($appId, $appSecret) {
    $this->appId = $appId;
    $this->appSecret = $appSecret;
  }

  public function getSignPackage() {
    $jsapiTicket = $this->getJsApiTicket();
    $url = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    $timestamp = time();
    $nonceStr = $this->createNonceStr();

    // 这里参数的顺序要按照 key 值 ASCII 码升序排序
    $string = "jsapi_ticket=$jsapiTicket&noncestr=$nonceStr&timestamp=$timestamp&url=$url";

    $signature = sha1($string);

    $signPackage = array(
      "appId"     => $this->appId,
      "nonceStr"  => $nonceStr,
      "timestamp" => $timestamp,
      "url"       => $url,
      "signature" => $signature,
      "rawString" => $string
    );
    return $signPackage; 
  }

  private function createNonceStr($length = 16) {
    $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    $str = "";
    for ($i = 0; $i < $length; $i++) {
      $str .= substr($chars, mt_rand(0, strlen($chars) - 1), 1);
    }
    return $str;
  }

  private function getJsApiTicket() {
    // jsapi_ticket 应该全局存储与更新，以下代码以写入到文件中做示例
    $data = json_decode(file_get_contents("jsapi_ticket.json"));
    if ($data->expire_time < time()) {
      $accessToken = $this->getAccessToken();
      $url = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?type=jsapi&access_token=$accessToken";
      $res = json_decode($this->httpGet($url));
      $ticket = $res->ticket;
      if ($ticket) {
        $data->expire_time = time() + 7000;
        $data->jsapi_ticket = $ticket;
        $fp = fopen("jsapi_ticket.json", "w");
        fwrite($fp, json_encode($data));
        fclose($fp);
      }
    } else {
      $ticket = $data->jsapi_ticket;
    }

    return $ticket;
  }

  private function getAccessToken() {
    // access_token 应该全局存储与更新，以下代码以写入到文件中做示例
    $data = json_decode(file_get_contents("access_token.json"));
    if ($data->expire_time < time()) {
      $url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=$this->appId&secret=$this->appSecret";
      $res = json_decode($this->httpGet($url));
      $access_token = $res->access_token;
      if ($access_token) {
        $data->expire_time = time() + 7000;
        $data->access_token = $access_token;
        $fp = fopen("access_token.json", "w");
        fwrite($fp, json_encode($data));
        fclose($fp);
      }
    } else {
      $access_token = $data->access_token;
    }
    return $access_token;
  }

  private function httpGet($url) {
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_TIMEOUT, 500);
    curl_setopt($curl, CURLOPT_URL, $url);

    $res = curl_exec($curl);
    curl_close($curl);

    return $res;
  }
}
```