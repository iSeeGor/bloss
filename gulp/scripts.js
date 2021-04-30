const concat = require('gulp-concat'),
      uglify = require('gulp-uglify'),
      babel = require("gulp-babel");

const jsFiles = [

]

module.exports = function(){

    $.gulp.task('js:dev', () =>{

        return $.gulp.src('src/js/**/*.js')
            .pipe(concat('index.js'))
            .pipe($.gulp.dest("build/js"))
            .pipe($.browserSync.stream())

         // return Promise.all([
        //     $.gulp.src(jsFiles)
        //     .pipe(concat('scripts.js'))
        //     .pipe($.gulp.dest("public/assets/js"))
        //     .pipe($.browserSync.stream()),
        // ]);

    });

    $.gulp.task('js:build', () =>{

        return Promise.all([
            $.gulp.src("resources/src/js/scripts.js")
            .pipe(babel())
            .pipe(uglify())
            .pipe($.gulp.dest("public/assets/js")),
            
            $.gulp.src("resources/src/js/vendor/**/*.js")
            .pipe(concat('vendor.js'))
            .pipe($.gulp.dest("public/assets/js/vendor"))
        ]);

    });

};