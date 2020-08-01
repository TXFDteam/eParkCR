'use strict';


let a_inicio_perfil = document.querySelector('#link-inicio');

if (a_inicio_perfil) {
    a_inicio_perfil.addEventListener('click', function() {
        a_inicio_perfil.href = "../../perfil_empresa.html";
    })
};


let nombre_duenno_parqueo = parqueos.parqueo_3.duenno_parqueo;
console.log(duenno_parqueo);
document.querySelector('#nombre-duenno-parqueo').innerHTML = nombre_duenno_parqueo;

let correo_parqueo = usuarios.usuario1.correo_usuario;
console.log(correo_parqueo);
document.querySelector('#correo-parqueo').innerHTML = correo_parqueo;




// pendiente de crear datos para quemar de duenio de parqueo en el archivo simulador_bd.js. X.L//