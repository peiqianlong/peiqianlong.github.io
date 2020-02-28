---

title: 原生javascript闭包的定义和理解

meta:
  - name: description
    content: 原生javascript闭包的定义和理解
  - name: keywords
    content: 原生javascript闭包的定义和理解

created: 2018/12/29

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


就是一个函数何以访问另一个函数内部的局部变量 可以避免垃圾回收机制

javascript 中的函数都可以称为闭包，只不过嵌套的更厉害 可以吧值保存在内存中。

闭包是指在函数外部访问函数作用域中变量（局部变量）的函数;或者说闭包就是能够读取其他函数内部变量的函数；或者说闭包是指有权访问另一个函数作用域中的变量的函数；由于在Javascript语言中，只有函数内部的子函数才能读取局部变量，因此可以把闭包简单理解成“定义在一个函数内部的函数”


//普通函数未使用闭包
```html

function test1(){
	var i =1;
	console.log(i)//1
}
test1()

function test2(){
	console.log(i)//报错
}
test2()
```
/闭包使用
```javascript
function test1(){
	var i =1;
	//func就是一个闭包函数  从其他函数内部可以访问;
	var func = function fun(){
		console.log(i)
	}
	return func;
}
test1()

function test2(){
	test1()();//1
}
test2()
```

```js
function test(){
		var i = 100;
		return function f(){
			i++;
			alert(i);
		}
	}
	var t = test();
	t(); //101
	t();//102
	t();//103
	t();//104
	t();//105

	var t2 = test();
	t2(); //101
	t2();//102
	t2();//103
	t2();//104
	t2();//105
```

## 后记
目前仍在不断地探索中
[链接去博主的csdn](https://blog.csdn.net/mlonly)              


