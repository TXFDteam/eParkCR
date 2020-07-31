'use strict';


let input_correo = document.querySelector('#correo');
let input_contrasenna = document.querySelector('#contrasenna');
let btn_iniciar_sesion = document.querySelector('#btn-iniciar-sesion');


let obtener_datos_y_validar = () => {
    let correo = input_correo.value;
    let contrasenna = input_contrasenna.value;

    localStorage.setItem('correo', input_correo.value);
    localStorage.setItem('contrasenna', input_contrasenna.value);

    if (correo == administrador.correo_admin && contrasenna == administrador.contrasenna_admin) {
        window.location.assign("perfil_administrador.html");
    }
    for (let u = 1; u <= usuarios.cant_usuarios; u++) {
        let identificador_usuario = ('usuario' + u);
        if (correo == usuarios[identificador_usuario].correo_usuario && contrasenna == usuarios[identificador_usuario].contraseña) {
            window.location.assign("perfil_cliente.html");
        }
    };
    for (let d = 1; d <= duennos_parqueos.cant_duennos; d++) {
        let identificador_duenno = ('duenno_parqueo' + d);
        if (correo == duennos_parqueos[identificador_duenno].correo_duenno && contrasenna == duennos_parqueos[identificador_duenno].contraseña) {
            window.location.assign("perfil_cliente.html");
        }
    };
    for (let e = 1; e <= empresas.cant_empresas; e++) {
        let identificador_empresa = ('empresa_' + e);
        if (correo == empresas.lista_empresas[identificador_empresa].correo_empresa && contrasenna == empresas.lista_empresas[identificador_empresa].contrasenna_empresa) {
            window.location.assign("perfil_empresa.html");
        }
    }

};

//let validar_datos = () => {};

btn_iniciar_sesion.addEventListener('click', () => {
    obtener_datos_y_validar();
});