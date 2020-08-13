// 'use strict';

// const express = require('express');
// const router = express.Router();

// const Empresa = require('../models/models_empresa/empresa.model.js');
// let ids_empresas = 0;

// router.post('/registrar_empresa', (req, res) => {
//     let datos = req.body;
//     ids_empresas += 1;
//     let empresa_nueva = new Empresa({
//         id: 'e' + ids_empresas,
//         correo: datos.correo,
//         nombre: datos.nombre,
//         n_identificacion: datos.n_identificacion,
//         fecha_nacimiento: datos.fecha_nacimiento,
//         contraseña: datos.contraseña,
//         nombre_encargado: datos.nombre_encargado,
//         ubicacion: datos.ubicacion,
//         foto_perfil: datos.foto_perfil,
//         estado_general: 'ACTIVAR'
//     });

//     empresa_nueva.save((err, empresa_almacenada) => {
//         if (err) {
//             res.json({
//                 success: false,
//                 msj: `La solicitud no se pudo registrar, ocurrió el siguiente error ${err}`
//             });
//         } else {
//             res.json({
//                 success: true,
//                 msj: 'La solicitud se registró correctamente',
//                 empresa_almacenada
//             });
//         }
//     });
// });

// router.get('/listar_empresas', (req, res) => {
//     Empresa.find((err, empresas_bd) => {
//         if (err) {
//             res.json({
//                 resultado: false,
//                 msj: 'Las empresas no se pudieron listar',
//                 err
//             });
//         } else {
//             res.json({
//                 empresas_bd
//             });
//         }
//     });

// });

// module.exports = router;