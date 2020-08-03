'use strict';

const inicio = document.querySelector('#primer-link');
const mis_parqueos = document.querySelector('#mis-parqueos');
const historial_reservas = document.querySelector('#historial-reservas-parqueo');
//const convenios = document.querySelector('#link-convenios-empresa');
const config_cuenta_empresa = document.querySelector('#link-config-cuenta');
const reporte_ingresos = document.querySelector('#reportes-parqueo');

/*FALTA CREAR HTML DE BIENVENIDA
inicio.addEventListener('click', function() {
    solicitudes_registro.href = '../../html/htmls-admin/lista-solicitudes-registro.html';
    //marcar_link(solicitudes_registro);
});*/

/* convenios.addEventListener('click', function() {
convenios.href = '../../html/htmls-parqueos/prq_convenios_asociados.html';

}); */

config_cuenta_empresa.addEventListener('click', function() {
    config_cuenta_empresa.href = '../../perfil_parqueo.html';
    //marcar_link(historial_reservas);
});

reporte_ingresos.addEventListener('click', function() {
    reporte_ingresos.href = '../../reporte_ingresos_parqueo.html';
    marcar_link(reporte_ingresos);
});