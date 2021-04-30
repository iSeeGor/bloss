const fileinclude = require('gulp-file-include');

module.exports = function(){

	$.gulp.task('html', () => {

        return $.gulp.src(['src/views/*.html'])
			.pipe(fileinclude({
				prefix: '@@',
				basepath: '@file'
			})
		)
		.pipe($.gulp.dest('build/'));

	});
	
}