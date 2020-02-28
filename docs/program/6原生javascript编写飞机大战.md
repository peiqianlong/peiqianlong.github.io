---

title: 原生javascript编写飞机大战

meta:
  - name: description
    content: 原生javascript编写飞机大战
  - name: keywords
    content: 原生javascript编写飞机大战

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


HTML部分
```html

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>飞机大战</title>
    <style>
        html,body{
            height: 100%;
        }
        *{
            margin:0;
            padding:0;
        }
    </style>
</head>
<body>

</body>
</html>
```
 初始化数据    // 战场加载  // 战机加载
```javascript
    window.onload = function(){
            // 加载战场
            battleground();
            // 战机加载
            conbat();
    
            let b = new fly(0,600,5000);
            b.keep();
        }


  function battleground(){
          battleDiv = document.createElement("div");
          battleDiv.id = "battleDiv";
          document.body.appendChild(battleDiv);
          battleDiv.style.cssText = "overflow:hidden;position:relative;width:800px; height:100%; background:gray url('img/bg.jpg');margin:0 auto;"
  
      }


function conbat(){
        let battleDiv = document.getElementById("battleDiv");
        let myConbat = document.createElement("div");
        myConbat.style.cssText = "z-index:1;position:absolute;background: url('img/我的飞机.gif') ; width:66px;height:80px";
        battleDiv.appendChild(myConbat);
        battleDiv.onmousemove = function(event){
            let evt = event || window.event;
            left1 = evt.clientX - battleDiv.offsetLeft;
            top1 = evt.clientY- battleDiv.offsetTop;
            if(left1 < 30 ){
                left1 = 30;
            }else if( left1 >(battleDiv.offsetWidth- myConbat.offsetWidth/2)){
                left1 = (battleDiv.offsetWidth- myConbat.offsetWidth/2);
            }
            if(top1 > 860){
                top1 = 860;
            }
            myConbat.style.left = left1-33 +"px";
            myConbat.style.top = top1-40 +"px";

            // 子弹函数
            setTimeout(function(){
                let zd =  new Bullet(left1,top1);
                // console.log(top1);
                zd.myBullet();
            },500)

        }
    }

```
 // 子弹函数
```js
class Bullet{
        constructor(x,y){
            this.width = 10;
            this.height = 20;
            this.timer = null;
            this.a = x;
            this.b = y;

        }
        // 创建子弹
        myBullet(){
            let myBullet = document.createElement("div");
            myBullet.style.cssText = "border-radius:50%;background:"+getColor()+";position:absolute; width:"+ this.width +"px;height:"+this.height+"px;"
            battleDiv.appendChild(myBullet);
            myBullet.style.left = this.a +"px";
            let currenttop = 0;
            this.timer = setInterval(()=>{
                currenttop +=10;
                // console.log(this.a);
                myBullet.style.top = this.b - currenttop +"px";
                if( currenttop > this.b){
                    currenttop = this.b;
                    myBullet.parentNode.removeChild(myBullet);
                    window.clearInterval(this.timer);
                }
                ;
            },10)
            let zd = new Panduan(this.a,this.b);
            zd.pz();

        }

    }
```
 //创建敌方飞机
```js
 //创建敌方飞机
    class fly{
        constructor(startTop,endTop,timerLong){
            this.startTop = startTop;
            this.endTop = endTop;
            this.timerLong = timerLong;

        }

        keep() {
            let timeSpace = 10;
            let step = (this.startTop - this.endTop) / (this.timerLong / timeSpace);
            let timer = setInterval(function () {
            let num ;
                let flyImg = document.createElement("img");
                // console.log(suiji());
                battleDiv.appendChild(flyImg);
                flyImg.style.position = "absolute";
                // alert(suiji());
                num = suiji();

                // 保存left/
                js_fly.left = num;


                flyImg.style.left = num+ "px";
                flyImg.src = "img/enemy" + suiji2() + "_fly_1.png";

                fun(flyImg);

                let zd1 = new Panduan();
                zd1.pz(num);
                // console.log(num);

            }, 3000)

          // 飞行距离
            function fun(flyImg) {
                let currTop = 0;
                let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
                let timer2 = setInterval(function () {
                    // let evt = event || window.event;
                    currTop -= step;
                    if (currTop > clientHeight) {
                        window.clearInterval(timer2)
                        flyImg.parentNode.removeChild(flyImg);
                    }
                    flyImg.style.top = currTop + "px";

                    js_fly.top = currTop; 
                }, 10)



            }

            // 随机函数
            function suiji() {
                return (Math.random() * 650) + 50;
            }

            function suiji2() {
                return parseInt((Math.random() * 2) + 1);
            }

        }


    }

```
基本初步完成   以上内容初步完成  后续请关注我

## 后记
目前仍在不断地探索中
[链接去博主的csdn](https://blog.csdn.net/mlonly)              


