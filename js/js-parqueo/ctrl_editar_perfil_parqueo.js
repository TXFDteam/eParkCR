'use strict';


const btn_editar_perfil_parqueo = document.querySelector('#btn-editar-perfil-parqueo');

const redireccionar_perfil_parqueo = () => {
    window.location.assign('../../html/htmls-parqueos/editar_perfil_parqueo.html');
};

btn_editar_perfil_parqueo.addEventListener('click', redireccionar_perfil_parqueo);