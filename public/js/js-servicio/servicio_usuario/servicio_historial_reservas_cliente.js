'use strict'

const obtener_reservas = async() => {
    let reservas;

    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar-reservas',
            responseType: 'json'
        })
        .then((response) => {
            reservas = response.data;
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