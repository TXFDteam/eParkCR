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

let correo = localStorage.getItem('correo');
console.log(correo);
let contrasenna = localStorage.getItem('contrasenna');
console.log(contrasenna);


let mostrar_cliente = async() => {

    let info_clientes = await obtener_clientes();



    //d va a ser el  contador para encontrar los duennos de los parqueos
    for (let c = 0; c < info_clientes.length; c++) {
        if (correo == info_clientes[c].correo && contrasenna == info_clientes[c].contraseña) {
            /* let foto = document.createElement('img');
             foto.srcset = info_duennos_parqueo[c].foto_perfil
                 //foto.className= 'foto-perfil';
             foto.classList.add('foto-perfil');*/

            nombre_cliente.innerHTML = info_clientes[c].nombre;
            correo_electronico.innerHTML = info_clientes[c].correo;
            nacimiento_cliente.innerHTML = info_clientes[c].fecha_nacimiento;
            numero_identificacion_cliente.innerHTML = info_clientes[c].n_identificacion;

            //foto_perfil_div.appendChild(foto);
            break;
        }
    }
};
mostrar_cliente();
/*
for (let u = 1; u <= usuarios.cant_usuarios; u++) {
    let identificador_usuario = ('usuario' + u);
    //SI EL CORREO Y  CONTRASEÑA ALMACENADOS EN INICIAR SESION PROCEDE A ASIGNAR LOS VALORES DEL USUARIO LOGEADO
    if (usuarios[identificador_usuario].correo_usuario == correo_usuario && usuarios[identificador_usuario].contraseña == contrasenna_usuario) {

        console.log(usuarios[identificador_usuario]);


        //ESTE FOR VERIFICA LA TARJETA QUE TIENE COMO PREDETERMINADA
        for (let t = 1; t <= 10; t++) {
            let identificador_tarjeta = ('tarjeta_' + t);
            if (usuarios[identificador_usuario].tarjetas[identificador_tarjeta].predeterminada == true) {
                tarjeta_cliente.innerHTML = usuarios[identificador_usuario].tarjetas[identificador_tarjeta].numero_tarjeta;
            }
        }
        break;
    }
};*/