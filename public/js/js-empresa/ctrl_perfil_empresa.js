'use strict';

let a_inicio_perfil = document.querySelector('#link-inicio');


const btn_editar_perfil_empresa = document.querySelector('#btn-editar-perfil-empresa');

const editar_perfil_empresa = () => {
    window.location.assign('../../html/htmls-empresas/editar_perfil_empresa.html');
};

btn_editar_perfil_empresa.addEventListener('click', editar_perfil_empresa);


let nombre_empresa = document.querySelector('#nombre-empresa');
let correo_empresa = document.querySelector('#correo-electronico');
let cedula_juridica_empresa = document.querySelector('#cedula-juridica');


let correo = localStorage.getItem('correo');
console.log(correo);
let contrasenna = localStorage.getItem('contrasenna');
console.log(contrasenna);



for (let e = 1; e <= empresas.cant_empresas; e++) {
    let identificador_empresa = ('empresa_' + e);
    if (empresas.lista_empresas[identificador_empresa].correo_empresa == correo && empresas.lista_empresas[identificador_empresa].contrasenna_empresa == contrasenna) {

        console.log(empresas.lista_empresas[identificador_empresa]);

        nombre_empresa.innerHTML = empresas.lista_empresas[identificador_empresa].nombre_empresa;
        correo_empresa.innerHTML = empresas.lista_empresas[identificador_empresa].correo_empresa;
        cedula_juridica_empresa.innerHTML = empresas.lista_empresas[identificador_empresa].cedula_empresa;

    }

}