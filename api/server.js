'use strict';

const express = require("express");
const body_parser = require("body-parser");
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

//Se declaran todos los accesos de los archivos routes.



const app = express();
app.use(cors());
app.use(express.static(__dirname + "/public"));
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


// Se crea la variable db, que almacena la instancia de la base de datos, para ser reutilizada en el "callback".
let db;

//Se conecta la base de datos antes de levantar el servidor, mediante los datos del archivo .env en la raíz del proyecto.
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, database) {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    //Guarda el objeto db para que el callback la pueda reutilizar.
    db = database;
    console.log("Se estableció la conexión con la base datos.");

    // Se inicia la aplicación.
    const server = app.listen(process.env.PORT || 8000, function() {
        let port = server.address().port;
        console.log("La aplicación está levantada en el puerto: ", port);
    });
});

//Error general en caso de que falle un "endpoint".
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ "error": message });
}

/*------------- CONEXIÓN A TODAS LAS RUTAS-------------------*/

/*-------Conexión a clientes------------*/
app.use('/api', require('./routes/registro_clientes.route.js'));
app.use('/api', require('./routes/routes_usuario/formulario_tarjetas.route'));
app.use('/api', require('./routes/routes_usuario/reservas_usuario.route'));

/*-------Conexión a dueños de parqueo------------*/
//Solicitud de parqueo
app.use('/api', require('./routes/registro_duenno_parqueo.route.js'));
app.use('/api', require('./routes/routes_dueño_parqueo/solicitud_parqueos.route.js'));


/*-------Conexión a empresas-------------*/
app.use('/api', require('./routes/registro_empresas.route.js'));
app.use('/api', require('./routes/routes_empresas/empleados_convenios.route'));

/*-------Conexión admin-------------------*/
app.use('/api', require('./routes/routes_admin/info_admin.route.js'));
app.use('/api', require('./routes/routes_admin/ingresos_admin.route'));

/*-------Conexión parqueos-------------------*/
app.use('/api', require('./routes/manejo_parqueos.route'));
app.use('/api', require('./routes/manejo_reservas.route'));
app.use('/api', require('./routes/manejo_comentarios.route'));
app.use('/api', require('./routes/registro_convenios_empresa.route'));

/*-------Conexión acciones app---------------*/
app.use('/api', require('./routes/manejo_acciones.route'));