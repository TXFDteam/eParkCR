'use strict';

const btn_mis_parqueos = document.querySelector('#btn_mis_parqueos');

const redireccionar_bienvenido_parqueo = () => {
    window.location.assign('../../html/htmls-parqueos/prq_mis_parqueos.html');
};

btn_mis_parqueos.addEventListener('click', redireccionar_bienvenido_parqueo);