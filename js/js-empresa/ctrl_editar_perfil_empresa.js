'use strict';

const btn_editar_perfil_empresa = document.querySelector('#btn-editar-perfil-empresa');

const redireccionar_perfil_empresa = () => {
    window.location.assign('../../html/htmls-empresas/editar_perfil_empresa.html');
};

btn_editar_perfil_empresa.addEventListener('click', redireccionar_perfil_empresa);