'use strict';

const express = require('express');
const router = express.Router();

const Parqueo = require('../models/models_parqueo/parqueo.model');

router.put('/actualizar-estado-espacio', (req, res) => {
    Parqueo.update({ '_id': req.body._id }, {
            $set: {
                "pisos.$[pisos].espacios.$[espacios].ocupado": req.body.nuevo_estado
            }
        }, {
            arrayFilters: [{ 'pisos._id': req.body.id_piso }, { 'espacios._id': req.body.id_espacio }]
        },
        (err, info) => {
            if (err) {
                res.json({
                    resultado: true,
                    msj: 'No se pudo actualizar el estado: ' + err,
                    err
                })
            } else {
                res.json({
                    info
                });
            }
        });
});
/*
Base
router.put('/actualizar-estado-espacio', (req, res) => {
    Parqueo.update({ '_id': "5f371cb735a457344cc98b62" }, {
            $set: {
                "pisos.$[pisos].espacios.$[espacios].ocupado": "1"
            }
        }, {
            arrayFilters: [{ 'pisos._id': "5f371cb835a457344cc98bc1" }, { 'espacios._id': "5f371cb835a457344cc98bc4" }]
        },
        (err, info) => {
            if (err) {
                res.json({
                    resultado: true,
                    msj: 'No se pudo actualizar el estado: ' + err,
                    err
                })
            } else {
                res.json({
                    info
                });
            }
        });
});
*/
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