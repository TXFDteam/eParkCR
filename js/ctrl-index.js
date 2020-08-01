'use strict';
//let btn_iniciar_sesion = document.querySelector('#');

let btn_registrar_usuarios = document.querySelector('#btn-registrar-usuarios');
let btn_registrar_empresas = document.querySelector('#btn-registrar-empresas');

let btn_registrar_usuarios_4banner = document.querySelector('#btn-cliente');
let btn_registrar_empresas_4banner = document.querySelector('#btn-empresa');

let btn_peticion_nombre = document.querySelector('#input-nombre-peticion');
let btn_peticion_correo = document.querySelector('#input-correo-peticion');
let btn_peticion_telefono = document.querySelector('#input-tel-peticion');
console.log(btn_peticion_telefono);
let btn_peticion_duenno_parqueo = document.querySelector('#btn-peticion-datos-duenno-parqueo');

btn_registrar_usuarios.addEventListener('click', function() {
    window.location.assign("CI_registro_usuarios.html");
});
btn_registrar_empresas.addEventListener('click', function() {
    window.location.assign("emp-registro.html");
});

btn_registrar_usuarios_4banner.addEventListener('click', function() {
    window.location.assign("CI_registro_usuarios.html");
});
btn_registrar_empresas_4banner.addEventListener('click', function() {
    window.location.assign("emp-registro.html");
});

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

        Swal.fire({
            icon: 'success',
            'text': 'Datos almacenados correctamente'
        });
    }
};


btn_peticion_duenno_parqueo.addEventListener('click', function() {
    datos_peticion();

});