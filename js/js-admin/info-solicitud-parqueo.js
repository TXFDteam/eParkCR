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




let solicitud_seleccionada = localStorage.getItem('solicitud_seleccionada');

let fila;


const listar_info_solicitud = (sol) => {

    nom_parqueo.innerHTML = sol.nombre_parqueo;
    duenno_parqueo.innerHTML = sol.duenno_parqueo;
    correo_parqueo.innerHTML = sol.email_parqueo;
    cedula_parqueo.innerHTML = sol.cedula_juridica;
    permiso_parqueo.innerHTML = sol.permiso_funcionamiento;
    ubicacion_parqueo.innerHTML = sol.ubicacion_parqueo;
    espacios_parqueo.innerHTML = sol.cant_espacios;

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
            break;
        } else {
            det = false;
        };
    };
    listar_info_solicitud(solicitud);
    console.log(nom_parqueo);

};
mostrar_usuarios();