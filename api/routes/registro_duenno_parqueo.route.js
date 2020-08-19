'use strict';


const express = require('express');
const router = express.Router();

const Duenno_parqueo = require('../models/models_dueño_parqueo/duenno_parqueo.model');
const mailer = require('../templates/olvidar-contraseña');


router.post('/registro-duenno-parqueo', (req, res) => {
    let datos = req.body;

    let duenno_parqueo_nuevo = new Duenno_parqueo({
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
                msj: 'La solicitud no se pudo registrar, ocurrió el siguiente error',
                err
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
    Duenno_parqueo.find((err, lista_duennos_parqueos) => {
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
                lista_duennos_parqueos
            })
        }
    });
});

router.put('/modificar-duenno-parqueo', (req, res) => {

    Duenno_parqueo.updateOne({ _id: req.body._id }, {
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
router.put('/otp-duenno-parqueo', (req, res) => {

    Duenno_parqueo.updateOne({ _id: req.body._id }, {
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


router.put('/modificar-contrasenna-duenno-parqueo', (req, res) => {

    Duenno_parqueo.updateOne({ _id: req.body._id }, {
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






router.delete('/eliminar-duenno-parqueo', (req, res) => {

    Duenno_parqueo.deleteOne({ _id: req.body._id }, {
        $set: req.body
    }, (err, borrado) => {
        if (err) {
            res.json({
                resultado: false,
                msj: 'No se ha podido eliminair al duenno del parqueo' + err,
                err
            })
        } else {
            res.json({
                borrado
            });
        }
    })
});



module.exports = router;