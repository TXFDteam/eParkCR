'use strict';

let a_cerrar_sesion = document.querySelector('#link-cerrar-sesion');

if (a_cerrar_sesion) {
    a_cerrar_sesion.addEventListener('click', function() {
        a_cerrar_sesion.href = "../../index.html";

        //Limpiar el local storage.
        localStorage.setItem('correo', '');
        localStorage.setItem('contrasenna', '');
    })
};
/*
const verificar_usuario_ingresado = () => {
    //Si no hay ningún usuario ingresado se vuelve al landing page.
    if (localStorage.getItem('correo') == '' || localStorage.getItem('contrasenna') == '') {
        window.location.assign('../../index.html');
    }
};

verificar_usuario_ingresado();
console.log('Si es este.');*/