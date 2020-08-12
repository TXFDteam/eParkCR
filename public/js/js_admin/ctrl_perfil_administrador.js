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


let correo = localStorage.getItem('correo_admin');
console.log(correo);
let contrasenna = localStorage.getItem('contraseña_admin');
console.log(contrasenna);

//----------
const mostrar_info_admin = async() => {
    let info_admin = await obtener_admin();



    if (info_admin[0].correo == correo && info_admin[0].contraseña == contrasenna) {

        nombre_admin.innerHTML = info_admin[0].nombre;
        correo_admin.innerHTML = info_admin[0].correo;
        comision.innerHTML = info_admin[0].comision;
        telefono_admin.innerHTML = info_admin[0].telefono;

    }
};
mostrar_info_admin();