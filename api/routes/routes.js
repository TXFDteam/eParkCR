'use strict';
const express = require('express');
const router = express.Router();


/*--------------MODELS-------------------------*/
const Cliente = require('../models/models_usuario/cliente.model');
const Duenno_parqueo = require('../models/models_dueño_parqueo/duenno_parqueo.model');
const Solicitud_parqueo = require('../models/models_dueño_parqueo/solicitud_parqueo.model.js');
const Empresa = require('../models/models_empresa/empresa.model.js');

let ids_clientes = 0;
let ids_duenno_parqueo = 0;
let ids_empresas = 0;
let ids_parqueos = 0;



/*---------------CLIENTES----------------------*/


router.post('/registrar-usuario', (req, res) => {
    let datos = req.body;
    ids_clientes += 1;
    let usuario_nuevo = new Cliente({
        id: 'c' + ids_clientes,
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

/*---------------DUEÑO DE PARQUEO--------------*/
router.post('/registro-duenno-parqueo', (req, res) => {
    let datos = req.body;

    ids_duenno_parqueo += 1;

    let duenno_parqueo_nuevo = new Duenno_parqueo({
        id: 'd' + ids_duenno_parqueo,
        correo: datos.correo,
        nombre: datos.nombre,
        n_identificacion: datos.n_identificacion,
        fecha_nacimiento: datos.fecha_nacimiento,
        contraseña: datos.contraseña,
        telefono: datos.telefono,
        cuenta_bancaria: datos.cuenta_bancaria,
        foto_perfil: datos.foto_perfil,
        estado_general: 'ACTIVAR'
    });

    duenno_parqueo_nuevo.save((err, duenno_parqueo_almacenado) => {
        if (err) {
            res.json({
                success: false,
                msj: `La solicitud no se pudo registrar, ocurrió el siguiente error ${err}`
            })
        } else {
            res.json({
                success: true,
                msj: `La solicitud se registró correctamente`,
                duenno_parqueo_almacenado
            })
        }
    });
});

router.get('/listar-duennos-parqueo', (req, res) => {
    duenno_parqueo.find((err, lista_duennos_parqueos) => {
        if (err) {
            res.json({
                resultado: false,
                msj: `No se pudieron listar los usuarios ${err}`
            })
        } else {
            res.json({
                resultado: true,
                msj: `Se listaron los usuarios correctamente`,
                lista_duennos_parqueos
            })
        }
    });
});




/*----------------PARQUEOS----------------------*/

router.post('/dueño-parqueo/solicitud-parqueo', (req, res) => {
    let datos = req.body;
    ids_parqueos += 1;
    let solicitud_parqueo_nueva = new Solicitud_parqueo({
        id: 'p' + ids_parqueos,
        correo: datos.correo,
        nombre: datos.nombre,
        n_identificacion: datos.n_identificacion,
        coordenadas: datos.coordenadas,
        tarifa_x_hora: datos.tarifa_x_hora,
        hora_apertura: datos.hora_apertura,
        hora_cierre: datos.hora_cierre,
        pisos: datos.pisos,
        foto_perfil: datos.foto_perfil,
        foto_banner: datos.foto_banner,
        estado_general: 'ACTIVAR'
    });

    solicitud_parqueo_nueva.save((err, solicitud_parqueo_almacenada) => {
        if (err) {
            res.json({
                success: false,
                msj: `La solicitud no se pudo registrar, ocurrió el siguiente error ${err}`
            })
        } else {
            res.json({
                success: true,
                msj: `La solicitud se registró correctamente`,
                solicitud_parqueo_almacenada
            })
        }
    });
});

//ESTA FUNCION ESTA EN DUDA
router.post('/dueño-parqueo/agregar-piso', (req, res) => {
    solicitud_parqueo.update({ _id: req.body._id }, {
            $push: {
                'piso': {
                    espacios_discapacidad: req.body.espacios_discapacidad,
                    espacios_motos: req.body.espacios_motos,
                    espacios_automoviles: req.body.espacios_automoviles
                }
            }
        },

        function(err) {
            if (err) {
                res.json({
                    success: false,
                    msj: `La solicitud no se pudo registrar, ocurrió el siguiente error ${err}`
                })
            } else {
                res.json({
                    success: true,
                    msj: `La solicitud se registró correctamente`,
                    solicitud_parqueo_almacenada
                })
            }
        });
});


/*---------------EMPRESAS----------------------*/

router.post('/registrar_empresa', (req, res) => {
    let datos = req.body;
    ids_empresas += 1;
    let empresa_nueva = new Empresa({
        id: 'e' + ids_empresas,
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
    Empresa.find((err, empresas_bd) => {
        if (err) {
            res.json({
                resultado: false,
                msj: 'Las empresas no se pudieron listar',
                err
            });
        } else {
            res.json({
                empresas_bd
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