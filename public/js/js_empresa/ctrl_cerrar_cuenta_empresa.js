'use strict';

const btn_cerrar_cuenta_empresa = document.querySelector('#btn-cerrar-cuenta-empresa');

//Se importa el botón en una variable para poder crear el evento y posteriormente proceder con el cierre de la cuenta



const cerrar_cuenta = async() => {





    let correo = localStorage.getItem('correo_empresa');
    let contrasenna = localStorage.getItem('contraseña_empresa');
    let id;

    let info_empresas = await obtener_empresas();

    for (let e = 0; e < info_empresas.length; e++) {
        if (correo == info_empresas[e].correo && contrasenna == info_empresas[e].contraseña) {
            id = info_empresas[e]._id;



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
            eliminar_empresa(id);
            window.location.href = '../..index.html';
        }
    })

};

btn_cerrar_cuenta_empresa.addEventListener('click', cerrar_cuenta);