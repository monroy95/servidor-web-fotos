// Express es un micro Framework para hacer servidores web simples
var express = require('express');

var app = express();

// Cuando corre el script server.js se ejecutara lo siguiente
app.get('/', function(req, res) {
    res.send('Hola el servidor web esta corriendo')
})

// El servidor web esuchara por medio del puerto 3000 y tiene como parametro un error
// En caso exista un error el proceso terminara retornando el mensaje "Hubo un error"
// De lo contrario mostrara el mensaje "Servidor Web escuchando en el puerto 3000"
app.listen(3000, function(err) {
    if (err) {
        return console.log('Hubo un error'), process.exit(1);

        console.log('Servidor Web escuchando en el puerto 3000');
    }
})