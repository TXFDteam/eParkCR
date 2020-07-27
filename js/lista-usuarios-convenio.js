'use strict';

/*
const plantilla_switch = '<form action=""> \n' +
    '<input type="button" id=lista_empleados[identificador_empleado].nombre_empleado value="Activo" onclick="toggle(this);"> \n ' +
    '</form>';*/


/*
function toggle(button) {
    if (document.getElementById("btn-empleado1").value == "OFF") {
        document.getElementById("1").value = "ON";
    } else {
        document.getElementById("1").value = "OFF";
    }
}*/

const tabla_usuarios = document.querySelector('#tbl-usuarios tbody');


console.log(localStorage.getItem('id_convenio1'));

for (let i = 1; i <= convenios_empresa.cant_convenios; i++) {
    let contConv;
};
const mostrar_usuarios = () => {
    tabla_usuarios.innerHTML = '';


    const cantidad_empleados = convenios_empresa.ca;
    for (let x = 1; x <= cantidad_empleados; x++) {



        let identificador_empleado = ('empleado' + x);
        console.log(identificador_empleado);


        /*
                function toggle(button) {
                    if (document.getElementById(lista_empleados[identificador_empleado].id_empleado).value == "Inactivo") {
                        document.getElementById(lista_empleados[identificador_empleado].id_empleado).value == "Activo";
                        console.log(document.getElementById(lista_empleados[identificador_empleado].id_empleado).value);
                    } else {
                        document.getElementById(lista_empleados[identificador_empleado].id_empleado).value == "Inactivo";
                    }
                }*/

        let btn_activar = document.createElement('input');
        btn_activar.type = "button";
        btn_activar.id = lista_empleados[identificador_empleado].id_empleado;
        btn_activar.value = "Activo";
        btn_activar.onclick = "toogle(this);";
        console.log(btn_activar.id);


        let fila = tabla_usuarios.insertRow();
        fila.insertCell().innerHTML = lista_empleados[identificador_empleado].id_empleado;
        fila.insertCell().innerHTML = lista_empleados[identificador_empleado].nombre_empleado;
        //fila.insertCell().innerHTML = btn_activar;

        //fila.appendChild(btn_activar);
        tabla_usuarios.appendChild(fila);
    };


};


mostrar_usuarios();








/*
const mostrar_usuarios = (p_id, p_nombre) => {

    tabla_usuarios.innerHTML = '';


    let filas_tabla = tabla_usuarios.insertRow();
    filas_tabla.insertCell().innerHTML = p_id;
    filas_tabla.insertCell().innerHTML = p_nombre;
    filas_tabla.insertCell().innerHTML = btn_activar;


};

mostrar_usuarios('001', 'Daniel');
mostrar_usuarios('002', 'RO');
mostrar_usuarios('003', 'F');
*/