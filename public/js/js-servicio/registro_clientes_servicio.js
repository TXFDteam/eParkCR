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

const modificar_estado_cliente = async(pid, pestado) => {
    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/modificar-cliente',
            responseType: 'json',
            data: {
                _id: pid,
                estado_general: pestado
            }
        })
        .then((response) => {
            console.log('Datos modificados correctamente');
        })
        .catch((error) => {
            console.log(error);
        });
};

const modificar_reserva_activa_cliente = async(pid, p_id_reserva_activa) => {
    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/modificar-reserva-cliente',
            responseType: 'json',
            data: {
                _id: pid,
                id_reserva_activa: p_id_reserva_activa
            }
        })
        .then((response) => {
            console.log('Datos modificados correctamente(reserva activa)');
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
};

const obtener_cliente_id = async(p_id) => {
    let cliente;

    await axios({
            method: 'get',
            params: { _id: p_id },
            url: 'http://localhost:3000/api/buscar-cliente-id',
            response_type: 'json'
        })
        .then((response) => {
            cliente = response.data.cliente_bd;
        })
        .catch((err) => {
            console.log('error ' + err);
        });

    return cliente;
};


const eliminar_cliente = async(pid) => {
    await axios({
            method: 'delete',
            url: 'http://localhost:3000/api/eliminar-cliente',
            responseType: 'json',
            data: { _id: pid }

        })
        .then((response) => {
            console.log('El cliente ha sido eliminado');
        })
        .catch((error) => {
            console.log(error);
        });
};

const modificar_estado_reserva_cancelada = async(p_id, pestado) => {
    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/modificar-reserva',
            responseType: 'json',
            data: {
                _id: p_id,
                estado_reserva: pestado
            }
        })
        .then((response) => {
            console.log('Estado actualizado con éxito');
        })
        .catch((error) => {
            console.log('Error: ' + error);
        });
};