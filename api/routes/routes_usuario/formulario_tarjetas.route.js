'use strict'

const express = require('express');
const router = express.Router();
const Cliente = require('../../models/models_usuario/cliente.model');


router.post('/registrar-tarjeta', (req, res) => {
    if (req.body._id) {
        Cliente.update({ _id: req.body._id }, {
                $push: {
                    'tarjetas': {
                        numero_tarjeta: req.body.pnum_tarjeta,
                        fecha_expiracion: req.body.pfecha_expr,
                        nombre_tarjeta: req.body.pnombre_tarjeta,
                        codigo_seguridad: req.body.pcod_seguridad
                    }
                }
            },
            (error) => {
                if (error) {
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


/* router.post('/registrar-tarjeta', (req, res) => {
    let datos = req.body;

    let tarjeta_nueva = new Tarjeta({
        numero_tarjeta: datos.pnum_tarjeta,
        fecha_expiracion: datos.pfecha_expr,
        nombre_tarjeta: datos.pnombre_tarjeta,
        codigo_seguridad: datos.pcod_seguridad
    });

    tarjeta_nueva.save((err, tarjeta_almacenada) => {
        if (err) {
            res.json({
                success: false,
                msj: `La tarjeta no se pudo registrar, ocurrió el siguiente error ${err}`
            })
        } else {
            res.json({
                success: true,
                msj: `La tarjeta se registró satisfactoriamente`,
                tarjeta_almacenada
            })

        }

    });

}); */


module.exports = router;