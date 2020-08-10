'use strict';

const express = require('express');
const router = express.Router();

const solicitud_empresa = require('../../models/models_empresa/empresa.model.js');

let contador_empresas = 0;

router.post('/solicitud_empresa', (req, res) => {
    let datos = req.body;
    contador_empresas += 1;
    let solicitud_empresa_nueva = new Solicitud_empresa({
        id: datos.id,
        correo: datos.correo,
        nombre: datos.nombre,
        n_identificacion: datos.n_identificacion,
        fecha_nacimiento: datos.fecha_nacimiento,
        contraseña: datos.contraseña,
        nombre_encargado: datos.nombre_encargado,
        ubicacion: datos.ubicacion,
        foto_perfil: datos.foto_perfil,
        estado_general: 'ACTIVAR'
    });

    solicitud_empresa_nueva.save((err, solicitud_empresa_almacenada) => {
        if (err) {
            res.json({
                success: false,
                msj: 'La solicitud no se pudo registrar, ocurrió el siguiente error',
                err
            })
        } else {
            res.json({
                success: true,
                msj: 'La solicitud se registró correctamente',
                solicitud_empresa_almacenada
            })
        }
    });
});


router.put('/empresa/modificar_empresa', (req, res) => {

    modificar_empresa.updateOne({ id: req.body.id }, {
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