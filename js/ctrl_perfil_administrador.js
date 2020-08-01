'use strict';


let a_inicio_perfil = document.querySelector('#link-inicio');

if (a_inicio_perfil) {
    a_inicio_perfil.addEventListener('click', function() {
        a_inicio_perfil.href = "../../perfil_administrador.html";
    })
};