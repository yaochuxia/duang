var gulp = require('gulp');
var watch = require('gulp-watch');
var stylus = require('gulp-stylus');
var rename = require('gulp-rename');
var nib = require('nib');

gulp.task('default',function() {
     	// 将默认的任务代码放在这里
}) 


//定义一个watch任务来监听模板文件的变化
gulp.task('watch',function(){
	gulp.watch('./styl/**/*',['stylus']);
})


//duang CSS 生成
gulp.task('stylus', function () {
    gulp.src('./styl/index.styl')
        .pipe(stylus({
            compress:true,
            use: nib()
        }))
        .pipe(rename('duang.min.css'))//重命命
        .pipe(gulp.dest('./dist/css/'));//压缩到的文件夹
});


//gulp-uglify:使用于压缩js
//gulp-concat:使用于合并文件

//gulp.src()
//任务处理的目标文件，返回的事stream，请把gulp看成矿泉水厂（想起了恒大冰泉-_-!），文件数据理解为水流，这里相当于阀门打开，水开始顺着管道（每个任务可以理解为一段管道）流去，然后经过各个插件的加工过滤，最后罐装到水瓶里面。

//pipe()是stream的核心方法，不是gulp的方法，第一个参数为插件方法，插件会接收从上游流下的文件，进行处理加工后，再往下流。
// .pipe(stylus())

