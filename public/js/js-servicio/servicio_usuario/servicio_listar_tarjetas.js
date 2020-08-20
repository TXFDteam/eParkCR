'use strict'



const obtener_tarjetas = async() => {
    let tarjetas;

    await axios({
            method: 'get',
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