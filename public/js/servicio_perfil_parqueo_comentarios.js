'use strict';

const s_crear_comentario = async(p_id_usuario, p_id_parqueo, p_estrellas, p_fecha, p_mensaje) => {
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/crear-comentario',
        responseType: 'json',
        data: {
            id_usuario: p_id_usuario,
            id_parqueo: p_id_parqueo,
            cantidad_estrellas: p_estrellas,
            fecha: p_fecha,
            mensaje: p_mensaje
        }
    }).then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    });
};

const s_obtener_comentarios = async() => {
    let lista_comentarios;

    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/obtener-comentarios',
            responseType: 'json'
        })
        .then(function(response) {
            lista_comentarios = response.data.lista_comentarios;
        });

    return lista_comentarios;
};

const s_modificar_comentario = async(p_id, p_estrellas, p_fecha, p_mensaje) => {
    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/modificar-comentario',
            responseType: 'json',
            data: {
                _id: p_id,
                cantidad_estrellas: p_estrellas,
                fecha: p_fecha,
                mensaje: p_mensaje
            }
        })
        .then((response) => {
            console.log('Comentario modificado con éxito');
        })
        .catch((error) => {
            console.log('Error: ' + error);
        });
};

const s_eliminar_comentario = async(p_id) => {

};