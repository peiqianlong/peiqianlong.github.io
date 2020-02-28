---

title: 原生javascript中this通常的几种用法

meta:
  - name: description
    content: 原生javascript中this通常的几种用法
  - name: keywords
    content: 原生javascript中this通常的几种用法

created: 2019/01/27

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

// this的应用  “是”  代名词
// this必须出现在函数里面

//------------------默认绑定
```js
function test (){
	console.log(this.a);//1
}

var a = 1;
test();
```
// this取得是window的对象a；此处默认window


//---------------------隐式绑定？
```javascript
function test (){
	console.log(this.a);//2
}

var foo = {
	a:2,
	f:test
}
var a = 1;
foo.f();
```

//此处this取得是foo对象的a；

//---------------------隐士绑定 多层调用链？
```js
function test (){
	console.log(this.a);//3
}

var foo = {
	a:3,
	f:test
}

var foo2 = {
	a:4,
	f:foo
}


var a = 1;
foo2.f.f();
```
//此处this取得是foo对象的a，foo2中只起到调用foo,所以thisl指的还是foo；
//---------------------隐士绑定 (隐士丢失) 多层调用链？
```js

function test (){
	console.log(this.a);//1
}

var foo = {
	a:2,
	f:test
}
var a = 1;
var fun = foo.f;
fun();
```

//由于是赋值  调用的是fun(),foo.f 是取函数，但是this的对象是fun，是window对象，所以只能取得全局变量a

//1，this所在的函数是事件处理函数，那么this就是事件源；
```js
var btns = document.getElementsByTagName("button");
     获取所有button
     for(var i = 0; i < btns.length;i++){
     	btns[i].onclick = function(){
     		this代表当前事件源
     		console.log(this)
     	}
     }

```
// 2、this所在函数是构造函数，那么this就是new的对象,并且会生成__proto__属性。
```js
function func(name,age){
	this.name = name;
	this.age = age;
	// console.log(this)
}

let f = new func("z",20);
```
// 3、this所在函数是类的方法，那么this就是调用方法时的对象
```js
function Fnc(name,age){
	this.name = name;
	this.age = age;
}
Fnc.prototype.eat = function(){
	console.log(this);
}
let fn = new Fnc("a",12);
fn.eat();
let fn2 = new Fnc("b",10);
fn2.eat();
```
// 4、this的转移  转移到window
```js
var btns = document.getElementsByTagName("button");
//获取所有button
for(let i = 0; i < btns.length;i++){
	btns[i].onclick = function(){
		console.log(this)
		// this代表点击事件源
		setTimeout(function(){
			console.log(this);
			// this代表window对象 发生了转移
		},30)
	}
}
```


/*
以上所说的所在函数，重点看关键字function。不会受箭头函数的影响

JavaScript中的一切的一切都属于window对象。window对象可以省略。
所有的全部变量，函数，类，都属于window对象。

this的转移：发生在闭包里。*/
## 后记
目前仍在不断地探索中
[链接去博主的csdn](https://blog.csdn.net/mlonly)              


