---

title: node的md5加密以及path， localStorage接口的实现功能

meta:
  - name: description
    content: node的md5加密以及path， localStorage接口的实现功能
  - name: keywords
	content: node的md5加密以及path， localStorage接口的实现功能
	
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

####模块化：-------》模块  ---》模组
        按需加载     相互依赖
    1、解决代码的冲突
    2、代码的维护性以及扩展性。
    3、提高代码的运行效率。

    es6

    export default {
    }
const http=require("http");// http模块
1、导出
    module.exports
2、引入
    require();//

**************************************************************************
####总结：
    模块化：按需加载   相互依赖

    // 引入（依赖）module文件夹下的my.js
    const my = require("./module/my.js");

    // 引入（依赖）module文件夹下的my.js, js可以省略
    const my = require("./module/my");

    // 引入（依赖）module文件夹下的默认index.js.
    const my = require("./module");
    如果你要改变默认项的话，需要创建一个配置文件，名字为package.json
    {
        "main":"my.js"//   将默认项修改为my.js
    }


    // 去node_modules文件夹下找my.js.如果找不到就看有没有my文件夹
    const my= require("my");

    *************************************
    暴露的时候
    module.exports.userName="xixi";
    module.exports.age=90;
************************************************************************************************
####md5是一个无法被反编译的编码。
第三方的模块
npm install md5
npm i md5


npm install md5 --save-dev
npm i md5 -D


const md5 = require("md5");
var password= "123456";
md5(password);
************************************************************************************************
path
const path =require("path");
path.resolve();// 相当于当前路径
path.resolve("../");// 上一级
path.resolve("/");// 根目录

path.resolve("地址"，”相对于第一个参数“);------>生成一个绝对地址
*******************************************************************************************************
####// 学会学习
storage:存储数据。 window下的一个对象
        localStorage
        sessionStorage


        写
            localStorage.setItem(key,value);
            localStorage.key=value;
            localStorage[key]=value;
        读：
             localStorage.getItem(key);
             localStorage.key;
             localStorage[key];
        删除：
              localStorage.removeItem(key);// 删除一条
              localStorage.clear();// 全部清空



*******************************************************************************************************

单页面：
    路由。

    jsonp
 1、完成注册
    1、写接口
        get
        http://127.0.0.1/reg
        userName
        passWord
        passWord2
 2、完成登陆
 3、退出
 ********************************************************************************************************
 模块化
 -------------》




## 后记
目前仍在不断地探索中
[链接去博主的csdn](https://blog.csdn.net/mlonly)              


