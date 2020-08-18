'use strict';
const mongoose = require('mongoose');

const schema_comentario = new mongoose.Schema({
    id_usuario: { type: String, required: true, unique: false },
    id_parqueo: { type: String, required: true, unique: false },
    cantidad_estrellas: { type: String, required: true, unique: false },
    fecha: { type: String, required: true, unique: false },
    mensaje: { type: String, required: true, unique: false }
});

module.exports = mongoose.model('Comentario', schema_comentario, 'comentarios');