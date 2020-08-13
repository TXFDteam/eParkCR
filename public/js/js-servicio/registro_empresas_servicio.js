'use strict';


const obtener_empresas = async() => {
    let empresas;

    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar-empresas',
            responseType: 'json'
        })
        .then((response) => {
            empresas = response.data.lista_empresas;
        })
        .catch((error) => {
            console.log(error);
        });
    return empresas;
};