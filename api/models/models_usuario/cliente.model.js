'use strict';
const mongoose = require('mongoose');

const schema_cliente = new mongoose.Schema({

    correo: { type: String, required: true, unique: true },
    nombre: { type: String, required: true, unique: false },
    tipo_identificacion: { type: String, required: true, unique: false },
    n_identificacion: { type: String, required: true, unique: true },
    fecha_nacimiento: { type: String, required: true, unique: false },
    contraseña: { type: String, required: true, unique: false },
    foto_perfil: { type: String, required: false, unique: false },
    tarjetas: [{
        numero_tarjeta: { type: String, required: false, unique: true },
        fecha_expiracion: { type: String, required: false, unique: false },
        predeterminada: { type: Boolean, required: false, unique: false },
        nombre_tarjeta: { type: String, required: false, unique: false },
        codigo_seguridad: { type: Number, required: false, unique: false }
    }],
    estado_general: { type: String, required: true, unique: false },
    otp: { type: Number, required: false, unique: false }

});

module.exports = mongoose.model('Cliente', schema_cliente, 'clientes');