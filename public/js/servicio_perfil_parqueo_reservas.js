'use strict';


const guardar_nueva_reserva = async(p_id_usuario, p_nombre_usuario, p_id_parqueo, p_nombre_parqueo, p_fecha_reserva, p_hora_entrada, p_hora_salida, p_horas, p_monto_total, p_codigo_espacio_seleccionado) => {

    let reserva_creada;

    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/crear-reserva',
        responseType: 'json',
        data: {
            id_usuario: p_id_usuario,
            nombre_usuario: p_nombre_usuario,
            id_parqueo: p_id_parqueo,
            nombre_parqueo: p_nombre_parqueo,
            fecha_reserva: p_fecha_reserva,
            hora_entrada: p_hora_entrada,
            hora_salida: p_hora_salida,
            horas: p_horas,
            monto_total: p_monto_total,
            codigo_espacio_seleccionado: p_codigo_espacio_seleccionado,
        }
    }).then(response => {
        console.log(response);
        reserva_creada = response.data.reserva_almacenada;
    }).catch(error => {
        console.log(error);
    });

    return reserva_creada;
};

const obtener_parqueos = async() => {
    let parqueos;

    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/obtener-parqueos',
            responseType: 'json'
        })
        .then(function(response) {
            //response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
            console.log(response.data.lista_parqueos);
            parqueos = response.data.lista_parqueos;
        });

    return parqueos;
};

const obtener_parqueo_por_id = async(p_id) => {
    let parqueo;

    await axios({
            method: 'get',
            params: { _id: p_id },
            url: 'http://localhost:3000/api/buscar-parqueo-id',
            response_type: 'json'
        })
        .then((response) => {
            parqueo = response.data.parqueo_bd;
        })
        .catch((err) => {
            console.log('error ' + err);
        });

    return parqueo;
};