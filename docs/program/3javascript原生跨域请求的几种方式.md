---

title: javascript原生跨域请求的几种方式

meta:
  - name: description
    content: javascript原生跨域请求的几种方式
  - name: keywords
    content: javascript原生跨域请求的几种方式

created: 2018/12/24

updated: 
 
tags:
  - javaScript
  - Jquery

---

## 前言

### 项目环境
- 前端框架：js+jq

## 示例


实现原理：利用src属性实现跨域访问

第一种方式、、
    src是请求服务器地址路径
```js

    <script type="text/javascript" src="http://10.35.166.110/test.js" ></script>
  
  
```
  第二种方式 
```javascript
   <script type="text/javascript" src="http://10.35.166.110/test.php.js" ></script>

```

<!-- 第三种方式  -->
    <!-- 动态创建jsvascript和src属性 -->
```js
document.getElementById("btn").onclick = function(){
		let scriptDom = document.createElement("script");
		scriptDom.type="text/javascript";
		scriptDom.id = "scriptId";
		scriptDom.src = "http://10.35.166.110/test.php";
		document.body.appendChild(scriptDom);
		/* 以下两种方式都可以删除 有利于优化代码 */
		scriptDom.remove();
		/*let oldScriptDom =document.getElementById("scriptId");
		if(oldScriptDom){
			oldScriptDom.remove();
		}*/
	}
```
第四种方式   带参数跨域访问
```js
document.getElementById("btn").onclick = function(){
		let scriptDom = document.createElement("script");
		scriptDom.type="text/javascript";
		scriptDom.id = "scriptId";
		scriptDom.src = "test02.php?callback=f";
		document.body.appendChild(scriptDom);
		scriptDom.remove();

	}
```


## 后记
目前仍在不断地探索中
[链接去博主的csdn](https://blog.csdn.net/mlonly)              


