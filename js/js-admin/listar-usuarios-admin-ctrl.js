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



/*-------ESTAS FUNCIONES CAMBIAN EL ESTADO DEL BOTÓN DINÁMICAMENTE--------------*/
let cambiar_estado_boton_usuario = (x) => {
    for (let i = 1; i <= usuarios.cant_usuarios; i++) {
        let identificador_usuario = ('usuario' + i);
        if (x.id == "input" + usuarios[identificador_usuario].id_usuario) {
            x.addEventListener('click', function() {

                if (x.value == 'ACTIVAR') {
                    x.value = "DESACTIVAR";
                    usuarios[identificador_usuario].estado_general = "DESACTIVAR";
                } else if (x.value == 'DESACTIVAR') {
                    x.value = "ACTIVAR";
                    usuarios[identificador_usuario].estado_general = "ACTIVAR";
                }
                localStorage.setItem('usuarios', JSON.stringify(usuarios));

            })
        }
    }
};
let cambiar_estado_boton_duenno = (x) => {
    for (let d = 1; d <= duennos_parqueos.cant_duennos; d++) {
        let identificador_duenno = ('duenno_parqueo' + d);
        if (x.id == "input" + duennos_parqueos[identificador_duenno].id_usuario) {
            x.addEventListener('click', function() {

                if (x.value == 'ACTIVAR') {
                    x.value = "DESACTIVAR";
                    duennos_parqueos[identificador_duenno].estado_general = "DESACTIVAR";
                } else if (x.value == 'DESACTIVAR') {
                    x.value = "ACTIVAR";
                    duennos_parqueos[identificador_duenno].estado_general = "ACTIVAR";
                }
                localStorage.setItem('duennos', JSON.stringify(duennos_parqueos));

            })
        }
    }
};
let cambiar_estado_boton_empresa = (x) => {
    for (let e = 1; e <= empresas.cant_empresas; e++) {
        let identificador_empresa = ('empresa_' + e);
        if (x.id == "input" + empresas.lista_empresas[identificador_empresa].codigo_empresa) {
            x.addEventListener('click', function() {

                if (x.value == 'ACTIVAR') {
                    x.value = "DESACTIVAR";
                    empresas.lista_empresas[identificador_empresa].estado_empresa = "DESACTIVAR";
                } else if (x.value == 'DESACTIVAR') {
                    x.value = "ACTIVAR";
                    empresas.lista_empresas[identificador_empresa].estado_empresa = "ACTIVAR";
                }
                localStorage.setItem('empresas', JSON.stringify(empresas));

            })
        }
    }
};


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
    cambiar_estado_boton_usuario(btn_activar);


    console.log(btn_activar.id);

    btn_activar.classList.add('estilo-btn-activar-usuario');

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

    if (localStorage.getItem('usuarios')) {
        usuarios = JSON.parse(localStorage.getItem('usuarios'));
    };

    for (let i = 1; i <= usuarios.cant_usuarios; i++) {
        let identificador_usuario = ('usuario' + i);
        listar_usuarios(usuarios[identificador_usuario]);
    }

};

btn_usurio_estandar.addEventListener('click', () => {
    mostrar_usuarios();
});
/*
btn_activar.addEventListener('click', function() {
    if (localStorage.getItem('parqueos')) {
        parqueos = JSON.parse(localStorage.getItem('parqueos'));
    };
    cambiar_estado_boton_usuario();
});*/


//PARQUEOS

const listar_duennos = (duenno) => {

    fila = tabla_usuarios.insertRow();
    fila.insertCell().innerHTML = duenno.id_usuario;
    fila.insertCell().innerHTML = duenno.correo_duenno;
    fila.insertCell().innerHTML = duenno.nombre;
    fila.insertCell().innerHTML = duenno.telefono_duenno_parqueo;
    fila.insertCell().innerHTML = duenno.fecha_nacimiento;

    //Esto crea el botón para activar y desactivar un usuario
    let btn_activar = document.createElement('input');
    btn_activar.type = "button";
    btn_activar.id = "input" + duenno.id_usuario;

    btn_activar.value = duenno.estado_general;
    cambiar_estado_boton_duenno(btn_activar);
    console.log(btn_activar.id);


    btn_activar.classList.add('estilo-btn-activar-duenno');

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
    head.insertCell().innerHTML = 'Teléfono';
    head.insertCell().innerHTML = 'Fecha de nacimiento';
    head.insertCell().innerHTML = 'Estado';

    tabla_usuarios_header.appendChild(head);

    if (localStorage.getItem('parqueos')) {
        parqueos = JSON.parse(localStorage.getItem('parqueos'));
    };

    for (let d = 1; d <= duennos_parqueos.cant_duennos; d++) {
        let identificador_duenno = ('duenno_parqueo' + d);
        listar_duennos(duennos_parqueos[identificador_duenno]);
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

    btn_activar.value = emp.estado_empresa;
    cambiar_estado_boton_empresa(btn_activar);
    console.log(btn_activar.id);
    console.log(btn_activar.estado);


    btn_activar.classList.add('estilo-btn-activar-empresa');

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

    if (localStorage.getItem('empresas')) {
        empresas = JSON.parse(localStorage.getItem('empresas'));
    };

    for (let i = 1; i <= empresas.cant_empresas; i++) {
        let identificador_empresa = ('empresa_' + i);
        listar_empresas(empresas.lista_empresas[identificador_empresa]);
        console.log(empresas.lista_empresas[identificador_empresa].estado_empresa);
    }
};

btn_empresa.addEventListener('click', () => {
    mostrar_empresas();
});