(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{668:function(n,s,e){"use strict";e.r(s);var l=e(16),p=Object(l.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[n._v("#")]),n._v(" 前言")]),n._v(" "),e("h3",{attrs:{id:"项目环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目环境"}},[n._v("#")]),n._v(" 项目环境")]),n._v(" "),e("ul",[e("li",[n._v("前端框架：js+jq+html+css")])]),n._v(" "),e("h2",{attrs:{id:"示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[n._v("#")]),n._v(" 示例")]),n._v(" "),e("p",[n._v("前端构建工具gulpjs的使用介绍及技巧\ngulpjs是一个前端构建工具，与gruntjs相比，gulpjs无需写一大堆繁杂的配置参数，API也非常简单，学习起来很容易，而且gulpjs使用的是nodejs中stream来读取和操作数据，其速度更快。如果你还没有使用过前端构建工具，或者觉得gruntjs太难用的话，那就尝试一下gulp吧。\n本文导航：\ngulp的安装\n开始使用gulp\ngulp的API介绍\n一些常用的gulp插件\n1、gulp的安装\n首先确保你已经正确安装了nodejs环境。然后以全局方式安装gulp：\nnpm install -g gulp\n全局安装gulp后，还需要在每个要使用gulp的项目中都单独安装一次。把目录切换到你的项目文件夹中，然后在命令行中执行：\nnpm install gulp\n如果想在安装的时候把gulp写进项目package.json文件的依赖中，则可以加上--save-dev：\nnpm install --save-dev gulp\n这样就完成了gulp的安装。至于为什么在全局安装gulp后，还需要在项目中本地安装一次，有兴趣的可以看下stackoverflow上有人做出的回答：why-do-we-need-to-install-gulp-globally-and-locally、what-is-the-point-of-double-install-in-gulp。大体就是为了版本的灵活性，但如果没理解那也不必太去纠结这个问题，只需要知道通常我们是要这样做就行了。\n2、开始使用gulp\n2.1 建立gulpfile.js文件\n就像gruntjs需要一个Gruntfile.js文件一样，gulp也需要一个文件作为它的主文件，在gulp中这个文件叫做gulpfile.js。新建一个文件名为gulpfile.js的文件，然后放到你的项目目录中。之后要做的事情就是在gulpfile.js文件中定义我们的任务了。下面是一个最简单的gulpfile.js文件内容示例，它定义了一个默认的任务。\nvar gulp = require('gulp');gulp.task('default',function(){\nconsole.log('hello world');});\n此时我们的目录结构是这样子的：\n├── gulpfile.js\n├── node_modules\n│ └── gulp\n└── package.json\n2.2 运行gulp任务\n要运行gulp任务，只需切换到存放gulpfile.js文件的目录(windows平台请使用cmd或者Power Shell等工具)，然后在命令行中执行gulp命令就行了，gulp后面可以加上要执行的任务名，例如gulp task1，如果没有指定任务名，则会执行任务名为default的默认任务。\n3、gulp的API介绍\n使用gulp，仅需知道4个API即可：gulp.task(),gulp.src(),gulp.dest(),gulp.watch()，所以很容易就能掌握，但有几个地方需理解透彻才行，我会在下面一一说明。为了避免出现理解偏差，建议先看一遍官方文档。\n3.1 gulp.src()\n在介绍这个API之前我们首先来说一下Grunt.js和Gulp.js工作方式的一个区别。Grunt主要是以文件为媒介来运行它的工作流的，比如在Grunt中执行完一项任务后，会把结果写入到一个临时文件中，然后可以在这个临时文件内容的基础上执行其它任务，执行完成后又把结果写入到临时文件中，然后又以这个为基础继续执行其它任务...就这样反复下去。而在Gulp中，使用的是Nodejs中的stream(流)，首先获取到需要的stream，然后可以通过stream的pipe()方法把流导入到你想要的地方，比如Gulp的插件中，经过插件处理后的流又可以继续导入到其他插件中，当然也可以把流写入到文件中。所以Gulp是以stream为媒介的，它不需要频繁的生成临时文件，这也是Gulp的速度比Grunt快的一个原因。再回到正题上来，gulp.src()方法正是用来获取流的，但要注意这个流里的内容不是原始的文件流，而是一个虚拟文件对象流(Vinyl files)，这个虚拟文件对象中存储着原始文件的路径、文件名、内容等信息，这个我们暂时不用去深入理解，你只需简单的理解可以用这个方法来读取你需要操作的文件就行了。其语法为：\ngulp.src(globs[, options])\nglobs参数是文件匹配模式(类似正则表达式)，用来匹配文件路径(包括文件名)，当然这里也可以直接指定某个具体的文件路径。当有多个匹配模式时，该参数可以为一个数组。\noptions为可选参数。通常情况下我们不需要用到。\n下面我们重点说说Gulp用到的glob的匹配规则以及一些文件匹配技巧。\nGulp内部使用了node-glob模块来实现其文件匹配功能。我们可以使用下面这些特殊的字符来匹配我们想要的文件：")]),n._v(" "),e("ul",[e("li",[n._v("匹配文件路径中的0个或多个字符，但不会匹配路径分隔符，除非路径分隔符出现在末尾\n** 匹配路径中的0个或多个目录及其子目录,需要单独出现，即它左右不能有其他东西了。如果出现在末尾，也能匹配文件。\n? 匹配文件路径中的一个字符(不会匹配路径分隔符)\n[...] 匹配方括号中出现的字符中的任意一个，当方括号中第一个字符为^或!时，则表示不匹配方括号中出现的其他字符中的任意一个，类似js正则表达式中的用法\n!(pattern|pattern|pattern) 匹配任何与括号中给定的任一模式都不匹配的\n?(pattern|pattern|pattern) 匹配括号中给定的任一模式0次或1次，类似于js正则中的(pattern|pattern|pattern)?\n+(pattern|pattern|pattern) 匹配括号中给定的任一模式至少1次，类似于js正则中的(pattern|pattern|pattern)+\n"),e("em",[n._v("(pattern|pattern|pattern) 匹配括号中给定的任一模式0次或多次，类似于js正则中的(pattern|pattern|pattern)")]),n._v("\n@(pattern|pattern|pattern) 匹配括号中给定的任一模式1次，类似于js正则中的(pattern|pattern|pattern)\n下面以一系列例子来加深理解")]),n._v(" "),e("li",[n._v("能匹配 a.js,x.y,abc,abc/,但不能匹配a/b.js\n"),e("em",[n._v(".")]),n._v(" 能匹配 a.js,style.css,a.b,x.y\n"),e("em",[n._v("/")]),n._v("/"),e("em",[n._v(".js 能匹配 a/b/c.js,x/y/z.js,不能匹配a/b.js,a/b/c/d.js\n** 能匹配 abc,a/b.js,a/b/c.js,x/y/z,x/y/z/a.b,能用来匹配所有的目录和文件\n**/")]),n._v(".js 能匹配 foo.js,a/foo.js,a/b/foo.js,a/b/c/foo.js\na/"),e("strong",[n._v("/z 能匹配 a/z,a/b/z,a/b/c/z,a/d/g/h/j/k/z\na/"),e("strong",[n._v("b/z 能匹配 a/b/z,a/sb/z,但不能匹配a/x/sb/z,因为只有单")]),n._v("单独出现才能匹配多级目录\n?.js 能匹配 a.js,b.js,c.js\na?? 能匹配 a.b,abc,但不能匹配ab/,因为它不会匹配路径分隔符\n[xyz].js 只能匹配 x.js,y.js,z.js,不会匹配xy.js,xyz.js等,整个中括号只代表一个字符\n[^xyz].js 能匹配 a.js,b.js,c.js等,不能匹配x.js,y.js,z.js\n当有多种匹配模式时可以使用数组\n//使用数组的方式来匹配多种文件\ngulp.src(['js/"),e("em",[n._v(".js','css/")]),n._v(".css','"),e("em",[n._v(".html'])\n使用数组的方式还有一个好处就是可以很方便的使用排除模式，在数组中的单个匹配模式前加上!即是排除模式，它会在匹配的结果中排除这个匹配，要注意一点的是不能在数组中的第一个元素中使用排除模式\ngulp.src([")]),n._v(".js,'!b*.js']) //匹配所有js文件，但排除掉以b开头的js文件\ngulp.src(['!b*.js',"),e("em",[n._v(".js]) //不会排除任何文件，因为排除模式不能出现在数组的第一个元素中\n此外，还可以使用展开模式。展开模式以花括号作为定界符，根据它里面的内容，会展开为多个模式，最后匹配的结果为所有展开的模式相加起来得到的结果。展开的例子如下：\na{b,c}d 会展开为 abd,acd\na{b,}c 会展开为 abc,ac\na{0..3}d 会展开为 a0d,a1d,a2d,a3d\na{b,c{d,e}f}g 会展开为 abg,acdfg,acefg\na{b,c}d{e,f}g 会展开为 abdeg,acdeg,abdeg,abdfg\n3.2 gulp.dest()\ngulp.dest()方法是用来写文件的，其语法为：\ngulp.dest(path[,options])\npath为写入文件的路径\noptions为一个可选的参数对象，通常我们不需要用到\n要想使用好gulp.dest()这个方法，就要理解给它传入的路径参数与最终生成的文件的关系。\ngulp的使用流程一般是这样子的：首先通过gulp.src()方法获取到我们想要处理的文件流，然后把文件流通过pipe方法导入到gulp的插件中，最后把经过插件处理后的流再通过pipe方法导入到gulp.dest()中，gulp.dest()方法则把流中的内容写入到文件中，这里首先需要弄清楚的一点是，我们给gulp.dest()传入的路径参数，只能用来指定要生成的文件的目录，而不能指定生成文件的文件名，它生成文件的文件名使用的是导入到它的文件流自身的文件名，所以生成的文件名是由导入到它的文件流决定的，即使我们给它传入一个带有文件名的路径参数，然后它也会把这个文件名当做是目录名，例如：\nvar gulp = require('gulp');\ngulp.src('script/jquery.js')\n.pipe(gulp.dest('dist/foo.js'));//最终生成的文件路径为 dist/foo.js/jquery.js,而不是dist/foo.js\n要想改变文件名，可以使用插件gulp-rename\n下面说说生成的文件路径与我们给gulp.dest()方法传入的路径参数之间的关系。\ngulp.dest(path)生成的文件路径是我们传入的path参数后面再加上gulp.src()中有通配符开始出现的那部分路径。例如：\nvar gulp = reruire('gulp');//有通配符开始出现的那部分路径为 **/")]),n._v(".js\ngulp.src('script/")]),n._v("/"),e("em",[n._v(".js')\n.pipe(gulp.dest('dist')); //最后生成的文件路径为 dist/**/")]),n._v(".js//如果 **/*.js 匹配到的文件为 jquery/jquery.js ,则生成的文件路径为 dist/jquery/jquery.js\n再举更多一点的例子\ngulp.src('script/avalon/avalon.js') //没有通配符出现的情况\n.pipe(gulp.dest('dist')); //最后生成的文件路径为 dist/avalon.js\n//有通配符开始出现的那部分路径为 "),e("strong",[n._v("/underscore.js\ngulp.src('script/")]),n._v("/underscore.js')\n//假设匹配到的文件为script/util/underscore.js\n.pipe(gulp.dest('dist')); //则最后生成的文件路径为 dist/util/underscore.js")])]),n._v(" "),e("p",[n._v("gulp.src('script/"),e("em",[n._v("') //有通配符出现的那部分路径为 *\n//假设匹配到的文件为script/zepto.js"),e("br"),n._v("\n.pipe(gulp.dest('dist')); //则最后生成的文件路径为 dist/zepto.js\n通过指定gulp.src()方法配置参数中的base属性，我们可以更灵活的来改变gulp.dest()生成的文件路径。\n当我们没有在gulp.src()方法中配置base属性时，base的默认值为通配符开始出现之前那部分路径，例如：\ngulp.src('app/src/**/")]),n._v(".css') //此时base的值为 app/src\n上面我们说的gulp.dest()所生成的文件路径的规则，其实也可以理解成，用我们给gulp.dest()传入的路径替换掉gulp.src()中的base路径，最终得到生成文件的路径。\ngulp.src('app/src/**/"),e("em",[n._v(".css') //此时base的值为app/src,也就是说它的base路径为app/src\n//设该模式匹配到了文件 app/src/css/normal.css\n.pipe(gulp.dest('dist')) //用dist替换掉base路径，最终得到 dist/css/normal.css\n所以改变base路径后，gulp.dest()生成的文件路径也会改变\ngulp.src(script/lib/")]),n._v(".js) //没有配置base参数，此时默认的base路径为script/lib\n//假设匹配到的文件为script/lib/jquery.js\n.pipe(gulp.dest('build')) //生成的文件路径为 build/jquery.js")]),n._v(" "),e("p",[n._v("gulp.src(script/lib/"),e("em",[n._v(".js, {base:'script'}) //配置了base参数，此时base路径为script\n//假设匹配到的文件为script/lib/jquery.js\n.pipe(gulp.dest('build')) //此时生成的文件路径为 build/lib/jquery.js"),e("br"),n._v("\n用gulp.dest()把文件流写入文件后，文件流仍然可以继续使用。\n3.3 gulp.task()\ngulp.task方法用来定义任务，内部使用的是Orchestrator，其语法为：\ngulp.task(name[, deps], fn)\nname 为任务名\ndeps 是当前定义的任务需要依赖的其他任务，为一个数组。当前定义的任务会在所有依赖的任务执行完毕后才开始执行。如果没有依赖，则可省略这个参数\nfn 为任务函数，我们把任务要执行的代码都写在里面。该参数也是可选的。\ngulp.task('mytask', ['array', 'of', 'task', 'names'], function() { //定义一个有依赖的任务\n// Do something\n});\ngulp.task()这个API没什么好讲的，但需要知道执行多个任务时怎么来控制任务执行的顺序。\ngulp中执行多个任务，可以通过任务依赖来实现。例如我想要执行one,two,three这三个任务，那我们就可以定义一个空的任务，然后把那三个任务当做这个空的任务的依赖就行了：\n//只要执行default任务，就相当于把one,two,three这三个任务执行了\ngulp.task('default',['one','two','three']);\n如果任务相互之间没有依赖，任务会按你书写的顺序来执行，如果有依赖的话则会先执行依赖的任务。\n但是如果某个任务所依赖的任务是异步的，就要注意了，gulp并不会等待那个所依赖的异步任务完成，而是会接着执行后续的任务。例如：\ngulp.task('one',function(){\n//one是一个异步执行的任务\nsetTimeout(function(){\nconsole.log('one is done')\n},5000);\n});\n//two任务虽然依赖于one任务,但并不会等到one任务中的异步操作完成后再执行\ngulp.task('two',['one'],function(){\nconsole.log('two is done');\n});\n上面的例子中我们执行two任务时，会先执行one任务，但不会去等待one任务中的异步操作完成后再执行two任务，而是紧接着执行two任务。所以two任务会在one任务中的异步操作完成之前就执行了。\n那如果我们想等待异步任务中的异步操作完成后再执行后续的任务，该怎么做呢？\n有三种方法可以实现：\n第一：在异步操作完成后执行一个回调函数来通知gulp这个异步任务已经完成,这个回调函数就是任务函数的第一个参数。\ngulp.task('one',function(cb){ //cb为任务函数提供的回调，用来通知任务已经完成\n//one是一个异步执行的任务\nsetTimeout(function(){\nconsole.log('one is done');\ncb();  //执行回调，表示这个异步任务已经完成\n},5000);\n});\n//这时two任务会在one任务中的异步操作完成后再执行\ngulp.task('two',['one'],function(){\nconsole.log('two is done');\n});\n第二：定义任务时返回一个流对象。适用于任务就是操作gulp.src获取到的流的情况。\ngulp.task('one',function(cb){\nvar stream = gulp.src('client/**/")]),n._v(".js')\n.pipe(dosomething()) //dosomething()中有某些异步操作\n.pipe(gulp.dest('build'));\nreturn stream;\n});")]),n._v(" "),e("p",[n._v("gulp.task('two',['one'],function(){\nconsole.log('two is done');\n});\n第三：返回一个promise对象，例如\nvar Q = require('q'); //一个著名的异步处理的库 https://github.com/kriskowal/q\ngulp.task('one',function(cb){\nvar deferred = Q.defer();\n// 做一些异步操作\nsetTimeout(function() {\ndeferred.resolve();\n}, 5000);\nreturn deferred.promise;\n});")]),n._v(" "),e("p",[n._v("gulp.task('two',['one'],function(){\nconsole.log('two is done');\n});\ngulp.task()就这些了，主要是要知道当依赖是异步任务时的处理。\n3.4 gulp.watch()\ngulp.watch()用来监视文件的变化，当文件发生变化后，我们可以利用它来执行相应的任务，例如文件压缩等。其语法为\ngulp.watch(glob[, opts], tasks)\nglob 为要监视的文件匹配模式，规则和用法与gulp.src()方法中的glob相同。\nopts 为一个可选的配置对象，通常不需要用到\ntasks 为文件变化后要执行的任务，为一个数组\ngulp.task('uglify',function(){\n//do something\n});\ngulp.task('reload',function(){\n//do something\n});\ngulp.watch('js/"),e("strong",[n._v("/*.js', ['uglify','reload']);\ngulp.watch()还有另外一种使用方式：\ngulp.watch(glob[, opts, cb])\nglob和opts参数与第一种用法相同\ncb参数为一个函数。每当监视的文件发生变化时，就会调用这个函数,并且会给它传入一个对象，该对象包含了文件变化的一些信息，type属性为变化的类型，可以是added,changed,deleted；path属性为发生变化的文件的路径\ngulp.watch('js/")]),n._v("/*.js', function(event){\nconsole.log(event.type); //变化类型 added为新增,deleted为删除，changed为改变\nconsole.log(event.path); //变化的文件的路径\n});\n4、一些常用的gulp插件\ngulp的插件数量虽然没有grunt那么多，但也可以说是应有尽有了，下面列举一些常用的插件。\n4.1 自动加载插件\n使用gulp-load-plugins\n安装：npm install --save-dev gulp-load-plugins\n要使用gulp的插件，首先得用require来把插件加载进来，如果我们要使用的插件非常多，那我们的gulpfile.js文件开头可能就会是这个样子的：\nvar gulp = require('gulp'),\n//一些gulp插件,abcd这些命名只是用来举个例子\na = require('gulp-a'),\nb = require('gulp-b'),\nc = require('gulp-c'),\nd = require('gulp-d'),\ne = require('gulp-e'),\nf = require('gulp-f'),\ng = require('gulp-g'),\n//更多的插件...\nz = require('gulp-z');"),e("br"),n._v('\n虽然这没什么问题，但会使我们的gulpfile.js文件变得很冗长，看上去不那么舒服。gulp-load-plugins插件正是用来解决这个问题。\ngulp-load-plugins这个插件能自动帮你加载package.json文件里的gulp插件。例如假设你的package.json文件里的依赖是这样的:\n{\n"devDependencies": {\n"gulp": "~3.6.0",\n"gulp-rename": "~1.2.0",\n"gulp-ruby-sass": "~0.4.3",\n"gulp-load-plugins": "~0.5.1"\n}\n}\n然后我们可以在gulpfile.js中使用gulp-load-plugins来帮我们加载插件：\nvar gulp = require(\'gulp\');//加载gulp-load-plugins插件，并马上运行它var plugins = require(\'gulp-load-plugins\')();\n然后我们要使用gulp-rename和gulp-ruby-sass这两个插件的时候，就可以使用plugins.rename和plugins.rubySass来代替了,也就是原始插件名去掉gulp-前缀，之后再转换为驼峰命名。\n实质上gulp-load-plugins是为我们做了如下的转换\nplugins.rename = require(\'gulp-rename\');\nplugins.rubySass = require(\'gulp-ruby-sass\');\ngulp-load-plugins并不会一开始就加载所有package.json里的gulp插件，而是在我们需要用到某个插件的时候，才去加载那个插件。\n最后要提醒的一点是，因为gulp-load-plugins是通过你的package.json文件来加载插件的，所以必须要保证你需要自动加载的插件已经写入到了package.json文件里，并且这些插件都是已经安装好了的。\n4.2 重命名\n使用gulp-rename\n安装：npm install --save-dev gulp-rename\n用来重命名文件流中的文件。用gulp.dest()方法写入文件时，文件名使用的是文件流中的文件名，如果要想改变文件名，那可以在之前用gulp-rename插件来改变文件流中的文件名。\nvar gulp = require(\'gulp\'),\nrename = require(\'gulp-rename\'),\nuglify = require("gulp-uglify");')]),n._v(" "),e("p",[n._v("gulp.task('rename', function () {\ngulp.src('js/jquery.js')\n.pipe(uglify())  //压缩\n.pipe(rename('jquery.min.js')) //会将jquery.js重命名为jquery.min.js\n.pipe(gulp.dest('js'));\n//关于gulp-rename的更多强大的用法请参考https://www.npmjs.com/package/gulp-rename\n});\n4.3 js文件压缩\n使用gulp-uglify\n安装：npm install --save-dev gulp-uglify\n用来压缩js文件，使用的是uglify引擎\nvar gulp = require('gulp'),\nuglify = require(\"gulp-uglify\");")]),n._v(" "),e("p",[n._v("gulp.task('minify-js', function () {\ngulp.src('js/*.js') // 要压缩的js文件\n.pipe(uglify())  //使用uglify进行压缩,更多配置请参考：\n.pipe(gulp.dest('dist/js')); //压缩后的路径\n});\n4.4 css文件压缩\n使用gulp-minify-css\n安装：npm install --save-dev gulp-minify-css\n要压缩css文件时可以使用该插件\nvar gulp = require('gulp'),\nminifyCss = require(\"gulp-minify-css\");")]),n._v(" "),e("p",[n._v("gulp.task('minify-css', function () {\ngulp.src('css/*.css') // 要压缩的css文件\n.pipe(minifyCss()) //压缩css\n.pipe(gulp.dest('dist/css'));\n});\n4.5 html文件压缩\n使用gulp-minify-html\n安装：npm install --save-dev gulp-minify-html\n用来压缩html文件\nvar gulp = require('gulp'),\nminifyHtml = require(\"gulp-minify-html\");")]),n._v(" "),e("p",[n._v("gulp.task('minify-html', function () {\ngulp.src('html/*.html') // 要压缩的html文件\n.pipe(minifyHtml()) //压缩\n.pipe(gulp.dest('dist/html'));\n});\n4.6 js代码检查\n使用gulp-jshint\n安装：npm install --save-dev gulp-jshint\n用来检查js代码\nvar gulp = require('gulp'),\njshint = require(\"gulp-jshint\");")]),n._v(" "),e("p",[n._v("gulp.task('jsLint', function () {\ngulp.src('js/*.js')\n.pipe(jshint())\n.pipe(jshint.reporter()); // 输出检查结果\n});\n4.7 文件合并\n使用gulp-concat\n安装：npm install --save-dev gulp-concat\n用来把多个文件合并为一个文件,我们可以用它来合并js或css文件等，这样就能减少页面的http请求数了\nvar gulp = require('gulp'),\nconcat = require(\"gulp-concat\");")]),n._v(" "),e("p",[n._v("gulp.task('concat', function () {\ngulp.src('js/*.js')  //要合并的文件\n.pipe(concat('all.js'))  // 合并匹配到的js文件并命名为 \"all.js\"\n.pipe(gulp.dest('dist/js'));\n});\n4.8 less和sass的编译\nless使用gulp-less,安装：npm install --save-dev gulp-less\nvar gulp = require('gulp'),\nless = require(\"gulp-less\");")]),n._v(" "),e("p",[n._v("gulp.task('compile-less', function () {\ngulp.src('less/*.less')\n.pipe(less())\n.pipe(gulp.dest('dist/css'));\n});\nsass使用gulp-sass,安装：npm install --save-dev gulp-sass\nvar gulp = require('gulp'),\nsass = require(\"gulp-sass\");")]),n._v(" "),e("p",[n._v("gulp.task('compile-sass', function () {\ngulp.src('sass/*.sass')\n.pipe(sass())\n.pipe(gulp.dest('dist/css'));\n});\n4.9 图片压缩\n可以使用gulp-imagemin插件来压缩jpg、png、gif等图片。\n安装：npm install --save-dev gulp-imagemin\nvar gulp = require('gulp');var imagemin = require('gulp-imagemin');var pngquant = require('imagemin-pngquant'); //png图片压缩插件")]),n._v(" "),e("p",[n._v("gulp.task('default', function () {\nreturn gulp.src('src/images/*')\n.pipe(imagemin({\nprogressive: true,\nuse: [pngquant()] //使用pngquant来压缩png图片\n}))\n.pipe(gulp.dest('dist'));\n});\ngulp-imagemin的使用比较复杂一点，而且它本身也有很多插件，建议去它的项目主页看看文档\n4.10 自动刷新\n使用gulp-livereload插件，安装:npm install --save-dev gulp-livereload。\n当代码变化时，它可以帮我们自动刷新页面\n该插件最好配合谷歌浏览器来使用，且要安装livereload chrome extension扩展插件,不能下载的请自行FQ。\nvar gulp = require('gulp'),\nless = require('gulp-less'),\nlivereload = require('gulp-livereload');")]),n._v(" "),e("p",[n._v("gulp.task('less', function() {\ngulp.src('less/*.less')\n.pipe(less())\n.pipe(gulp.dest('css'))\n.pipe(livereload());\n});")]),n._v(" "),e("p",[n._v("gulp.task('watch', function() {\nlivereload.listen(); //要在这里调用listen()方法\ngulp.watch('less/*.less', ['less']);\n});")]),n._v(" "),e("h2",{attrs:{id:"后记"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#后记"}},[n._v("#")]),n._v(" 后记")]),n._v(" "),e("p",[n._v("目前仍在不断地探索中\n"),e("a",{attrs:{href:"https://blog.csdn.net/mlonly",target:"_blank",rel:"noopener noreferrer"}},[n._v("链接去博主的csdn"),e("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=p.exports}}]);