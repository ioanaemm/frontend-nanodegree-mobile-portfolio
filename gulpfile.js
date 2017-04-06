const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imageResize = require('gulp-image-resize');
const minify = require('gulp-minify');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const htmlmin = require('gulp-htmlmin');
const runSequence = require('run-sequence');

gulp.task('images', function(cb) {
  return gulp.src('img_src/**/*.*')
  .pipe(imageResize({
    width : 400,
    height : 400,
    crop : true,
    quality: 0,
    upscale : false,
  }))
  .pipe(imagemin([
    imagemin.gifsicle({interlaced: true}),
    imagemin.jpegtran({progressive: true}),
    imagemin.optipng({optimizationLevel: 7}),
  ]))
  .pipe(gulp.dest('views/images'));
});

gulp.task('compress_view_templates', function() {
  gulp
    .src('src/views/**/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      minifyCSS: true
    }))
    .pipe(gulp.dest('./views'))
});

gulp.task('compress_main_template', function() {
  gulp
    .src('src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      minifyCSS: true
    }))
    .pipe(gulp.dest('.'))
});

gulp.task('compress_scripts', function() {
  gulp
    .src('src/js/**/*.js')
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./views/js'))
});

gulp.task('build', function(callback) {
  runSequence(
    ['compress_view_templates', 'compress_main_template', 'compress_scripts', 'images'],
    callback
  );
});
