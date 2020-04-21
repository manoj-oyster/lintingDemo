const babel = require('gulp-babel');
const rollup = require('gulp-rollup');
const concat = require('gulp-concat');
const {gulp, task, src, dest, series} = require('gulp');
function defaultTask(cb) {
  // place code for your default task here

  return src(['src/utils/helpers.js', 'src/components/**/js/index.js'])
    .pipe(babel())
    .pipe(concat('js/index.js'))
    .pipe(dest('dist'));
}

exports.default = defaultTask;

function copy() {
  return src('src/components/**/docs/index.html').pipe(dest('dist'));
}

exports.copy = copy;

exports.build = series(copy, defaultTask);
