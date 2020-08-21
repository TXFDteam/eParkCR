'use strict';
const mongoose = require('mongoose');

const schema_accion = new mongoose.Schema({
    nombre_usuario: { type: String, required: true, unique: false },
    tipo_usuario: { type: String, required: true, unique: false },
    nombre_parqueo: { type: String, required: true, unique: false },
    accion: { type: String, required: true, unique: false },
    fecha: { type: String, required: true, unique: false }
});

module.exports = mongoose.model('Accion', schema_accion, 'acciones_app');