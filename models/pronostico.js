'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PronosticoSchema = Schema({
	deporte : String,
	torneo : String,
	partido : String,
	fecha : Date,
	hora : String,
	apuesta : String,
	descripcion : String,
	cuota : Number,
	fecha_publicacion : Date,
	resultado : String,
	finalizado : Boolean,
	imageUrl : String
});

module.exports = mongoose.model('Pronostico', PronosticoSchema);