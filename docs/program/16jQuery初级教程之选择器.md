---

title: jQuery初级教程之选择器

meta:
  - name: description
    content: jQuery初级教程之选择器
  - name: keywords
	content: jQuery初级教程之选择器
	
created: 2019/02/20

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
​
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<form>
	    <input type="button" value="Input Button"/>
	    <input type="checkbox" />

	    <input type="file" />
	    <input type="hidden" />
	    <input type="image" />

	    <input type="password" />
	    <input type="radio" />
	    <input type="reset" />

	    <input type="submit" />
	    <input type="text" />
	    <select><option>Option</option></select>

	    <textarea></textarea>
	    <button>Button</button>

	</form>
	<h1>123</h1>
	<h2>123</h2>
	<h3>123</h3>
	<ul class= "ul">
		<span>6</span>

		<li>1</li>
		<li>2</li>
		<li>3</li>
		<li>4</li>
		<li>5</li>
		<span>6</span>
	</ul>
	<ul class= "ul2">
		<li class="li_one">1</li>
		<li>2</li>
		<li>3</li>
			<ul>
				<li>6</li>
			</ul>
		<li>4</li>
		<li>5</li>
	</ul>
	<ul class= "ul3">
		<li>1</li>
		<li>2</li>
		<li>3</li>
		<li>4</li>
		<li>5</li>
		
	</ul>
	<div lang="en" name="div" class="box">7</div>
	<div lang="en-use"><p>8</p></div>
	<div ><p>10</p></div>
	<div lang="tf">9</div>
	<input name="apple" />
	<input name="flower" checked="checked" />
	<button id="run1" style= "display:none">Run</button>
	<button id="run" >Run</button>
	<a href="http://example.com/#fee" id="fee">123</a>
	<a href="http://example.com/#fpp">456</a>

</body>
</html>
<script src = "js/jquery.min.js"></script>
<script>
	// $("ul").css("background","pink");//id
	// $(".ul").css("background","pink");//class
	// $("* ul").css("display","none");
	//$(".ul , .ul2").css("background","pink");//selector选择器
	// $(".ul2 li").css("background","pink"); //所有后代选择器  包括孙子
	// $(".ul2 > li").css("background","pink");//只匹配儿子
 	// $(".li_one + li").css("background","pink")//后面紧邻第一个元素
 	 // $(".li_one ~ li").css("background","pink")//后面所有的兄弟
 	 // $(".li_one:first").css("background","pink")//匹配获取的第一个元素  以本元素开始
 	 // console.log($("inout:not(:checked)"))//匹配未选中的元素
 	 //$(".ul2 li:even").css("background","pink")//匹配ul2下所有奇数li的dom
 	 // $(".ul2 li:odd").css("background","pink")//匹配ul2下所有偶数li的dom
 	// $(".ul2 li:eq(3)").css("background","pink")//匹配ul2下面的下表为3的li（从零开始）
 	//	$(".ul2 li:gt(3)").css("background","pink")
	// 匹配ul2下面的下表大于3的li（从零开始）
	// $("div:lang(en)").css("background","pink")//匹配div 带有lang  并且属性带有en的div'
	// $("ul:last").css("background","pink")//匹配所有ul下面的最后一个ul
	// $(".ul2 li:lt(3)").css("background","pink")
	// 匹配ul2下面的下表小于3的li（从零开始）
	// $(":header").css("background","pink")//匹配所有h类主题元素的标签
	// $("#run:not(:animated)").animate({
	// 	width: "+=50",
	// 	height:"+=50"
	// },1000)
	// 匹配没有动画元素的dom

	// :focus??

	// $(":root").css("background","pink")//匹配heml
	// console.log($("a:target"))

	// :target

	// $("div:contains('7')").css("background","pink");匹配div内容为7的元素
	// $("div:has(p)").css("background","pink");//匹配所有div里面包含p的元素

	// $(".ul2 li:parent").css("background","pink");查找.ul2含有li的文本节点和自身元素
	// console.log($(".ul2 li:parent"))
	// $("*:hidden").css("display","block");匹配被默认隐藏的按钮

	//$("*:visible").css("display","none"); 匹配被默认显示的元素
	// $("div[lang]").css("background","pink");//匹配div有lang属性的元素
	// $("div[lang = en]").css("background","pink");//匹配div有lang=en属性的元素
	// $("div[lang != en]").css("background","pink");//匹配div不等于lang=en属性的元素
	// $("div[lang ^= e]").css("background","pink");//匹配div的lang属性并且以e开头的属性的元素
	// $("div[lang $= e]").css("background","pink");//匹配div的lang属性并且以e开头的属性的元素
	// $("div[lang *= n]").css("background","pink");//匹配div的lang属性并且属性值中有n的属性的元素
	// $("div[lang][name='div']").css("background","pink");//
	// 匹配div带有lang属性 并且name等于div的元素
	// $("ul li:first-child").css("background","pink");//匹配所有ul下面的第一个li的元素
	// $("li:first-of-type").css("background","pink");
	// 匹配li的父元素的第一个li类型的孩子。
	// $("ul li:last-child").css("background","pink");//匹配所有ul下面的最后一个的元素
	// $("li:last-of-type").css("background","pink");
	// 匹配li的父元素的最后一个li类型的孩子。
	// $("ul li:nth-child(1)").css("background","pink");
	//匹配ul下的第一个为li元素
	// $("ul li:nth-last-child(1)").css("background","pink");
	//匹配ul下最后匹配的第一个为li元素
	// $("ul li:nth-last-of-type(1)").css("background","pink");
	//匹配ul下最后匹配的第一个li元素
	// $("ul li:nth-of-type(1)").css("background","pink");
	//匹配ul下的第一个li元素
	 // $("ul li:only-child").css("background","pink")//只匹配ul下面只有一个li的元素
	//$("ul:only-of-type").css("background","pink")//只匹配只有一个ul
	// $(":input").css("background","pink")//匹配可输入input匹配所有 input, textarea, select 和 button 元素
	// $(":text").css("background","pink")//匹配所有的单行文本框
	// $(":password").css("background","pink")//匹配所有的password文本框
	// $(":radio").css("background","pink")//匹配所有的radio
	// $(":checkbox").css("background","pink")//匹配所有的checkbox
	// $(":submit").css("background","pink")//匹配所有的submit	
	// $(":image").css("background","pink")//匹配所有的image	
	// $(":reset").css("background","pink")//匹配所有的reset
	// $(":button").css("background","pink")//匹配所有的button
	// $(":file").css("background","pink")//匹配所有的file文本框
	// $(":enabled").css("background","pink")//匹配所有的enabled可用
	// $(":disable").css("background","pink")//匹配所有的disable禁用
	// $(":checked").css("background","pink")//匹配所有的checked选中
	// $(":selected").css("background","pink")//匹配所有的被选中selected


</script>

​
```
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


