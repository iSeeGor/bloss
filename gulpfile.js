global.$ = {
    gulp: require('gulp'),
    browserSync: require('browser-sync').create(),
    del: require('del')
};

const html = require('./gulp/html')();
const styles = require('./gulp/styles')();
const scripts = require('./gulp/scripts')();
const vendor = require('./gulp/vendor')();
const images = require('./gulp/images')();
const sprite = require('./gulp/svg')();
const fonts = require('./gulp/fonts')();
const files = require('./gulp/files')();
const clean = require('./gulp/clean')();
const serve = require('./gulp/serve')();
const watch = require('./gulp/watch')();

const createdocs = require('./gulp/docs')();

$.gulp.task('dev', $.gulp.series(
    'clean',
    // 'styles:dev', 
    // 'styles:mq', 
    'html',
    $.gulp.parallel(
        'files',
        'styles:dev',
        'js:dev',
        'vendor:js',
        'vendor:style',
        'images:dev',
        'icons',
        'spriteSVG',
        'fonts',
    )
));

$.gulp.task('docs', $.gulp.series('del-docs', 'create-docs'));


$.gulp.task('build', $.gulp.series(
    'clean',
    'styles:build',
    $.gulp.parallel(
        'files',
        'styles:dev',
        'styles:min',
        'styles:minMap',
        'js:build',
        'images:build'
    )
));


$.gulp.task('default', $.gulp.series(
    'dev',  
    $.gulp.parallel(
        'watch', 
        'browser-sync'
    )
));


