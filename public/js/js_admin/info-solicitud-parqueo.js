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

let id_parqueo = localStorage.getItem('Id_parqueo');
//FUNCIONES PARA OBTENER EL PARQUEO SELECCIONADO POR EL ADMIN Y PARA OBTENER AL DUEÑO DEL PARQUEO SELECCIONADO
const obtener_parqueo_actual = async() => {
    let info_solicitudes_parqueo = await obtener_parqueos();

    let nombre_parqueo;
    //Se busca el parqueo que posee ese nombre.
    for (let i = 0; i < info_solicitudes_parqueo.length; i++) {
        if (id_parqueo == info_solicitudes_parqueo[i]._id) {
            nombre_parqueo = info_solicitudes_parqueo[i].nombre;
            break;
        }
    }

    return nombre_parqueo;
};
const obtener_duenno = async() => {
    let info_duennos = await obtener_duennos_parqueo();
    let info_solicitudes_parqueo = await obtener_parqueos();
    let nombre_duenno;
    //Se busca el parqueo que posee ese nombre.
    for (let i = 0; i < info_duennos.length; i++) {
        for (let x = 0; x < info_solicitudes_parqueo.length; x++) {
            if (id_parqueo == info_solicitudes_parqueo[x]._id && info_solicitudes_parqueo[x].id_duenno == info_duennos[i]._id) {
                nombre_duenno = info_duennos[i].nombre;
                break;
            }
        }
    }
    return nombre_duenno;
};
/*----------------------*/



let aceptar_parqueo = async() => {
    let info_solicitudes_parqueo = await obtener_parqueos();
    let info_duennos = await obtener_duennos_parqueo();
    const nuevo_estado1 = "DESACTIVAR";
    console.log(nuevo_estado1);


    for (let d = 0; d < info_solicitudes_parqueo.length; d++) {
        if (id_parqueo == info_solicitudes_parqueo[d]._id) {
            console.log('aqui')
            for (let x = 0; x < info_duennos.length; x++) {

                if (info_duennos[x]._id == info_solicitudes_parqueo[d].id_duenno) {
                    console.log('aqui')
                    if (info_solicitudes_parqueo[d].estado_general == 'REGISTRO_PENDIENTE') {

                        aceptacion_solicitud_parqueo(info_solicitudes_parqueo[d]._id, nuevo_estado1, info_duennos[x].correo, info_solicitudes_parqueo[d.nombre]);

                        Swal.fire({
                            'icon': "success",
                            'text': 'El parqueo se aceptó correctamente'
                        }).then(function() {
                            window.location = 'lista-solicitudes-registro.html';
                        });
                        break;
                    }
                }
            }
        }
    }
};
let rechazar_parqueo = async() => {
    let info_solicitudes_parqueo = await obtener_parqueos();
    let info_duennos = await obtener_duennos_parqueo();
    const nuevo_estado = "RECHAZADO";
    for (let d = 0; d < info_solicitudes_parqueo.length; d++) {
        if (id_parqueo == info_solicitudes_parqueo[d]._id) {
            for (let x = 0; x < info_duennos.length; x++) {
                if (info_duennos[x]._id == info_solicitudes_parqueo[d].id_duenno) {
                    if (info_solicitudes_parqueo[d].estado_general == 'REGISTRO_PENDIENTE') {

                        rechazo_solicitud_parqueo(info_solicitudes_parqueo[d]._id, nuevo_estado, info_duennos[x].correo, info_solicitudes_parqueo[d.nombre]);

                        Swal.fire({
                            'icon': "success",
                            'text': 'El parqueo se rechazó correctamente'
                        }).then(function() {
                            window.location = 'lista-solicitudes-registro.html';
                        });
                        break;
                    }
                }
            }
        }
    }
};

btn_aceptar.addEventListener('click', () => {
    aceptar_parqueo();
    //window.location.assign('lista-solicitudes-registro.html');
});
btn_rechazar.addEventListener('click', () => {
    rechazar_parqueo();
    //window.location.assign('lista-solicitudes-registro.html');
});


const listar_info_solicitud = (sol, pduenno) => {
    let suma_espacios = 0;
    for (let p = 0; p < sol.pisos.length; p++) {
        suma_espacios = suma_espacios + sol.pisos[p].espacios.length;

    }


    nom_parqueo.innerHTML = sol.nombre;
    duenno_parqueo.innerHTML = pduenno;
    correo_parqueo.innerHTML = sol.email;
    cedula_parqueo.innerHTML = sol.cedula_juridica;
    //permiso_parqueo.innerHTML = sol.permiso_funcionamiento;
    ubicacion_parqueo.innerHTML = sol.ubicacion;
    espacios_parqueo.innerHTML = suma_espacios;
};




let mostrar_usuarios = async() => {


    let info_solicitudes_parqueo = await obtener_parqueos();
    let n_duenno = Promise.resolve(obtener_duenno());
    let duenno;
    let parqueo_slct;
    n_duenno.then((value) => {
        duenno = value;
        console.log(duenno);

        let p_actual = obtener_parqueo_actual();
        p_actual.then((value) => {
            parqueo_slct = value;
            console.log(parqueo_slct);


            for (let i = 0; i < info_solicitudes_parqueo.length; i++) {
                if (id_parqueo == info_solicitudes_parqueo[i]._id) {
                    header.innerHTML = 'Información de la solicitud de ' + parqueo_slct;
                    inicializar_mapa(info_solicitudes_parqueo[i]);
                    console.log(info_solicitudes_parqueo[i].pisos[0].espacios.length);
                    console.log(info_solicitudes_parqueo[i].permiso_funcionamiento);
                    listar_info_solicitud(info_solicitudes_parqueo[i], duenno);
                }
            }
        });
    });
};
mostrar_usuarios();