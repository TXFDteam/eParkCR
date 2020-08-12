'use strict';

const input_correo_empresa = document.querySelector('#correo_electronico');
const input_nombreEmpresa = document.querySelector('#nombre_empresa');
const input_cedulaJuridica = document.querySelector('#cedula_juridica');
const input_contrasena = document.querySelector('#contrasena');
const input_nombreEncargado = document.querySelector('#nombreEncargado');
const input_coordenadas = document.getElementById("#ubicacion");
const input_fotoPerfil = document.getElementById("#fotoPerfil");
const input_estado = document.querySelector('#estado');


const btn_actualizar = document.querySelector('#btn-actualizar');

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

    input_correo_empresa.value = empresa.correo;
    input_nombreEmpresa.value = empresa.nombre;
    input_cedulaJuridica.value = empresa.n_identificacion;
    input_contrasena.value = empresa.contraseña;
    input_nombreEncargado.value = empresa.nombre_encargado;
    input_coordenadas.value = empresa.ubicacion;
    input_fotoPerfil.value = empresa.foto_perfil;
    input_estado.value = empresa.estado_general;


};

const obtener_datos = () => {
    modificar_empresa(_id, input_correo_empresa.value, input_nombreEmpresa.value, input_cedulaJuridica.value, input_contrasena.value, input_nombreEncargado.value, input_coordenadas.value, input_fotoPerfil.value, input_estado.value);
};

mostrar_info();
btn_actualizar.addEventListener('click', obtener_datos);