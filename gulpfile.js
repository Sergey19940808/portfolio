'use strict';

const gulp =  require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', () => {
    return gulp.src('./assets/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public'));
});

gulp.task('watch', () => {
    gulp.watch('./assets/scss/style.scss', gulp.series('sass'));
});

gulp.task('start', gulp.series('sass', 'watch'));