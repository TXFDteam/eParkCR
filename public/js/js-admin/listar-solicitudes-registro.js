'use strict';

const tabla_usuarios_header = document.querySelector('#tabla-solicitudes thead');
const tabla_usuarios = document.querySelector('#tabla-solicitudes tbody');

let head;
let fila;

const nombre_solicitud = (p_nombre_solicitud) => {
    console.log('La solicitud es: ' + p_nombre_solicitud);

    //Se guarda la variable que dice cuál solicitud se seleccionó
    localStorage.setItem('solicitud_seleccionada', p_nombre_solicitud);

    //Se redirige al html que muestra la solicitud
    window.location.assign("../../html/htmls-admin/info-solicitud-parqueo-admin.html");
};

const listar_usuarios = (usuario) => {

    fila = tabla_usuarios.insertRow();
    let nombre = document.createElement('a');
    //lista_usuarios.href = "lista-usuarios-convenio.html";
    //nombre.id = nombre.nombre_parqueo;
    nombre.textContent = usuario.nombre_parqueo;

    nombre.addEventListener('click', () => {
        nombre_solicitud(usuario.nombre_parqueo);
    });
    fila.appendChild(nombre);
    fila.insertCell().innerHTML = usuario.duenno_parqueo;
    fila.insertCell().innerHTML = usuario.email_parqueo;
    fila.insertCell().innerHTML = usuario.cedula_juridica;
    fila.insertCell().innerHTML = usuario.permiso_funcionamiento;
    fila.insertCell().innerHTML = usuario.ubicacion_parqueo;

    tabla_usuarios.appendChild(fila);

};
let mostrar_usuarios = () => {
    tabla_usuarios_header.innerHTML = '';
    tabla_usuarios.innerHTML = '';
    head = tabla_usuarios_header.insertRow();
    head.insertCell().innerHTML = 'Nombre';
    head.insertCell().innerHTML = 'Dueño';
    head.insertCell().innerHTML = 'Correo';
    head.insertCell().innerHTML = 'Cedula jurídica';
    head.insertCell().innerHTML = 'Permiso de funcionamiento';
    head.insertCell().innerHTML = 'Ubicación';
    tabla_usuarios_header.appendChild(head);

    for (let i = 1; i <= solicitudes_parqueos.cant_solicitudes; i++) {
        let identificador_solicitud = ('sol_parqueo' + i);
        if (solicitudes_parqueos[identificador_solicitud].estado_parqueo == "Revisión") {
            listar_usuarios(solicitudes_parqueos[identificador_solicitud]);
        }
    }
};

mostrar_usuarios();