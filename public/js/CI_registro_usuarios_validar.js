'use strict';

const btn_crearUsuario = document.querySelector('#btn-crearUsuario');
const btn_yaTenesCuenta = document.querySelector('#btn-yaTenesCuenta');


const input_nombre = document.querySelector('#CI-registro-nombre');
const input_contrasena = document.querySelector('#CI-registro-contrasena');
const input_fechaNacimiento = document.querySelector('#CI-registro-fecha');
const input_ID = document.querySelector('#CI-registro-tipoID');
const input_n_id = document.querySelector('#CI-registro-ID');
const input_correo = document.querySelector('#CI-registro-correo');
const input_confirmarContrasena = document.querySelector('#CI-registro-confirmarcontra');
const input_foto = document.querySelector("#cliente_foto");


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


let contador_clientes = 1;

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
        //ESTOS IF VERIFICAN QUE OPCIÓN SELECCIONÓ EL USUARIO EN EL DROPDOWN DE TIPO DE IDENTIFICACIÓN
        let tipoID = document.getElementById('CI-registro-tipoID').value;
        console.log('Tipo de ID: ', tipoID);

        let tipo_id;
        if (tipoID == 1) {
            tipo_id = 'Cédula de identidad';
        } else if (tipoID == 2) {
            tipo_id = 'Cédula de residencia';
        } else {
            tipo_id = 'Pasaporte';
        }
        console.log('Tipo de ID: ', tipo_id);

        let nombre = input_nombre.value;
        let contrasena = input_contrasena.value;
        let fechaNacimiento = input_fechaNacimiento.value;
        let n_id = input_n_id.value;
        let correo = input_correo.value;
        let foto_perfil = input_foto.src;



        registrar_usuario(correo, nombre, tipo_id, n_id, fechaNacimiento, contrasena, foto_perfil);

        // Impresion de los valores del formulario
        Swal.fire({
            'title': 'Te registraste correctamente',
            'icon': "success",
            'text': 'Revisá tu información'
        }).then(function() {

            window.location = 'index.html';
        });




    }
};

btn_crearUsuario.addEventListener('click', obtener_datos);