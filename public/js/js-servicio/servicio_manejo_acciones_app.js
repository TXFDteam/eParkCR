'use strict';

const crear_accion_app = async(p_nombre_usuario, p_tipo_usuario, p_nombre_parqueo, p_fecha, p_accion) => {
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/crear-accion',
        responseType: 'json',
        data: {
            nombre_usuario: p_nombre_usuario,
            tipo_usuario: p_tipo_usuario,
            nombre_parqueo: p_nombre_parqueo,
            accion: p_accion,
            fecha: p_fecha
        }
    }).then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    });
};

const obtener_acciones_app = async() => {
    let lista_acciones;

    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/obtener-acciones-app',
            responseType: 'json'
        })
        .then(function(response) {
            lista_acciones = response.data.lista_acciones;
        });

    return lista_acciones;
};