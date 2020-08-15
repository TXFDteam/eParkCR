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
    parqueos: [{
        nombre: { type: String, required: true, unique: false },
        imagen_carta: { type: String, required: true, unique: false },
        imagen_perfil: { type: String, required: true, unique: false },
        id_duenno: { type: String, required: true, unique: false },
        email: { type: String, required: true, unique: false },
        cedula_juridica: { type: String, required: true, unique: false },
        permiso_funcionamiento: { type: String, required: true, unique: false },
        enlaces_redes: [{
            nombre: { type: String, required: true, unique: false },
            enlace: { type: String, required: true, unique: false }
        }],
        ubicacion: { type: String, required: true, unique: false },
        coordenadas: { type: String, required: true, unique: false },
        calificacion_promedio: { type: Number, required: true, unique: false },
        tarifa_por_hora: { type: Number, required: true, unique: false },
        hora_apertura: { type: String, required: true, unique: false },
        hora_cierre: { type: String, required: true, unique: false },
        pisos: [{
            espacios: [{
                codigo: { type: String, required: true, unique: false },
                tipo: { type: String, required: true, unique: false },
                ocupado: { type: String, required: true, unique: false }
            }]
        }],
        estado_general: { type: String, required: true, unique: false }
    }],
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