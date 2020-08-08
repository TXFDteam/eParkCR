'use strict';
const mongoose = require('mongoose');

const schema_admin = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    correo: { type: String, required: true, unique: true },
    nombre: { type: String, required: true, unique: false },
    contraseña: { type: String, required: true, unique: false },
    telefono: { type: String, required: true, unique: false },
    comision: { type: Number, required: true, unique: false },
    foto_perfil: { type: String, required: false, unique: false }
});

module.exports = mongoose.model('Admin', schema_admin, 'admin');