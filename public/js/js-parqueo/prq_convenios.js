'use strict';

const btn_registrarConvenio = document.querySelector('#btn-registrarConvenio');
const input_porcentajeDescuento = document.querySelector('#porcentajeDescuento');
const input_fechaVencimiento = document.querySelector('#fechaVencimientoConvenio');





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

    var now = new Date();
    var varDate = new Date(document.querySelector('#fechaVencimientoConvenio').value);

    if (varDate < now) {
        error = true;
        input_fechaVencimiento.classList.add('error');
    } else {
        input_fechaVencimiento.classList.remove('error');
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
        });


        const input_porcentajeDescuento = document.querySelector('#porcentajeDescuento');
        const input_fechaVencimiento = document.querySelector('#fechaVencimientoConvenio');



        let porcentajeDescuento = input_porcentajeDescuento.value;
        let fechaVencimiento = input_fechaVencimiento.value;




        console.log('Porcentaje de descuento: ', porcentajeDescuento + '%');
        console.log('Fecha de vencimiento: ', fechaVencimiento);

    }
};

btn_registrarConvenio.addEventListener('click', obtener_datos);