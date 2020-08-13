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





// const obtener_empresa_id = async(p_id) => {
//     let empresa;

//     await axios({
//             method: 'get',
//             params: { _id: p_id },
//             url: 'http://localhost:3000/api/buscar_empresa_id',
//             responseType: 'json'
//         })
//         .then((response) => {
//             empresa = response.data.empresas_bd;
//         })
//         .catch((error) => {
//             console.log(error);
//         });

//     return empresa;

// };