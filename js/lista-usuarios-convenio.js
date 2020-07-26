'use strict';
/*
const tabla_usuarios = document.querySelector('#tbl-usuarios tbody');

const mostrar_usuarios = async() => {
    const lista_usuarios = await obtener_usuarios();
    tabla_usuarios.innerHTML = '';

    lista_usuarios.forEach(usuario => {
        let filas_tabla = tabla_usuarios.insertRow();
        filas_tabla.insertCell().innerHTML = usuario.codigo;
        filas_tabla.insertCell().innerHTML = usuario.nombre;
        filas_tabla.insertCell().innerHTML = usuario.estado;
    });
};

mostrar_usuarios();*/

const tabla_usuarios = document.querySelector('#tbl-usuarios tbody');
let btn_activar = document.createElement('input');

btn_activar.type = "checkbox";






const mostrar_usuarios = (p_id, p_nombre) => {

    tabla_usuarios.innerHTML = '';


    let filas_tabla = tabla_usuarios.insertRow();
    filas_tabla.insertCell().innerHTML = p_id;
    filas_tabla.insertCell().innerHTML = p_nombre;
    filas_tabla.insertCell().innerHTML = btn_activar;


};

mostrar_usuarios('001', 'Daniel');
mostrar_usuarios('002', 'RO');
mostrar_usuarios('003', 'F');