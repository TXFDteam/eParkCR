'use strict';

let btn_peticion_nombre = document.querySelector('#input-nombre-peticion');
let btn_peticion_correo = document.querySelector('#input-correo-peticion');
let btn_peticion_telefono = document.querySelector('#input-tel-peticion');
console.log(btn_peticion_telefono);
let btn_peticion_duenno_parqueo = document.querySelector('#btn-peticion-datos-duenno-parqueo');

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

    let nombre = btn_peticion_nombre.value;
    let correo = btn_peticion_correo.value;
    let telefono = btn_peticion_telefono.value;

    let error = validar_espacios_vacios();

    if (error) {
        /*Swal.fire({
            icon: 'warning',
            'text': 'Debe rellenar todos los campos'
        });*/
    } else if (!(/[a-zA-Z]+\s+/.test(nombre))) {
        btn_peticion_nombre.classList.add('error');
        Swal.fire({
            icon: 'warning',
            'text': 'Debe verificar el nombre con los apellidos'
        });

    } else if (!(/@+/.test(correo))) {
        btn_peticion_correo.classList.add('error');
        Swal.fire({
            icon: 'warning',
            'text': 'Debe verificar que el correo tenga el @'
        });

    } else if (!(/^\d{4}-\d{4}$/.test(telefono))) {
        btn_peticion_telefono.classList.add('error');
        Swal.fire({
            icon: 'warning',
            'text': 'Debe verificar el teléfono tenga el formato adecuado XXXX-XXXX'
        });

    } else {
        btn_peticion_nombre.classList.remove('error');
        btn_peticion_correo.classList.remove('error');
        btn_peticion_telefono.classList.remove('error');

        console.log(nombre);
        console.log(correo);
        console.log(telefono);

        Swal.fire({
            icon: 'success',
            'text': 'Datos almacenados correctamente, pronto te estaremos contactando',
            button: true,
        }).then((willDelete) => {
            if (willDelete) {
                window.location.assign("duenno_parqueo_formulario.html");
            }
        })
    }
};


btn_peticion_duenno_parqueo.addEventListener('click', function() {
    datos_peticion();

});