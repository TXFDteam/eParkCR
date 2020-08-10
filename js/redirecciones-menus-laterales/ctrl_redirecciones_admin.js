'use strict';

const link_inicio = document.querySelector('#link-inicio');
const inicio = document.querySelector('#link-admin');
const solicitudes_registro = document.querySelector('#solicitudes-registro');
const info_usuarios_admin = document.querySelector('#info-usuarios-admin');
const historial_reservas = document.querySelector('#historial-reservas');
const ingresos_admin = document.querySelector('#ingresos-admin');
const actividad_aplicacion = document.querySelector('#actividad-aplicacion');
const config_cuenta_admin = document.querySelector('#configuracion-cuenta-admin');



let marcar_link = (x) => {
    if (x == inicio) {
        x.classList.add('selection');
        solicitudes_registro.classList.remove('selection');
        info_usuarios_admin.classList.remove('selection');
        historial_reservas.classList.remove('selection');
        ingresos_admin.classList.remove('selection');
        actividad_aplicacion.classList.remove('selection');
        config_cuenta_admin.classList.remove('selection');
    } else
    if (x == solicitudes_registro) {
        x.classList.add('selection');
        inicio.classList.remove('selection');
        info_usuarios_admin.classList.remove('selection');
        historial_reservas.classList.remove('selection');
        ingresos_admin.classList.remove('selection');
        actividad_aplicacion.classList.remove('selection');
        config_cuenta_admin.classList.remove('selection');
    } else
    if (x == info_usuarios_admin) {
        x.classList.add('selection');
        solicitudes_registro.classList.remove('selection');
        inicio.classList.remove('selection');
        historial_reservas.classList.remove('selection');
        ingresos_admin.classList.remove('selection');
        actividad_aplicacion.classList.remove('selection');
        config_cuenta_admin.classList.remove('selection');
    } else
    if (x == historial_reservas) {
        x.classList.add('selection');
        solicitudes_registro.classList.remove('selection');
        info_usuarios_admin.classList.remove('selection');
        inicio.classList.remove('selection');
        ingresos_admin.classList.remove('selection');
        actividad_aplicacion.classList.remove('selection');
        actividad_aplicacion.classList.remove('selection');
        config_cuenta_admin.remove('selection');
    } else
    if (x == ingresos_admin) {
        x.classList.add('selection');
        solicitudes_registro.classList.remove('selection');
        info_usuarios_admin.classList.remove('selection');
        historial_reservas.classList.remove('selection');
        inicio.classList.remove('selection');
        actividad_aplicacion.classList.remove('selection');
        config_cuenta_admin.classList.remove('selection');
    } else
    if (x == actividad_aplicacion) {
        x.classList.add('selection');
        solicitudes_registro.classList.remove('selection');
        info_usuarios_admin.classList.remove('selection');
        historial_reservas.classList.remove('selection');
        ingresos_admin.classList.remove('selection');
        inicio.classList.remove('selection');
        config_cuenta_admin.classList.remove('selection');
    } else
    if (x == config_cuenta_admin) {
        x.classList.add('selection');
        solicitudes_registro.classList.remove('selection');
        info_usuarios_admin.classList.remove('selection');
        historial_reservas.classList.remove('selection');
        ingresos_admin.classList.remove('selection');
        actividad_aplicacion.classList.remove('selection');
        inicio.classList.remove('selection');
    }
};


link_inicio.addEventListener('click', function() {
    link_inicio.href = '../../html/htmls-admin/bienvenido_admin.html';
});

inicio.addEventListener('click', function() {
    inicio.href = '../../html/htmls-admin/bienvenido_admin.html';
});
solicitudes_registro.addEventListener('click', function() {
    solicitudes_registro.href = '../../html/htmls-admin/lista-solicitudes-registro.html';
    marcar_link(solicitudes_registro);
});

info_usuarios_admin.addEventListener('click', function() {
    info_usuarios_admin.href = '../../html/htmls-admin/info-usuarios-admin.html';
    marcar_link(info_usuarios_admin);
});
historial_reservas.addEventListener('click', function() {
    historial_reservas.href = '../../html/htmls-admin/historial-reservas-admin.html';
    marcar_link(historial_reservas);
});

ingresos_admin.addEventListener('click', function() {
    ingresos_admin.href = '../../html/htmls-admin/reporte_ingresos_admin.html';
    marcar_link(ingresos_admin);
});

actividad_aplicacion.addEventListener('click', function() {
    actividad_aplicacion.href = '../../html/htmls-admin/bitacora_transaccional_admin.html';
    marcar_link(actividad_aplicacion);
});

config_cuenta_admin.addEventListener('click', function() {
    config_cuenta_admin.href = '../../html/htmls-admin/perfil_administrador.html';
});