'use strict'

const enviar_datos_tarjeta = async(p_id, pnombre_tarjeta, pnum_tarjeta, pcod_seguridad, pfecha_expr) => {

    console.log('El ID del usuario es: ' + p_id);
    console.log('El nombre en la tarjeta es: ' + pnombre_tarjeta);
    console.log('El numero de la tarjeta es: ' + pnum_tarjeta);
    console.log('El codigo de seguridad es: ' + pcod_seguridad);
    console.log('La fecha de expiracion es: ' + pfecha_expr);

    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar-tarjeta',
        responseType: 'json',
        data: {
            '_id': p_id,
            'numero_tarjeta': pnum_tarjeta,
            'fecha_expiracion': pfecha_expr,
            'predeterminada': false,
            'nombre_tarjeta': pnombre_tarjeta,
            'codigo_seguridad': pcod_seguridad
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