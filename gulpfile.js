const gulp = require('gulp');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');

// Minify JavaScript
function minifyJS() {
  return gulp.src('index.js') // Change 'src/*.js' to the path of your JS files.
    .pipe(uglify())
    .pipe(gulp.dest('dist/js')); // Change 'dist/js' to the desired output directory.
}

// Minify CSS
function minifyCSS() {
  return gulp.src('style.css') // Change 'src/*.css' to the path of your CSS files.
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css')); // Change 'dist/css' to the desired output directory.
}

exports.minifyJS = minifyJS;
exports.minifyCSS = minifyCSS;
