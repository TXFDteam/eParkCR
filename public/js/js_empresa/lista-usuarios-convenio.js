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



//----FUNCIÓN PARA CAMBIAR EL ESTADO DEL EMPLEADO-------
let cambiar_estado_boton_empleado = async(x) => {

    let convenios_empresa = await obtener_convenios();

    for (let i = 0; i < convenios_empresa.length; i++) {
        for (let em = 0; em < convenios_empresa[i].usuarios.length; em++) {
            if (x.id == "input" + convenios_empresa[i].usuarios[em]._id) {
                console.log('aqui');
                if (x.value == 'ACTIVAR') {
                    x.value = "DESACTIVAR";
                    modificar_estado_empleado(convenios_empresa[i]._id, convenios_empresa[i].usuarios[em]._id, 'DESACTIVAR');
                } else if (x.value == 'DESACTIVAR') {
                    x.value = "ACTIVAR";
                    modificar_estado_empleado(convenios_empresa[i]._id, convenios_empresa[i].usuarios[em]._id, 'ACTIVAR');
                }
                break;
            }
        }
    }
};
//------------------------------------------------------
btn_añadir_empleado.addEventListener('click', async() => {
    let clientes = await obtener_clientes();
    console.log(clientes);
    let convenios_empresa = await obtener_convenios();

    for (let i = 0; i < convenios_empresa.length; i++) {
        if (conv == convenios_empresa[i]._id) {
            for (let c = 0; c < clientes.length; c++) {
                if (clientes[c].correo == input_correo_empleado.value) {
                    console.log(clientes[c].correo);
                    console.log(input_correo_empleado.value);
                    agregar_usuario(convenios_empresa[i]._id, clientes[c].nombre, clientes[c].correo, clientes[c]._id);
                    break;
                }
            }
        }
    }
});



let mostrar_usuarios = async() => {
    tabla_usuarios.innerHTML = '';
    let convenios_empresa = await obtener_convenios();

    for (let i = 0; i < convenios_empresa.length; i++) {
        if (conv == convenios_empresa[i]._id) {
            for (let em = 0; em < convenios_empresa[i].usuarios.length; em++) {
                fila = tabla_usuarios.insertRow();
                fila.insertCell().innerHTML = convenios_empresa[i].usuarios[em].nombre_empleado;
                //fila.insertCell().innerHTML = convenios_empresa[i].usuarios[em].correo_empleado;
                //Esto crea el botón para activar y desactivar un usuario
                let btn_activar = document.createElement('input');
                btn_activar.type = "button";
                btn_activar.id = "input" + convenios_empresa[i].usuarios[em]._id; //.id_empleado

                btn_activar.value = convenios_empresa[i].usuarios[em].estado;

                btn_activar.addEventListener('click', function() {
                    cambiar_estado_boton_empleado(btn_activar);
                })


                console.log(btn_activar.id);
                console.log(btn_activar.value);


                btn_activar.classList.add('estilo-btn-activar');

                //fila.insertCell().innerHTML = btn_activar;

                fila.appendChild(btn_activar);
                tabla_usuarios.appendChild(fila);
            }
        }

    }

};

mostrar_usuarios();





/*---------FILTROS------------*/
let textbuscar = document.getElementById("valor");
textbuscar.onkeyup = function() {
    buscar(this);
}

function buscar(inputbuscar) {
    let valorabuscar = (inputbuscar.value).toLowerCase().trim();
    let tabla = document.getElementById("tbl-usuarios").getElementsByTagName("tbody")[0].rows;
    for (let i = 0; i < tabla.length; i++) {
        let tr = tabla[i];
        let textotr = (tr.innerText).toLowerCase();
        tr.className = (textotr.indexOf(valorabuscar) >= 0) ? "mostrarX" : "ocultar";
    }
}

/*-----------X----------------*/