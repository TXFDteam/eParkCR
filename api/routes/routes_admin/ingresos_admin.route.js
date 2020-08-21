'use strict';
const express = require('express');
const router = express.Router();
const Parqueos = require('../../models/models_parqueo/parqueo.model');
const Admin = require('../../models/models_admin/admin.model');
const Duennos = require('../../models/models_dueño_parqueo/duenno_parqueo.model');

router.get('/listar-parqueos', (req, res) => {
    Parqueos.find((err, lista_parqueos) => {
        if (err) {
            res.json({
                resultado: false,
                msj: 'Error al recuperar la lista de parqueos: ' + err
            })
        } else {
            res.json({
                resultado: true,
                msj: 'lista de parqueos obtenida correctamente.',
                lista_parqueos
            })
        }
    });
});

router.get('/listar-admin', (req, res) => {
    Admin.find((err, info_admin) => {
        if (err) {
            res.json({
                resultado: false,
                msj: 'Error al recuperar la informacion del administrador: ' + err
            })
        } else {
            res.json({
                resultado: true,
                msj: 'informacion del admnisitrador obtenida correctamente.',
                info_admin
            })
        }
    });
});





router.get('/listar-usuarios-parqueos', (req, res) => {
    Duennos.find((err, info_admin) => {
        if (err) {
            res.json({
                resultado: false,
                msj: 'Error al recuperar la informacion de los duenos de parqueo: ' + err
            })
        } else {
            res.json({
                resultado: true,
                msj: 'informacion de duenos de parqueo obtenida correctamente.',
                info_admin
            })
        }
    });
});




module.exports = router;