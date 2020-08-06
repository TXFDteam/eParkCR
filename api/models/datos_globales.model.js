'use strict';
const mongoose = require('mongoose');

const schema_datos_globales = new mongoose.Schema({
    logo: { type: String, required: true, unique: true },
    correo: { type: String, required: true, unique: true },
    nombre: { type: String, required: true, unique: false },
    telefono: { type: String, required: true, unique: false },
    comision: { type: Number, required: true, unique: false }
});

module.exports = mongoose.model('Datos_globales', schema_datos_globales, 'datos_globales');