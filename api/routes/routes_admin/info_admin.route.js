'use strict';

const express = require('express');
const router = express.Router();

const Admin = require('../../models/models_admin/admin.model.js');


router.post('/registro-admin', (req, res) => {
    let datos = req.body;


    let admin = new Admin({
        id: 'admin_principal',
        correo: 'admintxfd@gmail.com',
        nombre: 'admin',
        contraseña: 'admin.admin1',
        telefono: '2225-4444',
        comision: '8',
        foto_perfil: 'https://res.cloudinary.com/txfd/image/upload/v1597717746/IFAM_ytwkto.jpg',
    });

    admin.save((err, admin_almacenado) => {
        if (err) {
            res.json({
                success: false,
                msj: 'La solicitud no se pudo registrar, ocurrió el siguiente error',
                err
            })
        } else {
            res.json({
                success: true,
                msj: `La solicitud del admin se registró correctamente`,
                admin_almacenado
            })
        }
    });
});

router.get('/listar-admin', (req, res) => {
    Admin.find((err, admin_info) => {
        if (err) {
            res.json({
                resultado: false,
                msj: 'No se pudo mostrar la información del admin',
                err
            })
        } else {
            res.json({
                resultado: true,
                msj: 'Se mostró la información del admin correctamente',
                admin_info
            })
        }
    });
});


router.put('/modificar-admin', (req, res) => {

    Admin.updateOne({ _id: req.body._id }, {
            $set: req.body
        }, (err, info) => {
            if (err) {
                res.json({
                    resultado: false,
                    msj: 'No se pudo actualizar el admin',
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