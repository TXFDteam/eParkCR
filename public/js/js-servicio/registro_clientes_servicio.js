'use strict';

//HAY QUE CAMBIAR LOS DATOS CUANDO LOS FORMATOS DE USUARIOS DENTRO DE LA BASE DE DATOS ESTÉN LISTOS

const registrar_usuario = async(pcodigo, pnombre, pdireccion, ptelefono, pcorreo) => {
    await axios({
        method: 'post',
        //ESTE URL ESTÁ BIEN, DEBE COINCIDIR CON LOS DE obtener_todos_usuarios_servicio.js
        url: 'http://localhost:3000/api/registrar-cliente',
        responseType: 'json',
        data: {
            'codigo_usuario': pcodigo,
            'nombre_usuario': pnombre,
            'direccion_usuario': pdireccion,
            'telefono_usuario': ptelefono,
            'correo_usuario': pcorreo
        }

    }).then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    });
};

const obtener_clientes = async() => {
    let clientes;

    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar-clientes',
            responseType: 'json'
        })
        .then((response) => {
            clientes = response.data.lista_clientes;
        })
        .catch((error) => {
            console.log(error);
        });
    return clientes;
};