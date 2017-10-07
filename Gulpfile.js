var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
// Permite que por medio de otro pipe podamos renombrar el archivo .css que genere
// Define una nueva tarea de estilos
gulp.task('styles', function() {
    // Toma un archivo y lo pasa por el procesador de sass
    gulp
        .src('index.scss')
        .pipe(sass()) // Toma el archivo y lo pre-procesado
        .pipe(rename('app.css')) // Permite renombrar el archivo
        .pipe(gulp.dest('public')); // Despues de haber pre-procesado el archivo lo coloca en public
})

// Primer parametro de la tarea es el nombre, luego la funcion que debe ejecutar
gulp.task('assets', function() {
    gulp
        .src('assets/*') // se utlizan glob que son expresiones regulares que apuntan hacia un archivo
        .pipe(gulp.dest('public'));
})

// Tarea: que procese index.js
gulp.task('scripts', function() {
    browserify('./src/index.js')
        .transform(babel)
        .bundle()
        .pipe(source('index.js')) // Transforma lo que devuelve bundle 
        .pipe(rename('app.js'))
        .pipe(gulp.dest('public'));
})
gulp.task('default', ['styles', 'assets', 'scripts']) // El arrar puede ejecutar varias tareas en paralelo