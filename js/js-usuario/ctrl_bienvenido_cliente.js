'use strict';

const btn_buscarParqueos = document.querySelector('#btn_buscarParqueos');

const redireccionar_bienvenido_cliente = () => {
    window.location.assign('../../html/htmls-usuarios/buscar_parqueos.html');
};

btn_buscarParqueos.addEventListener('click', redireccionar_bienvenido_cliente);