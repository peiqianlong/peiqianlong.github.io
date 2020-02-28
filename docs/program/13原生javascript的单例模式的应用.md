---

title: 原生javascript的单例模式的应用

meta:
  - name: description
    content: 原生javascript的单例模式的应用
  - name: keywords
    content: 原生javascript的单例模式的应用

created: 2019/02/13

updated: 
 
tags:
  - javaScript
  - Jquery

---

## 前言

### 项目环境
- 前端框架：js+jq

## 示例
原生javascript的单例模式的应用



总体原则：开闭原则（Open Close Principle） 开闭原则就是说对扩展开放，对修改关闭。在程序需要进行扩展的时候，不能去修改原有 的代码，实现一个热插拔的效果。所以一句话概括就是：为了使程序的扩展性好，易于维护和升 级。 1、单一职责原则 不要存在多于一个导致类变更的原因，也就是说每个类应该实现单一的职责，如若不然，就 应该把类拆分。



创建模式_单例模式  某个类只允许创建一个实例，这就是单例模式。优点如下： 1、某些类创建比较频繁，对于一些大型的对象，这是一笔很大的系统开销 2、省去了new操作符，降低了系统内存的使用频率，减轻GC压力。 3、有些类如交易所的核心交易引擎，控制着交易流程，如果该类可以创建 多个的话，系统完全乱了。（比如：中国国家主席只有一个，飞机大战的 地图对象只有一个），所以只有使用单例模式，才能保证核心交易服务器 独立控制整个流程。

应用：

飞机大战中的地图只能有一个实例；  遮罩层有可能是某个项目中经常要频繁创建的实例，如果不停地创建和删除，还是 很浪费资源。应该，在首次使用时创建，以后只是使用首次创建的实例  放大镜有可能在某个项目中经常要频繁地创建的实例，也是很浪费资源。


单例模式的基础应用


```js

<script>

let singleton =  function (){
    function Map(width,height) {
        this.width = width;
        this.height = height;
    }

    let instance;
    return{
        getIntence : function(width,height){
            if(instance == undefined){
                instance = new Map(width,height);
            }else{
                instance.width = width;
                instance.height = height;
            }
            return instance;
        }
    }
}();

let m1 = singleton.getIntence(100,200);
let m2 = singleton.getIntence(200,300);

console.log(m1);//200 300
console.log(m2);//200 300

</script>
```


飞机大战中单例模式的应用

地图部分
```js
let mapSingleton = (function(){
	function Map(width,height,background){
		this.domObj = null;//地图的div
		this.moveBox = null;

		this.width = width;
		this.height = height;
		this.background = background;	
		this.enemyPlanes = [];//敌机数组
		this.myPlanes = [];//我方战机数组

		this.createUI();
		this.moveBg();
	}

	//853  600
	Map.prototype.createUI = function() {
		//1、地图的div
		this.domObj = document.createElement("div");
		this.domObj.style.cssText = `margin:20px auto;position: relative;width:${this.width}px;height:${this.height}px;overflow:hidden`;

		document.body.appendChild(this.domObj);

		//2、移动的div

		this.moveBox = document.createElement("div");
		this.moveBox.style.cssText = `position: absolute;
					top:-1106px;
					width: 480px;
					height: 1706px;`;
		this.domObj.appendChild(this.moveBox);				

		//3、图片
		for(var i=0;i<2;i++){
			let img01 = document.createElement("img");
			img01.src = this.background;
			img01.style.cssText = `display: block`;
			this.moveBox.appendChild(img01);
		}
		
		//4、积分板：
		this.scoreDom = document.createElement("div");
		this.scoreDom.style.cssText = "position:absolute;left:0px;top:0px;width:100px;height:35px;z-index:999";
		this.scoreDom.innerHTML = 0;
		this.domObj.appendChild(this.scoreDom);
	};

	Map.prototype.moveBg = function(){
		let top1 = -1106;

		setInterval(()=>{
			top1++;

			if(top1>=-253){
				top1 = -1106;
			}

			this.moveBox.style.top = top1+"px";

		},50);
	}

	var instance;

	return {
		getInstance:function(width,height,background){
			if(instance==undefined){
				instance = new Map(width,height,background);
			}else{
				instance.width = width;
				instance.height = height;
				instance.background = background;
				instance.domObj.style.width=this.width+"px";
				instance.domObj.style.height=this.height+"px";
				instance.moveBox.children[0].src=this.background;
				instance.moveBox.children[1].src=this.background;
			}
			return instance;
		}
	}
})();

```
总结:// 单例模式的总结
       /*采用闭包原理和自调用原理，先进行自调用噶、返回闭包函数，让使用者调用，但只能创建一个实例对象，当要创建多个的时候 不会进行创建，最上面简单案例代码，如果要再次创建实例，会覆盖之前的数据，并且不会创建实例对象
       为什么要采用闭包  防止使用者再次构造新对象  采用自调用之后  函数执行1次  在调用时  只需要使用return的函数就行  避免用户多次构造新对象*/
## 后记
目前仍在不断地探索中
[链接去博主的csdn](https://blog.csdn.net/mlonly)              


