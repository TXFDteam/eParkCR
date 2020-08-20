'use strict';
const express = require('express');
const router = express.Router();
const Reservas = require('../../models/reservas.model');

router.get('/listar-reservas', (req, res) => {
    Reservas.find((err, lista_reservas) => {
        if (err) {
            res.json({
                resultado: false,
                msj: 'Error al recuperar historial de reservas: ' + err
            })
        } else {
            res.json({
                resultado: true,
                msj: 'historial de reservas obtenido correctamente.',
                lista_reservas
            })
        }
    });
});




module.exports = router;