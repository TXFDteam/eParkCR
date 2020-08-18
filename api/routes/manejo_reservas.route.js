'use strict';

const express = require('express');
const router = express.Router();

const Reserva = require('../models/reservas.model');

router.post('/crear-reserva', (req, res) => {
    let datos = req.body;
    let nueva_reserva = new Reserva({
        id_usuario: datos.id_usuario,
        nombre_usuario: datos.nombre_usuario,
        id_parqueo: datos.id_parqueo,
        nombre_parqueo: datos.nombre_parqueo,
        fecha_reserva: datos.fecha_reserva,
        hora_entrada: datos.hora_entrada,
        hora_salida: datos.hora_salida,
        horas: datos.horas,
        descuento: '0',
        estado_reserva: 'ACTIVA',
        monto_total: datos.monto_total,
        id_piso_espacio_seleccionado: datos.id_piso_espacio_seleccionado,
        id_espacio_seleccionado: datos.id_espacio_seleccionado,
        monto_final: datos.monto_total,
        tarjeta_creditada: 'NA'
    });

    nueva_reserva.save((err, reserva_almacenada) => {
        if (err) {
            res.json({
                success: false,
                msj: 'La reserva no se pudo crear, ocurrió el siguiente error: ' + err,
                err
            })
        } else {
            res.json({
                success: true,
                msj: 'La reserva se creó correctamente',
                reserva_almacenada
            })
        }
    });
});

router.get('/obtener-reservas', (req, res) => {
    Reserva.find((err, lista_reservas) => {
        if (err) {
            res.json({
                resultado: false,
                msj: 'Ops, ocurrió un error al obtener las reservas: ' + err
            })
        } else {
            res.json({
                resultado: true,
                msj: 'Reservas obtenidas correctamente.',
                lista_reservas
            })
        }
    });
});

//Para filtrar.
router.get('/buscar-reserva-id', (req, res) => {
    Reserva.findOne({ _id: req.query._id }, (err, reserva_bd) => {
        if (err) {
            res.json({
                resultado: false,
                msj: 'La reserva no se encontró :(',
                err
            })
        } else {
            res.json({
                reserva_bd
            });
        }
    })
});

module.exports = router;