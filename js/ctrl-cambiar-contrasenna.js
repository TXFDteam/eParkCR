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

const datos_peticion = () => {

    let correo = btn_correo.value;

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

        Swal.fire({
            icon: 'success',
            'text': 'Podes revisar el correo electrónico y seguir los pasos para cambiar la contraseña',
            button: true,
        }).then((willDelete) => {
            if (willDelete) {
                window.location.assign("index.html");
            }
        })
    }
};


btn_enviar_correo.addEventListener('click', function() {
    datos_peticion();

});