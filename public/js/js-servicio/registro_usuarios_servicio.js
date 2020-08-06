'use strict';

//HAY QUE CAMBIAR LOS DATOS CUANDO LOS FORMATOS DE USUARIOS DENTRO DE LA BASE DE DATOS ESTÉN LISTOS

const registrar_usuario = async(pcodigo, pnombre, pdireccion, ptelefono, pcorreo) => {
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar-usuario',
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

const obtener_usuarios = async() => {
    let usuarios;

    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar-usuarios',
            responseType: 'json'
        })
        .then((response) => {
            usuarios = response.data.lista_usuarios;
        })
        .catch((error) => {
            console.log(error);
        });
    return usuarios;
};