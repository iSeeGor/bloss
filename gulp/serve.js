module.exports = function () {
    $.gulp.task('browser-sync', () => {

        $.browserSync.init({
            // server: {
            //     baseDir: './build/' 
            // },

            proxy: 'http://bloss.site/',
            notify: false,
            online: true
        });

    });
}