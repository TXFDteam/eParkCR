'use strict';


let a_inicio_perfil = document.querySelector('#link-inicio');




const btn_editar_perfil_cliente = document.querySelector('#btn-editar-perfil-cliente');

const editar_perfil_cliente = () => {
    window.location.assign('../../html/htmls-usuarios/editar_perfil_cliente.html');
};

btn_editar_perfil_cliente.addEventListener('click', editar_perfil_cliente);



let nombre_cliente = document.querySelector('#nombre-cliente');
let correo_electronico = document.querySelector('#correo-cliente');
let numero_identificacion_cliente = document.querySelector('#numero-identificacion-cliente');
let nacimiento_cliente = document.querySelector('#nacimiento-cliente');
let tarjeta_cliente = document.querySelector('#tarjeta-cliente');

let correo_usuario = localStorage.getItem('correo');
console.log(correo_usuario);
let contrasenna_usuario = localStorage.getItem('contrasenna');
console.log(contrasenna_usuario);



for (let u = 1; u <= usuarios.cant_usuarios; u++) {
    let identificador_usuario = ('usuario' + u);
    //SI EL CORREO Y  CONTRASEÑA ALMACENADOS EN INICIAR SESION PROCEDE A ASIGNAR LOS VALORES DEL USUARIO LOGEADO
    if (usuarios[identificador_usuario].correo_usuario == correo_usuario && usuarios[identificador_usuario].contraseña == contrasenna_usuario) {

        console.log(usuarios[identificador_usuario]);

        nombre_cliente.innerHTML = usuarios[identificador_usuario].nombre_usuario;
        correo_electronico.innerHTML = usuarios[identificador_usuario].correo_usuario;
        nacimiento_cliente.innerHTML = usuarios[identificador_usuario].fecha_nacimiento;
        numero_identificacion_cliente.innerHTML = usuarios[identificador_usuario].n_identificacion;
        //ESTE FOR VERIFICA LA TARJETA QUE TIENE COMO PREDETERMINADA
        for (let t = 1; t <= 10; t++) {
            let identificador_tarjeta = ('tarjeta_' + t);
            if (usuarios[identificador_usuario].tarjetas[identificador_tarjeta].predeterminada == true) {
                tarjeta_cliente.innerHTML = usuarios[identificador_usuario].tarjetas[identificador_tarjeta].numero_tarjeta;
            }
        }
        break;
    }
};