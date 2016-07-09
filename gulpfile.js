var gulp = require('gulp');
var watch = require('gulp-watch');
var webserver = require('gulp-webserver');
var plumber = require('gulp-plumber');
var haml = require('gulp-haml');
var styles = require('gulp-sass');
var glob = require('gulp-sass-glob');
var concat = require('gulp-concat');
var html2js = require('gulp-ng-html2js');
var filesort = require('gulp-angular-filesort');
var bowerLibs = require('main-bower-files');



gulp.task('webserver', function() {
  gulp.src('build')
    .pipe(webserver({
      fallback: 'index.html',
      livereload: true,
      open: true
    }));
});

gulp.task('watch', function(){
  gulp.start('sass');
  gulp.start('haml');
  gulp.start('js');
  gulp.start('templates');

  watch('./source/**/*scss', function(){
    gulp.start('sass');
  });
  watch('./source/index.haml', function(){
    gulp.start('haml');
  });
  watch('./source/**/*.js', function(){
    gulp.start('js');
  });
  watch('./source/**/*.haml', function(){
    gulp.start('templates');
  });
});


gulp.task('bower-libs', function(){
  return gulp.src(bowerLibs())
    .pipe(plumber())
    .pipe(concat('bower.js'))
    .pipe(gulp.dest('build'));
});

gulp.task('haml', function(){
  return gulp.src('./source/index.haml')
    .pipe(plumber())
    .pipe(haml())
    .pipe(gulp.dest('build'));
});

gulp.task('sass', function(){
  return gulp.src('./source/application.scss')
    .pipe(plumber())
    .pipe(glob())
    .pipe(styles())
    .pipe(gulp.dest('build'));
});


gulp.task('templates', function(){
  return gulp.src('./source/**/*.haml')
    .pipe(plumber())
    .pipe(haml())
    .pipe(html2js(
      {
        moduleName: 'template',
        declareModule: true
      }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('build'));
});

gulp.task('js', function(){
  return gulp.src('./source/**/*js')
    .pipe(plumber())
    .pipe(filesort())
    .pipe(concat('application.js'))
    .pipe(gulp.dest('build'));
});
