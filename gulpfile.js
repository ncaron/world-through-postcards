var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');
var sass = require('gulp-sass');
var lint = require('gulp-eslint');

var config = {
  port: 9005,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './*.html',
    css: './css/*.css',
    js: './js/*.js',
    sass: './scss/*.scss'
  }
};

gulp.task('connect', function() {
  connect.server({
    root: ['./'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  });
});

gulp.task('open', ['connect'], function() {
  gulp.src('./index.html')
      .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/' }));
});

gulp.task('html', function() {
  gulp.src(config.paths.html)
      .pipe(connect.reload());
});

gulp.task('sass', function() {
  return gulp.src(config.paths.sass)
             .pipe(sass().on('error', sass.logError))
             .pipe(gulp.dest('./css'))
             .pipe(connect.reload());
});

gulp.task('js', function() {
  gulp.src(config.paths.js)
      .on('error', console.error.bind(console))
      .pipe(connect.reload());
});

gulp.task('lint', function() {
  return gulp.src(config.paths.js)
             .pipe(lint())
             .pipe(lint.format())
             .pipe(lint.failAfterError());
});

gulp.task('watch', function() {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.sass, ['sass']);
  gulp.watch(config.paths.js, ['js', 'lint']);
});

gulp.task('default', ['html', 'sass', 'js', 'lint', 'open', 'watch']);