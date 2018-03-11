const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const runSequence = require("run-sequence");

gulp.task('sass', function () {
    return gulp.src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/**/*.scss', ['sass']);
});

gulp.task('sass:uglify', function () {
    return gulp.src('./src/*.css', { base: process.cwd() })
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({
            dirname: '/',
            extname: '.min.css'
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build', function (callback) {
    runSequence('sass', ['sass:uglify'],callback);
});
