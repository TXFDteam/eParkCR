'use strict';

const btn_editar_perfil_cliente = document.querySelector('#btn-editar-perfil-cliente');

const redireccionar_perfil_cliente = () => {
    window.location.assign('../../html/htmls-usuarios/editar_perfil_cliente.html');
};

btn_editar_perfil_cliente.addEventListener('click', redireccionar_perfil_cliente);



const nuevo_nombre_cliente = document.querySelector('#nuevo-nombre-cliente');
const btn_guardar_cambios_cliente = document.querySelector('#btn-guardar-cambios-cliente');

const guardar_cambios_cliente = (identificador_usuario) => {

    usuarios[identificador_usuario].nombre_usuario = nuevo_nombre_cliente.value;


    Swal.fire(
        'Perfil actualizado',
        'Por favor espera unos minutos para que los cambios se reflejen en el sistema',
        'success'
    )
};



btn_guardar_cambios_cliente.addEventListener('click', guardar_cambios_cliente(identificador_usuario));