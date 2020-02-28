---

title: 原生javascript运动函数的封装

meta:
  - name: description
    content: 原生javascript运动函数的封装
  - name: keywords
    content: 原生javascript运动函数的封装

created: 2019/02/10

updated: 
 
tags:
  - javaScript
  - Jquery

---

## 前言

### 项目环境
- 前端框架：js+jq

## 示例
原生javascript运动函数的封装的几种方式



//封装匀速运动

//参数：
// 1、dom对象
// 2、样式属性（top，left，width，height，opacity等等）
// 3、起始位置，结束位置
// 4、速度：时间间隔，步长
// 5、方向：
//返回值
```js
function moveObj(domObj,attr,startValue,endValue,timeSpace,step,direction) {
	
	let currValue = startValue;

	let myTimer = setInterval(function(){
		//1、改变数据
		currValue = currValue+direction*step;

		//2、判断边界
		// if(currValue>=endValue){//??
		// 	currValue = endValue;//??
		// 	window.clearInterval(myTimer);
		// }

		if(Math.abs(currValue-endValue)<step){
			currValue = endValue;
			window.clearInterval(myTimer);
		}
		//3、改变外观
		if(attr=="opacity"){
			domObj.style[attr] = currValue;
		}else{
			domObj.style[attr] = currValue+"px";
		}

	},timeSpace);
}
```
//封装匀速运动

//参数：
// 1、dom对象
// 2、样式属性（top，left，width，height，opacity等等）
// 3、结束位置
// 4、时长：
//返回值
```javascript
function moveObj02(domObj,attr,endValue,timeLong) {
	let startValue = parseFloat(getStyle(domObj,attr));//??
	let direction= endValue-startValue>0?1:-1;//??	
	let timeSpace = 10;
	let step = Math.abs(endValue-startValue)/(timeLong/timeSpace) // endValue-startValue/步子数;//
	
	let currValue = startValue;
	let myTimer = setInterval(function(){
		//1、改变数据
		currValue = currValue+direction*step;

		//2、判断边界
		if(Math.abs(currValue-endValue)<step){
			currValue = endValue;
			window.clearInterval(myTimer);
		}
		//3、改变外观
		if(attr=="opacity"){
			domObj.style[attr] = currValue;
		}else{
			domObj.style[attr] = currValue+"px";
		}

	},timeSpace);
}

```

//封装抛物线运动(右开口为例)
//参数：
// dom对象
// 起点
// 终点
// 总时长
// 

//返回值：无
```js
function parabola(domObj,startPoint,endPoint,timeLong,func){
	//一、初始化
	
	let offsetX = endPoint.x-startPoint.x;
	let offsetY = endPoint.y-startPoint.y;
	let p = (offsetY*offsetY)/(2*offsetX);
	let left1 = 0;
	domObj.style.left = startPoint.x+"px";
	domObj.style.top = startPoint.y+"px";
	let timeSpace = 10;
	let step = Math.abs(endPoint.x-startPoint.x)/(timeLong/timeSpace) // endValue-startValue/步子数;//
	
	//二、启动定时器
	let myTimer = setInterval(function(){
		//1、改变数据
		left1=left1+step;
		let top1=Math.sqrt(2*p*left1);

		//2、判断边界
		if(left1>=offsetX){
			left1 = offsetX;
			top1=Math.sqrt(2*p*left1);
			window.clearInterval(myTimer);
			if(func){
				func();
			}
		}

		//3、改变外观			
		domObj.style.left = left1+startPoint.x+"px";
		domObj.style.top = top1+startPoint.y+"px";
		
	},timeSpace);
}


```
//淡入：
//参数：
// dom对象
// 时长；
//返回值：无

```js
function fadeIn(domObj,timeLong){
	domObj.style.opacity = 0;
	moveObj02(domObj,"opacity",1,timeLong);
}

//淡出：
//参数：
// dom对象
// 时长；
//返回值：无

function fadeOut(domObj,timeLong){
	domObj.style.opacity = 1;
	moveObj02(domObj,"opacity",0,timeLong);
}


//淡入和淡出：
//参数：
// domObjIn：淡入的dom对象
// domObjOut：淡出的dom对象
// 时长；
//返回值：无

function fadeInOut(domObjIn,domObjOut,timeLong,func){
	domObjIn.style.opacity = 0;
	domObjOut.style.opacity = 1;

	let startValue = 0;
	let endValue = 1;
	let direction= 1;
	let timeSpace = 10;
	let step = Math.abs(endValue-startValue)/(timeLong/timeSpace) // endValue-startValue/步子数;//
	
	let currValue = startValue;
	let myTimer = setInterval(function(){
		//1、改变数据
		currValue = currValue+direction*step;

		//2、判断边界
		if(Math.abs(currValue-endValue)<step){
			currValue = endValue;
			window.clearInterval(myTimer);
			func&&func();
		}
		//3、改变外观
		domObjIn.style.opacity = currValue;
		domObjOut.style.opacity = 1-currValue;
	},timeSpace);
}



//多属性的运动
//参数：
// 1、dom对象
// 2、每个样式属性的结束值
// 4、时长：
//返回值

//调用示例：
/*
animate($("box"),{
	"width":600,
	"height":400,
	"left":50
},2000)
*/

function animate(domObj,endObj,timeLong) {
	// let startValue = parseFloat(getStyle(domObj,attr));//??
	let startObj = {}
	for(let key in endObj){
		startObj[key] = parseFloat(getStyle(domObj,key));
	}

	// let direction= endValue-startValue>0?1:-1;//??	
	let directionObj = {};
	for(let key in endObj){
		directionObj[key] = endObj[key]>startObj[key]?1:-1;
	}

	let timeSpace = 10;
	// let step = Math.abs(endValue-startValue)/(timeLong/timeSpace) // endValue-startValue/步子数;//
	let stepObj = {};	
	for(let key in endObj){
		stepObj[key] = Math.abs(endObj[key]-startObj[key] )/(timeLong/timeSpace);
	}

	//let currValue = startValue;
	let currObj = {};
	for(let key in endObj){
		currObj[key] = startObj[key];
	}

	let myTimer = setInterval(function(){
		//1、改变数据
		//currValue = currValue+direction*step;
		for(let key in endObj){
			currObj[key] = currObj[key]+directionObj[key]*stepObj[key];
		}
		//2、判断边界
		let firstKey = Object.keys(endObj)[0];
		if(Math.abs(currObj[firstKey]-endObj[firstKey])<stepObj[firstKey]){
			for(let key in endObj){
				currObj[key] = endObj[key];
			}
			window.clearInterval(myTimer);
		}
		//3、改变外观
		for(let key in endObj){
			if(key=="opacity"){
				domObj.style[key] = currObj[key];
			}else{
				domObj.style[key] = currObj[key]+"px";
			}
		}
	},timeSpace);
}
```

## 后记
目前仍在不断地探索中
[链接去博主的csdn](https://blog.csdn.net/mlonly)              


