'use strict';
const mongoose = require('mongoose');

const schema_cliente = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    correo: { type: String, required: true, unique: true },
    nombre: { type: String, required: true, unique: false },
    tipo_identifacion: { type: String, required: true, unique: false },
    n_identificacion: { type: String, required: true, unique: true },
    fecha_nacimiento: { type: String, required: true, unique: false },
    contraseña: { type: String, required: true, unique: false },
    foto_perfil: { type: String, required: true, unique: false },
    tarjetas: [{
        numero_tarjeta: { type: String, required: true, unique: true },
        fecha_expiracion: { type: String, required: true, unique: false },
        predeterminada: { type: Boolean, required: true, unique: false },
        nombre_tarjeta: { type: String, required: true, unique: false },
        codigo_seguridad: { type: Number, required: true, unique: false }
    }],
    estado_general: { type: String, required: true, unique: false },

});

module.exports = mongoose.model('Cliente', schema_cliente, 'clientes');