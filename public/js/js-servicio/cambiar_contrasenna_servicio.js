'use strict';
//FUNCIONES QUE RESIVE PARA ENVIAR EL CORREO DE CAMBIO DE CONTRASEÑA
const otp_empresa = async(pid, pcorreo, potp) => {
    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/otp_empresa',
            responseType: 'json',
            data: {
                _id: pid,
                correo: pcorreo,
                otp: potp
            }
        })
        .then((response) => {
            console.log('Contraseña modificada correctamente');
        })
        .catch((error) => {
            console.log(error);
        });
};

const otp_cliente = async(pid, pcorreo, potp) => {
    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/otp-cliente',
            responseType: 'json',
            data: {
                _id: pid,
                correo: pcorreo,
                otp: potp
            }
        })
        .then((response) => {
            console.log('Contraseña modificada correctamente');
        })
        .catch((error) => {
            console.log(error);
        });
};
const otp_duenno_parqueo = async(pid, pcorreo, potp) => {
    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/otp-duenno-parqueo',
            responseType: 'json',
            data: {
                _id: pid,
                correo: pcorreo,
                otp: potp
            }
        })
        .then((response) => {
            console.log('Contraseña modificada correctamente');
        })
        .catch((error) => {
            console.log(error);
        });
};
//CAMBIOS DE CONTRASEÑA
const modificar_contrasenna_empresa = async(pid, pcontrasenna) => {
    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/modificar_contrasenna_empresa',
            responseType: 'json',
            data: {
                _id: pid,
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

const modificar_contrasenna_cliente = async(pid, pcontrasenna) => {
    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/modificar-contrasenna-cliente',
            responseType: 'json',
            data: {
                _id: pid,
                contraseña: pcontrasenna
            }
        }).then((response) => {
            console.log('Contraseña modificada correctamente');
        })
        .catch((error) => {
            console.log(error);
        })

};
const modificar_contrasenna_duenno_parqueo = async(pid, pcontrasenna) => {
    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/modificar-contrasenna-duenno-parqueo',
            responseType: 'json',
            data: {
                _id: pid,
                contraseña: pcontrasenna
            }
        }).then((response) => {
            console.log('Contraseña modificada correctamente');
        })
        .catch((error) => {
            console.log(error);
        })

};