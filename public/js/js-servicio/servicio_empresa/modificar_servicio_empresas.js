'use strict';

const modificar_empresa = async(pid, pcorreo, pnombre, pencargado, pfoto) => {
    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/modificar_empresa',
            responseType: 'json',
            data: {
                _id: pid,
                correo: pcorreo,
                nombre: pnombre,
                nombre_encargado: pencargado,
                foto_perfil: pfoto,
            }
        })
        .then((response) => {
            console.log('Datos modificados correctamente');
        })
        .catch((error) => {
            console.log(error);
        });
};

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