'use strict';

const btn_principal = document.querySelector('#btn-principal');
const txt_titulo = document.querySelector('#txt-titulo-bienvenida');

let usuario_ingresado;

const actualizar_datos = () => {
    txt_titulo.textContent = 'Bienvenido ' + usuario_ingresado.nombre_usuario;
    btn_principal.textContent = 'Buscar parqueos';
};

const obtener_usuario_ingresado = () => {
    let contrasenna = localStorage.getItem('contrasenna');
    let correo = localStorage.getItem('correo');

    for (let i = 1; i < usuarios.cant_usuarios; i++) {
        let identificador_usuario = ('usuario' + i);
        let usuario_actual = usuarios[identificador_usuario];

        if (correo == usuario_actual.correo_usuario && contrasenna == usuario_actual.contraseña) {
            return usuario_actual;
        }

    }
    usuario_ingresado = '';
};

const al_presionar_btn_principal = () => {
    //Se redirige al html que muestra el perfil del parqueo.
    window.location.assign("buscar_parqueos.html");
};

usuario_ingresado = obtener_usuario_ingresado();
actualizar_datos();

btn_principal.addEventListener('click', al_presionar_btn_principal);