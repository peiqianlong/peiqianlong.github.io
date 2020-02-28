---

title: 原生javascript制作贪吃蛇小游戏

meta:
  - name: description
    content: 原生javascript制作贪吃蛇小游戏
  - name: keywords
    content: 原生javascript制作贪吃蛇小游戏

created: 2018/12/24

updated: 
 
tags:
  - javaScript
  - Jquery
  - html
  - css
  - node

---

## 前言

### 项目环境
- 前端框架：js+jq+html+css

## 示例


实现原理：
<!--1、 创建场景 -->
<!-- 2、定义初始数据  以及随机食物 -->
<!-- 3、控制贪吃蛇方向 -->
<!-- 4、判断位置以及和随机食物的位置 增加贪吃蛇长度 -->


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <style>
        html,body{
            width: 100%;
            height: 100%;
            overflow: hidden;
        }
        * {
            margin: 0;
            padding: 0;
        }
        li{
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: chocolate;
            position: absolute;
            left: 240px;
            top: 60px;
            z-index: 1;
            list-style: none;
        }
        #box{
            position: absolute;
            left:240px;
            top: 50px;
            width:800px;
            height:600px;
        }
    </style>
</head>
<body>
    <span>
        游戏玩法：上下左右控制小蛇的方向。
        撞到边缘游戏结束。
        长按方向键即可加速。
    </span>
    <ul id="box">
        <li></li>
        <li></li>
        <li></li>
    </ul>

</body>
```
//js开始
```javascript
  function $(id){
          return document.getElementById(id);
      }
  
      window.onload = function () {
          // 创建背景
          js_background();
          // 随机食物
          js_food();
          // 创建贪吃蛇
          create_snake();
  
          document.onkeydown = function(event){
              let evt = event || window.event;
              switch (evt.keyCode) {
                  case 37:direction="left";break;
                  case 38:direction="up";break;
                  case 39:direction="right";break;
                  case 40:direction="down";break;
                  default:;
                  // console.log(evt.keyCode);
              }
              start_snake()
          }
  
      }
```

/ 贪吃蛇方向// 创建背景  // 随机食物
```js
// 贪吃蛇方向// 创建背景
    var direction = "right";
    // 创建背景
    function js_background(){
        let bg = document.createElement("div");
        bg.id = "js_bg";
        bg.style.cssText = "position:relative;margin :50px auto; background:skyblue; width:800px; height:600px;";
        document.body.appendChild(bg);
    }
```
// 随机食物
```js

var food_left = 0;
    var food_top = 0;
    function js_food(){
        food_left = parseInt(Math.random()*800/20)*20;
        food_top = parseInt(Math.random()*600/20)*20;
        let foodDiv = document.createElement("div");
        foodDiv.style.cssText = "position:absolute;width:20px; height: 20px; border-radius:50%; background:yellow;";
        foodDiv.style.left = food_left+"px";
        foodDiv.style.top = food_top+"px";
        foodDiv.id = "foodDiv";
        $("js_bg").appendChild(foodDiv);

    }
```

// 创建贪吃蛇 //定时器
```js

function create_snake(){
        let lis = document.getElementsByTagName("li");
        lis[0].style.backgroundColor = "black";
        lis[0].style.zIndex = 1;
        for(let i = 0; i < lis.length; i++){
            lis[i].style.left = 280-(i*20)+"px";
            lis[i].style.top = 60+"px";
        }
    }
```


//定时器
```js

    // 定时器
    let timre = setInterval(start_snake,200);
    let lis = document.getElementsByTagName("li");
    function start_snake(){
        let left=parseFloat(lis[0].style.left);
        let top= parseFloat(lis[0].style.top);
        // console.log(top)

        switch (direction) {
            case "left":left = (left-20);break;
            case "up":top = (top-20);break;
            case "right":left = (left+20);break;
            case "down":top = (top+20);break;
            default:;
        }

        if(left<0 || left>800-20 || top<0 || top>600-20){

                window.clearInterval(timre);
                alert("亲，您Game Over");
                return;
        }

        // for(let i = 1; i <= lis.length-1; i++){
        //     lis[i].style.left = lis[i-1].style.left;
        //     lis[i].style.top = lis[i-1].style.top;
        // }
        for(var i=lis.length-1;i>0;i--){
            lis[i].style.left = lis[i-1].style.left;
            lis[i].style.top = lis[i-1].style.top;
        }



        // 改变第一节
        lis[0].style.left  = left+"px";
        lis[0].style.top  = top+"px";

        // console.log(food_top+"----------");
        // console.log(top);

        if(left == food_left && top == food_top){
            eat();
        }
    }

    function eat() {
        $("js_bg").removeChild($("foodDiv"));
        js_food();
        // alert("ll");
        let li = document.createElement("li");
        $("js_bg").appendChild(li);
        // create_snake();


    }
```
## 后记
目前仍在不断地探索中
[链接去博主的csdn](https://blog.csdn.net/mlonly)              


