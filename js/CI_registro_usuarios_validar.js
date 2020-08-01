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
    if (input_correo.value.match(emailval)) {
        input_correo.classList.remove('error');
    } else {
        error = true;
        input_correo.classList.add('error');
    }


    if (input_contrasena.value.match(input_confirmarContrasena.value)) {
        input_correo.classList.remove('error');
    } else {
        error = true;
        input_confirmarContrasena.classList.add('error');
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
        });


        let nombre = input_nombre.value;
        let contrasena = input_contrasena.value;
        let fechaNacimiento = input_fechaNacimiento.value;
        let ID = input_ID.value;
        let correo = input_correo.value;
        let confirmarContrasena = input_confirmarContrasena.value;
        // var tipoID = input_tipoID.options[input_tipoID.selectedIndex].value;

        var tipoID = document.getElementById('CI-registro-tipoID').selectedOptions[0].text;


        console.log('Nombre: ', nombre);
        console.log('Tipo de ID: ', tipoID);
        console.log('Contrasena: ', contrasena);
        console.log('Fecha de nacimiento: ', fechaNacimiento);
        console.log('ID: ', ID);
        console.log('Correo: ', correo);
        console.log('Confirmar contrasena: ', confirmarContrasena);



    }
};

btn_crearUsuario.addEventListener('click', obtener_datos);