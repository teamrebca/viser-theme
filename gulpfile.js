var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

exports.sass = function () {
  return gulp.src('scss/theme.scss')
    .pipe(sass({ includePaths: ['scss'] }))
    .pipe(gulp.dest('css'));
};

exports.browserSync = function (done) {
  browserSync.init(["css/*.css", "js/*.js", 'index.html'], {
    server: {
      baseDir: "./"
    }
  });

  done();
};

exports.watchSass = function() {
  gulp.watch("scss/*.scss", gulp.series(['sass']));
};

exports.default = gulp.parallel([exports.browserSync, exports.watchSass]);
