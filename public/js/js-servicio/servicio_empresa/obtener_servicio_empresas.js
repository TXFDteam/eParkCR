'use strict';

const obtener_empresas = async() => {
    let empresas;
    // GET request
    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar_empresas',
            responseType: 'json'
        })
        .then((response) => {
            empresas = response.data.lista_empresas;
        })
        .catch((response) => {
            console.log(error);

        });

    return empresas;
};