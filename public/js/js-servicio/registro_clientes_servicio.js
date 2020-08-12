'use strict';


const registrar_usuario = async(pid, pcorreo, pnombre, ptipo_identificacion, pn_identificacion, pfecha, pcontraseña) => {
    await axios({
        method: 'post',
        //ESTE URL ESTÁ BIEN, DEBE COINCIDIR CON LOS DE obtener_todos_usuarios_servicio.js
        url: 'http://localhost:3000/api/registrar-cliente',
        responseType: 'json',
        data: {
            'correo': pcorreo,
            'nombre': pnombre,
            'tipo_identificacion': ptipo_identificacion,
            'n_identificacion': pn_identificacion,
            'fecha_nacimiento': pfecha,
            'contraseña': pcontraseña
        }

    }).then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    });
};

const obtener_clientes = async() => {
    let clientes;

    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar-clientes',
            responseType: 'json'
        })
        .then((response) => {
            clientes = response.data.lista_clientes;
        })
        .catch((error) => {
            console.log(error);
        });
    return clientes;
};