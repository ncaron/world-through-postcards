var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var minHTML = require('gulp-htmlmin');
var minCSS = require('gulp-clean-css');
var minJS = require('gulp-uglify');
var lint = require('gulp-eslint');

var config = {
  port: 9005,
  devBaseUrl: 'http://localhost',
  paths: {
    html: ['index.html'],
    css: ['./css/reset.css', './css/style.scss'],
    js: ['./js/data.js', './js/app.js'],
    assets: './assets/**/**/*',
    build: '../build',
  }
};

gulp.task('connect', function() {
  connect.server({
    root: [config.paths.build],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  });
});

gulp.task('open', ['connect'], function() {
  gulp.src(config.paths.build + '/index.html')
      .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/' }));
});

gulp.task('html', function() {
  gulp.src(config.paths.html)
      .pipe(minHTML({ collapseWhitespace: true, processScripts: ['text/template', 'text/javascript'], removeComments: true }))
      .pipe(gulp.dest(config.paths.build))
      .pipe(connect.reload());
});

gulp.task('css', function() {
  return gulp.src(config.paths.css)
             .pipe(concat('style.css'))
             .pipe(sass().on('error', sass.logError))
             .pipe(minCSS())
             .pipe(gulp.dest(config.paths.build + '/css'))
             .pipe(connect.reload());
});

gulp.task('js', function() {
  gulp.src(config.paths.js)
      .pipe(concat('app.js'))
      .pipe(babel({ presets: ['es2015'] }))
      .pipe(minJS())
      .pipe(gulp.dest(config.paths.build + '/js'))
      .pipe(connect.reload());
});

gulp.task('lint', function() {
  return gulp.src(config.paths.js)
             .pipe(lint())
             .pipe(lint.format())
             .pipe(lint.failAfterError());
});

gulp.task('assets', function() {
  gulp.src(config.paths.assets)
      .pipe(gulp.dest(config.paths.build + '/assets'));
})

gulp.task('watch', function() {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.css, ['css']);
  gulp.watch(config.paths.js, ['lint', 'js']);
});

gulp.task('default', ['html', 'css', 'lint', 'js', 'assets', 'open', 'watch']);