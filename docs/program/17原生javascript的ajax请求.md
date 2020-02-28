---

title: 原生javascript的ajax请求

meta:
  - name: description
    content: 原生javascript的ajax请求
  - name: keywords
	content: 原生javascript的ajax请求
	
created: 2019/02/25

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

直接上代码

```html

<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<table id="t">

		<tr>
			<td>学号:</td>
			<td><input type="text" id="stuid" /></td>
		</tr>
		<tr>
			<td>密码:</td>
			<td><input type="password" id="stupass" /></td>
		</tr>
		<tr>
			<td colspan="2">
				<input id="btnLogin" type="button" value="登录" />
			</td>
		</tr>			
	</table>
</body>
</html>
```


   // ajax的一般步骤
//1、创建对象
    //let xhr = new XMLHttpRequest();

//2、设置请求参数
    //xhr.open(请求方式,请求地址，是否异步);

//3、设置回调函数
    //xhr.onreadystatechange  = function () {
        // 5、接收响应
    //    alert(xhr.responseText);

    }    

//4、发送
   //  xhr.send();




```js
window.onload = function(){
	$("#btnLogin").onclick = function(){
		//1、创建对象
		let xhr = new XMLHttpRequest();
		
		//2、设置请求参数
		xhr.open('post','loginCheckajax.php',true);

		//3、设置回调函数
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4 && xhr.status==200){
				if(xhr.responseText=='1'){
					//存cookie
					saveCookie("username",$("#stuid").value,7);
					//挑到首页
					location.href="index.html";
				}else{
					alert("登录失败！");
				}
			}
		}

		xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

		//4、发送
		xhr.send("stuid="+$("#stuid").value+"&stupass="+$("#stupass").value);

	}

}


function $(str){   //id  class tagname
	if(str.charAt(0) == "#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0) == "."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}	

```
php文件
```php
    <?php
    	header("Content-type:text/html;charset=utf-8");
    
    	//一、获取用户的输入
    	$stuid = $_POST['stuid'];
    	$stupass = $_POST['stupass'];
    
    	//二、处理
    
    	//1、建立连接（搭桥）
    	$conn = mysql_connect('localhost','root','root');
    	if(!$conn){
    		die("连接失败");
    	}
    	//2、选择数据库（选择目的地）
    	mysql_select_db("mydb1809",$conn);
    
    	//3、执行SQL语句（传输数据）
    	$sqlstr="select * from student where stuid='$stuid' and stupass='$stupass'";
    	$result = mysql_query($sqlstr,$conn);//结果是个表格
    
    	//4、关闭数据库（过河拆桥）
    	mysql_close($conn);
    
    	//三、响应
    	if(mysql_num_rows($result)>0){
    		echo "1";
    	}else{
    		echo "0";
    	}
    
    ?>
```


<!-- 保存cookie -->

```js
	
	// saveCookie



//保存cookie
//参数：
//键
//值
//有效期（单位是：天）
//返回值：无

function saveCookie(key,value,dayCount){
	var d = new Date();
	d.setDate(d.getDate()+dayCount);
	document.cookie = key+'='+escape(value)+';expires='+d.toGMTString();
}

//获取cookie(根据键获取值)
//参数:
//键
//返回值：值

function getCookie(key){
	var str = unescape(document.cookie);//username=jzm; userpass=1236667
	//1、分割成数组（; ）
	var  arr = str.split('; ');//['username=jzm','userpass=1236667']

	//2、从数组查找key=;
	for(var i in arr){
		if(arr[i].indexOf(key+'=')==0){
			return arr[i].split('=')[1];
		}
	}
	return null;
}

//删除cookie
//参数：
//键
//返回值：无
function removeCookie(key){
	saveCookie(key,'',-1);
}


````


## 后记
目前仍在不断地探索中
[链接去博主的csdn](https://blog.csdn.net/mlonly)              


