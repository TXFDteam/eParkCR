'use strict';
const express = require('express');
const router = express.Router();

const Empresa = require('../models/models_empresa/empresa.model.js');
const mailer = require('../templates/olvidar-contraseña');

router.post('/registrar_empresa', (req, res) => {
    let datos = req.body;
    let empresa_nueva = new Empresa({
        correo: datos.correo,
        nombre: datos.nombre,
        n_identificacion: datos.n_identificacion,
        contraseña: datos.contraseña,
        nombre_encargado: datos.nombre_encargado,
        ubicacion: datos.ubicacion,
        foto_perfil: datos.foto_perfil,
        estado_general: 'ACTIVAR'
    });

    empresa_nueva.save((err, empresaDB) => {
        if (err) {
            res.json({
                success: false,
                msj: `La solicitud no se pudo registrar, ocurrió el siguiente error ${err}`
            });
        } else {
            res.json({
                success: true,
                msj: 'La solicitud se registró correctamente',
                empresaDB
            });
        }
    });
});

router.get('/listar_empresas', (req, res) => {
    Empresa.find((err, lista_empresas) => {
        if (err) {
            res.json({
                resultado: false,
                msj: 'Las empresas no se pudieron listar',
                err
            });
        } else {
            res.json({
                lista_empresas
            });
        }
    });

});



router.get('/buscar_empresa_id', (req, res) => {
    Empresa.findOne({ _id: req.query._id }, (err, empresas_bd) => {
        if (err) {
            res.json({
                resultado: false,
                msj: 'La empresa no se encontró',
                err
            })

        } else {
            res.json({
                empresas_bd
            });
        }
    });

});

router.put('/otp_empresa', (req, res) => {

    Empresa.updateOne({ _id: req.body._id }, {
            $set: req.body
        }, (err, info) => {
            if (err) {
                res.json({
                    resultado: false,
                    msj: 'No se pudo actualizar la información',
                    err
                })
            } else {
                res.json({
                    info
                });
                mailer.enviar_mail(req.body.correo, req.body.otp);
            }
        }

    );
});

module.exports = router;

router.put('/modificar_contrasenna_empresa', (req, res) => {

    Empresa.updateOne({ _id: req.body._id }, {
            $set: req.body
        }, (err, info) => {
            if (err) {
                res.json({
                    resultado: false,
                    msj: 'No se pudo actualizar la información',
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


router.put('/modificar_empresa', (req, res) => {

    Empresa.updateOne({ _id: req.body._id }, {
            $set: req.body
        }, (err, info) => {
            if (err) {
                res.json({
                    resultado: false,
                    msj: 'No se pudo actualizar la información',
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