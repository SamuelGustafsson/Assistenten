var gulp = require('gulp');
var sass = require('gulp-sass');

var SASS_SRC = 'sass/**/*.scss';


gulp.task('styles', function () {
   gulp.src(SASS_SRC)
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('./css/'));
});

//Watch task

gulp.task('default', function () {
   gulp.watch(SASS_SRC, ['styles']);
});