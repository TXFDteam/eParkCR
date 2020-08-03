'use strict';

const link_inicio = document.querySelector('#link-inicio');
const inicio = document.querySelector('#primer-link');
const convenios = document.querySelector('#convenios-parqueo');
const mis_parqueos = document.querySelector('#mis-parqueos');
const historial_reservas = document.querySelector('#historial-reservas-parqueo');

const config_cuenta_empresa = document.querySelector('#config-cuenta');


link_inicio.addEventListener('click', function() {
    link_inicio.href = '../../html/htmls-parqueos/bienvenido_parqueo.html';
    //marcar_link(solicitudes_registro);
});

inicio.addEventListener('click', function() {
    inicio.href = '../../html/htmls-parqueos/bienvenido_parqueo.html';
    //marcar_link(solicitudes_registro);
});

convenios.addEventListener('click', function() {
    convenios.href = '../../html/htmls-parqueos/prq_convenios_asociados.html';

});
mis_parqueos.addEventListener('click', function() {
    mis_parqueos.href = '../../html/htmls-parqueos/prq_mis_parqueos.html';

});

config_cuenta_empresa.addEventListener('click', function() {
    config_cuenta_empresa.href = '../../html/htmls-parqueos/perfil_parqueo.html';
    //marcar_link(historial_reservas);
});