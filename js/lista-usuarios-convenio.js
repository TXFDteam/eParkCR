'use strict';
/*
const tabla_usuarios = document.querySelector('#tbl-usuarios tbody');

const mostrar_usuarios = async() => {
    const lista_usuarios = await obtener_usuarios();
    tabla_usuarios.innerHTML = '';

    lista_usuarios.forEach(usuario => {
        let filas_tabla = tabla_usuarios.insertRow();
        filas_tabla.insertCell().innerHTML = usuario.codigo;
        filas_tabla.insertCell().innerHTML = usuario.nombre;
        filas_tabla.insertCell().innerHTML = usuario.estado;
    });
};

mostrar_usuarios();*/

const tabla_usuarios = document.querySelector('#tbl-usuarios tbody');
let btn_activar = document.createElement('input');

btn_activar.type = "checkbox";

/*PRIMER ROW PARA TH*/
let thead = document.createElement("tr");

/*CICLO PARA CREAR COLUMNAS TH*/
for (let col = 0; col < 3; col++) {
    //CREAR CELDA*/
    let celda = document.createElement("th");
    /*TITULOS DE COLUMNAS, SIEMPRE LOS MISMOS*/
    if (col == 0) {
        celda.innerHTML = "Id";
    }
    if (col == 1) {
        celda.innerHTML = "Nombre";
    }
    if (col == 2) {
        celda.innerHTML = "Estado";
    }

    thead.appendChild(celda);
}
tabla_usuarios.appendChild(thead);

/*CICLO PARA CREAR FILAS*/
for (let row; row < 5; row++) {
    let row = document.createElement("tr");

    /*ciclo para crear celdas*/
    for (let celdas = 0; celdas < 3; col++) {
        /*crea celda*/
        let celda = document.createElement("td");
        const mostrar_usuarios = (p_id, p_nombre) => {
            if (celdas == 0) {
                celda = p_id;
            }
            if (celdas == 0) {
                celda = p_nombre;
            }
        }
        if (celdas == 2) {
            let rinput;
            rinput = document.createElement('input');
            rinput.type = "checkbox";
        }
        celda.appendChild(rinput);
    }
    row.appendChild(celda);
}
/*
const mostrar_usuarios = (p_id, p_nombre) => {

    tabla_usuarios.innerHTML = '';
    tabla_usuarios.appendChild(btn_activar);

    let filas_tabla = tabla_usuarios.insertRow();
    filas_tabla.insertCell().innerHTML = p_id;
    filas_tabla.insertCell().innerHTML = p_nombre;
    filas_tabla.insertCell().innerHTML = btn_activar;


};*/

mostrar_usuarios('001', 'Daniel');