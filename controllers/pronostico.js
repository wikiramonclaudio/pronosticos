'use strict'

var fs = require('fs');
var path = require('path');
// var bcrypt = require('bcrypt-nodejs');
var Pronostico = require('../models/pronostico');
var jwt = require('../services/jwt');


/*Función para guardar un nuevo pronostico en la base de datos*/
function savePronostico(req, res) {

    var pronostico = new Pronostico();
    var params = req.body;

    pronostico.deporte = params.deporte;
    pronostico.torneo = params.torneo;
    pronostico.partido = params.partido;
    pronostico.fecha = params.fecha;
    pronostico.hora = params.hora;
    pronostico.apuesta = params.apuesta;
    pronostico.descripcion = params.descripcion;
    pronostico.cuota = params.cuota;
    pronostico.fecha_publicacion = params.fecha_publicacion;
    pronostico.resultado = params.resultado;
    pronostico.finalizado = false;
    pronostico.imageUrl = params.imageUrl;

    pronostico.save((err, pronosticoGuardado) => {
        if (err) {
            res.status(500).send({
                message: 'Error al guardar el pronóstico..'
            });
        } else {
            if (!pronosticoGuardado) {
                res.status(404).send({
                    message: 'El pronóstico no ha sido guardado'
                });
            } else {
                res.status(200).send({
                    pronostico: pronosticoGuardado
                });
            }
        }
    })
}

/*función para actualizar los datos de un usuario ya registrado*/
function updatePronostico(req, res) {
    var pronosticoId = req.params.id;
    var update = req.body;
    Pronostico.findByIdAndUpdate(pronosticoId, update, (err, pronosticoUpdated) => {
        if (err) {
            res.status(500).send({
                message: 'Error al actualizar el pronostico'
            });
        } else {
            if (!pronosticoUpdated) {
                res.status(200).send({
                    message: 'No se ha podido actualizar el pronostico'
                });
            } else {
                res.status(200).send({
                    pronostico: pronosticoUpdated
                });
            }
        }
    });
}

/*Función que devuelve todos los pronósticos de la bbdd*/
function getUltimosPronosticos(req, res) {
    Pronostico.find({}).sort('-fecha_publicacion').limit(6).exec(function (err, pronosticos) {
        if (err) {
            res.status(500).send({
                message: 'Error en la petición'
            });
        } else {
            if (!pronosticos) {
                res.status(404).send({
                    message: 'El pronostico no existe'
                });
            } else {
                res.status(200).send({
                    pronosticos: pronosticos
                });
            }
        }
    });
}

/*Función que devuelve un pronostico determinado de la bbdd*/
function getPronostico(req, res) {

    var pronosticoId = req.params.id;
    Pronostico.findById(pronosticoId, (err, pronosticoRecuperado) => {
        if (err) {
            res.status(500).send({
                message: 'Error en la petición'
            });
        } else {
            if (!pronosticoRecuperado) {
                res.status(404).send({
                    message: 'El pronostico no existe'
                });
            } else {
                res.status(200).send({
                    pronostico: pronosticoRecuperado
                });
            }
        }
    });
}

/*función para recuperar un pronostico de la bbdd*/
function getPronosticos(req, res) {
    var from = req.query.from || 0;
    from = Number(from);
    var sport = req.query.sport || '';
    var resulsPerPage = 12;
    var filters = {};
    if (sport.length > 3) {
        filters.deporte = sport
    }
    Pronostico.find(
        filters
    )
        .skip(from)
        .limit(resulsPerPage)
        .sort('-fecha_publicacion').exec(function (err, pronosticosRecuperado) {
            if (err) {
                res.status(500).send({
                    message: 'Error en la petición'
                });
            } else {
                if (!pronosticosRecuperado) {
                    res.status(404).send({
                        message: 'El pronostico no existe'
                    });
                } else {
                    Pronostico.count({}, (err, totalUsers) => {
                        res.status(200).send({
                            pronosticos: pronosticosRecuperado,
                            totalFound: pronosticosRecuperado.length,
                            total: totalUsers,
                            success: true
                        });

                    });
                }
            }
        });
}

function deletePronostico(req, res) {
    var pronosticoId = req.params.id;

    Pronostico.findByIdAndRemove(pronosticoId, (err, pronosticoEliminado) => {
        if (err) {
            res.status(500).send({
                message: 'Error en la petición Eliminando el pronostico'
            });
        } else {
            if (!pronosticoEliminado) {
                res.status(404).send({
                    message: 'El pronostico no ha sido actualizado'
                });
            } else {
                Pronostico.find({
                    pronostico: pronosticoEliminado._id
                }).remove((err, cancionEliminada) => {
                    if (err) {
                        res.status(500).send({
                            message: 'Error en la petición Eliminando la apuesta'
                        });
                    } else {
                        if (!cancionEliminada) {
                            res.status(404).send({
                                message: 'La apuesta no ha sido eliminada'
                            });
                        } else {
                            res.status(200).send({
                                pronostico: pronosticoEliminado
                            });
                        }

                    }
                })
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

        Pronostico.findByIdAndUpdate(artistId, {
            image: file_name
        }, (err, pronosticoUpdate) => {
            if (err) {
                res.status(500).send({
                    message: 'Error al actualizar el usuario'
                });
            } else {
                if (!pronosticoUpdate) {
                    res.status(404).send({
                        message: 'No se ha podido actualizar el usuario'
                    });
                } else {
                    res.status(200).send({
                        pronostico: pronosticoUpdate,
                        image: file_name
                    });
                }
            }
        });
    } else {
        res.status(404).send({ message: 'No existe el fichero, algo falla' });
    }
}

function getImageFile(req, res) {
    var imageFile = req.params.imageFile;
    var path_file = './uploads/pronosticos/' + imageFile;
    fs.exists(path_file, function (exists) {
        if (exists) {
            res.sendFile(path.resolve(path_file));;
        } else {
            res.status(200).send({ message: 'No existe la imagen' });
        }
    })
}

// GET STATS OF PRONOSTICOS
function getStats(req, res) {
    Pronostico.countDocuments({ 'resultado': 'ganada' }, (err, ganados) => {
        if (err)
            res.status(500).send({ success: false, message: 'Error en el servidor obteniendo stats' });
        else {
            Pronostico.countDocuments({ 'resultado': 'perdida' }, (err, perdidos) => {
                res.status(200).send({ perdidos, ganados, success: true });
            });
        }

    });

}

function calcularYield(req, res) {
    Pronostico.find({}, (err, pronosticos) => {
        var beneficiosNetos = 0;
        var ganadas = 0;
        var perdidas = 0;
        var nulos = 0;
        var cantidadTotalApostada = 0;
        for (var index in pronosticos) {
            if (pronosticos[index].finalizado && (pronosticos[index].resultado == 'Ganada' || pronosticos[index].resultado == 'ganada')) {
                cantidadTotalApostada = cantidadTotalApostada + 10;
                var beneficio = (10 * pronosticos[index].cuota - 10);
                beneficiosNetos = beneficiosNetos + beneficio;
                ganadas = ganadas + 1;
            } else if (pronosticos[index].resultado == 'cancelada' || pronosticos[index].resultado == 'cancelado' || !pronosticos[index].finalizado) {
                nulos = nulos + 1;
            } else {
                if (pronosticos[index].finalizado) {
                    cantidadTotalApostada = cantidadTotalApostada + 10;
                    beneficiosNetos = beneficiosNetos - 10;
                    perdidas = perdidas + 1;
                }
            }
        }
        var result = beneficiosNetos / cantidadTotalApostada * 100;
        res.status(200).send({ success: true, yield: result, total: pronosticos.length });
    });
};

// function getScores(request, res) {
//     var unirest = require("unirest");

//     var req = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/fixtures/league/1");
    
//     req.headers({
//         "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
//         "x-rapidapi-key": "b916f1b537msh70ca70c76193321p168889jsna6e9495ed0c7"
//     });
    
    
//     req.end(function (res) {
//         if (res.error) throw new Error(res.error);
    
//         console.log(res.body);
//     });
// }

module.exports = {
    savePronostico,
    getPronosticos,
    getPronostico,
    deletePronostico,
    updatePronostico,
    getUltimosPronosticos,
    uploadImage,
    getImageFile,
    getStats,
    calcularYield    
};