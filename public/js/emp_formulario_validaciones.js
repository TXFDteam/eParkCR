'use strict';

const btn_yaTenesCuenta = document.querySelector('#btn_emp_registro_yaTenesCuenta');
const btn_emp_registro_crearPerfil = document.querySelector('#btn_emp_registro_crearPerfil');

const input_nombreEmpresa = document.querySelector('#emp_registro_nombre');
const input_nombreEncargado = document.querySelector('#emp_registro_nombreEncargado');
const input_contrasena = document.querySelector('#emp_registro_contrasena');
const input_cedulaJuridica = document.querySelector('#emp_registro_juridica');
const label_imagenPerfil = document.querySelector('#labelPerfil');
const input_correo_empresa = document.querySelector('#emp_correo');
const input_confirmarContrasena = document.querySelector('#emp_registro_confirmaContrasena');
const input_provincia = document.getElementById("provincias");
const input_canton = document.getElementById("cantones");
const input_distrito = document.getElementById("distritos");
const input_coordenadas = document.getElementById("coordenadas");

btn_yaTenesCuenta.addEventListener('click', function() {
    window.location.assign('iniciar-sesion.html')
});


const validar = () => {
    let error;
    let campos_requeridos = document.querySelectorAll('[required]');

    let tamanno = campos_requeridos.length;

    for (let i = 0; i < tamanno; i++) {
        // Verifica si el campo de texto está en blanco
        if (campos_requeridos[i].value == '') {
            error = true;
            campos_requeridos[i].classList.add('error');
        } else {
            campos_requeridos[i].classList.remove('error');
        }
    }

    let emailval = /^[^@]*@[^@]*$/;
    if (input_correo_empresa.value.match(emailval)) {
        input_correo_empresa.classList.remove('error');
    } else {
        error = true;
        input_correo_empresa.classList.add('error');
    }

    var file = document.getElementById("imagenPerfil");
    if (file.files.length == 0) {
        label_imagenPerfil.classList.add('error');
    } else {
        label_imagenPerfil.classList.remove('error');

    }


    if (input_contrasena.value.match(input_confirmarContrasena.value)) {
        input_confirmarContrasena.classList.remove('error');
    } else {
        error = true;
        input_confirmarContrasena.classList.add('error');
    }

    if (document.getElementById('provincias').value == 'Seleccione una opción') {
        error = true;
        input_provincia.classList.add('error');
    } else {
        input_provincia.classList.remove('error');
    }

    if (document.getElementById('cantones').value == 'Seleccione una opción') {
        error = true;
        input_canton.classList.add('error');
    } else {
        input_canton.classList.remove('error');
    }

    if (document.getElementById('distritos').value == 'Seleccione una opción') {
        error = true;
        input_distrito.classList.add('error');
    } else {
        input_distrito.classList.remove('error');
    }

    return error;
};

const obtener_datos = () => {
    let error = validar();
    if (error == true) {
        Swal.fire({
            'title': "No te has podido registrar",
            'icon': 'warning',
            'text': 'Revisá los campos resaltados'
        });

    } else {
        // Impresion de los valores del formulario
        Swal.fire({
            'title': 'Te registraste correctamente',
            'icon': "success",
            'text': 'Revisá tu información'
        }).then(function() {
            window.location = 'index.html';
        });

        let correo = input_correo_empresa.value;
        let nombre = input_nombreEmpresa.value;
        let n_identificacion = input_cedulaJuridica.value;
        let contraseña = input_contrasena.value;
        let nombre_encargado = input_nombreEncargado.value;
        let ubicacion = input_coordenadas.value;
        let foto_perfil = document.getElementById('imagenPerfil').value;

        registrar_empresa(correo, nombre, n_identificacion, contraseña, nombre_encargado, ubicacion, foto_perfil);

    }
};
let contador_solicitudes_empresa = 0;
btn_emp_registro_crearPerfil.addEventListener('click', () => {
    contador_solicitudes_empresa += 1;
    obtener_datos();
});