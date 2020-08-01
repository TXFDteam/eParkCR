'use strict';

const inicio = document.querySelector('#primer-link');
const convenios = document.querySelector('#link-convenios-empresa');
const config_cuenta_empresa = document.querySelector('#link-config-cuenta');

/*FALTA CREAR HTML DE BIENVENIDA
inicio.addEventListener('click', function() {
    solicitudes_registro.href = '../../html/htmls-admin/lista-solicitudes-registro.html';
    //marcar_link(solicitudes_registro);
});*/

convenios.addEventListener('click', function() {
    convenios.href = '../../html/htmls-empresas/convenios-empresa.html';
    //marcar_link(info_usuarios_admin);
});

config_cuenta_empresa.addEventListener('click', function() {
    config_cuenta_empresa.href = '../../perfil_empresa.html';
    //marcar_link(historial_reservas);
});