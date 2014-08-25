var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass',function(){
    return gulp.src('static/scss/styles.scss')
        .pipe(sass())
        .pipe(autoprefixer('last 1 version', '> 5%', 'ie 8'))
        .pipe(gulp.dest('static/css'));
});

gulp.task('default',['sass'],function(){
    gulp.watch('static/scss/**/*',['sass']);
});