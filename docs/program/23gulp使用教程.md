---

title: gulp使用教程

meta:
  - name: description
    content: gulp使用教程
  - name: keywords
	content: gulp使用教程
	
created: 2019/04/10

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
Gulp使用教程
⦁    简介
gulp是前端开发过程中对代码进行构建的工具，是自动化项目的构建利器；她不仅能对网站资源进行优化，而且在开发过程中很多重复的任务能够使用正确的工具自动完成；使用她，我们不仅可以很愉快的编写代码，而且大大提高我们的工作效率。
gulp是基于Nodejs的自动任务运行器，她能自动化地完成 javascript/coffee/sass/less/html/image/css 等文件的的测试、检查、合并、压缩、格式化、浏览器自动刷新、部署文件生成，并监听文件在改动后重复指定的这些步骤。在实现上，她借鉴了Unix操作系统的管道（pipe）思想，前一级的输出，直接变成后一级的输入，使得在操作上非常简单。
gulp 和 grunt 非常类似，但相比于 grunt 的频繁 IO 操作，gulp 的流操作，能更快地更便捷地完成构建工作。

⦁    安装nodejs
2.1、说明：gulp是基于nodejs，理所当然需要安装nodejs；
2.2、安装：打开nodejs官网（https://nodejs.org/en/），点击硕大的绿色Download按钮，它会根据系统信息选择对应版本（.msi文件）。
注：安装完成之后注意将其配置到环境变量（系统变量path中），这样你就可以在全局范围内去使用它了

我的路径是在c:\Program Files\nodejs\node_modules\npm\bin，记得把它也配置进去

如果想了解环境变量：进入以下地址：
https://blog.csdn.net/jiang7701037/article/details/80707786

2.3测试：按window + r 输入cmd回车，然后输入node -v
         然后输入npm -v  
             如果都能打印出相应版本信息，那么说明你配置成功了

2.4 npm的解释：
npm是Node.js的包管理工具（package manager）。
在Node.js上开发时，会用到很多别人写的JavaScript代码。如果需要使用别人写的某个包，每次都根据名称搜索一下官方网站，下载代码，解压，再使用，非常繁琐。于是一个集中管理的工具应运而生：大家都把自己开发的模块打包后放到npm官网上，如果要使用，直接通过npm安装就可以直接用，不用管代码存在哪，应该从哪下载。
更重要的是，如果我们要使用模块A，而模块A又依赖于模块B，模块B又依赖于模块X和模块Y，npm可以根据依赖关系，把所有依赖的包都下载下来并管理起来。否则，靠我们自己手动管理，肯定既麻烦又容易出错。
npm已经在Node.js安装的时候顺带装好了。我们在命令提示符或者终端输入npm -v


⦁    必装cnpm
因为npm安装插件是从国外服务器下载，受网络影响大，可能出现异常，如果npm的服务器在中国就好了，所以我们乐于分享的淘宝团队干了这事。
网址：http://npm.taobao.org  
安装：
cmd(命令行)执行
npm install cnpm -g --registry=https://registry.npm.taobao.org  

注意：安装完后最好查看其版本号cnpm -v或关闭命令提示符重新打开，安装完直接使用有可能会出现错误；
将路径C:\Users\asus\AppData\Roaming\npm\node_modules\cnpm配置到环境变量中，这样就可以在全局范围内使用cnpm命令了

注：cnpm跟npm用法完全一致，只是在执行命令时将npm改为cnpm（以下操作将以cnpm代替npm）。
⦁    全局安装gulp
在cmd(命令行)中执行 cnpm install gulp -g

查看是否正确安装：命令提示符执行gulp -v，出现版本号即为正确安装

注意配置环境变量（C:\Users\asus\AppData\Roaming\npm\gulp）

全局安装gulp的目的是：可以使用gulp命令（就跟使用npm的命令一样）

⦁    新建package.json文件(初始化一个项目)
1、进入项目的目录,如：cd F:\workspace\gulpdemo  （这是项目目录）

2、创建package.json文件
         在cmd(命令行)执行：cnpm init， 一路回车，就会在项目的文件夹下产生一个package.json文件
 
在路径下会形成这样的一个.json文件（部分内容为后添加的）
{
  "name": "gulptest",//项目名称（必须）不能有大写
  "version": "0.0.1",//项目版本（必须）
  "description": "这是一个gulp的测试程序",//项目描述（必须）
"homepage": "",   //项目主页
  "main": "index.js",//入口文件
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [//关键词
    "gulp"
  ],
  "author": "wuxunxun007",//作者
  "license": "ISC"//项目许可协议
"devDependencies": {    //项目依赖的插件
    "gulp": "^3.8.11",
    "gulp-less": "^3.0.0"
  }

}
查看package.json帮助文档，命令提示符执行cnpm help package.json
⦁    本地安装gulp(在项目目录下安装gulp)：
此步骤的目的是：把gulp里的所有的js文件从服务器上下载到项目目录下（node_modules）

  1）、把当前目录转到项目目录：cd  项目目录，或者在项目目录下，按住shift键，同时点击鼠标右键，选择“在此处打开命令行”
  2）、在cmd(命令行)执行：cnpm install gulp --save-dev

安装完成后，就会在项目目录下产生一个node_modules文件
⦁    使用gulp。
必须在项目的根目录先建立 gulpfile.js文件。在这个js文件中写上js代码，就可以使用。
如下会有：复制文件的功能，那么就写出个复制文件功能的任务。
⦁    复制文件
1.1复制页面
⦁    在根目录下创建一个index.html写一点内容，
 
⦁    在gulpfile.js写入下代码：
var gulp = require("gulp");

gulp.task("copy-html",function(){
    //gulp.src("index.html").pipe(gulp.dest("dist"));
    gulp.src("index.html")
    .pipe(gulp.dest("D:\\phpStudy\\WWW\\web180506\\day33"));
});

⦁    在命令行末执行gulp  copy-html  那么我们就会在D:\\phpStudy\\WWW\\web180506\\day33目录下面发现index.html文件，说明复制成功

注：
要复制项目的所有文件和文件夹（包括子文件夹，不管有多少级）有两种
1)    “./**/*”  当前路径用 “.”表示
2)    “*/**/*”
3)     “css/**/*”  把css文件夹下的所有的内容（包括子文件夹，不管有多少级）
gulp.task('copyallfile',function(){
    gulp.src('*/**/*')
    .pipe(gulp.dest('D:\\phpStudy\\WWW\\day32test'));
});

1.2 拷贝图片文件images
 
修改gulpfile.js
复制imges文件加下的所有jpg文件
 
执行命令 gulp images
在dist/images下有这样三个文件
 
复制images文件加下的所有jpg和png文件
 
执行命令



复制images文件加下的所有文件
 
执行命令


1.3 同时拷贝两个文件夹,拷贝到dist文件夹下的data中
 
修改gulpfile.js
 
执行命令gulp data



1.4 拷贝文件时过滤文件,在json文件中新建一个json为test.json， 
然后修改gulpfile.js
 
请手工删除dist/data文件下的文件
 
执行命令
 
我们发现，并没有把test.json拷贝进来

1.5如何将以上命令一次性执行，采用bulid命令
 
执行命令
 


⦁    本地安装gulp插件
gulp本身只做一些文件的拷贝，监视等等，但是它提供了很多的接口，由插件完成更多对应的任务，如：sass文件的编译，合并文件，压缩文件，优化图片的尺寸，创建本地的开发服务器。下面先介绍常用的，更多的可以找gulp的插件。

2.1 合并文件
安装命令 cnpm install gulp-concat --save-dev

修改gulpfile.js
 
执行命令 gulp scripts



2.2 合并并且压缩
先安装uglify插件
cnpm install gulp-uglify --save-dev

  

2.3 合并并且压缩,重新起名字
先安装插件rename
 cnpm install gulp-rename --save-dev

 


2.4 压缩css
先安装插件：
 cnpm install gulp-minify-css --save-dev


 
 
重新起名字：




2.5 压缩图片
先安装插件 imagemin
cnpm install gulp-imagemin --save-dev
  

Pipe就是管道
解释：gulp.src()  是读取将要处理的文件，即源文件
      pipe() 管道，是如何处理该文件（如：sass编译，复制文件，压缩文件等）。
      gulp.dest()  是处理后的文件的路径，即目的文件。

编译sass文件
输入命令：cnpm install gulp-sass --save-dev
 安装sass插件， --save-dev表示安装到开发依赖里。
 
安装完成之后使用即可
创建一个main.scss
  
修改gulpfile.js

 
执行命令gulp sass
  


2.6 启动服务（web服务器）
安装插件 cnpm install gulp-connect --save-dev
 
修改gulpfile.js
 
执行命令 gulp server
 
打开浏览器输入
http://localhost:8080/，可以查看到




如果需要实时更新数据，那么需要添加一个参数livereload:true




执行gulp命令
然后修改index.html那么会自动更新


2.7实时监测文件的更新

⦁    新建一个任务watch
Gulpfile.js
 
执行命令 gulp watch
 
除非手动关闭，否则一直更新
修改index.html
 
打开dist文件下的index.html
 
点击是



Pipe：是管道的意思，pipe的参数如果写的是一个（命令）相当于生活中的在管道里增加一个过滤器过滤纯净水一样的道理


常见问题：
⦁    如果出现了cannot find module  ’***’,表示该模块没有安装成功，解决：执行cnpm install gulp ‘***’ --save-dev，就可以单独安装该模块。
如： 

表示，模块glob-watcher没有安装成功。执行以下命令：
cnpm install gulp glob-watcher --save-dev。如下图：



十一：正在进行的项目如何用gulp:
⦁    新建空文件夹作为项目的文件夹
⦁    用npm初始化项目：用npm init命令产生package.json文件
⦁    本地安装gulp
⦁    把项目目前的所有文件拷贝的到新建的项目文件夹里
⦁    在项目根目录下写gulpfile.js的代码。
## 后记
目前仍在不断地探索中
[链接去博主的csdn](https://blog.csdn.net/mlonly)              


