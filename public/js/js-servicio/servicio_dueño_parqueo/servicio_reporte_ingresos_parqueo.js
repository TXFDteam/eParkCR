'use strict'

const obtener_reservas = async(pid) => {
    let reservas;

    await axios({
            method: 'get',
            //params: { _id: pid },
            url: 'http://localhost:3000/api/listar-reservas',
            responseType: 'json'
        })
        .then((response) => {
            reservas = response.data;
        })
        .catch((error) => {
            console.log(error);
        });
    return reservas.lista_reservas;
};



const obtener_info_parqueos = async() => {
    let parqueos;

    await axios({
            method: 'get',
            //params: { _id: pid },
            url: 'http://localhost:3000/api/listar-parqueos',
            responseType: 'json'
        })
        .then((response) => {
            parqueos = response.data;
        })
        .catch((error) => {
            console.log(error);
        });
    return parqueos.lista_parqueos;
};


const obtener_info_usuarios_parqueos = async() => {
    let parqueos;

    await axios({
            method: 'get',
            //params: { _id: pid },
            url: 'http://localhost:3000/api/listar-usuarios-parqueos',
            responseType: 'json'
        })
        .then((response) => {
            parqueos = response.data;
        })
        .catch((error) => {
            console.log(error);
        });
    return parqueos.info_duennos_parqueo;
};