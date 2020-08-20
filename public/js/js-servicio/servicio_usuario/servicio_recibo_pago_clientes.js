'use strict'

const obtener_reserva_id_url = (valor) => {

    const location = new URL(window.location.href);
    const parametros = new URLSearchParams(location.search);
    let id_reserva;
    if (parametros.get(valor)) {

        id_reserva = parametros.get(valor.toLowerCase());
    } else {
        id_reserva = '';
    }
    return id_reserva;

};


const obtener_reservas = async(pid) => {
    let reservas;

    await axios({
            method: 'get',
            params: { _id: pid },
            url: 'http://localhost:3000/api/listar-reserva-id',
            responseType: 'json'
        })
        .then((response) => {
            reservas = response.data.reserva_bd;
        })
        .catch((error) => {
            console.log(error);
        });
    return reservas;
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