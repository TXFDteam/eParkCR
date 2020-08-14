'use strict';


let a_inicio_perfil = document.querySelector('#link-inicio');

const input_nombre = document.querySelector('#nombre-cliente');
const input_correo = document.querySelector('#correo-cliente');
// const input_tarjeta = document.querySelector('#tarjeta-cliente');
const input_identificacion = document.querySelector('#numero-identificacion-cliente');
const input_tipoIdentificacion = document.querySelector('#tipo_identificacion');
const input_fechaNacimiento = document.querySelector('#nacimiento-cliente')

const input_foto_div = document.querySelector('#foto-perfil-cliente');
const input_foto = document.querySelector('#foto-Perfil');


const input_estado = document.querySelector('#estado');

const btn_editar_perfil_cliente = document.querySelector('#btn-editar-perfil-cliente');




let correoC = localStorage.getItem('correo');
console.log(correoC);
let contrasennaC = localStorage.getItem('contrasenna');
console.log(contrasennaC);

let id_cliente;

let mostrar_info = async() => {

    let info_clientes = await obtener_clientes();

    //c va a ser el  contador para encontrar los clientes
    for (let c = 0; c < info_clientes.length; c++) {
        if (correoC == info_clientes[c].correo && contrasennaC == info_clientes[c].contraseña) {
            id_cliente = info_clientes[c]._id;
            let foto = document.createElement('img');
            foto.srcset = info_clientes[c].foto_perfil
            foto.className = 'foto-perfil';
            foto.classList.add('foto-perfil');
            console.log(id_cliente);
            input_nombre.value = info_clientes[c].nombre;
            input_correo.value = info_clientes[c].correo;
            input_identificacion.value = info_clientes[c].n_identificacion;
            input_tipoIdentificacion.value = info_clientes[c].tipo_identificacion;
            input_fechaNacimiento.value = info_clientes[c].fecha_nacimiento;


            input_foto_div.appendChild(foto);
            break;
        }
    }
};

const obtener_datos = () => {
    modificar_empresa(_id, input_id.value, input_correo.value, input_nombre.value, input_identificacion.value, input_contrasena.value, input_encargado.value, input_ubicacion.value, input_foto.value, input_estado.value);
};

mostrar_info();



btn_editar_perfil_cliente.addEventListener('click', () => {
    window.location.href = '../../html/htmls-usuarios/editar_perfil_cliente.html';
});



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