'use strict';

const input_nombre = document.querySelector('#nuevo-nombre-cliente');

const btn_guardar_cambios_cliente = document.querySelector('#btn-guardar-cambios-cliente');

const btn_volver_perfil_cliente = document.querySelector('#btn-volver-perfil-cliente');

let correoC = localStorage.getItem('correo');
console.log(correoC);
let contrasennaC = localStorage.getItem('contrasenna');
console.log(contrasennaC);

let id;

let mostrar_info = async() => {

    let info_clientes = await obtener_clientes();

    //c va a ser el  contador para encontrar los clientes
    for (let c = 0; c < info_clientes.length; c++) {
        if (correoC == info_clientes[c].correo && contrasennaC == info_clientes[c].contraseña) {
            id = info_clientes[c]._id;

            input_nombre.value = info_clientes[c].nombre;


            break;
        }
    }
};


mostrar_info();

const guardar_cambios_cliente = () => {

    modificar_cliente(id, input_nombre.value);
    console.log(id, input_nombre.value);


    Swal.fire(
            'Perfil actualizado',
            'Si ha dejado algún espacio en blanco no requerido, la información se mantendrá como estaba previamente',
            'success'
        )
        .then((willDelete) => {
            if (willDelete) {
                window.location.assign('../../html/htmls-usuarios/perfil_cliente.html');
            }
        })
};




btn_guardar_cambios_cliente.addEventListener('click', guardar_cambios_cliente);




btn_volver_perfil_cliente.addEventListener('click', () => {
    window.location.assign('../../html/htmls-usuarios/perfil_cliente.html');
});