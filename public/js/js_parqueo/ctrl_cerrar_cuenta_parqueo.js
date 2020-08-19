'use strict';

const btn_cerrar_cuenta_parqueo = document.querySelector('#btn-cerrar-cuenta-parqueo');

//Se importa el botón en una variable para poder crear el evento y posteriormente proceder con el cierre de la cuenta



const cerrar_cuenta = async() => {





    let correo = localStorage.getItem('correo_dueño');
    let contrasenna = localStorage.getItem('contraseña_dueño');
    let id;

    let info_duennos_parqueos = await obtener_duennos_parqueo();

    for (let d = 0; d < info_duennos_parqueos.length; d++) {
        if (correo == info_duennos_parqueos[d].correo && contrasenna == info_duennos_parqueos[d].contraseña) {
            id = info_duennos_parqueos[d]._id;



            break;
        }
    }







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

            eliminar_duenno_parqueo(id);
            window.location.href = '../..index.html';

        }
    })

    console.log(id);

};

btn_cerrar_cuenta_parqueo.addEventListener('click', cerrar_cuenta);