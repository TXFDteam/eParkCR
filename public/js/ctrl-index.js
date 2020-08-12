'use strict';
//let btn_iniciar_sesion = document.querySelector('#');

let btn_registrar_usuarios = document.querySelector('#btn-registrar-usuarios');
let btn_registrar_empresas = document.querySelector('#btn-registrar-empresas');

let btn_registrar_usuarios_4banner = document.querySelector('#btn-cliente');
let btn_registrar_duennos_parqueos_4banner = document.querySelector('#btn-duenno-parqueo');
let btn_registrar_empresas_4banner = document.querySelector('#btn-empresa');



btn_registrar_usuarios.addEventListener('click', function() {
    window.location.assign("CI_registro_usuarios.html");
});
btn_registrar_empresas.addEventListener('click', function() {
    window.location.assign("emp-formulario.html");
});


//4TO BANNER
btn_registrar_usuarios_4banner.addEventListener('click', function() {
    window.location.assign("CI_registro_usuarios.html");
});
btn_registrar_duennos_parqueos_4banner.addEventListener('click', function() {
    window.location.assign("duenno_parqueo_formulario.html");
});

btn_registrar_empresas_4banner.addEventListener('click', function() {
    window.location.assign("emp-formulario.html");
});