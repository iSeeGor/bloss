const concat = require('gulp-concat');

let jsVendors = [
	'node_modules/jquery/dist/jquery.js',
	'src/vendor/**/*.js',
];


let cssVendors = [
    'src/vendor/**/*.css',
];


module.exports = function(){

	$.gulp.task('vendor:js', () => {

        return $.gulp.src(jsVendors)
            .pipe(concat('vendor.js'))
            .pipe($.gulp.dest("build/js"))

	});
	
	$.gulp.task('vendor:style', () => {

        return $.gulp.src(cssVendors)
            .pipe(concat('vendor.css'))
            .pipe($.gulp.dest("build/css"))

    });

}