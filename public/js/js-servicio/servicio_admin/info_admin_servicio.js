'use strict';
const obtener_admin = async() => {
    let info_de_admin;

    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar-admin',
            responseType: 'json'
        })
        .then((response) => {
            info_de_admin = response.data.admin_info;
        })
        .catch((error) => {
            console.log(error);
        });
    return info_de_admin;
};

const modificar_admin = async(pid, pnombre, pcomision, ptelefono) => {
    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/modificar-admin',
            responseType: 'json',
            data: {
                _id: pid,
                nombre: pnombre,
                comision: pcomision,
                telefono: ptelefono
            }
        })
        .then((response) => {
            console.log('success');
        })
        .catch((error) => {
            alert(error);
        });
};