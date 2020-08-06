'use strict';

//HAY QUE CAMBIAR LOS DATOS CUANDO LOS FORMATOS DE USUARIOS DENTRO DE LA BASE DE DATOS ESTÉN LISTOS

const express = require('express');
const router = express.Router();

const usuario = require('../models/models_usuario/cliente.model');

router.post('/registrar-usuario', (req, res) => {
    let datos = req.body;

    let usuario_nuevo = new usuario({
        codigo: datos.codigo_usuario,
        nombre: datos.nombre_usuario,
        direccion: datos.direccion_usuario,
        telefono: datos.telefono_usuario,
        correo: datos.correo_usuario,
        estado: 'Activo'
    });

    usuario_nuevo.save((err, usuario_almacenado) => {
        if (err) {
            res.json({
                success: false,
                msj: `El usuario no se pudo registrar ocurrió el siguiente error ${err}`
            })
        } else {
            res.json({
                success: true,
                msj: `El usuario se registró correctamente`,
                usuario_almacenado
            })
        }
    });
});