'use strict';

const registrar_empresa = async(pcorreo, pnombre, pidentificacion, pcontrasena, pencargado, pubicacion, pfoto) => {
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar_empresa',
        data: {
            'correo': pcorreo,
            'nombre': pnombre,
            'n_identificacion': pidentificacion,
            'contraseña': pcontrasena,
            'nombre_encargado': pencargado,
            'ubicacion': pubicacion,
            'foto_perfil': pfoto
        }
    }).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error);
    });
};

const obtener_empresas = async() => {
    let empresas;
    // GET request
    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar_empresas',
            responseType: 'json'
        })
        .then((response) => {
            empresas = response.data.lista_empresas;
        })
        .catch((response) => {
            console.log(error);

        });

    return empresas;
};




const modificar_estado_empresa = async(pid, pestado) => {
    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/modificar_empresa',
            responseType: 'json',
            data: {
                _id: pid,
                estado_general: pestado,

            }
        })
        .then((response) => {
            console.log('Datos modificados correctamente');
        })
        .catch((error) => {
            console.log(error);
        });
};




const eliminar_empresa = async(pid) => {
    await axios({
            method: 'delete',
            url: 'http://localhost:3000/api/eliminar-empresa',
            responseType: 'json',
            data: { _id: pid }

        })
        .then((response) => {
            console.log('La empresa ha sido eliminada');
        })
        .catch((error) => {
            console.log(error);
        });
};