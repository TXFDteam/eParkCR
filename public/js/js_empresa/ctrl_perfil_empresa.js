'use strict';

let a_inicio_perfil = document.querySelector('#link-inicio');

const input_id = document.querySelector('#id');
const input_correo = document.querySelector('#correo_electronico');
const input_nombre = document.querySelector('#nombre_empresa');
const input_identificacion = document.querySelector('#cedula_juridica');
const input_contrasena = document.querySelector('#contrasena');
const input_encargado = document.querySelector('#nombreEncargado');
const input_ubicacion = document.querySelector('#ubicacion');
const input_foto = document.querySelector('#fotoPerfil');
const input_estado = document.querySelector('#estado');

const btn_editar_perfil_empresa = document.querySelector('#btn-editar-perfil-empresa');

/*
const obtener_parametro_url = (valor) => {
    const location = new URL(window.location.href);
    const parametros = new URLSearchParams(location.search);
    let parametro;
    if (parametros.get(valor)) {
        parametro = parametros.get(valor).toLowerCase();
    } else {
        parametro = '';
    }


    return parametro;
};*/

//let _id = obtener_parametro_url('_id');
let correoE = localStorage.getItem('correo_empresa');
let contrasennaE = localStorage.getItem('contraseña_empresa');


let id_empresa;

const mostrar_info = async() => {
    //let _id = obtener_parametro_url('_id');
    //let empresa = await obtener_empresa_id(_id);

    let info_emp = await obtener_empresas();

    for (let e = 0; e <= info_emp.length; e++) {
        if (correoE == info_emp[e].correo && contrasennaE == info_emp[e].contraseña) {
            id_empresa = info_emp[e]._id;
            console.log(id_empresa);
            input_correo.value = info_emp[e].correo;
            input_nombre.value = info_emp[e].nombre;
            input_identificacion.value = info_emp[e].n_identificacion;
            input_encargado.value = info_emp[e].nombre_encargado;
            input_ubicacion.value = info_emp[e].ubicacion;
            input_foto.value = info_emp[e].foto_perfil;
            input_estado.value = info_emp[e].estado_general;
            break;
        }
    }

};

const obtener_datos = () => {
    modificar_empresa(_id, input_id.value, input_correo.value, input_nombre.value, input_identificacion.value, input_contrasena.value, input_encargado.value, input_ubicacion.value, input_foto.value, input_estado.value);
};

mostrar_info();


btn_editar_perfil_empresa.addEventListener('click', () => {
    window.location.href = '../../html/htmls-empresas/editar_perfil_empresa.html';
});



// let nombre_empresa = document.querySelector('#nombre-empresa');
// let correo_empresa = document.querySelector('#correo-electronico');
// let cedula_juridica_empresa = document.querySelector('#cedula-juridica');


// let correo = localStorage.getItem('correo');
// console.log(correo);
// let contrasenna = localStorage.getItem('contrasenna');
// console.log(contrasenna);



// for (let e = 1; e <= empresas.cant_empresas; e++) {
//     let identificador_empresa = ('empresa_' + e);
//     if (empresas.lista_empresas[identificador_empresa].correo_empresa == correo && empresas.lista_empresas[identificador_empresa].contrasenna_empresa == contrasenna) {

//         console.log(empresas.lista_empresas[identificador_empresa]);

//         nombre_empresa.innerHTML = empresas.lista_empresas[identificador_empresa].nombre_empresa;
//         correo_empresa.innerHTML = empresas.lista_empresas[identificador_empresa].correo_empresa;
//         cedula_juridica_empresa.innerHTML = empresas.lista_empresas[identificador_empresa].cedula_empresa;

//     }

// }