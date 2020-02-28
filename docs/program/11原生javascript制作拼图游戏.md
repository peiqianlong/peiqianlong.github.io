---

title: 原生javascript制作拼图游戏

meta:
  - name: description
    content: 原生javascript制作拼图游戏
  - name: keywords
    content: 原生javascript制作拼图游戏

created: 2019/02/05

updated: 
 
tags:
  - javaScript
  - Jquery

---

## 前言

### 项目环境
- 前端框架：js+jq

## 示例

实现方法



//1、让所有的li（在ul里）可以拖拽

//2、交换li的位置  计算背景图位置

//1、让所有的li（在ul里）可以拖拽
//根据鼠标的位置，计算目标li的序号

//根据行号和列号计算下标
//行号*3+列号
//2、归位

此处没有背景图  请自行添加 css样式

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style type="text/css">
			html,body{
				margin:0;
				padding:0;
			}
			#box{
				list-style:none;
				position:relative;
				width:600px;
				height:600px;
				box-sizing:border-box;
				margin:10px auto;
			}
			li{
				position:absolute;
				width:200px;
				height:200px;
				border:1px solid white;
				background-image:url(img/b1.jpg);
				background-size:600px 600px;
			}
			#box li:nth-child(1){
				left:0px;
				top:0px;
				background-position:0px 0px;
			}
			#box li:nth-child(2){
				left:200px;
				top:0px;
				background-position:-200px 0px;
			}
			#box li:nth-child(3){
				left:400px;
				top:0px;
				background-position:-400px 0px;
			}
			
			#box li:nth-child(4){
				left:0px;
				top:200px;
				background-position:0px -200px;
			}
			#box li:nth-child(5){
				left:200px;
				top:200px;
				background-position:-200px -200px;
			}
			#box li:nth-child(6){
				left:400px;
				top:200px;
				background-position:-400px -200px;
			}
			
			#box li:nth-child(7){
				left:0px;
				top:400px;
				background-position:0px -400px;
			}
			#box li:nth-child(8){
				left:200px;
				top:400px;
				background-position:-200px -400px;
			}
			#box li:nth-child(9){
				left:400px;
				top:400px;
				background-position:-400px -400px;
			}
			
		</style>
	</head>
	<body>
		<ul id="box">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
	</body>
</html>

<script type="text/javascript" src="js/cssTools.js"></script>
<script type="text/javascript" src="js/eventTools.js"></script>
```


这个是这连个js连接的代码


```javascript
//csstools
//功能：获取某个DOM元素的样式属性的兼容性写法
//参数：dom元素，样式属性名
//返回值：样式属性的值

function getStyle(domObj,attr){
	if(domObj.currentStyle){//domObj.currentStyle如果能够正确获取到，那就真
		return domObj.currentStyle[attr];//当对象的属性名是变量时，用方括号而不是点。
	}else{
		return window.getComputedStyle(domObj)[attr];
	}	
}


```


```js

//eventTools

//功能：阻止浏览器默认行为的封装
//参数：事件对象
//返回值：无

function preventDefault1809(evt) {
	if(evt.returnValue){
		evt.returnValue = false;
	}else{
		evt.preventDefault();
	}
}

//功能：绑定事件
//参数：
	//事件源
	//事件类型名，不带on
	//事件处理函数,
	//是否冒泡
//返回值：无

function addEvent1809(domObj,eventType,func,isBubble){
	if(domObj.addEventListener){
		domObj.addEventListener(eventType,func,isBubble);
	}else if(domObj.attachEvent){
		domObj.attachEvent('on'+eventType,func);
	}else{
		domObj['on'+eventType] = func;
	}
}

//当对象的属性是变量时，不能用点，只能用方括号
/*
var obj = {
	id:'007'
}
obj.id;
var temp = "id";
obj[temp]
*/


```

```js




function $(id){
	return document.getElementById(id);
}

window.onload = function(){	
	drag();
}

//1、让所有的li（在ul里）可以拖拽
function drag(){
	var lis = $("box").children;
	var currIndex = -1;//记录被按下的那个li
	var targetIndex = -1;
	for(var i=0;i<lis.length;i++){
		lis[i].setAttribute("index",i);
		lis[i].onmousedown = function(event){
			currIndex = this.getAttribute("index");
			var evt = event || window.event;
			var offsetX = evt.offsetX;
			var offsetY = evt.offsetY;
			this.style.zIndex = 1;
			var liDom = this;
			$("box").onmousemove = function(event){
				var evt = event || window.event;

				//1、数据距离大盒子左上角的距离
				var mouseX = evt.pageX-$("box").offsetLeft; 
				var mouseY = evt.pageY-$("box").offsetTop; 

				//鼠标距离页面左边的距离- 大盒子距离页面左边的距离-鼠标距离事件源的左边距离
				var left1 = mouseX-offsetX;
				var top1 = mouseY-offsetY;
				//li不能拖拽到界外（大盒子外面）
				if(left1<0 || left1>600-200 || top1<0 || top1>600-200 ){
					return;
				}
				
				liDom.style.left = left1+"px";
				liDom.style.top = top1+"px";

				targetIndex = getTargetIndex(mouseX,mouseY);
				console.log(targetIndex);
			}
		}

		document.body.onmouseup = function(){
			$("box").onmousemove = null;
			if(currIndex>-1){
				lis[currIndex].style.zIndex = 0;
				exchangeLi(currIndex,targetIndex);
			}
		}
	}
}

//根据鼠标的位置，计算目标li的序号
function getTargetIndex(x,y){
	//计算行号
	var rowIndex = parseInt(y/200);//

	//计算列号
	var colIndex = parseInt(x/200);//

	//根据行号和列号计算下标
	//行号*3+列号
	return rowIndex*3+colIndex;
}


function exchangeLi(sourceIndex,targetIndex){
	// var lis = $("box").children;
	// if(sourceIndex<-1 || sourceIndex>lis.length-1 || targetIndex<-1 || targetIndex>lis.length-1){
	// 	return;
	// }
	if(sourceIndex!=targetIndex){
		 var lis = $("box").children;
		 //1、交换backgroundPosition
		 var temp =getStyle(lis[sourceIndex],"backgroundPosition");
		 lis[sourceIndex].style.backgroundPosition = getStyle(lis[targetIndex],"backgroundPosition");
		 lis[targetIndex].style.backgroundPosition = temp;
	}

	 //2、归位
	 rowIndex = parseInt(sourceIndex/3);
	 colIndex = sourceIndex%3;
	 lis[sourceIndex].style.left = colIndex*200+"px";
	 lis[sourceIndex].style.top = rowIndex*200+"px";

}

```

## 后记
目前仍在不断地探索中
[链接去博主的csdn](https://blog.csdn.net/mlonly)              


