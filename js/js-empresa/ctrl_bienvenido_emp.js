'use strict';

const btn_mis_convenios = document.querySelector('#btn_mis_convenios');

const redireccionar_bienvenido_empresa = () => {
    window.location.assign('../../html/htmls-empresas/convenios-empresa.html');
};

btn_mis_convenios.addEventListener('click', redireccionar_bienvenido_empresa);