/*
the code for minify images are from:https://www.npmjs.com/package/gulp-imagemin

*/
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
const { src, dest } = require('gulp');
const less = require('gulp-less');

exports.default = () => (
    gulp.src('images/*')
        .pipe(imagemin())
        .pipe(dest('dist/images'))
       
);


function style() { 
    return src('./less/**/*.less')
    .pipe(less())
    .pipe(dest('./css'))
    .pipe(browserSync.stream())  
   
}


function watch() { 
    browserSync.init({
        server: {
          baseDir: './',
        }
      });
    gulp.watch('./less/**/*.less', style);
    gulp.watch('./*.html').on('change', browserSync.reload);

}

exports.watch = watch;
