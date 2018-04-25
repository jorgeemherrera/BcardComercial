/**
 * Tareas Gulp.js
 * Autor: Jorge Eliécer Muñoz Herrera
 * Llamado a módulos
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify'); //Minificador de Js
var autoprefixer = require('gulp-autoprefixer'); //Auto prefijos de Navegadores
var imagemin = require('gulp-imagemin'); //Optimizador de imágenes

var browserSync = require('browser-sync').create(); //BrowserSync


/**
 * Tarea default
 * serve
 */
gulp.task('default', ['css'], function(){

    browserSync.init({
        server: "./app"
    });

    gulp.watch("scss/**/*.scss", ['css']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
})

/**
 * Tarea de optimización de las imágenes, SVG
 */

gulp.task('imagenes', function(){
    gulp.src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('app/img'));
});

/**
 * Tarea Sass
 */

gulp.task('css', function(){
    return gulp.src('scss/**/*.scss')
    .pipe(sass())
    //Auto prefijo de los Navegadores
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
});

/**
 * Tarea javascript para minificarlo
 */

gulp.task('javascript', function(cb){
    gulp.src('resources/assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('resources/assets/js/dist'));
});