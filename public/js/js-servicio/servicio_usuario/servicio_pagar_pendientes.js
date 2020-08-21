'use strict'



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




const obtener_tarjetas = async(pid) => {
    let tarjetas;

    await axios({
            method: 'get',
            params: { _id: pid },
            url: 'http://localhost:3000/api/listar-tarjetas-id',
            responseType: 'json'

        })
        .then((response) => {
            tarjetas = response.data.tarjetas;
        })
        .catch((error) => {
            console.log(error);
        });

    return tarjetas;

};



const obtener_reserva = async(pid) => {
    let reserva;

    await axios({
            method: 'get',
            params: { _id: pid },
            url: 'http://localhost:3000/api/listar-reserva-id',
            responseType: 'json'
        })
        .then((response) => {
            reserva = response.data.reserva_bd;
        })
        .catch((error) => {
            console.log(error);
        });
    return reserva;
};




const buscar_convenios = async() => {
    let convenios;

    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar_convenios',
            responseType: 'json'
        })
        .then((response) => {
            convenios = response.data.lista_convenios;
        })
        .catch((error) => {
            console.log(error);
        });
    return convenios;
};





const completar_pago = async(pid_reserva, pmonto_descuento, pmonto_final, ptarjeta) => {

    await axios({
        method: 'put',
        url: 'http://localhost:3000/api/completar-pago',
        responseType: 'json',
        data: {
            '_id': pid_reserva,
            'descuento': pmonto_descuento,
            'estado_reserva': 'PAGA',
            'monto_final': pmonto_final,
            'tarjeta_creditada': ptarjeta
        }

    }).then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    });

};


const quitar_reserva_activa = async(pid_cliente) => {

    await axios({
        method: 'put',
        url: 'http://localhost:3000/api/modificar-cliente',
        responseType: 'json',
        data: {
            '_id': pid_cliente,
            'id_reserva_activa': 'null'
        }

    }).then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    });

};