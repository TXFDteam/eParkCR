'use strict';
const mongoose = require('mongoose');

const schema_reservas = new mongoose.Schema({
    id_usuario: { type: String, required: true, unique: false },
    nombre_usuario: { type: String, required: true, unique: false },
    id_parqueo: { type: String, required: true, unique: false },
    nombre_parqueo: { type: String, required: true, unique: false },
    fecha_reserva: { type: String, required: true, unique: false },
    hora_entrada: { type: String, required: true, unique: false },
    hora_salida: { type: String, required: true, unique: false },
    horas: { type: String, required: true, unique: false },
    descuento: { type: String, required: true, unique: false },
    estado_reserva: { type: String, required: true, unique: false },
    monto_total: { type: String, required: true, unique: false },
    codigo_espacio_seleccionado: { type: String, required: true, unique: false },
    monto_final: { type: String, required: true, unique: false },
    tarjeta_creditada: { type: String, required: true, unique: false },
});

module.exports = mongoose.model('Reserva', schema_reservas, 'reservas');