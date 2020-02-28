---

title: setTimeout定时器参数的理解

meta:
  - name: description
    content: setTimeout定时器参数的理解
  - name: keywords
    content: setTimeout定时器参数的理解

created: 2018/12/23

updated: 
 
tags:
  - javaScript
  - Jquery

---

## 前言

### 项目环境
- 前端框架：js+jq

## 示例



```js
//一、、
	// for(var i = 0; i < 2; i++){
	// 	setTimeout(function(){
	// 		console.log(i)
	// 	},0)
	// }
```

// 结果是2  显然这个setTimeout第二个参数为0;也是异步操作，js本身就是单线程,所以setTimeout回调函数是要等for循环完成才进行操作

```javascript
 for(let i = 0; i < 2; i++){
		setTimeout(function(){
	 		console.log(i)
	},0)

```

// 结果是1,2、let是块级作用域，会保存i的值、 

```js

// for(let i = 0; i < 2; i++){
// 		setTimeout(function(){
// 			console.log(i)
// 		})
// 	}
```



## 后记
目前仍在不断地探索中
[链接去博主的csdn](https://blog.csdn.net/mlonly)              


