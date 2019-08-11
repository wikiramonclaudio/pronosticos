'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'clave_secreta';

exports.ensureAuth = function(req, res, next){
	console.log('req.headers');
	console.log(req.headers);
	/*comprobamos que en la cabecera vienen el authorization*/
	if(!req.headers.authorization){
		return res.status(403).send({message: 'La petición no tiene la cabecera de autenticación'});
	}

	var token = req.headers.authorization.replace(/['""]+/g, '');
	console.log('aki va el token...');
	console.log(token);
	try{
		var payload = jwt.encode(token, secret);
		if(payload.exp <= moment().unix()){
			return res.status(401).send({message: 'El token ha expirado'});		
		}
		
	}catch(ex){
		//console.log(ex);
		return res.status(403).send({message: 'Token no válido'});	
	}

	req.user = payload;

	next();
};