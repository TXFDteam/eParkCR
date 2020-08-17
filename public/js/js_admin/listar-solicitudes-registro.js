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

    nombre.textContent = usuario.nombre;

    nombre.addEventListener('click', () => {
        localStorage.setItem('Id_parqueo', usuario._id);
        nombre_solicitud(usuario.nombre);
    });
    fila.appendChild(nombre);
    fila.insertCell().innerHTML = usuario.id_duenno;
    fila.insertCell().innerHTML = usuario.email;
    fila.insertCell().innerHTML = usuario.cedula_juridica;
    fila.insertCell().innerHTML = usuario.ubicacion;


    tabla_usuarios.appendChild(fila);

};



let mostrar_usuarios = async() => {
    let arrayParqueos = await obtener_parqueos();
    console.log(arrayParqueos);

    tabla_usuarios_header.innerHTML = '';
    tabla_usuarios.innerHTML = '';
    head = tabla_usuarios_header.insertRow();
    head.insertCell().innerHTML = 'Nombre';
    head.insertCell().innerHTML = 'Dueño';
    head.insertCell().innerHTML = 'Correo';
    head.insertCell().innerHTML = 'Cedula jurídica';
    head.insertCell().innerHTML = 'Ubicación';

    tabla_usuarios_header.appendChild(head);

    for (let i = 0; i < arrayParqueos.length; i++) {
        if (arrayParqueos[i].estado_general == "REGISTRO_PENDIENTE") {
            listar_usuarios(arrayParqueos[i]);
        }
    }
};

mostrar_usuarios();