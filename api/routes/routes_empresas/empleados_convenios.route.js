'use strict';
const express = require('express');
const router = express.Router();
const Convenios = require('../../models/models_parqueo/convenios.model');

router.post('/modificar-estado-empleado', (req, res) => {

    Convenios.updateOne({ _id: req.body._id, 'Convenios.usuarios': req.body.idE }, {
            $set: {
                'convenios.$.usuarios': {
                    estado: req.body.estado
                }
            }
        }, (err, info) => {
            if (err) {
                return res.json({
                    resultado: false,
                    msj: 'No se pudo actualizar el empleado' +
                        err
                })
            } else {
                return res.json({
                    info
                });
            }
        }

    );
});


module.exports = router;