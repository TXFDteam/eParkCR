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
};

let _id = obtener_parametro_url('_id');

const mostrar_info = async() => {
    let _id = obtener_parametro_url('_id');
    let empresa = await obtener_empresa_id(_id);

    input_id.value = empresa.id;
    input_correo.value = empresa.correo;
    input_nombre.value = empresa.nombre;
    input_identificacion.value = empresa.n_identificacion;
    input_contrasena.value = empresa.contraseña;
    input_encargado.value = empresa.nombre_encargado;
    input_ubicacion.value = empresa.ubicacion;
    input_foto.value = empresa.foto_perfil;
    input_estado.value = empresa.estado_general;

};

const obtener_datos = () => {
    modificar_empresa(_id, input_id.value, input_correo.value, input_nombre.value, input_identificacion.value, input_contrasena.value, input_encargado.value, input_ubicacion.value, input_foto.value, input_estado.value);
};

mostrar_info();


btn_editar_perfil_empresa.addEventListener('click', () => {
    window.location.href = `../../html/htmls-empresas/editar_perfil_empresa.html?_id=${empresa._id}`;
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