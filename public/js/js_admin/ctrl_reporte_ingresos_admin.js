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




/* ----------------- Funcion obtener los datos para la tabla ---------------- */
const listar_reporte = async() => {

    //Imprime el header de la tabla
    tabla_reporte_ingresos_header.innerHTML = '';
    tabla_reporte_ingresos_body.innerHTML = '';
    head = tabla_reporte_ingresos_header.insertRow();

    head.insertCell().innerHTML = 'Nombre del parqueo';
    head.insertCell().innerHTML = 'Ingresos totales';
    head.insertCell().innerHTML = 'Comisión';
    head.insertCell().innerHTML = 'Ganancias del parqueo';

    tabla_reporte_ingresos_header.appendChild(head);



    //Se lee cada uno de los parqueos de la app
    let lista_parqueos = await obtener_parqueos();
    let lista_reservas = await obtener_reservas();
    let datos_admin = await obtener_datos_admin();
    let porcentaje_comision = 0.08;

    let total_comision_admin = 0

    console.log(lista_parqueos);
    console.log(lista_reservas);
    console.log(datos_admin);

    lista_parqueos.forEach(parqueo => {

        let ingresos_totales = 0;
        let total_comision = 0;
        let ganancias_del_parqueo = 0;
        let id_parqueo = parqueo._id;

        console.log(parqueo.nombre);


        //Se calcula los datos de la tabla desde cada reservacion perteneciente al parqueo parqueo
        lista_reservas.forEach(reserva => {
            if (reserva.id_parqueo == id_parqueo) {
                ingresos_totales += new Number(reserva.monto_total);
            };

        });

        total_comision = ingresos_totales * porcentaje_comision;
        ganancias_del_parqueo = ingresos_totales - total_comision;
        console.log(ingresos_totales);
        console.log(porcentaje_comision);
        console.log(total_comision)


        let fila = tabla_reporte_ingresos_body.insertRow();

        fila.insertCell().innerHTML = parqueo.nombre;
        fila.insertCell().innerHTML = '₡' + new Number(ingresos_totales).toFixed(2);
        fila.insertCell().innerHTML = '₡' + new Number(total_comision).toFixed(2);
        fila.insertCell().innerHTML = '₡' + new Number(ganancias_del_parqueo).toFixed(2);

        tabla_reporte_ingresos_body.appendChild(fila);


        total_comision_admin += total_comision;

    });

    let fila = tabla_reporte_ingresos_body.insertRow();

    fila.insertCell().innerHTML = '';
    fila.insertCell().innerHTML = '';
    fila.insertCell().innerHTML = 'GANANCIAS DE LA APLICACION: ';
    fila.insertCell().innerHTML = '____₡' + total_comision_admin + '____';
    tabla_reporte_ingresos_body.appendChild(fila);

};



listar_reporte();