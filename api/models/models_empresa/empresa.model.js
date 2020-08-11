'use strict';
const mongoose = require('mongoose');

const schema_empresa = new mongoose.Schema({
    correo: { type: String, required: true, unique: true },
    nombre: { type: String, required: true, unique: false },
    n_identificacion: { type: String, required: true, unique: true },
    contraseña: { type: String, required: true, unique: false },
    nombre_encargado: { type: String, required: true, unique: false },
    ubicacion: { type: String, required: true, unique: false },
    foto_perfil: { type: String, required: true, unique: false },
    estado_general: { type: String, required: true, unique: false }
});

module.exports = mongoose.model('Empresa', schema_empresa, 'empresas');