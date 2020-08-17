'use strict';

//Usar esta función para registrar un parqueo directamente.
const directo_registrar_parqueo = async(p_nombre, p_img_carta, p_img_perfil, p_id_duenno, p_email, p_ced_juridica, p_perimso_funcionamiento, p_enlaces_redes, p_ubicacion, p_coordenadas, p_calificacion_promedio = 0, p_tarifa_x_hora, p_hora_apertura, p_hora_cierre, p_pisos) => {
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar-parqueo',
        responseType: 'json',
        data: {
            nombre: p_nombre,
            imagen_carta: p_img_carta,
            imagen_perfil: p_img_perfil,
            id_duenno: p_id_duenno,
            email: p_email,
            cedula_juridica: p_ced_juridica,
            permiso_funcionamiento: p_perimso_funcionamiento,
            enlaces_redes: p_enlaces_redes,
            ubicacion: p_ubicacion,
            coordenadas: p_coordenadas,
            calificacion_promedio: p_calificacion_promedio,
            tarifa_por_hora: p_tarifa_x_hora,
            hora_apertura: p_hora_apertura,
            hora_cierre: p_hora_cierre,
            pisos: p_pisos
        }
    }).then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    });
};


const obtener_parqueos = async() => {
    let parqueos;

    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/obtener-parqueos',
            responseType: 'json'
        })
        .then((response) => {
            parqueos = response.data.lista_parqueos;
        })
        .catch((error) => {
            console.log(error);
        });
    return parqueos;
};

const aceptacion_solicitud_parqueo = async(pid, pestado, pcorreo, pnombre) => {
    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/aceptacion-solicitud-parqueo',
            responseType: 'json',
            data: {
                _id: pid,
                estado_general: pestado,
                correo: pcorreo,
                nombre: pnombre
            }
        })
        .then((response) => {
            console.log('Datos modificados correctamente');
        })
        .catch((error) => {
            console.log(error);
        });
};
const rechazo_solicitud_parqueo = async(pid, pestado, pcorreo, pnombre) => {
    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/rechazo-solicitud-parqueo',
            responseType: 'json',
            data: {
                _id: pid,
                estado_general: pestado,
                correo: pcorreo,
                nombre: pnombre
            }
        })
        .then((response) => {
            console.log('Datos modificados correctamente');
        })
        .catch((error) => {
            console.log(error);
        });
};