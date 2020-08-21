'use strict';


const guardar_nueva_reserva = async(p_id_usuario, p_nombre_usuario, p_id_parqueo, p_nombre_parqueo, p_fecha_reserva, p_hora_entrada, p_hora_salida, p_horas, p_monto_total, p_id_piso_espacio_seleccionado, p_id_espacio_seleccionado) => {

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
            id_piso_espacio_seleccionado: p_id_piso_espacio_seleccionado,
            id_espacio_seleccionado: p_id_espacio_seleccionado,
        }
    }).then(response => {
        console.log(response);
        reserva_creada = response.data.reserva_almacenada;
    }).catch(error => {
        console.log(error);
    });

    return reserva_creada;
};

const obtener_reservas = async() => {
    let reservas;

    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/obtener-reservas',
            responseType: 'json'
        })
        .then(function(response) {
            //response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
            console.log(response.data.lista_reservas);
            reservas = response.data.lista_reservas;
        });

    return reservas;
};

const modificar_reserva = async(p_id, p_descuento, p_estado, p_monto_final, p_tarjeta_creditada) => {
    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/modificar-reserva',
            responseType: 'json',
            data: {
                _id: p_id,
                descuento: p_descuento,
                estado: p_estado,
                monto_final: p_monto_final,
                tarjeta_creditada: p_tarjeta_creditada
            }
        })
        .then((response) => {
            console.log('Reserva modificada con éxito');
        })
        .catch((error) => {
            console.log('Error: ' + error);
        });
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

const modificar_parqueo = async(p_id, p_tarifa, p_hora_apertura, p_hora_cierre, p_pisos, p_enlaces_redes, p_imagen_carta, p_imagen_perfil) => {
    console.log(p_id);
    console.log(p_tarifa);
    console.log(p_hora_apertura);
    console.log(p_hora_cierre);
    console.log(p_pisos);
    console.log(p_enlaces_redes);
    console.log(p_imagen_carta);
    console.log(p_imagen_perfil);

    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/modificar-parqueo',
            responseType: 'json',
            data: {
                _id: p_id,
                tarifa_por_hora: p_tarifa,
                hora_apertura: p_hora_apertura,
                hora_cierre: p_hora_cierre,
                pisos: p_pisos,
                enlaces_redes: p_enlaces_redes,
                imagen_carta: p_imagen_carta,
                imagen_perfil: p_imagen_perfil
            }
        })
        .then((response) => {
            console.log('Parqueo modificado correctamente.');
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
}

const eliminar_parqueo = async(p_id) => {
    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/eliminar-parqueo',
            responseType: 'json',
            data: {
                _id: p_id
            }
        })
        .then((response) => {
            console.log('Parqueo eliminado con éxito');
        })
        .catch((error) => {
            console.log('Error: ' + error);
        });
};