### 前端自动管理工具   

##### gulp与grunt一样，都是一个自动任务运行器，grunt是母亲最流行的前端构建工具，对前端的效率帮助非常大，但是grunt并非完美无缺，json描述任务的方式，显得过于繁琐和不够简单，对于新手来说，有不少的学习成本。gulp它充分借鉴了Unix操作系统的管道（pipe）思想，很多人认为，在操作上，它要比Grunt简单。

### 安装   
1. 进入相关项目目录  
    `npm install -g gulp` 全局安装  

2. 作为项目的开发依赖（devDependencies）安装
   `npm install --save-dev gulp `  
   `npm install --save-dev gulp-stylus`  
   `npm install --save-dev gulp-watch`
   ... 

3. 在项目的根目录下创建一个名为`gulpfile.js`的文件  
```js
var gulp = require('gulp');
gulp.task('default', function() {
    //将你的默认任务代码放在这里
    })  
```

4.运行 
   `gulp` 

