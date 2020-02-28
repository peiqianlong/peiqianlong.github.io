---

title: 原生javascript制作验证码

meta:
  - name: description
    content: 原生javascript制作验证码
  - name: keywords
	content: 原生javascript制作验证码
	
created: 2019/03/11

updated: 
 
tags:
  - javaScript
  - Jquery
  - html
  - css

---

## 前言

### 项目环境
- 前端框架：js+jq+html+css

## 示例
```js

function sjyz() {
	let s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	let str = "";
	for (let i = 0; i < 4; i++) {
		let num = parseInt(Math.random() * s.length);
		// console.log()
		str += s.charAt(num);
	}
	$("#sjyz").html(str);
};



// 初始加载验证码
	sjyz();
// 点击刷新验证码
$("#sjyz").click(function(){
	sjyz();
})

```


## 后记
目前仍在不断地探索中
[链接去博主的csdn](https://blog.csdn.net/mlonly)              


