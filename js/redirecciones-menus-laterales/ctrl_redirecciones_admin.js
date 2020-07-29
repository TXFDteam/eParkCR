'use strict';

const inicio = document.querySelector('#inicio-admin');
const solicitudes_registro = document.querySelector('#solicitudes-registro');
const info_usuarios_admin = document.querySelector('#info-usuarios-admin');
const historial_reservas = document.querySelector('#historial-reservas');
const ingresos_admin = document.querySelector('#ingresos-admin');
const actividad_aplicacion = document.querySelector('#actividad-aplicacion');
const config_cuenta_admin = document.querySelector('#configuracion-cuenta-admin');



let marcar_link = (x) => {
    if (x == inicio) {
        x.classList.add('selection');
        solicitudes_registro.remove('selection');
        info_usuarios_admin.remove('selection');
        historial_reservas.remove('selection');
        ingresos_admin.remove('selection');
        actividad_aplicacion.remove('selection');
        config_cuenta_admin.remove('selection');
    } else
    if (x == solicitudes_registro) {
        x.classList.add('selection');
        inicio.remove('selection');
        info_usuarios_admin.remove('selection');
        historial_reservas.remove('selection');
        ingresos_admin.remove('selection');
        actividad_aplicacion.remove('selection');
        config_cuenta_admin.remove('selection');
    } else
    if (x == info_usuarios_admin) {
        x.classList.add('selection');
        solicitudes_registro.remove('selection');
        inicio.remove('selection');
        historial_reservas.remove('selection');
        ingresos_admin.remove('selection');
        actividad_aplicacion.remove('selection');
        config_cuenta_admin.remove('selection');
    } else
    if (x == historial_reservas) {
        x.classList.add('selection');
        solicitudes_registro.remove('selection');
        info_usuarios_admin.remove('selection');
        inicio.remove('selection');
        ingresos_admin.remove('selection');
        actividad_aplicacion.remove('selection');
        config_cuenta_admin.remove('selection');
    } else
    if (x == ingresos_admin) {
        x.classList.add('selection');
        solicitudes_registro.remove('selection');
        info_usuarios_admin.remove('selection');
        historial_reservas.remove('selection');
        inicio.remove('selection');
        actividad_aplicacion.remove('selection');
        config_cuenta_admin.remove('selection');
    } else
    if (x == actividad_aplicacion) {
        x.classList.add('selection');
        solicitudes_registro.remove('selection');
        info_usuarios_admin.remove('selection');
        historial_reservas.remove('selection');
        ingresos_admin.remove('selection');
        inicio.remove('selection');
        config_cuenta_admin.remove('selection');
    } else
    if (x == config_cuenta_admin) {
        x.classList.add('selection');
        solicitudes_registro.remove('selection');
        info_usuarios_admin.remove('selection');
        historial_reservas.remove('selection');
        ingresos_admin.remove('selection');
        actividad_aplicacion.remove('selection');
        inicio.remove('selection');
    }
};


solicitudes_registro.addEventListener('click', function() {
    solicitudes_registro.href = '../../html/htmls-admin/lista-solicitudes-registro.html';
    marcar_link(info_usuarios_admin);
});

info_usuarios_admin.addEventListener('click', function() {
    info_usuarios_admin.href = '../../html/htmls-admin/info-usuarios-admin.html';
    marcar_link(info_usuarios_admin);
});