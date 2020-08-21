'use strict';
const express = require('express');
const router = express.Router();

const Convenio = require('../models/models_parqueo/convenios.model.js');


router.post('/registrar_convenio', (req, res) => {
    let datos = req.body;
    let convenio_nuevo = new Convenio({
        parqueo: datos.parqueo,
        porcentaje_convenio: datos.porcentaje_convenio,
        fecha_creacion_convenio: datos.fecha_creacion_convenio,
        fecha_vencimiento_convenio: datos.fecha_vencimiento_convenio,
        empresa: datos.empresa
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
            msj: 'No se pudo agregar el usuario, por favor verifique que el _id sea correcto'
        });
    }
});






router.get('/listar_convenios', (req, res) => {
    Convenio.find((err, lista_convenios) => {
        if (err) {
            res.json({
                resultado: false,
                msj: 'No se pudieron listar los convenios',
                err
            })
        } else {
            res.json({
                resultado: true,
                msj: 'Se listaron los convenios eficientemente',
                lista_convenios
            })
        }
    });
});




router.get('/buscar-convenio-id', (req, res) => {
    Convenio.findOne({ _id: req.query._id }, (err, convenio_bd) => {
        if (err) {
            res.json({
                resultado: false,
                msj: 'El convenio no se encontro',
                err
            })
        } else {
            res.json({
                convenio_bd
            });
        }
    });

});



router.put('/modificar-convenio', (req, res) => {

    Convenio.updateOne({ _id: req.body._id }, {
            $set: req.body
        }, (err, info) => {
            if (err) {
                res.json({
                    resultado: false,
                    msj: 'No se pudo actualizar el convenio',
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