module.exports = function() {
    $.gulp.task('watch', () => {
        // $.gulp.watch('src/scss/**/*.scss', $.gulp.series(['styles:dev', 'styles:mq']));
        $.gulp.watch('src/scss/**/*.scss', $.gulp.series('styles:dev'));
        $.gulp.watch('src/js/**/*.js', $.gulp.series('js:dev'));
        $.gulp.watch('src/icons/**/*.{png,jpg,gif,svg}', $.gulp.series('icons'));
        $.gulp.watch('src/icons/sprite/**/*.svg', $.gulp.series('spriteSVG'));
        $.gulp.watch(
            ['src/images/**/*.{png,jpg,gif,svg}'],
            $.gulp.series('images:dev')
        );
        $.gulp.watch(['src/views/**/*.html', 'src/index.html'], $.gulp.series('html')).on('change', $.browserSync.reload);
    });
};
