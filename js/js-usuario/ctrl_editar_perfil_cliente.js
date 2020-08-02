'use strict';

const btn_volver_perfil_cliente = document.querySelector('#btn-volver-perfil-cliente');

const volver_perfil_cliente = () => {
    window.location.assign('../../html/htmls-usuarios/perfil_cliente.html');
};

btn_volver_perfil_cliente.addEventListener('click', volver_perfil_cliente);



const nuevo_nombre_cliente = document.querySelector('#nuevo-nombre-cliente');
const btn_guardar_cambios_cliente = document.querySelector('#btn-guardar-cambios-cliente');

const guardar_cambios_cliente = () => {




    Swal.fire(
        'Perfil actualizado',
        'Por favor espera unos minutos para que los cambios se reflejen en el sistema',
        'success'
    )
};



btn_guardar_cambios_cliente.addEventListener('click', guardar_cambios_cliente);