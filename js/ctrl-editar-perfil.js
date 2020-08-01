'use strict';

//controladores para rediredirecciones a editar perfil


//Parqueo

const btn_editar_perfil_parqueo = document.querySelector('#btn-editar-perfil-parqueo');

const redireccionar_perfil_parqueo = () => {
    window.location.assign('editar_perfil_parqueo.html');
}

btn_editar_perfil_parqueo.addEventListener('click', redireccionar_perfil_parqueo);

//Empresa

const btn_editar_perfil_empresa = document.querySelector('#btn-editar-perfil-empresa');

const redireccionar_perfil_empresa = () => {
    window.location.assign('editar_perfil_empresa.html');
}

btn_editar_perfil_empresa.addEventListener('click', redireccionar_perfil_empresa);


//Cliente

const btn_editar_perfil_cliente = document.querySelector('#btn-editar-perfil-cliente');

const redireccionar_perfil_cliente = () => {
    window.location.assign('editar_perfil_cliente.html');
}

btn_editar_perfil_cliente.addEventListener('click', redireccionar_perfil_cliente);



//Addministrador

const btn_editar_perfil_admin = document.querySelector('#btn-editar-perfil-admin');

const redireccionar_perfil_admin = () => {
    window.location.assign('editar_perfil_administrador.html');
}

btn_editar_perfil_admin.addEventListener('click', redireccionar_perfil_admin);