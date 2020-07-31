'use strict';

let a_inicio_perfil = document.querySelector('#link-inicio');

if (a_inicio_perfil) {
    a_inicio_perfil.addEventListener('click', function() {
        a_inicio_perfil.href = "../../perfil_empresa.html";
    })
};


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