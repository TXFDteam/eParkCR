'use strict';

/*
const plantilla_switch = '<form action=""> \n' +
    '<input type="button" id=lista_empleados[identificador_empleado].nombre_empleado value="Activo" onclick="toggle(this);"> \n ' +
    '</form>';*/


const tabla_usuarios = document.querySelector('#tbl-usuarios tbody');

let n_parqueo = document.querySelector('#header-parqueo-seleccionado');
let pq;

let conv = localStorage.getItem('convenio_seleccionado');




let fila;


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
            n_parqueo.innerHTML = 'Usuarios registrados en el convenio con ' + convenios_empresa[identificador_convenio].parqueo;
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
if (localStorage.getItem('convenios_empresa')) {
    convenios_empresa = JSON.parse(localStorage.getItem('convenios_empresa'));
};
mostrar_usuarios();
console.log(n_parqueo);

//funcion para filtrar los empleados por el nombre


const input_filtro = document.querySelector('#filtro-empleados');

const filtrar_empleados_nombre = async() => {



    // let lista_de_empleados = await obtener_empleados(); pendiente de obteneer lista de empleados


    let input, filter, table, tr, td, i, txtValue;
    input = document.querySelector('#filtro-empleados');
    filter = input.value.toUpperCase();
    table = document.querySelector('#tbl-usuarios');
    tr = table.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }




}