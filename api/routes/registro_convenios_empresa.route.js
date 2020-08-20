'use strict';
const express = require('express');
const router = express.Router();

const Convenio = require('../models/models_parqueo/convenios.model.js');


router.post('/registrar_convenio', (req, res) => {
    let datos = req.body;
    let convenio_nuevo = new Convenio({
        id_parqueo: datos.id_parqueo,
        porcentaje_convenio: datos.porcentaje_convenio,
        fecha_creacion_convenio: datos.fecha_creacion_convenio,
        fecha_vencimiento_convenio: datos.fecha_vencimiento_convenio,
        tipo_tarjeta: datos.tipo_tarjeta,
        id_empresa: datos.id_empresa
    });

    convenio_nuevo.save((err, convenioDB) => {
        if (err) {
            res.json({
                success: false,
                msj: `La solicitud no se pudo registrar, ocurrió el siguiente error ${err}`
            });
        } else {
            res.json({
                success: true,
                msj: 'La solicitud se registró correctamente',
                convenioDB
            });
        }
    });
});

router.post('/agregar-usuario', (req, res) => {
    if (req.body._id) {
        Convenio.update({ _id: req.body._id }, {
                $push: {
                    'usuarios': {
                        id_empleado: req.body.id_empleado,
                        estado: req.body.estado
                    }
                }
            },
            (error) => {
                if (error) {
                    return res.json({
                        success: false,
                        msj: 'No se pudo agregar el usuario',
                        err
                    });
                } else {
                    return res.json({
                        success: true,
                        msj: 'Se agregó correctamente el usuario'
                    });
                }
            }
        )
    } else {
        return res.json({
            success: false,
            msj: 'No se pudo agregar el teléfono, por favor verifique que el _id sea correcto'
        });
    }
});

module.exports = router;