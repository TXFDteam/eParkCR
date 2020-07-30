'use strict';
const tabla_usuarios_header = document.querySelector('#tabla-reservas thead');
const tabla_usuarios = document.querySelector('#tabla-reservas tbody');

let head;
let fila;

/*
const nombre_solicitud = (p_nombre_solicitud) => {
    console.log('La solicitud es: ' + p_nombre_solicitud);

    //Se guarda la variable que dice cuál solicitud se seleccionó
    localStorage.setItem('solicitud_seleccionada', p_nombre_solicitud);

    //Se redirige al html que muestra la solicitud
    window.location.assign("../../html/htmls-admin/info-solicitud-parqueo-admin.html");
};*/

const listar_usuarios = (usuario) => {

    fila = tabla_usuarios.insertRow();

    fila.insertCell().innerHTML = usuario.id_usuario;
    fila.insertCell().innerHTML = usuario.nombre_usuario;
    fila.insertCell().innerHTML = usuario.parqueo_seleccionado;
    fila.insertCell().innerHTML = usuario.fecha_reserva;
    fila.insertCell().innerHTML = usuario.hora_entrada;
    fila.insertCell().innerHTML = usuario.hora_salida;
    fila.insertCell().innerHTML = usuario.monto_total;

    tabla_usuarios.appendChild(fila);

};
let mostrar_usuarios = () => {
    tabla_usuarios_header.innerHTML = '';
    tabla_usuarios.innerHTML = '';
    head = tabla_usuarios_header.insertRow();
    head.insertCell().innerHTML = 'Id';
    head.insertCell().innerHTML = 'Nombre';
    head.insertCell().innerHTML = 'Parqueo';
    head.insertCell().innerHTML = 'Fecha';
    head.insertCell().innerHTML = 'Hora entrada';
    head.insertCell().innerHTML = 'Hora salida';
    head.insertCell().innerHTML = 'Monto pagado';
    tabla_usuarios_header.appendChild(head);

    for (let i = 1; i <= reservas.cant_reservas; i++) {
        let identificador_reserva = ('reserva' + i);
        listar_usuarios(reservas[identificador_reserva]);
    }
};

mostrar_usuarios();