'use strict';

const btn_usurio_estandar = document.querySelector('#btn-usuario-estandar');
const btn_parqueo = document.querySelector('#btn-parqueo');
const btn_empresa = document.querySelector('#btn-empresa');

const btn_pagina_anterior = document.querySelector('#btn-anterior');
const btn_pagina_siguiente = document.querySelector('#btn-siguiente');

const tabla_usuarios_header = document.querySelector('#tabla-usuarios thead');
const tabla_usuarios = document.querySelector('#tabla-usuarios tbody');

//tabla_usuarios_header.classList.add('estilo-header');

let head;
let fila;


/*-------ESTAS FUNCIONES CAMBIAN EL ESTADO DEL BOTÓN DINÁMICAMENTE--------------*/
let cambiar_estado_boton_cliente = async(x) => {
    let info_clientes = await obtener_clientes();
    console.log(info_clientes);
    for (let i = 0; i < info_clientes.length; i++) {
        if (x.id == "btn" + info_clientes[i]._id) {
            console.log('pasa por aqui')
            if (x.value == 'ACTIVAR') {
                x.value = "DESACTIVAR";
                modificar_estado_cliente(info_clientes[i]._id, 'DESACTIVAR');
            } else if (x.value == 'DESACTIVAR') {
                x.value = "ACTIVAR";
                modificar_estado_cliente(info_clientes[i]._id, 'ACTIVAR');
            }
            break;
        }
    }
};
let cambiar_estado_boton_duenno = async(x) => {
    let info_duennos_parqueo = await obtener_duennos_parqueo();
    console.log(info_duennos_parqueo);
    for (let d = 0; d < info_duennos_parqueo.length; d++) {
        if (x.id == "btn" + info_duennos_parqueo[d]._id) {
            if (x.value == 'ACTIVAR') {
                x.value = "DESACTIVAR";
                modificar_estado_duenno_parqueo(info_duennos_parqueo[d]._id, 'DESACTIVAR');
            } else if (x.value == 'DESACTIVAR') {
                x.value = "ACTIVAR";
                modificar_estado_duenno_parqueo(info_duennos_parqueo[d]._id, 'ACTIVAR');
            }
        }
    }
};

let cambiar_estado_boton_empresa = async(x) => {
    let info_empresas = await obtener_empresas();
    console.log(info_empresas);
    for (let e = 0; e < info_empresas.length; e++) {
        if (x.id == "btn" + info_empresas[e]._id) {
            if (x.value == 'ACTIVAR') {
                x.value = "DESACTIVAR";
                modificar_estado_empresa(info_empresas[e]._id, 'DESACTIVAR');
            } else if (x.value == 'DESACTIVAR') {
                x.value = "ACTIVAR";
                modificar_estado_empresa(info_empresas[e]._id, 'DESACTIVAR');
            }
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
    btn_activar.id = 'btn' + usuario._id;
    console.log(btn_activar.id);
    btn_activar.value = usuario.estado_general;
    btn_activar.addEventListener('click', function() {
        cambiar_estado_boton_cliente(btn_activar);
    });


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

    //console.log(listar_usuarios(info_clientes[0]));
    for (let c = 0; c < info_clientes.length; c++) {
        listar_usuarios(info_clientes[c]);
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
    btn_activar.id = 'btn' + duenno._id;
    btn_activar.value = duenno.estado_general;
    btn_activar.addEventListener('click', function() {
        cambiar_estado_boton_duenno(btn_activar);
    });


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
    btn_activar.id = 'btn' + emp._id;
    btn_activar.value = emp.estado_general;
    btn_activar.addEventListener('click', function() {
        cambiar_estado_boton_empresa(btn_activar);
    });


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


/*---------FILTROS------------*/
let textbuscar = document.getElementById("valor");
textbuscar.onkeyup = function() {
    buscar(this);
}

function buscar(inputbuscar) {
    let valorabuscar = (inputbuscar.value).toLowerCase().trim();
    let tabla = document.getElementById("tabla-usuarios").getElementsByTagName("tbody")[0].rows;
    for (let i = 0; i < tabla.length; i++) {
        let tr = tabla[i];
        let textotr = (tr.innerText).toLowerCase();
        tr.className = (textotr.indexOf(valorabuscar) >= 0) ? "mostrarX" : "ocultar";
    }
}

/*-----------X----------------*/