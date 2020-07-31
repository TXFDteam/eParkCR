'use strict';


let input_correo = document.querySelector('#correo');
let input_contrasenna = document.querySelector('#contrasenna');
let btn_iniciar_sesion = document.querySelector('#btn-iniciar-sesion');


let obtener_datos_y_validar = () => {
    let correo = input_correo.value;
    let contrasenna = input_contrasenna.value;

    if (correo == administrador.correo_admin && contrasenna == administrador.contrasenna_admin) {
        window.location.assign("perfil_administrador.html");
    }
    for (let u = 1; u <= usuarios.cant_usuarios; u++) {
        let identificador_usuario = ('usuario' + u);
        if ()
    }

};

//let validar_datos = () => {};

btn_iniciar_sesion.addEventListener('click', () => {

});