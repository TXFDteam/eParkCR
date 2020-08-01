'use strict';

const btn_editar_perfil_cliente = document.querySelector('#btn-editar-perfil-cliente');

const redireccionar_perfil_cliente = () => {
    window.location.assign('../../html/htmls-usuarios/editar_perfil_cliente.html');
};

btn_editar_perfil_cliente.addEventListener('click', redireccionar_perfil_cliente);