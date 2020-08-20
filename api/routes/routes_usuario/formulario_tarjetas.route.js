'use strict'

const express = require('express');
const router = express.Router();
const Tarjetas = require('../../models/models_usuario/cliente.model');


router.post('/registrar-tarjeta', (req, res) => {
    if (req.body._id) {
        Tarjetas.update({ _id: req.body._id }, {
                $push: {
                    'tarjetas': {
                        numero_tarjeta: req.body.numero_tarjeta,
                        fecha_expiracion: req.body.fecha_expiracion,

                        nombre_tarjeta: req.body.nombre_tarjeta,
                        codigo_seguridad: req.body.codigo_seguridad
                    }
                }
            },
            (err) => {
                if (err) {
                    console.log(err);
                    return res.json({
                        success: false,
                        msj: 'No se pudo agregar la tarjeta',
                        err
                    });
                } else {
                    return res.json({
                        success: true,
                        msj: 'Se agregó correctamente la tarjeta'
                    });
                }
            }
        )
    } else {
        return res.json({
            success: false,
            msj: 'No se pudo agregar la tarjeta, por favor verifique que el _id sea correcto'
        });
    }
});





router.get('/listar-tarjetas-id', (req, res) => {
    Tarjetas.findOne({ _id: req.query._id }, (err, tarjetas) => {
        if (err) {
            res.json({
                resultado: false,
                msj: 'Error al recuperar la lista de tarjetas: ' + err
            })
        } else {
            res.json({
                tarjetas
            })
        }
    });
});





module.exports = router;