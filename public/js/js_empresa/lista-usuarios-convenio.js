'use strict';

/*
const plantilla_switch = '<form action=""> \n' +
    '<input type="button" id=lista_empleados[identificador_empleado].nombre_empleado value="Activo" onclick="toggle(this);"> \n ' +
    '</form>';*/


const tabla_usuarios = document.querySelector('#tbl-usuarios tbody');
let input_correo_empleado = document.querySelector('#correo-añadir-empleado');
const btn_añadir_empleado = document.querySelector('#btn-añadir-empleado');

let n_parqueo = document.querySelector('#header-parqueo-seleccionado');
let pq;

let conv = localStorage.getItem('convenio_seleccionado');
console.log(conv);



let fila;


btn_añadir_empleado.addEventListener('click', () => {
    localStorage.setItem('Correo_empleado_nuevo', input_correo_empleado.value);
});

let cambiar_estado_boton_empleado = (x) => {
    for (let i = 1; i <= convenios_empresa.cant_convenios; i++) {
        let identificador_convenio = ('convenio' + i);

        for (let e = 1; e <= convenios_empresa[identificador_convenio].cant_empleados; e++) {

            let identificador_empleado = ('empleado' + e);

            if (x.id == "input" + convenios_empresa[identificador_convenio].empleados[identificador_empleado].id_empleado) {

                x.addEventListener('click', function() {

                    if (x.value == 'ACTIVAR') {
                        x.value = "DESACTIVAR";
                        convenios_empresa[identificador_convenio].empleados[identificador_empleado].estado = "DESACTIVAR";
                    } else if (x.value == 'DESACTIVAR') {
                        x.value = "ACTIVAR";
                        convenios_empresa[identificador_convenio].empleados[identificador_empleado].estado = "ACTIVAR";
                    }
                    localStorage.setItem('convenios_empresa', JSON.stringify(convenios_empresa));

                })
            }
        }
    }
};

const listar_usuarios = (empleado) => {

    //const empleado = await obtener_empleados();//funcion pendiente de crear en el servicio

    fila = tabla_usuarios.insertRow();
    fila.insertCell().innerHTML = empleado.id_empleado;
    fila.insertCell().innerHTML = empleado.nombre_empleado;

    //Esto crea el botón para activar y desactivar un usuario
    let btn_activar = document.createElement('input');
    btn_activar.type = "button";
    btn_activar.id = "input" + empleado.id_empleado; //.id_empleado

    btn_activar.value = empleado.estado;
    cambiar_estado_boton_empleado(btn_activar);
    console.log(btn_activar.id);
    console.log(btn_activar.value);


    btn_activar.classList.add('estilo-btn-activar');

    //fila.insertCell().innerHTML = btn_activar;

    fila.appendChild(btn_activar);
    tabla_usuarios.appendChild(fila);



};

let mostrar_usuarios = async() => {
    tabla_usuarios.innerHTML = '';


    let empresa_correcta;

    let convenios_empresa = await obtener_convenios();
    let clientes = await obtener_clientes();

    let correoEmpleado = localStorage.getItem('Correo_empleado_nuevo');
    console.log(correoEmpleado);

    for (let i = 0; i < convenios_empresa.length; i++) {
        if (conv == convenios_empresa[i]._id) {
            for (let c = 0; c < clientes.length; c++) {
                if (input_correo_empleado.value) {

                }
            }

        }
    }



};

mostrar_usuarios();
console.log(n_parqueo);

//funcion para filtrar los empleados por el nombre


const input_filtro = document.querySelector('#filtro-empleados');

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