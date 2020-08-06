'use strict';


const btn_editar_convenio = document.querySelector('#btn-editar-convenio');

const editar_convenio = () => {
    window.location.assign('../../html/htmls-parqueos/editar_convenios_parqueos.html');
};



btn_editar_convenio.addEventListener('click', editar_convenio);