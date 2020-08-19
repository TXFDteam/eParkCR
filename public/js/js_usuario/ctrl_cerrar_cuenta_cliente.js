'use strict';

const btn_cerrar_cuenta = document.querySelector('#btn-cerrar-cuenta');

//Se importa el botón en una variable para poder crear el evento y posteriormente proceder con el cierre de la cuenta






let correo = localStorage.getItem('correo_cliente');
let contrasenna = localStorage.getItem('contrasenna_cliente');
let id;
const encontrar_id = async() => {
    let info_clientes = await obtener_clientes();

    for (let c = 0; c < info_clientes.length; c++) {
        if (correo == info_clientes[c].correo && contrasenna == info_clientes[c].contraseña) {
            id = info_clientes[c]._id;



            break;
        }
    }



};

console.log(id);










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
                'Cerrar cuenta',
                'La cuenta ha sido cerrada exitosamente.',
                'success',
                eliminar_cliente(id)
            )
        }
    })

};

btn_cerrar_cuenta.addEventListener('click', cerrar_cuenta);