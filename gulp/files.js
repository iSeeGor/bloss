const filesList = [
    'src/index.html',
	'src/.htaccess',
	'src/robots.txt',
	'src/jquery.min.js',
	'src/intro.mp4',
];

module.exports = function(){
	
	$.gulp.task('files', () => {

        return Promise.all([
            $.gulp.src(filesList)
            .pipe($.gulp.dest('build/')),

            $.gulp.src('src/favicon/**')
            .pipe($.gulp.dest('build/favicon'))
        ])    
    });

}