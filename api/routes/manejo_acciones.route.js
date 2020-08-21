'use strict';

const express = require('express');
const router = express.Router();

const Accion = require('../models/accion_app.model');

router.post('/crear-accion', (req, res) => {
    let datos = req.body;
    let nueva_accion = new Accion({
        nombre_usuario: datos.id_usuario,
        tipo_usuario: datos.tipo_usuario,
        nombre_parqueo: datos.id_parqueo,
        accion: datos.accion,
        fecha: datos.fecha
    });

    nueva_accion.save((err, accion_almacenada) => {
        if (err) {
            res.json({
                success: false,
                msj: 'La accion no se pudo crear, ocurrió el siguiente error: ' + err,
                err
            })
        } else {
            res.json({
                success: true,
                msj: 'La accion se creó correctamente',
                accion_almacenada
            })
        }
    });
});

router.get('/obtener-acciones-app', (req, res) => {
    Accion.find((err, lista_acciones) => {
        if (err) {
            res.json({
                resultado: false,
                msj: 'Ops, ocurrió un error al obtener las acciones: ' + err
            })
        } else {
            res.json({
                resultado: true,
                msj: 'acciones obtenidos correctamente.',
                lista_acciones
            })
        }
    });
});

module.exports = router;