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

    var mailformat = /^\S+@\S+$/;
    if (input_correo.value.match(mailformat)) {
        input_correo.classList.remove('error');
    } else {
        error = true;
        input_correo.classList.add('error');
    }

    var mailformat = /^\S+@\S+$/;
    if (input_correo.value.match(mailformat)) {
        input_correo.classList.remove('error');
    } else {
        error = true;
        input_correo.classList.add('error');
    }




    // //Get the date from the TextBox.
    // var dateString = document.getElementById("txtDate").value;
    // var regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;

    // //Check whether valid dd/MM/yyyy Date Format.
    // if (regex.test(dateString)) {
    //     var parts = dateString.split("/");
    //     var dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
    //     var dtCurrent = new Date();
    //     lblError.innerHTML = "Eligibility 18 years ONLY."
    //     if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18) {
    //         return false;
    //     }

    //     if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 18) {

    //         //CD: 11/06/2018 and DB: 15/07/2000. Will turned 18 on 15/07/2018.
    //         if (dtCurrent.getMonth() < dtDOB.getMonth()) {
    //             return false;
    //         }
    //         if (dtCurrent.getMonth() == dtDOB.getMonth()) {
    //             //CD: 11/06/2018 and DB: 15/06/2000. Will turned 18 on 15/06/2018.
    //             if (dtCurrent.getDate() < dtDOB.getDate()) {
    //                 return false;
    //             }
    //         }
    //     }
    //     lblError.innerHTML = "";
    //     return true;
    // } else {
    //     lblError.innerHTML = "Enter date in dd/MM/yyyy format ONLY."
    //     return false;
    // }






    return error;
};



// const obtener_datos = () => {
//     let error = validar();
//     if (error == true) {
//         Swal.fire({
//             'title': "No se ha podido registrar el usuario",
//             'icon': 'warning',
//             'text': 'Revise los campos resaltados'
//         });

//     } else if (!(/[a-zA-Z]+\s+/.test(input_nombre))) {
//         input_nombre.classList.add('error');
//         Swal.fire({
//             icon: 'warning',
//             'text': 'Debe verificar el nombre con los apellidos'
//         });
//     } else {
//         // Impresion de los valores del formulario
//         Swal.fire({
//             'title': 'El usuario se registro correctamente',
//             'icon': "success",
//             'text': 'Revise su información'
//         });
//         input_nombre.classList.remove('error');

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
        var tipoID = document.getElementById('CI-registro-tipoID').selectedOptions[0].text;
        let contrasena = input_contrasena.value;
        let fechaNacimiento = input_fechaNacimiento.value;
        let ID = input_ID.value;
        let correo = input_correo.value;


        let confirmarContrasena = input_confirmarContrasena.value;


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