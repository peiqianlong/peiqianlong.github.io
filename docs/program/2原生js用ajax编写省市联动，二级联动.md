---

title: 原生js用ajax编写省市联动，二级联动

meta:
  - name: description
    content: 原生js用ajax编写省市联动，二级联动
  - name: keywords
    content: 原生js用ajax编写省市联动，二级联动

created: 2018/12/12

updated: 2019/01/20
 
tags:
  - javaScript
  - Jquery
  - HTML
  - CSS

---

## 前言

### 项目环境
- 前端框架：html+css+jq

::: tip
图片示例

- ​<img src="https://img-blog.csdnimg.cn/20181222151505696.png"/>
:::


## 示例



```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>城市联动</title>
</head>
<body>
    <select name="china" id="q">
        <option value="">西安</option>
    </select>
    <select name="china" id="w">
        <option value="">西安</option>
    </select>
</body>
</html>
```

新建js  链接js部分

```javascript
function ajax1809byJSONandDefault(obj) {
	let defaultObj = {
		"url":"#",
		"method":"get",
		"param":"",
		"isAsync":true,
		"func":null
	};
	for(let key in obj){
		defaultObj[key] = obj[key];
	}

	//1、创建对象
	let xhr = new XMLHttpRequest();

	//2、设置请求参数
	let urlAndParam = defaultObj.url;
	if(defaultObj.method.toLowerCase()=="get"){
		urlAndParam+="?"+defaultObj.param;
	}
	xhr.open(defaultObj.method,urlAndParam,defaultObj.isAsync);

	//3、设置回调函数
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			defaultObj.func(xhr.responseText);
		}
	}

	//4、发送请求
	if(defaultObj.method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(defaultObj.param);
	}else{
		xhr.send();	
	}		
}
```



```js
<script type="text/javascript" src="js/ajaxtools.js"></script>
<script>

    window.onload = function (){
        getData();

        $("q").onchange = function(){
            showCity(this.value);
        }
    }

    function func(str){
        console.log(str);
    }

    function getData(){
    ajax1809byJSONandDefault({
        "url":"json/city.json",
        "func":function(str){
            showProvince(str);
            showCity($("q").value);
        }
    });
}
let sheng
function showProvince(str){
    let data = JSON.parse(str);
    sheng = data.城市代码;
    let htmlstr = "";
    for(let i in sheng){
        htmlstr += `<option value="${sheng[i].省}">${sheng[i].省}</option>`;
    }
    $("q").innerHTML = htmlstr;
}

function showCity(str){
    let citys;
    let htmlstr = "";
    // alert("f");
    for(let i in sheng){
        if(sheng[i].省 == str){
            citys = sheng[i].市;
        }
    }
    for(let j in citys){
        htmlstr += `<option value="${citys[j].编号}">${citys[j].市名}</option>`;
    }
    $("w").innerHTML = htmlstr;
}

function $(id){
    return document.getElementById(id);
}

</script>
```



### 优势

- 可以更好地编写复杂的页面
- 更好的维护性

## 后记
目前仍在不断地探索中
[链接去博主的csdn](https://blog.csdn.net/mlonly)              


