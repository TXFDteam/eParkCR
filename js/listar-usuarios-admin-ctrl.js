'use strict';

const btn_usurio_estandar = document.querySelector('#btn-usuario-estandar');
const btn_parqueo = document.querySelector('#btn-parqueo');
const btn_empresa = document.querySelector('#btn-empresa');

const btn_pagina_anterior = document.querySelector('#btn-anterior');
const btn_pagina_siguiente = document.querySelector('#btn-siguiente');
let n_pagina = document.querySelector('#numero-pagina');

const tabla_usuarios = document.querySelector('#tbl-usuarios tbody');

const limite_usuarios_pagina = 20;

const listar_usuarios = (empleado) => {

    fila = tabla_usuarios.insertRow();
    fila.insertCell().innerHTML = empleado.id_empleado;
    fila.insertCell().innerHTML = empleado.nombre_empleado;

    //Esto crea el botón para activar y desactivar un usuario
    let btn_activar = document.createElement('input');
    btn_activar.type = "button";
    btn_activar.id = "input" + empleado.id_empleado;

    btn_activar.value = empleado.estado;
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

const mostrar_usuarios = () => {

};