'use strict'
var Pronostico = require('../models/pronostico');

function getStats(req, res){
    // const aggregate = Pronostico.aggregate([
    //     { $project: { a: 1, b: 1 } },
    //     { $skip: 5 }
    //   ]);
    var bovida = Pronostico.aggregate([ { $match: { "resultado": "Ganada" } } ]);
    console.log(bovida);
    

}

function getPronosticos(req, res) {   
  
    var filters = {};
    if(sport.length>3){
        filters.deporte = sport 
    }
    Pronostico.find(
       
    )
    .exec(function(err, pronosticosRecuperado) {
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
                Pronostico.count({}, (err, totalUsers)=>{
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



module.exports = {    
    getStats
};