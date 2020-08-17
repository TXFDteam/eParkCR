'use strict';
const mongoose = require('mongoose');

const schema_comentario = new mongoose.Schema({
    id_usuario: { type: String, required: true, unique: true },
    id_parqueo: { type: String, required: true, unique: true },
    cantidad_estrellas: { type: String, required: true, unique: true },
    fecha: { type: String, required: true, unique: true },
    mensaje: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Comentario', schema_comentario, 'comentarios');