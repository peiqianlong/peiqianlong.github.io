---

title: node.js模块化开发实例及应用

meta:
  - name: description
    content: node.js模块化开发实例及应用
  - name: keywords
	content: node.js模块化开发实例及应用
	
created: 2019/05/27

updated: 
 
tags:
  - javaScript
  - Jquery
  - html
  - css
  - gulp
  - node

---

## 前言

### 项目环境
- 前端框架：js+jq+html+css

## 示例


1、模块化
    引入（依赖）
    require
     导出（暴露）
     module.exports
2、1、   require("./my");  // 1、当前的文件夹下的my.js   2、找当前文件夹下的my文件夹下的index.js
   2、   require("my");    // 1、node_modules my.js      2、node_modules  my  --->index.js
*********************************************************************8
npm cnpm
node_modules
npm install md5 --save-dev
// 开发环境   生产环境
************************************************************************888
const md5=require("md5");
md5(xxxx);
********************************************************************
storage
*****************************************************************8
token
***********************88
includes:  数组的方法，字符串
********************************
目标：
    1、跨域
        1、jsonp
        2、后台允许跨域
        3、中转
    2、post(初步的了解)
    图书管理
        1、增加，删除，修改，查找

        * req.headers.origin   可以得到协议域名端口号信息

        1、允许一个访问：http://127.0.0.1
            res.writeHead(200,{
                "Access-Control-Allow-Origin":"http://127.0.0.1"
            })
        2、允许所有访问：*
                      res.writeHead(200,{
                          "Access-Control-Allow-Origin":"*"
                      })
        3、允许多个：
               var originArr=[
                    "http://localhost:63342",
                    "http://127.0.0.1:81",
                    "http://10.35.161.2",
                    "http://10.35.161.3",
                    "http://10.35.161.4",
                    "http://10.35.161.5",
                    "http://10.35.161.6",
                    "http://10.35.161.7"
                ]
                if(originArr.includes(req.headers.origin)){
                    res.writeHead(200,{
                        "Access-Control-Allow-Origin":req.headers.origin// 将所有的访问源放入到白名单
                    })
                }



*******************************************
var querystring = require("querystring");// 对接收数据的转换  urlencode --->对象

var str = "a=1&b=2";
console.log(querystring.parse(str));// { a: '1', b: '2' }
**********************************************8
图书管理系统
   目标：
   1、完成对图书的添加
   2、完成对图书的类别切换
   3、模糊搜索
   4、图书的删除
   5、图书的修改
*****************************************************************
1、管理系统：对你项目当中的数据进行管理的。
项目：数据   代码
京东：
    页面（前端展示）------》面向群体：用户

    京东的后台管理：是对数据进行操作（增删改查）  面向的群体：京东的运营人员
        项目：
            运营人员看到的那一部分--》前端
*****************************************************************8888888



/修改/
1、点击修改时调用接口
    根据ID获得相对应的信息
2、将该信息在你的表单中进行体现，将提交按钮变为修改按钮
3、点击修改按钮，提交表单

## 后记
目前仍在不断地探索中
[链接去博主的csdn](https://blog.csdn.net/mlonly)              


