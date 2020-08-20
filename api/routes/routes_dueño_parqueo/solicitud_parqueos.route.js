'use strict';

const express = require('express');
const router = express.Router();

const Solicitud_parqueo = require('../../models/models_dueño_parqueo/solicitud_parqueo.model.js');

const Parqueo = require('../../models/models_parqueo/parqueo.model');
const mailer = require('../../templates/confirmacion_aceptacion_parqueo');
const mailer2 = require('../../templates/rechazo_solicitud_parqueo');

router.put('/actualizar-calificacion-promedio', (req, res) => {
    Parqueo.update({ '_id': req.body._id }, {
        $set: {
            calificacion_promedio: req.body.calificacion_promedio
        }
    }, (err, info) => {
        if (err) {
            res.json({
                resultado: true,
                msj: 'No se pudo modificar la calificación promedio: ' + err,
                err
            })
        } else {
            res.json({
                info
            });
        }
    });
});

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
        estado_general: 'REGISTRO_PENDIENTE'
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


/*
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
});*/

router.put('/aceptacion-solicitud-parqueo', (req, res) => {

    Parqueo.updateOne({ _id: req.body._id }, {
            $set: {
                estado_general: req.body.estado_general
            }
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
                mailer.enviar_mail_aceptacion(req.body.correo, req.body.nombre)
            }
        }

    );
});
router.put('/rechazo-solicitud-parqueo', (req, res) => {

    Parqueo.updateOne({ _id: req.body._id }, {
            $set: {
                estado_general: req.body.estado_general
            }
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
                mailer2.enviar_mail_rechazo(req.body.correo, req.body.nombre)
            }
        }

    );
});

router.put('/duenno-parqueo/modificar-parqueo', (req, res) => {

    Parqueo.updateOne({ id: req.body.id }, {
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