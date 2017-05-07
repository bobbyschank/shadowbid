let gulp = require('gulp');
let sass = require('gulp-sass');
gulp.task('styles', function() {
    gulp.src('public/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css/'));
});
//define a task with the name of 'default'
// and a callback to perform when the task is ran
gulp.task('default', function() {
  gulp.watch('public/sass/**/*.scss',['styles']);
  console.log('In Default Task');
});