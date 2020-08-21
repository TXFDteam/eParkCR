'use strict'

/* ----------------------------- Enlaces al html ---------------------------- */
const tabla_reporte_ingresos_body = document.querySelector('#tabla_reporte_ingresos_parqueo tbody');
const tabla_reporte_ingresos_header = document.querySelector('#tabla_reporte_ingresos_parqueo thead');
const btn_descargar = document.querySelector('#btn-descargar');


/* ------------------------ Variables globales del JS ----------------------- */
let array_reservas;
let head;
let fila;

/* ----------------- Opcion descargar reporte para imprimir ----------------- */
btn_descargar.addEventListener('click', function() {
    let printContent = document.querySelector('#tabla_reporte_ingresos');

    window.print(printContent);
});





/* ------------------- Reconocer usuario parqueo logueado ------------------- */
let correoC = localStorage.getItem('correo');
console.log(correoC);
let contrasennaC = localStorage.getItem('contrasenna');
console.log(contrasennaC);



let buscar_info_usuario = async() => {

    let info_usuario = await obtener_info_parqueos();
    let id;
    //c va a ser el  contador para encontrar los clientes
    for (let c = 0; c < info_usuario.length; c++) {
        if (correoC == info_usuario[c].correo && contrasennaC == info_usuario[c].contraseña) {
            id = info_usuario[c]._id;
            console.log(id);

        }
    }
    return id;
};





/* ------------------------ Funcion imprimir en html ------------------------ */
const listar_datos_tabla = (parq, pcantidad_reservas, phoras_promedio, pingresos, pcomision, pganancias) => {

    let fila = tabla_reporte_ingresos_body.insertRow();

    fila.insertCell().innerHTML = parq.nombre;
    fila.insertCell().innerHTML = pcantidad_reservas;
    fila.insertCell().innerHTML = phoras_promedio;
    fila.insertCell().innerHTML = '₡' + pingresos;
    fila.insertCell().innerHTML = '₡' + pcomision;
    fila.insertCell().innerHTML = '₡' + pganancias;

    tabla_reporte_ingresos_body.appendChild(fila);
};




/* -------------- Funcion para obtener los datos para la tabla -------------- */
const listar_reporte = async() => {

    let parqueos = await obtener_parqueos();
    //let reservas = await obtener_reservas(); 

    //Se imprime el header de la tabla
    tabla_reporte_ingresos_header.innerHTML = '';
    tabla_reporte_ingresos_body.innerHTML = '';

    head = tabla_reporte_ingresos_header.insertRow();
    head.insertCell().innerHTML = 'Nombre del Parqueo';
    head.insertCell().innerHTML = 'Total de reservas';
    head.insertCell().innerHTML = 'Horas promedio';
    head.insertCell().innerHTML = 'Ingresos totales';
    head.insertCell().innerHTML = 'Total comisión';
    head.insertCell().innerHTML = 'Balance total';

    tabla_reporte_ingresos_header.appendChild(head);



    //Calculo de datos para la tabla** default para parqueo1
    let identificador_num_parqueo = 'parqueo_1'; //Default: datos de parqueo 1 solamente para probar el html
    let ingresos_totales = 0;
    let porcentaje_comision = administrador.comision / 100;
    let total_comision = 0;
    let ganancias_del_parqueo = 0;
    let id_parqueo = parqueos[identificador_num_parqueo].codigo;
    let cantidad_reservas = 0;
    let total_horas = 0;
    let horas_promedio = 0;

    for (let j = 1; j <= reservas.cant_reservas; j++) {
        let identificador_reserva = ('reserva' + j);

        if (reservas[identificador_reserva].id_parqueo == id_parqueo) {
            ingresos_totales += new Number(reservas[identificador_reserva].monto_total);
            cantidad_reservas++;
            total_horas += new Number(reservas[identificador_reserva].horas);
        };
    };

    total_comision = ingresos_totales * porcentaje_comision;
    horas_promedio = total_horas / cantidad_reservas;
    ganancias_del_parqueo = ingresos_totales - total_comision;


    listar_datos_tabla(parqueos[identificador_num_parqueo], cantidad_reservas, horas_promedio.toFixed(2), ingresos_totales, total_comision, ganancias_del_parqueo);

};



//listar_reporte();