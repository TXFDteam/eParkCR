'use strict';

let a_cerrar_sesion = document.querySelector('#link-cerrar-sesion');

if (a_cerrar_sesion) {
    a_cerrar_sesion.addEventListener('click', function() {
        a_cerrar_sesion.href = "../../index.html";
    })
};