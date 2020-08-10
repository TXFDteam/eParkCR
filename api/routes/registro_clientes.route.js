'use strict';

//HAY QUE CAMBIAR LOS DATOS CUANDO LOS FORMATOS DE USUARIOS DENTRO DE LA BASE DE DATOS ESTÉN LISTOS

const express = require('express');
const router = express.Router();

const Cliente = require('../models/models_usuario/cliente.model');

router.post('/registrar-cliente', (req, res) => {
    let datos = req.body;

    let cliente_nuevo = new Cliente({
        id: datos.id,
        correo: datos.correo,
        nombre: datos.nombre,
        tipo_identificacion: datos.tipo_identificacion,
        n_identificacion: datos.n_identificacion,
        fecha_nacimiento: datos.fecha_nacimiento,
        contraseña: datos.contraseña,
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

router.put('/modificar-cliente', (req, res) => {

    Cliente.updateOne({ id: req.body.id }, {
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
module.exports = router;