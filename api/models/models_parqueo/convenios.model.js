'use strict';

//Dependencias.
const mongoose = require('mongoose');

//Atributos para guardar en la colección.
//Para las redes sociales se deben usar los siguientes datos:
//Facebook: facebook
//Twitter: twitter
//Instagram: instagram

const schema_convenio = new mongoose.Schema({
    codigo_convenio: { type: String, required: true, unique: false },
    porcentaje_convenio: { type: Number, required: true, unique: false },
    fecha_vencimiento_convenio: { type: String, required: true, unique: false },
});

//Exportar modulo para ser usado en el router desde el servidor.

//Primero el nombre de la clase con la que se va a referenciar en otros scripts.
//Segundo la referencia al schema.
//Tercero el nombre de la colección en la base de datos en MongoDB.
module.exports = mongoose.model('Convenios', schema_convenio, 'convenios');