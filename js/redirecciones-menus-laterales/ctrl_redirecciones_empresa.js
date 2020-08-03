'use strict';

const inicio = document.querySelector('#primer-link');
const convenios = document.querySelector('#link-convenios-empresa');
const config_cuenta_empresa = document.querySelector('#link-config-cuenta');


inicio.addEventListener('click', function() {
    inicio.href = '../../html/htmls-empresas/bienvenido_empresa.html';
});

convenios.addEventListener('click', function() {
    convenios.href = '../../html/htmls-empresas/convenios-empresa.html';
    //marcar_link(info_usuarios_admin);
});

config_cuenta_empresa.addEventListener('click', function() {
    config_cuenta_empresa.href = '../../html/htmls-empresas/perfil_empresa.html';
    //marcar_link(historial_reservas);
});