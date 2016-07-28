var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    minifyHtml = require("gulp-minify-html"),
    zip = require("gulp-zip"),
    del = require('del');

// uglify压缩JS代码
gulp.task('uglify', function () {
    gulp.src([// 要压缩的js文件,!不需要压缩的文件
        'dist/app/**/*.js',
        '!dist/app/common/config.js',
        '!dist/app/assets/js/**/*.js'
    ])
        .pipe(uglify())  //使用uglify进行压缩,更多配置请参考：
        .pipe(gulp.dest('dist/app/')); //压缩后的路径
});
//压缩CSS
gulp.task('minicss', function () {
    gulp.src([// 要压缩的css文件
        'dist/app/**/*.css'
    ])
        .pipe(minifycss()) //压缩css
        .pipe(gulp.dest('dist/app/'));
});
//压缩HTML
gulp.task('minihtml', function () {
    gulp.src([// 要压缩的html文件
        'dist/app/**/*.html',
        '!dist/app/index.html'
    ])
        .pipe(minifyHtml()) //压缩
        .pipe(gulp.dest('dist/app/'));
});
//压缩图片
gulp.task('miniimage', function () {
    gulp.src('dist/app/assets/**/*.{png,jpg,gif,ico}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/app/assets'));
});
// Clean
gulp.task('clean', function(cb) {
    del([ 'dist'], cb)
});
//copy
gulp.task('copy',function(){
    return gulp.src('app/**/*')  //原项目路径
        .pipe(gulp.dest('dist/app')); //复制后的路径
});
// Default task---1:gulp  2:gulp copy  3: gulp all
//4:打包----gulp zip
gulp.task('default', ['clean'], function() {
    console.log("clean is done");
});
// all----一键压缩所有
gulp.task('all',[ 'uglify','minicss','minihtml','miniimage']);

var deployFiles = [
    //string 要配置打包的文件路径
]

//打包
gulp.task('zip', function() {
    return gulp.src(deployFiles)
        .pipe(zip('lzg.zip'))
        .pipe(gulp.dest('dist'));
 });