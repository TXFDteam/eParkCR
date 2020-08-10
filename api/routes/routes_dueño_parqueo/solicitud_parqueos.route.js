'use strict';

const express = require('express');
const router = express.Router();

const Solicitud_parqueo = require('../../models/models_dueño_parqueo/solicitud_parqueo.model.js');

let contador_solicitudes_parqueos = 0;

router.post('/solicitud-parqueo', (req, res) => {
    let datos = req.body;
    contador_solicitudes_parqueos += 1;
    let solicitud_parqueo_nueva = new Solicitud_parqueo({
        id: datos.id,
        correo: datos.correo,
        nombre: datos.nombre,
        n_identificacion: datos.n_identificacion,
        coordenadas: datos.coordenadas,
        tarifa_x_hora: datos.tarifa_x_hora,
        hora_apertura: datos.hora_apertura,
        hora_cierre: datos.hora_cierre,
        pisos: datos.pisos,
        espacios_discapacidad: datos.espacios_discapacidad,
        espacios_motos: datos.espacios_motos,
        espacios_automoviles: datos.espacios_automoviles,
        redes_sociales: {
            facebook: datos.facebook,
            instagram: datos.instagram,
            twitter: datos.twitter

        },
        //foto_perfil: datos.foto_perfil,
        //foto_banner: datos.foto_banner,
        estado_general: 'ACTIVAR'
    });

    solicitud_parqueo_nueva.save((err, solicitud_parqueo_almacenada) => {
        if (err) {
            res.json({
                success: false,
                msj: 'La solicitud no se pudo registrar, ocurrió el siguiente error',
                err
            })
        } else {
            res.json({
                success: true,
                msj: 'La solicitud se registró correctamente',
                solicitud_parqueo_almacenada
            })
        }
    });
});

//ESTA FUNCION ESTA EN DUDA
/*
router.post('/duenno-parqueo/agregar-piso', (req, res) => {
    solicitud_parqueo.update({ _id: req.body._id }, {
            $push: {
                'piso': {
                    espacios_discapacidad: req.body.espacios_discapacidad,
                    espacios_motos: req.body.espacios_motos,
                    espacios_automoviles: req.body.espacios_automoviles
                }
            }
        },

        function(err) {
            if (err) {
                res.json({
                    success: false,
                    msj: `La solicitud no se pudo registrar, ocurrió el siguiente error ${err}`
                })
            } else {
                res.json({
                    success: true,
                    msj: `La solicitud se registró correctamente`,
                    solicitud_parqueo_almacenada
                })
            }
        });
});*/


router.put('/duenno-parqueo/modificar-parqueo', (req, res) => {

    Duenno_parqueo.updateOne({ id: req.body.id }, {
            $set: req.body
        }, (err, info) => {
            if (err) {
                res.json({
                    resultado: false,
                    msj: 'No se pudo actualizar el parqueo',
                    err
                })
            } else {
                res.json({
                    info
                });
            }
        }

    );
});
module.exports = router;