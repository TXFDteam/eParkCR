'use strict';

/*
const plantilla_switch = '<form action=""> \n' +
    '<input type="button" id=lista_empleados[identificador_empleado].nombre_empleado value="Activo" onclick="toggle(this);"> \n ' +
    '</form>';*/


const tabla_usuarios = document.querySelector('#tbl-usuarios tbody');




let conv = localStorage.getItem('convenio_seleccionado');




let fila;


const listar_usuarios = (empleado) => {

    fila = tabla_usuarios.insertRow();
    fila.insertCell().innerHTML = empleado.id_empleado;
    fila.insertCell().innerHTML = empleado.nombre_empleado;

    //Esto crea el botón para activar y desactivar un usuario
    let btn_activar = document.createElement('input');
    btn_activar.type = "button";
    btn_activar.id = "input" + empleado.id_empleado; //.id_empleado

    btn_activar.value = empleado.estado;
    btn_activar.addEventListener('click', function() {
        if (this.value == "INACTIVO") {
            this.value = "ACTIVO";
            empleado.estado = "ACTIVO";
        } else
        if (this.value == "ACTIVO") {
            this.value = "INACTIVO";
            empleado.estado = "INACTIVO";
        }
        localStorage.setItem('convenios_empresa', JSON.stringify(convenios_empresa));
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

    if (localStorage.getItem('convenios_empresa')) {
        convenios_empresa = JSON.parse(localStorage.getItem('convenios_empresa'));
    };

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