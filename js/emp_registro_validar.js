'use strict';

const btn_cuentaComercial = document.querySelector('#btn_cuentaComercial');

const input_correo = document.querySelector('#cuentaComercial_correo');





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
            'text': 'Revise su correo electronico'
        }).then(function() {
            window.location = '../../emp-formulario.html';
        });

        let correo = input_correo.value;




        console.log('Correo: ', correo);

    }
};

btn_cuentaComercial.addEventListener('click', obtener_datos);