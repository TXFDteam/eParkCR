'use strict';
const modificar_contrasenna_empresa = async(pcorreo, potp, pcontrasenna) => {
    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/modificar_empresa',
            responseType: 'json',
            data: {
                correo: pcorreo,
                otp: potp,
                contraseña: pcontrasenna
            }
        })
        .then((response) => {
            console.log('Contraseña modificada correctamente');
        })
        .catch((error) => {
            console.log(error);
        });
};

const modificar_contrasenna_cliente = async(pcorreo, potp, pcontrasenna) => {
    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/modificar-cliente',
            responseType: 'json',
            data: {
                correo: pcorreo,
                otp: potp,
                contraseña: pcontrasenna
            }
        })
        .then((response) => {
            console.log('Contraseña modificada correctamente');
        })
        .catch((error) => {
            console.log(error);
        });
};
const modificar_contrasenna_duenno_parqueo = async(pcorreo, potp, pcontrasenna) => {
    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/modificar-duenno-parqueo',
            responseType: 'json',
            data: {
                correo: pcorreo,
                otp: potp,
                contraseña: pcontrasenna
            }
        })
        .then((response) => {
            console.log('Contraseña modificada correctamente');
        })
        .catch((error) => {
            console.log(error);
        });
};