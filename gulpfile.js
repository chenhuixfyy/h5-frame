'use strict';
const gulp = require('gulp'),
    watch=require('gulp-watch'),
    browserSync = require('browser-sync'),
    url = require('url'),
    proxy = require('proxy-middleware'),
    // sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer');
const devSer = (done) => {
    let proxyOptions1 = url.parse('https://dev01.weibangong.me/api'),
    proxyOptions2 = url.parse('https://dev01.weibangong.me/v2');
    proxyOptions1.route = '/api';
    proxyOptions2.route = '/v2';
    browserSync.init({
        port: 3000,
        host: 'localhost',
        // index: 'frame/demo/index.html',
        open: 'external',
        files: ['./**/*.html','./**/*.js','./**/*.css','./**/*.png','./**/*.jpg'],
        server: {
            baseDir: './',
            middleware: [proxy(proxyOptions1),proxy(proxyOptions2)]/*,
            routes: {
                "/frame": "frame/index.html"
            }*/
        }
    });
    done();
};
const watchScss=(done)=>{
    let watcher=watch('./**/*.scss');
    // watcher.on('')
}
gulp.task("default", gulp.series(devSer,watchScss));
// gulp.task('sass', function() {
//     return sass('./register/**/*.scss')
//            .on('error', sass.logError)
//            .pipe(autoprefixer({
//                 browsers: ['last 2 versions'],
//                 cascade: false
//             }))
//             .pipe(gulp.dest('result'));
// });