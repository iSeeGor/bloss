module.exports = function(){

	$.gulp.task('del-docs', function () {
        return $.del('docs');
    })

	$.gulp.task('create-docs', () => {
        return $.gulp.src('build/**')
            .pipe($.gulp.dest('docs'))
    });

}