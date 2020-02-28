---

title: jquery放大镜效果

meta:
  - name: description
    content: jquery放大镜效果
  - name: keywords
	content: jquery放大镜效果
	
created: 2019/03/25

updated: 
 
tags:
  - javaScript
  - Jquery
  - html
  - css

---

## 前言

### 项目环境
- 前端框架：js+jq+html+css

## 示例
```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>商品详情</title>
    <link rel="stylesheet" href="../css/shoplistxq.css">
</head>
<body>
    <div class="main box">
        <div class="img">
            <img src="../img/shoplist/TB1lO6XJpXXXXc_XFXXLhc5_XXX_054423.jpg" alt="">
            <div class="bri"></div>
            <div class="big"></div>
        </div>
        <div class="content">
            <h3>2件卫衣男士长袖t恤加厚打底衫加绒秋衣保,<br>
                暖上衣男装冬季衣服潮
            买一送一！2件仅需89！加绒不加价！</h3>
            <div>价格¥ 168.00</div>
            <div>尺码</div>
            <div>颜色</div>
            <div>数量</div>
            <div>加入购物车</div>
        </div>
    </div>
    
</body>
</html>
<script src="../js/jquery-1.11.3.js"></script>
<script src="../js/shoplistxq.js"></script>
```

```css


*{
	margin:0;
	padding:0;
	font-family: "微软雅黑";
}
ul li{
	list-style: none;
}
a{
	text-decoration: none;
	color: #666;
}
/*主体宽度*/
.main {
	margin:0 auto;
	width: 1210px;
}
.box{
    margin-top: 50px;
}
.box::after{
    content: ".";
    height:0;
    overflow: hidden;
    visibility: hidden;
    clear: both;

}
.img{
    width: 400px;
    height: 400px;
    border: 1px solid #666666;
    position: relative;
    float: left;
}
.img img{
    width: 100%;
    height: 100%;
    
}
.bri{
    position: absolute;
    width: 100px;
    height: 100px;
    left:0;
    top:0;
    background: rgb(233, 118, 118);
    opacity: .5;
    cursor: crosshair;
}
.big{
    width:100%;
    height: 100%;
    position: absolute;
    background: url("../img/shoplist/TB1lO6XJpXXXXc_XFXXLhc5_XXX_054423.jpg");
    left:401px;
    top:0;
    background-size: 100%;
    display:none;
}
.content{
    float: right;
}
```


```js

$(function() {
    $(".img").mousemove(function (e) {


        $(".bri").css({
            "left": e.pageX - $(this).offset().left - $(".bri").width() / 2,
            "top": e.pageY - $(this).offset().top - $(".bri").height() / 2
        })


        if (parseFloat($(".bri").css("left")) < 0){
            $(".bri").css("left","0");
            // console.log("kk");
        } else if (parseFloat($(".bri").css("left")) >= parseFloat($(this).width() - $(".bri").width())){
            // alert("kk");
            $(".bri").css("left",$(this).width() - $(".bri").width());
        }
        if (parseFloat($(".bri").css("top")) < 0) {
            $(".bri").css("top", "0");
        } else if (parseFloat($(".bri").css("top")) >= parseFloat($(this).height() - $(".bri").height())) {
            // alert("kk");
            $(".bri").css("top", $(this).height() - $(".bri").height());
        }
        console.log($(".img").css("background"))
        // 放大倍数
        let num = 4;
        let left = -num * parseFloat($(".bri").css("left"));
        let top = -num * parseFloat($(".bri").css("top"));
        // console.log($(".bri").css("left"))
        $(".big").css({
            "background-size": num*100+"%",
            "background-position":left+"px " +top+"px",
            "display":"block"
            // "background": $(".img").css("background")
        });
    })
})

$(".img").mouseout(function (e) {
    $(".big").css({
        "display": "none"
        // "background": $(".img").css("background")
    });
})
```
## 后记
目前仍在不断地探索中
[链接去博主的csdn](https://blog.csdn.net/mlonly)              


