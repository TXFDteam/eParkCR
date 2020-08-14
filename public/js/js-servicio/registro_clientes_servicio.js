'use strict';


const registrar_usuario = async(pcorreo, pnombre, ptipo_identificacion, pn_identificacion, pfecha, pcontraseña, pfoto) => {
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
            'contraseña': pcontraseña,
            'foto_perfil': pfoto
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

const modificar_cliente = async(pid, pnombre) => {
    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/modificar-cliente',
            responseType: 'json',
            data: {
                _id: pid,
                nombre: pnombre
            }
        })
        .then((response) => {
            console.log('Datos modificados correctamente');
        })
        .catch((error) => {
            console.log(error);
        });
};