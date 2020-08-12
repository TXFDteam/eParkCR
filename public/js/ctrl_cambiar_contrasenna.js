'use strict';
let otp = document.querySelector('#otp');
let input_contrasenna = document.querySelector('#contrasenna-nueva');
let input_verificar_contrasenna = document.querySelector('#verificar-contrasenna-nueva');
let btn_cambiar_contrasenna = document.querySelector('#btn-cambiar-contrasenna');

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



const verificar_contrasennas = () => {

    console.log(input_contrasenna.value);
    let error;
    if (input_verificar_contrasenna.value.match(input_contrasenna.value)) {
        input_verificar_contrasenna.classList.remove('error');
    } else {
        error = true;
        input_verificar_contrasenna.classList.add('error');
    }
    return error;
};

const datos_peticion = async() => {

    let info_clientes = await obtener_clientes();
    let info_duennos_parqueo = await obtener_duennos_parqueo();
    let info_empresas = await obtener_empresas();

    let error = validar_espacios_vacios();
    let errorContrasennas = verificar_contrasennas();

    if (error) {


    } else if (errorContrasennas) {
        Swal.fire({
            icon: 'warning',
            'text': 'Las contraseñas deben coincidir'
        });
    } else {
        //CLIENTES
        for (let c = 0; c < info_clientes.length; c++) {
            if (info_clientes[c].otp) {

            }
        }
        //EMPRESA
        for (let e = 0; e < info_empresas.length; e++) {
            if (info_empresas[e].otp) {

            }
        }

        //DUEÑO DE PARQUEO
        for (let d = 0; d < info_duennos_parqueo.length; d++) {
            if (info_duennos_parqueo[d].otp) {

            }
        }

        Swal.fire({
            icon: 'success',
            'text': 'Contraseña cambiada exitosamente',

        }).then((willDelete) => {
            if (willDelete) {
                window.location.assign("index.html");
            }
        })
    }
};


btn_cambiar_contrasenna.addEventListener('click', function() {
    datos_peticion();

});