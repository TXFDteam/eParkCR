'use strict';

const btn_solicitudesRegistro = document.querySelector('#btn_solicitudesRegistro');

const redireccionar_bienvenido_admin = () => {
    window.location.assign('../../html/htmls-admin/lista-solicitudes-registro.html');
};

btn_solicitudesRegistro.addEventListener('click', redireccionar_bienvenido_admin);