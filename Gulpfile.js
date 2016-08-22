var gulp = require('gulp');

var stylus = require('gulp-stylus');
var jade = require('gulp-jade');
var jeet = require('jeet');
var rupture = require('rupture');
var gutil = require('gulp-util');

var paths ={
  jades : ['./jade/*.jade'],
  stylus : ['./stylus/**/*.styl']
}

gulp.task('jade', function() {
  var YOUR_LOCALS = {};

  gulp.src(paths.jades)
    .pipe(jade({
      locals: YOUR_LOCALS,
      pretty: true
    }))
    .pipe(gulp.dest('./'))
});

gulp.task('stylus', function () {
    return gulp.src(paths.stylus)
        .pipe(stylus({use: [jeet(),rupture()]}))
        .pipe(gulp.dest('./css'))
});

gulp.task('compile', ['jade', 'stylus']);

gulp.task('watch',function(){
  gulp.watch(paths.jades,['jade']);
  gulp.watch(paths.stylus,['stylus']);
});

gulp.task('default',['jade','stylus']);