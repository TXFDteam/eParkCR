'use strict';


let a_inicio_perfil = document.querySelector('#link-inicio');

if (a_inicio_perfil) {
    a_inicio_perfil.addEventListener('click', function() {
        a_inicio_perfil.href = "../../perfil_administrador.html";
    })
};



const btn_editar_perfil_admin = document.querySelector('#btn-editar-perfil-admin');


const editar_perfil_admin = () => {
    window.location.assign('../../html/htmls-admin/editar_perfil_administrador.html');
};

btn_editar_perfil_admin.addEventListener('click', editar_perfil_admin);



let nombre_admin = document.querySelector('#nombre-admin');
let correo_admin = document.querySelector('#correo-admin');
let comision = document.querySelector('#comision');
let telefono_admin = document.querySelector('#telefono-admin');


let correo = localStorage.getItem('correo');
console.log(correo);
let contrasenna = localStorage.getItem('contrasenna');
console.log(contrasenna);

let identificador_admin = administrador;

if (administrador.correo_admin == correo && administrador.contrasenna_admin == contrasenna) {

    nombre_admin.innerHTML = administrador.nombre;
    correo_admin.innerHTML = administrador.correo_admin;
    comision.innerHTML = administrador.comision;
    telefono_admin.innerHTML = administrador.telefono;

}