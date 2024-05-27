var gulp = require('gulp'),                //載入gulp
    RunSass = require('gulp-sass'), //gulp-sass 套件
    postcss = require('gulp-postcss'), //postcss 套件
    autoprefixer = require('autoprefixer'),//webkit 套件
    compass = require('compass-importer'), //compass 套件
    pug = require('gulp-pug'),             //載入pug 編譯器套件
    rename = require("gulp-rename")      //載入更換副檔名套件
    // file paths
    const stylePath = {src: 'sass/*.sass', dest: 'css'};// sass src來源路徑dest輸出
    const htmlPath = {src: 'pug/*.pug', dest: './'};//pug src來源路徑dest輸出

    //sass
    RunSass.compiler = require('node-sass'); //使用node-sass編譯
    gulp.task('sass', function() {
        var plugins = [
            //加瀏覽器的webkit
            autoprefixer({browsers: ['last 5 version']})
        ];
        return gulp.src(stylePath.src)
        .pipe(
            RunSass({
            outputStyle: 'expanded',  //nested, expanded, compact, compressed 輸出格式
            importer: compass //編譯compass
            })
            .on('error', RunSass.logError)
            )
        .pipe(postcss(plugins))
        .pipe(gulp.dest(stylePath.dest));
    });

    // pug
    gulp.task('pug', function() {
        return gulp.src(htmlPath.src)
            .pipe(pug({ // compile pug into HTML
                pretty: true
            }))
            .pipe(rename({extname:'.aspx'}))//變更副檔名，從html變更為aspx
            .pipe(gulp.dest(htmlPath.dest))
    });


    //watch 監看
    gulp.task('watch', function () { //自定一個watch的排程名稱
        gulp.watch(stylePath.src, ['sass']);//監看 sass 檔案，有更動時就執行 sass 程式
        gulp.watch(htmlPath.src, ['pug']);//監看 pug 檔案，有更動時就執行 pug 程式

    });

    // 執行所有程式
    gulp.task('default', ['sass','pug','watch']);