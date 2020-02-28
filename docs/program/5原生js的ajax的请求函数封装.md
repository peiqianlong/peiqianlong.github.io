---

title: 原生js的ajax的请求函数封装

meta:
  - name: description
    content: 原生js的ajax的请求函数封装
  - name: keywords
    content: 原生js的ajax的请求函数封装

created: 2018/12/25

updated: 
 
tags:
  - javaScript
  - Jquery
  - html

---

## 前言

### 项目环境
- 前端框架：js+jq+html+css

## 示例

 请求方式
 请求地址
 请求参数
 返回值

```js
<script>
	// 请求方式
// 请求地址
// 请求参数
// 返回值
function ajaxTools(pattern,url,parameter,func){
	// 创建ajax
	let xhr = new XMLHttpRequest();
	let gt = url;
	// 判断请求方式
	if(pattern.toLowerCase() == "get"){
		gt += parameter;
	}
	// 传参
	xhr.open(pattern,gt,true);
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 || xhr.status == 200){
			// xhr.responseText回调值  回调函数  
			func(xhr.responseText);
		}
	}

	// 发送请求
	if(pattern.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(parameter);
	}else{
		xhr.send();	
	}
}
</script>

```

封装存在异步操作可使用promise解决问题  后续发出


## 后记
目前仍在不断地探索中
[链接去博主的csdn](https://blog.csdn.net/mlonly)              


