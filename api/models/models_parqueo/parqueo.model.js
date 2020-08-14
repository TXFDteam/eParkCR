'use strict';

//Dependencias.
const mongoose = require('mongoose');

//Atributos para guardar en la colección.
//Para las redes sociales se deben usar los siguientes datos:
//Facebook: facebook
//Twitter: twitter
//Instagram: instagram

const schema_parqueo = new mongoose.Schema({
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
});

//Exportar modulo para ser usado en el router desde el servidor.

//Primero el nombre de la clase con la que se va a referenciar en otros scripts.
//Segundo la referencia al schema.
//Tercero el nombre de la colección en la base de datos en MongoDB.
module.exports = mongoose.model('Parqueo', schema_parqueo, 'parqueos');