'use strict';
// var app = require('../app');
var express = require('express');
var PronosticoController = require('../controllers/pronostico');
// var ChartsController = require('../controllers/chart');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

/*multiparty middleware para poder subir ficheros*/
// var multipart = require('connect-multiparty');
// var md_upload = multipart({uploadDir : './uploads/users'});


// api.get('/pronosticos', md_auth.ensureAuth, PronosticoController.getPronosticos);
api.get('/pronosticos', PronosticoController.getPronosticos);
// api.get('/last-pronosticos', md_auth.ensureAuth, PronosticoController.getUltimosPronosticos);
api.get('/last-pronosticos', PronosticoController.getUltimosPronosticos);
// api.get('/pronostico/:id', md_auth.ensureAuth, PronosticoController.getPronostico);
api.get('/pronostico/:id', PronosticoController.getPronostico);
api.post('/pronostico', PronosticoController.savePronostico);
// api.delete('/pronostico/:id', md_auth.ensureAuth, PronosticoController.deletePronostico);
api.delete('/pronostico/:id', PronosticoController.deletePronostico);
// api.post('/login', PronosticoController.loginUser);
// api.put('/pronostico/:id', md_auth.ensureAuth, PronosticoController.updatePronostico);
api.put('/pronostico/:id', PronosticoController.updatePronostico);
// api.post('/update-image-user/:id', [md_auth.ensureAuth, md_upload], PronosticoController.uploadImage);
// api.get('/get-image-user/:imageFile', PronosticoController.getImageFile);
api.get('/stats', PronosticoController.getStats);
api.get('/yield', PronosticoController.calcularYield);

// api.get('/scores', PronosticoController.getScores)

module.exports = api;