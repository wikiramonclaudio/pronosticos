'use strict';

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 7000;


mongoose.connection.openUri('mongodb://localhost:27017/pronosticos', { useNewUrlParser: true }, (error, res)=>{
    if(error)
        console.log(error);
        console.log('conectado a la DB pronosticos en mongoDB');
});

app.listen(port, ()=>{
    console.log('Servidor Node/Express corriendo en puerto 7000: \x1b[36m%s\x1b[0m', 'online');
});