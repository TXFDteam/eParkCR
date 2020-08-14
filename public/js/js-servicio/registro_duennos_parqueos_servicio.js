'use strict';
const registrar_duenno_parqueo = async(pcorreo, pnombreParqueo, pcedulaJuridica, pcontrasenna, ptelefono, pcuenta, pfotoPerfil) => {

    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registro-duenno-parqueo',
        responseType: 'json',
        data: {
            'correo': pcorreo,
            'nombre': pnombreParqueo,
            'n_identificacion': pcedulaJuridica,
            'contraseña': pcontrasenna,
            'telefono': ptelefono,
            'cuenta_bancaria': pcuenta,
            'foto_perfil': pfotoPerfil

        }

    }).then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    });
};

const obtener_duennos_parqueo = async() => {
    let duennos_parqueo;

    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar-duennos-parqueo',
            responseType: 'json'
        })
        .then((response) => {
            duennos_parqueo = response.data.lista_duennos_parqueos;
        })
        .catch((error) => {
            console.log(error);
        });
    return duennos_parqueo;
};

const modificar_duenno_parqueo = async(pid, pnombre, pcuenta) => {
    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/modificar-duenno-parqueo',
            responseType: 'json',
            data: {
                _id: pid,
                nombre: pnombre,
                cuenta_bancaria: pcuenta
            }
        })
        .then((response) => {
            console.log('Datos modificados correctamente');
        })
        .catch((error) => {
            console.log(error);
        });
};