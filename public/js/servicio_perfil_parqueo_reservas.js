'use strict';

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