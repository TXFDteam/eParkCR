'use strict';

const btn_crearUsuario = document.querySelector('#btn-crearUsuario');
const btn_yaTenesCuenta = document.querySelector('#btn-yaTenesCuenta');


const input_nombre = document.querySelector('#CI-registro-nombre');
const input_contrasena = document.querySelector('#CI-registro-contrasena');
const input_fechaNacimiento = document.querySelector('#CI-registro-fecha');
const input_ID = document.querySelector('#CI-registro-ID');
const input_correo = document.querySelector('#CI-registro-correo');
const input_confirmarContrasena = document.querySelector('#CI-registro-confirmarcontra');


btn_yaTenesCuenta.addEventListener('click', function() {
    window.location.assign('iniciar-sesion.html')
});

const calcular_edad = (pfecha_nacimiento) => {
    let fecha_actual = new Date();
    let edad = 0;

    edad = fecha_actual.getFullYear() - pfecha_nacimiento.getFullYear();

    if (fecha_actual.getMonth() < pfecha_nacimiento.getMonth()) {
        edad -= 1;
    } else {
        if (fecha_actual.getMonth() == pfecha_nacimiento.getMonth() && fecha_actual.getDate() < pfecha_nacimiento.getDate()) {
            edad -= 1;
        }
    }
    return edad;
};

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

    var mailformat = /^\S+@\S+$/;
    if (input_correo.value.match(mailformat)) {
        input_correo.classList.remove('error');
    } else {
        error = true;
        input_correo.classList.add('error');
    }

    var contrasena = input_contrasena.value;
    if (input_confirmarContrasena.value.match(contrasena)) {
        input_confirmarContrasena.classList.remove('error');
    } else {
        error = true;
        input_confirmarContrasena.classList.add('error');
    }

    var nacimiento = new Date(input_fechaNacimiento.value);
    var edad = calcular_edad(nacimiento);

    if (edad >= 18) {
        input_fechaNacimiento.classList.remove('error');
    } else {
        error = true;
        input_fechaNacimiento.classList.add('error');
    }
    return error;
};

const obtener_datos = () => {
    let error = validar();
    if (error == true) {
        Swal.fire({
            'title': "No se ha podido registrar el usuario",
            'icon': 'warning',
            'text': 'Revise los campos resaltados'
        });

    } else {
        // Impresion de los valores del formulario
        Swal.fire({
            'title': 'El usuario se registro correctamente',
            'icon': "success",
            'text': 'Revise su información'
        }).then(function() {
            window.location = 'index.html';
        });

        let nombre = input_nombre.value;
        var tipoID = document.getElementById('CI-registro-tipoID').selectedOptions[0].text;
        let contrasena = input_contrasena.value;
        let confirmarContrasena = input_confirmarContrasena.value;
        let fechaNacimiento = input_fechaNacimiento.value;
        let ID = input_ID.value;
        let correo = input_correo.value;



        console.log('Nombre: ', nombre);
        console.log('Tipo de ID: ', tipoID);
        console.log('Contrasena: ', contrasena);
        console.log('Confirmar contrasena: ', confirmarContrasena);
        console.log('Fecha de nacimiento: ', fechaNacimiento);
        console.log('ID: ', ID);
        console.log('Correo: ', correo);




    }
};

btn_crearUsuario.addEventListener('click', obtener_datos);