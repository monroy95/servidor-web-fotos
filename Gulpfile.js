var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
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

function compile(watch) {
    var bundle = watchify(browserify('./src/index.js'));

    function rebundle() {
        bundle
            .transform(babel)
            .bundle()
            .on('error', function(err) { console.log(err);
                this.emit('end') })
            .pipe(source('index.js')) // Transforma lo que devuelve bundle 
            .pipe(rename('app.js'))
            .pipe(gulp.dest('public'));
    }
    if (watch) {
        bundle.on('update', function() {
            console.log('--> Compilando...');
            rebundle();
        })
    }
    rebundle();
}

// Tarea compilacion
gulp.task('build', function() {
    return compile();
});

gulp.task('watch', function() {
    return compile(true);
});

gulp.task('default', ['styles', 'assets', 'build']) // El arrar puede ejecutar varias tareas en paralelo