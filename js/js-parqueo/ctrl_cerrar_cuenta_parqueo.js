'use strict';

const btn_cerrar_cuenta_parqueo = document.querySelector('#btn-cerrar-cuenta-parqueo');

//Se importa el botón en una variable para poder crear el evento y posteriormente proceder con el cierre de la cuenta



const cerrar_cuenta = () => {

    // función para cerrar cuenta

    Swal.fire({
        title: 'Cerrar cuenta',
        text: "¿Está seguro que desea cerrar la cuenta?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Sí'
    }).then((result) => {
        if (result.value) {
            Swal.fire(
                'Cerar cuenta',
                'La cuenta ha sido cerrada exitosamente.',
                'success'
            )
        }
    })

};

btn_cerrar_cuenta_parqueo.addEventListener('click', cerrar_cuenta);