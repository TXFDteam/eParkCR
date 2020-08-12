'use strict';
const mongoose = require('mongoose');

const schema_duenno_parqueo = new mongoose.Schema({
    correo: { type: String, required: true, unique: true },
    nombre: { type: String, required: true, unique: false },
    n_identificacion: { type: String, required: true, unique: true },
    contraseña: { type: String, required: true, unique: false },
    telefono: { type: String, required: true, unique: false },
    cuenta_bancaria: { type: String, required: true, unique: true },
    foto_perfil: { type: String, required: false, unique: false },
    estado_general: { type: String, required: true, unique: false },
    otp: { type: Number, required: false, unique: false }
});

module.exports = mongoose.model('Duenno_parqueo', schema_duenno_parqueo, 'duennos_parqueos');