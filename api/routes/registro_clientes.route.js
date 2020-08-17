'use strict';

//HAY QUE CAMBIAR LOS DATOS CUANDO LOS FORMATOS DE USUARIOS DENTRO DE LA BASE DE DATOS ESTÉN LISTOS

const express = require('express');
const router = express.Router();

const Cliente = require('../models/models_usuario/cliente.model');
const mailer = require('../templates/olvidar-contraseña');

router.post('/registrar-cliente', (req, res) => {
    let datos = req.body;

    let cliente_nuevo = new Cliente({
        correo: datos.correo,
        nombre: datos.nombre,
        tipo_identificacion: datos.tipo_identificacion,
        n_identificacion: datos.n_identificacion,
        fecha_nacimiento: datos.fecha_nacimiento,
        contraseña: datos.contraseña,
        foto_perfil: datos.foto_perfil,
        estado_general: 'DESACTIVAR'
    });

    cliente_nuevo.save((err, cliente_almacenado) => {
        if (err) {
            res.json({
                success: false,
                msj: 'El usuario no se pudo registrar ocurrió el siguiente error',
                err
            })
        } else {
            res.json({
                success: true,
                msj: 'El usuario se registró correctamente',
                cliente_almacenado
            })
        }
    });
});
router.get('/listar-clientes', (req, res) => {
    Cliente.find((err, lista_clientes) => {
        if (err) {
            res.json({
                resultado: false,
                msj: 'No se pudieron listar los usuarios',
                err
            })
        } else {
            res.json({
                resultado: true,
                msj: 'Se listaron los usuarios correctamente',
                lista_clientes
            })
        }
    });
});

router.put('/otp-cliente', (req, res) => {

    Cliente.updateOne({ _id: req.body._id }, {
            $set: req.body
        }, (err, info) => {
            if (err) {
                res.json({
                    resultado: false,
                    msj: 'No se pudo actualizar el dueño de parqueo',
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

router.put('/modificar-cliente', (req, res) => {

    Cliente.updateOne({ _id: req.body._id }, {
            $set: req.body
        }, (err, info) => {
            if (err) {
                res.json({
                    resultado: false,
                    msj: 'No se pudo actualizar el usuario',
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

router.put('/modificar-contrasenna-cliente', (req, res) => {

    Cliente.updateOne({ _id: req.body._id }, {
            $set: req.body
        }, (err, info) => {
            if (err) {
                res.json({
                    resultado: false,
                    msj: 'No se pudo actualizar el dueño de parqueo',
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

//Para filtrar.
router.get('/buscar-cliente-id', (req, res) => {
    Cliente.findOne({ _id: req.query._id }, (err, cliente_bd) => {
        if (err) {
            res.json({
                resultado: false,
                msj: 'El cliente no se encontró :(',
                err
            })
        } else {
            res.json({
                cliente_bd
            });
        }
    })
});

module.exports = router;