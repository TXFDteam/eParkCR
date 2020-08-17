'use strict';

const express = require('express');
const router = express.Router();

const Comentario = require('../models/comentarios.model');

router.post('/crear-comentario', (req, res) => {
    let datos = req.body;
    let nuevo_comentario = new Comentario({
        id_usuario: datos.id_usuario,
        id_parqueo: datos.id_parqueo,
        cantidad_estrellas: datos.cantidad_estrellas,
        fecha: datos.fecha,
        mensaje: datos.mensaje
    });

    nuevo_comentario.save((err, comentario_almacenado) => {
        if (err) {
            res.json({
                success: false,
                msj: 'El comentario no se pudo crear, ocurrió el siguiente error: ' + err,
                err
            })
        } else {
            res.json({
                success: true,
                msj: 'El comentario se creó correctamente',
                comentario_almacenado
            })
        }
    });
});

router.get('/obtener-comentarios', (req, res) => {
    Comentario.find((err, lista_comentarios) => {
        if (err) {
            res.json({
                resultado: false,
                msj: 'Ops, ocurrió un error al obtener las comentarios: ' + err
            })
        } else {
            res.json({
                resultado: true,
                msj: 'comentarios obtenidos correctamente.',
                lista_comentarios
            })
        }
    });
});

//Para filtrar.
router.get('/buscar-comentario-id', (req, res) => {
    Comentario.findOne({ _id: req.query._id }, (err, comentario_bd) => {
        if (err) {
            res.json({
                resultado: false,
                msj: 'El comentario no se encontró :(',
                err
            })
        } else {
            res.json({
                comentario_bd
            });
        }
    })
});

module.exports = router;