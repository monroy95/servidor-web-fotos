// Express es un micro Framework para hacer servidores web simples
var express = require('express');

var app = express();

// Indicando que se utilizara un motor de vistas "pug"
app.set('view engine', 'pug');
// Indicarle al servidor web que se sirva de este directorio de forma estatica
app.use(express.static('public'));
// Cuando corre el script server.js se ejecutara lo siguiente
app.get('/', function(req, res) {
    res.render('index', { title: 'Platzigram' });
})

app.get('/signup', function(req, res) {
    // res.send('Hola el servidor web esta corriendo')
    res.render('index', { title: 'Platzigram - Signup' });
})

app.get('/signin', function(req, res) {
    // res.send('Hola el servidor web esta corriendo')
    res.render('index', { title: 'Platzigram - Signin' });
})

// El servidor web esuchara por medio del puerto 3000 y tiene como parametro un error
// En caso exista un error el proceso terminara retornando el mensaje "Hubo un error"
// De lo contrario mostrara el mensaje "Servidor Web escuchando en el puerto 3000"
app.listen(3000, function(err) {
    if (err) return console.log('Hubo un error'), process.exit(1);

    console.log('Servidor Web escuchando en el puerto 3000');
})