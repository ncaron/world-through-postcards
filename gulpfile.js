var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var minHTML = require('gulp-htmlmin');
var minCSS = require('gulp-clean-css');
var minJS = require('gulp-uglify');

var config = {
  port: 9005,
  devBaseUrl: 'http://localhost',
  paths: {
    html: ['index.html'],
    css: ['./css/reset.css', './css/style.scss'],
    js: ['./js/data.js', './js/app.js'],
    assets: './assets/**/**/*',
    dist: './dist',
  }
};

gulp.task('connect', function() {
  connect.server({
    root: [config.paths.dist],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  });
});

gulp.task('open', ['connect'], function() {
  gulp.src(config.paths.dist + '/index.html')
      .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/' }));
});

gulp.task('html', function() {
  gulp.src(config.paths.html)
      .pipe(minHTML({ collapseWhitespace: true, processScripts: ['text/template']}))
      .pipe(gulp.dest(config.paths.dist))
      .pipe(connect.reload());
});

gulp.task('css', function() {
  return gulp.src(config.paths.css)
             .pipe(concat('style.css'))
             .pipe(sass().on('error', sass.logError))
             .pipe(minCSS())
             .pipe(gulp.dest(config.paths.dist + '/css'))
             .pipe(connect.reload());
});

gulp.task('js', function() {
  gulp.src(config.paths.js)
      .pipe(concat('app.js'))
      .pipe(babel({ presets: ['es2015'] }))
      .pipe(minJS())
      .pipe(gulp.dest(config.paths.dist + '/js'))
      .pipe(connect.reload());
});

gulp.task('assets', function() {
  gulp.src(config.paths.assets)
      .pipe(gulp.dest(config.paths.dist + '/assets'));
})

gulp.task('watch', function() {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.sass, ['sass']);
  gulp.watch(config.paths.js, ['js']);
});

gulp.task('default', ['html', 'css', 'js', 'assets', 'open', 'watch']);