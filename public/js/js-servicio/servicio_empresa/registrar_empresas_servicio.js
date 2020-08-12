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