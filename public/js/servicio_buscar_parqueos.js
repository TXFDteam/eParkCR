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