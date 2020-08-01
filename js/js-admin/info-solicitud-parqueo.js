'use strict';

let header = document.querySelector('#solicitud-seleccionada');
const contenedor_info = document.querySelector('tabla-info');

let nom_parqueo = document.querySelector('#nom-parqueo');
let duenno_parqueo = document.querySelector('#duenno-parqueo');
let correo_parqueo = document.querySelector('#correo-parqueo');
let cedula_parqueo = document.querySelector('#cedula-juridica');
let permiso_parqueo = document.querySelector('#permiso');
let ubicacion_parqueo = document.querySelector('#ubicacion-parqueo');
let espacios_parqueo = document.querySelector('#cant-espacios');

let btn_aceptar = document.querySelector('#btn-aceptar');
let btn_rechazar = document.querySelector('#btn-rechazar');

let solicitud_seleccionada = localStorage.getItem('solicitud_seleccionada');

let fila;


const listar_info_solicitud = (sol) => {

    nom_parqueo.innerHTML = sol.nombre_parqueo;
    localStorage.setItem('nombre_parqueo', sol.nombre_parqueo);
    duenno_parqueo.innerHTML = sol.duenno_parqueo;
    localStorage.setItem('duenno_parqueo', sol.duenno_parqueo);
    correo_parqueo.innerHTML = sol.email_parqueo;
    localStorage.setItem('correo_parqueo', sol.email_parqueo);
    cedula_parqueo.innerHTML = sol.cedula_juridica;
    localStorage.setItem('cedula_parqueo', sol.cedula_juridica);
    permiso_parqueo.innerHTML = sol.permiso_funcionamiento;
    localStorage.setItem('permiso_parqueo', sol.permiso_funcionamiento);
    ubicacion_parqueo.innerHTML = sol.ubicacion_parqueo;
    localStorage.setItem('ubicacion_parqueo', sol.ubicacion_parqueo);
    espacios_parqueo.innerHTML = sol.cant_espacios;
    localStorage.setItem('espacios_parqueo', sol.cant_espacios);
};

let mostrar_usuarios = () => {

    //variable que determina si es el mismo codigo de convenio
    let det = false;
    //Variable que tiene el parqueo de la solicitud
    let solicitud_p;

    let solicitud;

    /*if (localStorage.getItem('convenios_empresa')) {
        convenios_empresa = JSON.parse(localStorage.getItem('convenios_empresa'));
    };*/

    for (let i = 1; i <= solicitudes_parqueos.cant_solicitudes; i++) {
        let identificador_solicitud = ('sol_parqueo' + i);
        solicitud = solicitudes_parqueos[identificador_solicitud];
        solicitud_p = solicitudes_parqueos[identificador_solicitud].nombre_parqueo;
        //VALIDA SI ES la misma solicitud
        if (solicitud_p == solicitud_seleccionada) {
            det = true;
            header.innerHTML = 'Información de la solicitud de ' + solicitud_p;
            if (solicitud.estado_parqueo == "Revisión") {
                solicitudes_parqueos[identificador_solicitud].estado_parqueo = "Rechazado";
            }
            localStorage.setItem('solicitudes_parqueo', JSON.stringify(solicitudes_parqueos));
            break;
        } else {
            det = false;
        };
    };

    listar_info_solicitud(solicitud);
    console.log(nom_parqueo);

};
mostrar_usuarios();



/*
const guardar_datos_solicitud = () => {
    localStorage.setItem('nombre_parqueo', nom_parqueo);
    localStorage.setItem('duenno_parqueo', duenno_parqueo);
    localStorage.setItem('correo_parqueo', correo_parqueo);
    localStorage.setItem('cedula_parqueo', cedula_parqueo);
    localStorage.setItem('permiso_parqueo', permiso_parqueo);
    localStorage.setItem('ubicacion_parqueo', ubicacion_parqueo);
    localStorage.setItem('espacios_parqueo', espacios_parqueo);
};*/

btn_aceptar.addEventListener('click', function() {
    //guardar_datos_solicitud();
    console.log(localStorage.getItem('nombre_parqueo'));
    console.log(localStorage.getItem('duenno_parqueo'));
    console.log(localStorage.getItem('correo_parqueo'));
    console.log(localStorage.getItem('cedula_parqueo'));
    console.log(localStorage.getItem('permiso_parqueo'));
    console.log(localStorage.getItem('ubicacion_parqueo'));
    console.log(localStorage.getItem('espacios_parqueo'));
});
btn_rechazar.addEventListener('click', function() {

    if (localStorage.getItem('solicitudes_parqueo')) {
        solicitudes_parqueos = JSON.parse(localStorage.getItem('solicitudes_parqueo'));
    };
    console.log(solicitudes_parqueos);
});