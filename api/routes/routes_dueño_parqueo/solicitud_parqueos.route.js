'use strict';

const express = require('express');
const router = express.Router();

const Solicitud_parqueo = require('../../models/models_dueño_parqueo/solicitud_parqueo.model.js');

const Parqueo = require('../../models/models_parqueo/parqueo.model')
let contador_solicitudes_parqueos = 0;

router.post('/registrar-parqueo', (req, res) => {
    let datos = req.body;
    let nuevo_parqueo = new Parqueo({
        nombre: datos.nombre,
        imagen_carta: datos.imagen_carta,
        imagen_perfil: datos.imagen_perfil,
        id_duenno: datos.id_duenno,
        email: datos.email,
        cedula_juridica: datos.cedula_juridica,
        permiso_funcionamiento: datos.permiso_funcionamiento,
        enlaces_redes: datos.enlaces_redes,
        ubicacion: datos.ubicacion,
        coordenadas: datos.coordenadas,
        calificacion_promedio: datos.calificacion_promedio,
        tarifa_por_hora: datos.tarifa_por_hora,
        hora_apertura: datos.hora_apertura,
        hora_cierre: datos.hora_cierre,
        pisos: datos.pisos,
        estado_general: datos.estado_general
    });

    nuevo_parqueo.save((err, parqueo_almacenado) => {
        if (err) {
            res.json({
                success: false,
                msj: 'La solicitud no se pudo registrar, ocurrió el siguiente error: ' + err,
                err
            })
        } else {
            res.json({
                success: true,
                msj: 'La solicitud se registró correctamente',
                parqueo_almacenado
            })
        }
    });
});

router.post('/solicitud-parqueo', (req, res) => {
    let datos = req.body;
    let solicitud_parqueo_nueva = new Solicitud_parqueo({
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
        foto_perfil: datos.foto_perfil,
        foto_banner: datos.foto_banner,
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
router.get('/listar-parqueos', (req, res) => {
    Solicitud_parqueo.find((err, parqueo_info) => {
        if (err) {
            res.json({
                resultado: false,
                msj: 'No se pudo mostrar la información del admin',
                err
            })
        } else {
            res.json({
                resultado: true,
                msj: 'Se mostró la información del admin correctamente',
                parqueo_info
            })
        }
    });
});

router.put('/duenno-parqueo/modificar-parqueo', (req, res) => {

    Solicitud_parqueo.updateOne({ id: req.body.id }, {
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