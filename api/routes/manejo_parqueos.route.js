'use strict';

const express = require('express');
const router = express.Router();

const Parqueo = require('../models/models_parqueo/parqueo.model');

router.get('/obtener-parqueos', (req, res) => {
    Parqueo.find((err, lista_parqueos) => {
        if (err) {
            res.json({
                resultado: false,
                msj: 'Ops, ocurrió un error al obtener los parqueos: ' + err
            })
        } else {
            res.json({
                resultado: true,
                msj: 'Parqueos obtenidos correctamente.',
                lista_parqueos
            })
        }
    });
});

//Para filtrar.
router.get('/buscar-parqueo-id', (req, res) => {
    Parqueo.findOne({ _id: req.query._id }, (err, parqueo_bd) => {
        if (err) {
            res.json({
                resultado: false,
                msj: 'El producto no se encontró :(',
                err
            })
        } else {
            res.json({
                parqueo_bd
            });
        }
    })
});

module.exports = router;