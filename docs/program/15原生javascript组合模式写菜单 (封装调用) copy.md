---

title: 原生javascript组合模式写菜单 (封装调用)

meta:
  - name: description
    content: 原生javascript组合模式写菜单 (封装调用)
  - name: keywords
    content: 原生javascript组合模式写菜单 (封装调用)

created: 2019/02/16

updated: 
 
tags:
  - javaScript
  - Jquery

---

## 前言

### 项目环境
- 前端框架：js+jq

## 示例

直接上代码

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style>
			*{ padding:0; margin:0}
			ul{ list-style:none}
			a{ text-decoration:none; display:block; width:200px; height:50px;}
			.one{ width:1000px; height:50px; line-height:50px; background:#ff0; margin:0 auto;}
			.oneli{ float:left; width:200px; height:50px; text-align:center; position:relative;}
			.oneli a:hover{ background:#0ff;}
			/*二级菜单*/
			.two{ width:200px; background:#96F; position:absolute; display:none; }
			
			.oneli:hover .two{ display:block;}
			
			.twoli a:hover{ background:#90F}
			.twoli{ position:relative;}
			/*三级菜单*/
			.three{ width:200px; background:#FF9; position:absolute; top:0px; left:200px; display:none;}
			.twoli:hover .three{ display:block;}
			.threeli a:hover{ background:#FC0}
			/*最后一个的三级菜单*/
			.last .three{ width:200px; background:#FF9; position:absolute; top:0px; left:-200px; display:none;}
			.last .twoli:hover .three{ display:block;}
			.last .threeli a:hover{ background:#FC0}
			
			</style>
	</head>
	<body>
		
	</body>
</html>
<script type="text/javascript" src="js/menu.js"></script>
<script type="text/javascript">
var menuObj = {
	rootMenu:{
		ulClass:"one",
		children:[
			{
				"className":"oneli",
				"title":'一级菜单1',
				"href":"#",
				"ulClass":"two",
				children:[
					{
						"className":"twoli",
						"title":'二级菜单11',
						"href":"#",
						"ulClass":"three",
						children:[
									{
										"className":"threeli",
										"title":'三级级菜单111',
										"href":"#",
										"ulClass":"",
										children:[]
									},
									{
										"className":"threeli",
										"title":'三级级菜单112',
										"href":"#",
										"ulClass":"",
										children:[]
									},
									{
										"className":"threeli",
										"title":'三级级菜单113',
										"href":"#",
										"ulClass":"",
										children:[]
									}

						]
					},
					{
						"className":"twoli",
						"title":'二级菜单12',
						"href":"#",
						"ulClass":"three"
					},
					{
						"className":"twoli",
						"title":'二级菜单13',
						"href":"#",
						"ulClass":"three"
					},
				]
			},
			{
				"className":"oneli",
				"title":'一级菜单2',
				"href":"#",
				"ulClass":"two"
			}
		]
	}
}

//创建指定菜单子菜单
function createSubMenu(menuObj,menuData){
	for(let i in menuData.children){
		let subMenuObj = new MenuItem(menuData.children[i]);
		menuObj.appendChild(subMenuObj);		
		createSubMenu(subMenuObj,menuData.children[i]);
	}
}

window.onload = function(){

	//1、创建根菜单(只是个容器)
	let rootMenu =new RootMenu(menuObj.rootMenu);
	createSubMenu(rootMenu,menuObj.rootMenu);
	
	//2、创建外观
	rootMenu.createUI(document.body);

}

function $(str){//#box .cls  p
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}	

</script>
   

```
## 后记
目前仍在不断地探索中
[链接去博主的csdn](https://blog.csdn.net/mlonly)              


