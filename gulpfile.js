var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');



gulp.task('fun', () => {
  var processors = [
    autoprefixer({browsers: ['last 1 version']}),
    cssnano(),
  ];
  return gulp.src('./public/*.sass')
             .pipe(sass().on('error', sass.logError))
             .pipe(postcss(processors))
             .pipe(gulp.dest('./public/'));
});

gulp.task('default', () => {
  gulp.watch('./public/*.sass', ['fun']);
});