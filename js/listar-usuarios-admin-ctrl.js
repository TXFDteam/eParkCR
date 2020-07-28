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

let mostrar_usuarios = () => {
    tabla_usuarios.innerHTML = '';
    //variable que determina si es el mismo codigo de convenio
    let det = false;
    //Variable que tiene el codigo de convenio
    let convenio;
    //Variable que tiene la cantidad de empleados en ese convenio
    let convEmpleados;
    //Variable que tiene el numero de convenio en que se encuentra el código de convenio del convenio seleccionado en el cuadro de convenios.
    let idConvenio;

    for (let i = 1; i <= convenios_empresa.cant_convenios; i++) {
        let identificador_convenio = ('convenio' + i);

        convenio = convenios_empresa[identificador_convenio].codigo_convenio;
        idConvenio = convenios_empresa[identificador_convenio];
        //VALIDA SI ES EL MISMO CODIGO
        if (convenio == conv) {
            det = true;
            convEmpleados = convenios_empresa[identificador_convenio].cant_empleados;
            break;
        } else {
            det = false;
        };
    };


    //Este if crea la lista de usuarios si el codigo de convenio es el mismo
    if (det = true) {
        for (let x = 1; x <= convEmpleados; x++) {

            //Esta variable determina el numero de empleado dentro del ciclo
            let identificador_empleado = ('empleado' + x);

            listar_usuarios(idConvenio.empleados[identificador_empleado]);
        }
    }
};
mostrar_usuarios();