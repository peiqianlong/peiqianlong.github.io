---

title: node 原生  express 框架

meta:
  - name: description
    content: node 原生  express 框架
  - name: keywords
	content: node 原生  express 框架
	
created: 2019/05/26

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



问题：
    1、使用静态资源（图片，JS，HTML）比较繁琐
    2、路由的时候也比较麻烦。
 *****************************************
express:可以完美解决以上问题。
 1、下载
    cnpm install express -D
 2、引入
    const express = require("express");
 3、使用
    const app = express();// 该方法会给你返回一个对象
    app.listen(80,"ip",function(){
        console.log("success!");
    })
 *********************************************
 1、app.get("/",function(req,res){
    res.status(200);//设置你的状态码
    res.set("content-type","text/html;charset=utf-8");
    res.json();
    res.write();
    res.end();
 })\
 **************************************
 接收get的值
 http://127.0.0.1/?a=1&b=2

 req.query();// {a:1,b:2}

 ********************************************************
 app.get("/",function (req,res) {
     // http://127.0.0.1/?a=2&b=4
     console.log(req.query);// { a: '2', b: '4' }
     res.end("404")
 })
 app.get("/my/:a/:b",function (req,res) {
     // http://127.0.0.1/my/1/2
     console.log(req.params) // { a: '1', b: '2' }
     res.end("my");
 })
 *************************************************8
 静态资源：

 app.use(express.static("./weibo"));
 app.use(express.static(__dirname+"/weibo"));

 const path = require("path");
  app.use(express.static(path.resolve(__dirname,"./weibo")));

  ****************************************************************
总结
post:
 ************************************
 请求：
      var xhr = new XMLHttpRequest();
        /*
        * 1、urlencoded
        * 2、json
        * 3、formdata*/
        xhr.open("post","http://127.0.0.1/sum");
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded")
        xhr.send("a=3&b=4&c[0]=3&c[1]=4");
        xhr.onload = function (ev) {
            console.log(xhr.responseText);
        }
 接收：
    1、下载 body-parser
        cnpm install body-parser --save-dev
    2、使用 urlencoded
        const bodyParser = require("body-parser");
        app.use(bodyParser.urlencoded({
            extended:true
            // true,代表深度解析   { a: '3', b: '4', c: [ '3', '4' ] }
            // false:正常   { a: '3', b: '4', 'c[0]': '3', 'c[1]': '4' }
        }))
        使用：
        const bodyParser = require("body-parser");
        app.use(bodyParser.json())
    3.接收  req.body
        app.post("/sum",function (req,res) {
            console.log(req.body);
            res.json({
                ok:1,
                msg:"test"
            })
        })

********************************************************************************
思考：
    node:
    1、接收值
    2、返回值
    html:
    1、传递值
    2、接收node的返回值


## 后记
目前仍在不断地探索中
[链接去博主的csdn](https://blog.csdn.net/mlonly)              


