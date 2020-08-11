'use strict';

const registrar_empresa = async(p_id, pid, pcorreo, pnombre, pidentificacion, pnacimiento, pcontrasena, pencargado, pubicacion, pfoto, pestado) => {
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar_empresa',
        data: {
            _id: p_id,
            id: pid,
            correo: pcorreo,
            nombre: pnombre,
            n_identificacion: pidentificacion,
            fecha_nacimiento: pnacimiento,
            contraseña: pcontrasena,
            nombre_encargado: pencargado,
            ubicacion: pubicacion,
            foto_perfil: pfoto,
            estado_general: pestado
        }
    }).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error);
    });
};