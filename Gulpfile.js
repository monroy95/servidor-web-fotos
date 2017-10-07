var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
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

gulp.task('default', ['styles']) // El arrar puede ejecutar varias tareas en paralelo