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



const obtener_parqueos = async() => {
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


const obtener_datos_admin = async() => {
    let admin;

    await axios({
            method: 'get',
            //params: { _id: pid },
            url: 'http://localhost:3000/api/listar-admin',
            responseType: 'json'
        })
        .then((response) => {
            admin = response.data;
        })
        .catch((error) => {
            console.log(error);
        });
    return admin.admin_info;
};