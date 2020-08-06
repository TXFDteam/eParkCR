'use strict'

//Relacionar la informacion del HTML
const tabla_reporte_ingresos_body = document.querySelector('#tabla_reporte_ingresos tbody');
const tabla_reporte_ingresos_header = document.querySelector('#tabla_reporte_ingresos thead');
const btn_descargar = document.querySelector('#btn-descargar');

//Variables globales
let array_reservas;
let head;
let fila;



/* ----------------- Opcion descargar reporte para imprimir ----------------- */
btn_descargar.addEventListener('click', function() {
    let printContent = document.querySelector('#tabla_reporte_ingresos');

    window.print(printContent);
});



/* ------------------------ Funcion imprimir en html ------------------------ */
const listar_datos_tabla = (parq, pingresos, pcomision, pganancias) => {
    let fila = tabla_reporte_ingresos_body.insertRow();

    fila.insertCell().innerHTML = parq.codigo;
    fila.insertCell().innerHTML = parq.nombre;
    fila.insertCell().innerHTML = '₡' + pingresos;
    fila.insertCell().innerHTML = '₡' + pcomision;
    fila.insertCell().innerHTML = '₡' + pganancias;

    tabla_reporte_ingresos_body.appendChild(fila);
};





/* ----------------- Funcion obtener los datos para la tabla ---------------- */
const listar_reporte = () => {

    //Imprime el header de la tabla
    tabla_reporte_ingresos_header.innerHTML = '';
    tabla_reporte_ingresos_body.innerHTML = '';
    head = tabla_reporte_ingresos_header.insertRow();
    head.insertCell().innerHTML = 'Id';
    head.insertCell().innerHTML = 'Nombre del parqueo';
    head.insertCell().innerHTML = 'Ingresos totales';
    head.insertCell().innerHTML = 'Total comisión';
    head.insertCell().innerHTML = 'Ganancias del parqueo';

    tabla_reporte_ingresos_header.appendChild(head);


    //Se lee cada uno de los parqueos de la app
    for (let i = 1; i <= parqueos.cant_parqueos; i++) {
        let identificador_num_parqueo = ('parqueo_' + i);
        let ingresos_totales = 0;
        let porcentaje_comision = administrador.comision / 100;
        let total_comision = 0;
        let ganancias_del_parqueo = 0;
        let id_parqueo = parqueos[identificador_num_parqueo].codigo;


        //Se calcula los datos de la tabla desde cada reservacion perteneciente al parqueo 'parqueo_i'
        for (let j = 1; j <= reservas.cant_reservas; j++) {
            let identificador_reserva = ('reserva' + j);

            if (reservas[identificador_reserva].id_parqueo == id_parqueo) {
                ingresos_totales += new Number(reservas[identificador_reserva].monto_total);
            };
        };

        total_comision = ingresos_totales * porcentaje_comision;
        ganancias_del_parqueo = ingresos_totales - total_comision;

        listar_datos_tabla(parqueos[identificador_num_parqueo], ingresos_totales, total_comision, ganancias_del_parqueo);
    }
};



listar_reporte();