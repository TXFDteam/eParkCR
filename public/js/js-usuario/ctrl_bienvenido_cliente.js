'use strict';

const btn_buscarParqueos = document.querySelector('#btn-buscarParqueos');

const txt_titulo = document.querySelector('#txt-titulo-bienvenida');

let nombre_usuario_actual;




const obtener_usuario_ingresado = () => {
    let contrasenna = localStorage.getItem('contrasenna');
    let correo = localStorage.getItem('correo');

    for (let i = 1; i < usuarios.cant_usuarios; i++) {
        let identificador_usuario = ('usuario' + i);
        let usuario_actual = usuarios[identificador_usuario];

        if (correo == usuario_actual.correo_usuario && contrasenna == usuario_actual.contraseña) {
            nombre_usuario_actual = usuarios[identificador_usuario].nombre_usuario;

            txt_titulo.textContent = 'Bienvenido ' + nombre_usuario_actual;
            break;
        }

    }
};

obtener_usuario_ingresado();


btn_buscarParqueos.addEventListener('click', function() {
    window.location.assign('../../html/htmls-usuarios/buscar_parqueos.html');
});