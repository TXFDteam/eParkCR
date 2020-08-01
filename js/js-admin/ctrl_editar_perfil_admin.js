'use strict';

const btn_editar_perfil_admin = document.querySelector('#btn-editar-perfil-admin');

const redireccionar_perfil_admin = () => {
    window.location.assign('../../html/htmls-admin/editar_perfil_administrador.html');
};

btn_editar_perfil_admin.addEventListener('click', redireccionar_perfil_admin);


const input_nombre = document.querySelector('#nuevo-nombre-admin');