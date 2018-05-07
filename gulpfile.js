const gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-csso'),
    html = require('gulp-minify-html'),
    concat = require('gulp-concat');

gulp.task('scripts', () => {
    return gulp.src('src/js/*.js')
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./punlic/dist/js'));
});

gulp.task('stylesheet', () => {
    return gulp.src('src/css/*.css')
        .pipe(concat('style.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./public/dist/css'));
});

gulp.task('html', () => {
    return gulp.src('./src/index.html')
        .pipe(html())
        .pipe(gulp.dest('./public/'));
});

gulp.task('default', ['stylesheet', 'html']);
