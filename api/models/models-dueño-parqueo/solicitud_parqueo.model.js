'use strict';
const mongoose = require('mongoose');

const schema_solicitud_parqueo = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    correo: { type: String, required: true, unique: false },
    nombre: { type: String, required: true, unique: false },
    n_identificacion: { type: String, required: true, unique: true },
    coordenadas: { type: String, required: true, unique: false },
    tarifa: { type: String, required: true, unique: false },
    hora_apertura: { type: String, required: true, unique: false },
    hora_cierre: { type: String, required: true, unique: false },
    pisos: { type: Number, required: true, unique: false },
    piso: [{
        espacios_discapacidad: { type: Number, required: true, unique: false },
        espacios_motos: { type: Number, required: true, unique: false },
        espacios_automoviles: { type: Number, required: true, unique: false },

    }],
    redes_sociales: [{
        facebook: { type: String, required: false, unique: false },
        espacios_motos: { type: String, required: false, unique: false },
        espacios_automoviles: { type: String, required: false, unique: false },

    }],
    foto_perfil: { type: String, required: false, unique: false },
    foto_banner: { type: String, required: false, unique: false },
    estado_general: { type: String, required: true, unique: false }
});

module.exports = mongoose.model('Solicitud_parqueo', schema_solicitud_parqueo, 'solicitudes_parqueos');