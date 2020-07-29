'use strict';

const btn_usurio_estandar = document.querySelector('#btn-usuario-estandar');
const btn_parqueo = document.querySelector('#btn-parqueo');
const btn_empresa = document.querySelector('#btn-empresa');

const btn_pagina_anterior = document.querySelector('#btn-anterior');
const btn_pagina_siguiente = document.querySelector('#btn-siguiente');
let n_pagina = document.querySelector('#numero-pagina');

const tabla_usuarios_header = document.querySelector('#tabla-usuarios thead');
const tabla_usuarios = document.querySelector('#tabla-usuarios tbody');

const limite_usuarios_pagina = 20;

//tabla_usuarios_header.classList.add('estilo-header');

let head;
let fila;

//USUARIOS


const listar_usuarios = (usuario) => {

    fila = tabla_usuarios.insertRow();
    fila.insertCell().innerHTML = usuario.id_usuario;
    fila.insertCell().innerHTML = usuario.correo_usuario;
    fila.insertCell().innerHTML = usuario.nombre_usuario;
    fila.insertCell().innerHTML = usuario.n_identificacion;
    fila.insertCell().innerHTML = usuario.fecha_nacimiento;

    //Esto crea el botón para activar y desactivar un usuario
    let btn_activar = document.createElement('input');
    btn_activar.type = "button";
    btn_activar.id = "input" + usuario.id_usuario;

    btn_activar.value = usuario.estado_general;
    btn_activar.addEventListener('click', function() {
        if (this.value == "INACTIVO") {
            this.value = "ACTIVO";
        } else if (this.value == "ACTIVO") {
            this.value = "INACTIVO";
        }
    });
    console.log(btn_activar.id);

    btn_activar.classList.add('estilo-btn-activar');

    //fila.insertCell().innerHTML = btn_activar;

    fila.appendChild(btn_activar);

    tabla_usuarios.appendChild(fila);

};

let mostrar_usuarios = () => {
    tabla_usuarios_header.innerHTML = '';
    tabla_usuarios.innerHTML = '';
    head = tabla_usuarios_header.insertRow();
    head.insertCell().innerHTML = 'Id';
    head.insertCell().innerHTML = 'Correo';
    head.insertCell().innerHTML = 'Nombre';
    head.insertCell().innerHTML = 'Identificacion';
    head.insertCell().innerHTML = 'Fecha de nacimiento';
    head.insertCell().innerHTML = 'Estado';
    tabla_usuarios_header.appendChild(head);

    for (let i = 1; i <= usuarios.cant_usuarios; i++) {
        let identificador_usuario = ('usuario' + i);
        listar_usuarios(usuarios[identificador_usuario]);
    }
};

btn_usurio_estandar.addEventListener('click', () => {
    mostrar_usuarios();
});


//PARQUEOS

const listar_parqueos = (parqueo) => {

    fila = tabla_usuarios.insertRow();
    fila.insertCell().innerHTML = parqueo.codigo;
    fila.insertCell().innerHTML = parqueo.email;
    fila.insertCell().innerHTML = parqueo.nombre;
    fila.insertCell().innerHTML = parqueo.cedula_juridica;
    fila.insertCell().innerHTML = parqueo.ubicacion;

    //Esto crea el botón para activar y desactivar un usuario
    let btn_activar = document.createElement('input');
    btn_activar.type = "button";
    btn_activar.id = "input" + parqueo.codigo;

    btn_activar.value = parqueo.estado;
    btn_activar.addEventListener('click', function() {
        if (this.value == "INACTIVO") {
            this.value = "ACTIVO";
        } else if (this.value == "ACTIVO") {
            this.value = "INACTIVO";
        }
    });
    console.log(btn_activar.id);


    btn_activar.classList.add('estilo-btn-activar');

    //fila.insertCell().innerHTML = btn_activar;

    fila.appendChild(btn_activar);
    tabla_usuarios.appendChild(fila);

};
let mostrar_parqueos = () => {
    tabla_usuarios_header.innerHTML = '';
    tabla_usuarios.innerHTML = '';

    head = tabla_usuarios_header.insertRow();
    head.insertCell().innerHTML = 'Id';
    head.insertCell().innerHTML = 'Correo';
    head.insertCell().innerHTML = 'Nombre';
    head.insertCell().innerHTML = 'Identificacion';
    head.insertCell().innerHTML = 'Ubicacion';
    head.insertCell().innerHTML = 'Estado';

    tabla_usuarios_header.appendChild(head);

    for (let i = 1; i <= parqueos.cant_parqueos; i++) {
        let identificador_parqueo = ('parqueo_' + i);
        listar_parqueos(parqueos[identificador_parqueo]);
    }
};

btn_parqueo.addEventListener('click', () => {
    mostrar_parqueos();
});


//EMPRESAS

const listar_empresas = (emp) => {
    fila = tabla_usuarios.insertRow();
    fila.insertCell().innerHTML = emp.codigo_empresa;
    fila.insertCell().innerHTML = emp.correo_empresa;
    fila.insertCell().innerHTML = emp.nombre_empresa;
    fila.insertCell().innerHTML = emp.cedula_empresa;


    //Esto crea el botón para activar y desactivar un usuario
    let btn_activar = document.createElement('input');
    btn_activar.type = "button";
    btn_activar.id = "input" + emp.codigo_empresa;

    btn_activar.value = emp.estado;
    btn_activar.addEventListener('click', function() {
        if (this.value == "INACTIVO") {
            this.value = "ACTIVO";
        } else if (this.value == "ACTIVO") {
            this.value = "INACTIVO";
        }
    });
    console.log(btn_activar.id);


    btn_activar.classList.add('estilo-btn-activar');

    //fila.insertCell().innerHTML = btn_activar;

    fila.appendChild(btn_activar);
    tabla_usuarios.appendChild(fila);

};

let mostrar_empresas = () => {
    tabla_usuarios_header.innerHTML = '';
    tabla_usuarios.innerHTML = '';

    head = tabla_usuarios_header.insertRow();
    head.insertCell().innerHTML = 'Id';
    head.insertCell().innerHTML = 'Correo';
    head.insertCell().innerHTML = 'Nombre';
    head.insertCell().innerHTML = 'Identificacion';
    head.insertCell().innerHTML = 'Estado';

    tabla_usuarios_header.appendChild(head);

    for (let i = 1; i <= empresas.cant_empresas; i++) {
        let identificador_empresa = ('empresa_' + i);
        listar_empresas(empresas.lista_empresas[identificador_empresa]);
    }
};

btn_empresa.addEventListener('click', () => {
    mostrar_empresas();
});