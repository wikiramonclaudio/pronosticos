'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var compression = require('compression')
var app = express();

/*cargar configuración rutas necesarias para la utiliuzacion en las peticiones http*/
var user_routes = require('./routes/user');
var pronostico_routes = require('./routes/pronostico');
var path = require("path");

/*configuración e boy parser*/
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: false, parameterLimit: 1000000 }));

app.use(bodyParser.urlencoded({
extended: true
}));
app.use(function(req, res, next){
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Headers','X-API-KEY, Authorization, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
	res.header('Access-Control-Allow-Methods','GET, POST, PUT, OPTIONS, DELETE');
	res.header('Allow','GET, POST, PUT, OPTIONS, DELETE');
	/*Se invoca la siguiente función*/
	next();
});

/*Rutas base*/
app.use('/api', user_routes);
app.use('/api', pronostico_routes);

app.use(express.static(__dirname + '/front-pronosticos/dist/'));
// app.use(express.static((__dirname, './front-pronosticos/dist/')));
/*Compresion*/
app.use(compression());


// require('newrelic');

// app.get("/", function(request, response) {

//     response.send(request.protocol);

// });

app.get('/*', function (req, res) {
  res.redirect('/');
});

// app.get('/pronosticos', function (req, res) {
//   res.redirect('/');
// });

// app.get('/home', function (req, res) {
//   res.redirect('/');
// });

// app.get('/login', function (req, res) {
//   res.redirect('/');
// });

module.exports = app;


