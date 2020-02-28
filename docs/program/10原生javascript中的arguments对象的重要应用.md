---

title: 原生javascript中的arguments对象的重要应用

meta:
  - name: description
    content: 原生javascript中的arguments对象的重要应用
  - name: keywords
    content: 原生javascript中的arguments对象的重要应用

created: 2019/02/01

updated: 
 
tags:
  - javaScript
  - Jquery

---

## 前言

### 项目环境
- 前端框架：js+jq

## 示例

在arguments中，存在函数中、第1个参数的属性名是’0’，第2个参数的属性名是’1’，以此类推，并且它还有length属性，存储的是当前传入函数参数的个数，很多时候我们把这种对象叫做类数组对象(伪数组)

```js
function test	(a,b,c){
		console.log(a,b,c)//4 5 6
		console.log(arguments);
			/*{0: 4  打印出的类似数组  带有length属性
			1: 5
			2: 6
			3: 7
			4: 8
			5: 9
			6: 1
			7: 2
			8: 3
				}*/

	test(4,5,6,7,8,9,1,2,3);
```


## 后记
目前仍在不断地探索中
[链接去博主的csdn](https://blog.csdn.net/mlonly)              


