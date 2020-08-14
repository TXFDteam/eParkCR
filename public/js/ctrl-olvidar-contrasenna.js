'use strict';

let btn_correo = document.querySelector('#correo-olvidar-contrasenna');
let btn_enviar_correo = document.querySelector('#btn-enviar-correo');

const validar_espacios_vacios = () => {
    let error;
    let campos_requeridos = document.querySelectorAll('[required]');

    campos_requeridos.forEach(campo => {
        if (campo.value == '') {
            campo.classList.add('error');
            error = true;
        } else {
            campo.classList.remove('error');
        }
    });
    return error;
};

const datos_peticion = async() => {

    let correo = btn_correo.value;

    let info_clientes = await obtener_clientes();
    console.log(info_clientes);
    let info_duennos_parqueo = await obtener_duennos_parqueo();
    console.log(info_duennos_parqueo);
    let info_empresas = await obtener_empresas();
    console.log(info_empresas);
    let error = validar_espacios_vacios();

    if (error) {
        /*Swal.fire({
            icon: 'warning',
            'text': 'Debe rellenar todos los campos'
        });*/
    } else if (!(/@+/.test(correo))) {
        btn_correo.classList.add('error');
        Swal.fire({
            icon: 'warning',
            'text': 'Debe verificar que el correo tenga el @'
        });

    } else {
        btn_correo.classList.remove('error');
        console.log(correo);

        //CLIENTES
        for (let c = 0; c < info_clientes.length; c++) {
            if (correo == info_clientes[c].correo) {
                let otp_n_cliente = makeid(6);
                otp_cliente(info_clientes[c]._id, info_clientes[c].correo, otp_n_cliente);
                break;
            }
        }
        //EMPRESA
        for (let e = 0; e < info_empresas.length; e++) {
            if (correo == info_empresas[e].correo) {
                let otp_n_empresa = makeid(6);
                otp_empresa(info_empresas[e]._id, info_empresas[e].correo, otp_n_empresa);
                break;
            }
        }

        //DUEÑO DE PARQUEO
        for (let d = 0; d < info_duennos_parqueo.length; d++) {
            if (correo == info_duennos_parqueo[d].correo) {
                let otp_duenno = makeid(6);
                otp_duenno_parqueo(info_duennos_parqueo[d]._id, info_duennos_parqueo[d].correo, otp_duenno);
                break;
            }
        }

        Swal.fire({
            icon: 'success',
            'text': 'Podes revisar el correo electrónico y seguir la información',
            button: true,
        }).then((willDelete) => {
            if (willDelete) {
                window.location.assign("formulario_cambiar_contrasenna.html");
            }
        })
    }
};


btn_enviar_correo.addEventListener('click', function() {
    datos_peticion();

});