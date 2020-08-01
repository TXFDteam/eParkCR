'use strict';

const btn_volver_perfil_parqueo = document.querySelector('#btn-volver-perfil-parqueo');

const volver_perfil_parqueo = () => {
    window.location.assign('../../html/htmls-parqueos/perfil_parqueo.html');
};



btn_volver_perfil_parqueo.addEventListener('click', volver_perfil_parqueo);