'use strict';
const mongoose = require('mongoose');

const schema_tarjetas = new mongoose.Schema({

    id_usuario: { type: String, required: true, unique: false },
    tarjetas: [{
        numero_tarjeta: { type: String, required: true, unique: true },
        fecha_expiracion: { type: String, required: true, unique: false },
        predeterminada: { type: Boolean, required: true, unique: false },
        nombre_tarjeta: { type: String, required: true, unique: false },
        codigo_seguridad: { type: Number, required: true, unique: false }
    }],


});

module.exports = mongoose.model('Tarjeta', schema_tarjetas, 'tarjetas');