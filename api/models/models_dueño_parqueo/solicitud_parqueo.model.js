'use strict';


const mongoose = require('mongoose');

const schema_solicitud_parqueo = new mongoose.Schema({
    correo: { type: String, required: true, unique: true },
    nombre: { type: String, required: true, unique: true },
    n_identificacion: { type: String, required: true, unique: true },
    coordenadas: { type: String, required: true, unique: true },
    tarifa_x_hora: { type: String, required: true, unique: true },
    hora_apertura: { type: String, required: true, unique: true },
    hora_cierre: { type: String, required: true, unique: true },
    pisos: { type: Number, required: true, unique: true },
    espacios_discapacidad: { type: Number, required: true, unique: true },
    espacios_motos: { type: Number, required: true, unique: true },
    espacios_automoviles: { type: Number, required: true, unique: true },
    redes_sociales: [{
        facebook: { type: String, required: false, unique: false },
        twitter: { type: String, required: false, unique: false },
        instagram: { type: String, required: false, unique: false },

    }],
    foto_perfil: { type: String, required: false, unique: false },
    foto_banner: { type: String, required: false, unique: false },
    estado_general: { type: String, required: true, unique: false }
});

module.exports = mongoose.model('Solicitud_parqueo', schema_solicitud_parqueo, 'solicitudes_parqueos');