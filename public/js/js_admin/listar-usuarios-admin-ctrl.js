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
let cambiar_estado_boton_usuario = async(x) => {
    let info_clientes = await obtener_clientes();
    console.log(info_clientes);
    for (let i = 0; i < info_clientes.length; i++) {
        if (x._id == "input" + info_clientes[i]._id) {
            x.addEventListener('click', function() {

                if (x.value == 'ACTIVAR') {
                    x.value = "DESACTIVAR";
                    info_clientes[i].estado_general = "DESACTIVAR";
                } else if (x.value == 'DESACTIVAR') {
                    x.value = "ACTIVAR";
                    info_clientes[i].estado_general = "ACTIVAR";
                }


            })
        }
    }
};
let cambiar_estado_boton_duenno = async(x) => {
    for (let d = 0; d < info_duennos_parqueo.length; d++) {
        let info_duennos_parqueo = await obtener_duennos_parqueo();
        console.log(info_duennos_parqueo);
        if (x._id == "input" + info_duennos_parqueo[d]._id) {
            x.addEventListener('click', function() {

                if (x.value == 'ACTIVAR') {
                    x.value = "DESACTIVAR";
                    duennos_parqueos[identificador_duenno].estado_general = "DESACTIVAR";
                } else if (x.value == 'DESACTIVAR') {
                    x.value = "ACTIVAR";
                    duennos_parqueos[identificador_duenno].estado_general = "ACTIVAR";
                }

            })
        }
    }
};
let cambiar_estado_boton_empresa = async(x) => {
    let info_empresas = await obtener_empresas();
    console.log(info_empresas);
    for (let e = 0; e < info_empresas.length; e++) {
        if (x._id == "input" + info_empresas[e]._id) {
            x.addEventListener('click', function() {

                if (x.value == 'ACTIVAR') {
                    x.value = "DESACTIVAR";
                    info_empresas[e].estado_general = "DESACTIVAR";
                } else if (x.value == 'DESACTIVAR') {
                    x.value = "ACTIVAR";
                    info_empresas[e].estado_general = "ACTIVAR";
                }

            })
        }
    }
};


//USUARIOS
const listar_usuarios = (usuario) => {

    fila = tabla_usuarios.insertRow();
    fila.insertCell().innerHTML = usuario._id;
    fila.insertCell().innerHTML = usuario.correo;
    fila.insertCell().innerHTML = usuario.nombre;
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



let mostrar_usuarios = async() => {
    let info_clientes = await obtener_clientes();
    console.log(info_clientes);
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


    for (let i = 0; i < info_clientes[i]; i++) {
        listar_usuarios(info_clientes[i]);
    }

};

btn_usurio_estandar.addEventListener('click', () => {
    mostrar_usuarios();
});



//PARQUEOS

const listar_duennos = (duenno) => {

    fila = tabla_usuarios.insertRow();
    fila.insertCell().innerHTML = duenno._id;
    fila.insertCell().innerHTML = duenno.correo;
    fila.insertCell().innerHTML = duenno.nombre;
    fila.insertCell().innerHTML = duenno.n_identificacion;
    fila.insertCell().innerHTML = duenno.telefono;
    fila.insertCell().innerHTML = duenno.cuenta_bancaria;

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
let mostrar_parqueos = async() => {
    let info_duennos_parqueo = await obtener_duennos_parqueo();
    console.log(info_duennos_parqueo);
    tabla_usuarios_header.innerHTML = '';
    tabla_usuarios.innerHTML = '';

    head = tabla_usuarios_header.insertRow();
    head.insertCell().innerHTML = 'Id';
    head.insertCell().innerHTML = 'Correo';
    head.insertCell().innerHTML = 'Nombre';
    head.insertCell().innerHTML = 'Identificación';
    head.insertCell().innerHTML = 'Teléfono';
    head.insertCell().innerHTML = 'Cuenta bancaria';
    head.insertCell().innerHTML = 'Estado';

    tabla_usuarios_header.appendChild(head);

    for (let d = 0; d < info_duennos_parqueo.length; d++) {
        listar_duennos(info_duennos_parqueo[d]);
    }
};

btn_parqueo.addEventListener('click', () => {
    mostrar_parqueos();
});


//EMPRESAS

const listar_empresas = (emp) => {
    fila = tabla_usuarios.insertRow();
    fila.insertCell().innerHTML = emp._id;
    fila.insertCell().innerHTML = emp.correo;
    fila.insertCell().innerHTML = emp.nombre;
    fila.insertCell().innerHTML = emp.nombre_encargado;
    fila.insertCell().innerHTML = emp.n_identificacion;


    //Esto crea el botón para activar y desactivar un usuario
    let btn_activar = document.createElement('input');
    btn_activar.type = "button";
    btn_activar.id = "input" + emp.codigo_empresa;

    btn_activar.value = emp.estado_empresa;
    cambiar_estado_boton_empresa(btn_activar);
    console.log(btn_activar.id);
    console.log(btn_activar.value);


    btn_activar.classList.add('estilo-btn-activar-empresa');

    //fila.insertCell().innerHTML = btn_activar;

    fila.appendChild(btn_activar);
    tabla_usuarios.appendChild(fila);

};

let mostrar_empresas = async() => {
    let info_empresas = await obtener_empresas();
    console.log(info_empresas);
    tabla_usuarios_header.innerHTML = '';
    tabla_usuarios.innerHTML = '';

    head = tabla_usuarios_header.insertRow();
    head.insertCell().innerHTML = 'Id';
    head.insertCell().innerHTML = 'Correo';
    head.insertCell().innerHTML = 'Nombre empresa';
    head.insertCell().innerHTML = 'Nombre encargado';
    head.insertCell().innerHTML = 'Identificacion';
    head.insertCell().innerHTML = 'Estado';

    tabla_usuarios_header.appendChild(head);



    for (let i = 0; i < info_empresas.length; i++) {
        listar_empresas(info_empresas[i]);
    }
};

btn_empresa.addEventListener('click', () => {
    mostrar_empresas();
});