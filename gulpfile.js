var gulp = require('gulp');
var img=require('gulp-image');
var autoprefixer = require('gulp-autoprefixer');
// var less = require('gulp-less');


gulp.task('html',function(){
    return gulp.src('app/**/*.html')
        .pipe(gulp.dest('build'))
})

gulp.task('css',function(){
    return gulp.src('app/css/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 15 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css2'))
})
gulp.task('js', function(){
    return gulp.src('app/**/*.js')
        .pipe(gulp.dest('build'))
})
gulp.task('img',function () {
    return gulp.src("app/images/**/*")
        .pipe(img())
        .pipe(gulp.dest("app/images2"))

})

gulp.task('watch',function(){
    gulp.watch('./app/**/*.css',['css'])
    gulp.watch('./app/**/*.html', ['html'])
    gulp.watch('./app/**/*.js',['js'])
})



gulp.task('default', ['watch', 'js', 'css', 'html']);