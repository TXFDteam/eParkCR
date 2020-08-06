'use strict';
const mongoose = require('mongoose');

const schema_empresa = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    correo: { type: String, required: true, unique: true },
    nombre: { type: String, required: true, unique: false },
    n_identificacion: { type: String, required: true, unique: true },
    fecha_nacimiento: { type: String, required: true, unique: false },
    contraseña: { type: String, required: true, unique: false },
    nombre_encargado: { type: String, required: true, unique: false },
    ubicacion: { type: String, required: true, unique: false },
    estado_general: { type: String, required: true, unique: false }
});

module.exports = mongoose.model('Registro', schema_empresa, 'empresas');