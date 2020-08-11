const obtener_empresas = async() => {
    let empresas;
    // GET request
    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar_empresas',
            responseType: 'json'
        })
        .then((response) => {
            empresas = response.data.empresas_bd;
        })
        .catch((response) => {
            console.log(error);

        });

    return empresas;
};

const modificar_empresa = async(p_id, pid, pcorreo, pnombre, pidentificacion, pnacimiento, pcontrasena, pencargado, pubicacion, pfoto, pestado) => {
    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/modificar_empresa',
            responseType: 'json',
            data: {
                _id: p_id,
                id: pid,
                correo: pcorreo,
                nombre: pnombre,
                n_identificacion: pidentificacion,
                fecha_nacimiento: pnacimiento,
                contraseña: pcontrasena,
                nombre_encargado: pencargado,
                ubicacion: pubicacion,
                foto_perfil: pfoto,
                estado_general: pestado
            }
        })
        .then((response) => {
            window.location.href = 'perfil_empresa.html';
        })
        .catch((error) => {
            console.log(error);
        });
};

const obtener_empresa_id = async(p_id) => {
    let empresa;

    await axios({
            method: 'get',
            params: { _id: p_id },
            url: 'http://localhost:3000/api/buscar_empresa_id',
            responseType: 'json'
        })
        .then((response) => {
            empresa = response.data.empresas_bd;
        })
        .catch((error) => {
            console.log(error);
        });

    return empresa;

};