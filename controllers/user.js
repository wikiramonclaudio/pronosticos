'use strict'

var fs = require('fs');
var path = require('path');
var bcrypt = require('bcrypt-nodejs');
var User = require('../models/user');
var jwt = require('../services/jwt');
var nodemailer = require('nodemailer');

/*función que me devuelve los usuarios ELIMINARLA*/
function pruebas(request, response) {
    User.find((err, users)=>{
        if (err) {
            response.status(500).send({
                message: 'Error al actualizar el usuario'
            });
        } else {
            if (!users) {
                response.status(404).send({
                    message: 'No se ha podido recuperar los usuarios'
                });
            } else {
                response.status(200).send({
                    users
                });
            }
        }
    });
}

/*Función para guardar un nuevo usuario en la base de datos*/
function saveUser(req, res) {    

    var user = new User();
    var params = req.body;

    user.name = params.name;
    user.surname = params.surname;
    user.email = params.email;
    user.role = 'ROLE_USER';
    user.image = 'null';
    // console.log(bcrypt);
    if (params.password) {

        bcrypt.hash(params.password, null, null, function(err, hash) {

            user.password = hash;

            if (user.name != null && user.surname != null && user.email != null) {
                /*Guardar el nuevo usuario*/
                user.save((err, userStored) => {
                    if (err) {
                        res.status(500).send({
                            message: 'Error al guardar el usuario',
                            error : err
                        });
                    } else {
                        if (!userStored) {
                            res.status(404).send({
                                message: 'No se ha registrado el usuario'
                            });
                        } else {
                            res.status(200).send({
                                user: userStored
                            });
                        }
                    }
                });
            } else {
                /*mensaje de error*/
                res.status(200).send({
                    message: 'Rellena todos los campos'
                });
            }
        });

    } else {
        /*Devolvemos un error */
        res.status(200).send({
            message: 'Introduce la contraseña'
        });
    }
}

/*función para hacer el login a la aplicación con bcrypt y jwt*/
function loginUser(req, res) {
    var params = req.body;

    var email = params.email;
    var password = params.password;    

    User.findOne({
        email: email.toLowerCase()
    }, (err, user) => {
        if (err) {
            res.status(500).send({
                message: 'Error en la petición'
            });
        } else {
            if (!user) {
                res.status(404).send({
                    message: 'El usuario no existe'
                });
            } else {
                /*si existe el usuario comprobamos la contraseña*/
                bcrypt.compare(password, user.password, function(err, check) {
                    if (check) {
                        /*devolver los datos del usuario logueado*/
                        if (params.gethash) {
                            /*devolver un token de jwt*/
                            res.status(200).send({
                                token: jwt.createToken(user)
                            });
                        } else {
                            res.status(200).send({
                                user
                            });
                        }
                    } else {
                        /*Error 404 porq la contraseña no es correcta/*/
                        res.status(404).send({
                            message: 'El usuario no se ha podido loggear. passowrd incorrecto'
                        });
                    }
                });
            }
        }
    });
}

/*función para actualizar los datos de un usuario ya registrado*/
function updateUser(req, res) {
    var userId = req.params.id;
    var update = req.body;

    if(userId == req.user.sub){
         return res.status(500).send({
                message: 'No tienes permiso para actualizar este usuario'
            });
    }
    User.findByIdAndUpdate(userId, update, (err, userUpdated) => {
        if (err) {
            res.status(500).send({
                message: 'Error al actualizar el usuario'
            });
        } else {
            if (!userUpdated) {
                res.status(404).send({
                    message: 'No se ha podido actualizar el usuario'
                });
            } else {
                res.status(200).send({
                    user: userUpdated
                });
            }
        }
    });
}

/*función para actualizar la imagen del artista*/
function uploadImage(req, res) {
    var artistId = req.params.id;
    var file_name = 'No subido';
    // console.log(req.file);    
        
    if (req.files) {
        var file_path = req.files.image.path;
        var file_split = file_path.split('\\');
        var file_name = file_split[2];
        
        var ext_split = file_name.split('\.');
        var file_ext = ext_split[1];
        res.status(200).send({image : file_name});
        // User.findByIdAndUpdate(artistId, {
        //     image: file_name
        // }, (err, userUpdate) => {
        //     if (err) {
        //         res.status(500).send({
        //             message: 'Error al actualizar el usuario'
        //         });
        //     } else {
        //         if (!userUpdate) {
        //             res.status(404).send({
        //                 message: 'No se ha podido actualizar el usuario'
        //             });
        //         } else {                    
        //             res.status(200).send({
        //                 user: userUpdate,
        //                 image : file_name
        //             });
        //         }
        //     }
        // });
    }else{
        res.status(404).send({message:'No existe el fichero, algo falla'});
    }
}

function getImageFile(req, res){
	var imageFile = req.params.imageFile;    
	var path_file = './uploads/users/' + imageFile;
	fs.exists(path_file, function(exists){
		if(exists){
			res.sendFile(path.resolve(path_file));;
		}else{
			res.status(200).send({message:'No existe la imagen'});
		}
	})
}

 function enviarMail(req, res) {
    // crear un objeto de transporte reutilizable usando SMTP transport
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'makarenosh87@gmail.com',
            pass: 'makareno'
        }
    });
          
    // configura los datos del correo
    var mailOptions = {
        from: req.body.email,
        to: 'makarenosh@gmail.com, pdasfal@hotmail.com',
        subject: 'Formulario pronosticos-deportivos.net',
        text: 'Nombre: ' + req.body.nombre + ' ===> Mensaje : ' + req.body.mensaje ,
        //html: '<b>Nombre:</b>'+req.body.nombre+'<br>' + '<b>Email:</b>'+req.body.email+'<br>' +'<b>Mensaje:</b>'+req.body.mensaje+'<br>'
    };
     
    // Envía el correo con el objeto de transporte definido anteriormente
    transporter.sendMail(mailOptions, function(error, info){
        if(error){            
            //return console.log(error);
            res.status(200).send({message : 'Errpr añ enviar el email'});
        }else{            
            res.status(200).send({message : 'Se han enviado los datos.'});
        }
             
    });
}

module.exports = {
    pruebas,
    saveUser,
    loginUser,
    updateUser,
    uploadImage,
    getImageFile,
    enviarMail
};