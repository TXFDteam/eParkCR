'use strict';

const btn_volver_perfil_cliente = document.querySelector('#btn-volver-perfil-cliente');


btn_volver_perfil_cliente.addEventListener('click', () => {
    window.location.assign('../../html/htmls-usuarios/perfil_cliente.html');
});



//Validacion datos cliente




const nuevo_nombre_cliente = document.querySelector('#nuevo-nombre-cliente');
const btn_guardar_cambios_cliente = document.querySelector('#btn-guardar-cambios-cliente');

const guardar_cambios_cliente = () => {




    Swal.fire(
        'Perfil actualizado',
        'Si ha dejado algún espacio en blanco no requerido, la información se mantendrá como estaba previamente',
        'success'
    )
};



btn_guardar_cambios_cliente.addEventListener('click', guardar_cambios_cliente);