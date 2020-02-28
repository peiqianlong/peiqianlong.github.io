---

title: node.js模块介绍

meta:
  - name: description
    content: node.js模块介绍
  - name: keywords
	content: node.js模块介绍
	
created: 2019/06/30

updated: 
 
tags:
  - javaScript
  - Jquery
  - html
  - css
  - gulp
  - node
  - mongodb

---

## 前言

### 项目环境
- 前端框架：js+jq+html+css

## 示例
 1、内置模块
            http,fs,url
            1、引入 模块
                const http=require("http");
                http.createServer(function(req,res){
                    res.writeHead(404,{
                        "content-type":"text/html;charset=utf-8"
                    })
                    res.end();// 响应结束，输出一些内容。字符串


                    //fs
                    fs.writeFile("文件地址","写入的内容”，{flag:"a"},函数（err））
                    fs.readFile("文件地址",function(err,results){

                    })
                    }

                   http://127.0.0.1/addweibo?id=1

                   req.url // /addweibo?id=1
                   url.parse(req.url).pathname    /addweibo
                   url.parse(req.url).query       id=1     urlencode
                   ur.parse(req.url,true).query    {id:1}
                   JSON.parse






                }).listen(80,function(){
                    console.log("服务已开启");
                    // 意思着你的电脑就是一个服务器。web服务。
                })



        2、自定义模块
        3、第三方的模块


## 后记
目前仍在不断地探索中
[链接去博主的csdn](https://blog.csdn.net/mlonly)              


