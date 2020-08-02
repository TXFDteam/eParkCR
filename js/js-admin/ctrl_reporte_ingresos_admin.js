'use strict'

//Relacionar la informacion del HTML
//const tabla_reporte_ingresos_header = document.querySelector('#tabla_reporte_ingresos thead');
const tabla_reporte_ingresos_body = document.querySelector('#tabla_reporte_ingresos tbody');
const tabla_reporte_ingresos_header = document.querySelector('#tabla_reporte_ingresos thead');
const btn_descargar = document.querySelector('#btn-descargar');


let array_reservas;
let head;
let fila;



btn_descargar.addEventListener('click', function() {
    let printContent = document.querySelector('#tabla_reporte_ingresos');

    window.print(printContent);

});



const listar_datos_tabla = (parq) => {
    let fila = tabla_reporte_ingresos_body.insertRow();

    fila.insertCell().innerHTML = parq.codigo;
    fila.insertCell().innerHTML = parq.nombre;
    fila.insertCell().innerHTML = parq.hora_entrada;
    /*
        if (reservas[identificador_reserva].estado_reserva == 'Paga') {
            fila.insertCell().innerHTML = reservas[identificador_reserva].monto_final;
            fila.insertCell().innerHTML = 'Cancelado' + boton_recibo;

        } else {
            fila.insertCell().innerHTML = reservas[identificador_reserva].monto_total;
            fila.insertCell().innerHTML = reservas[identificador_reserva].estado_reserva;
        }
    */
    tabla_reporte_ingresos_body.appendChild(fila);
};

const listar_reporte = () => {
    tabla_reporte_ingresos_header.innerHTML = '';
    tabla_reporte_ingresos_body.innerHTML = '';
    head = tabla_reporte_ingresos_header.insertRow();
    head.insertCell().innerHTML = 'Id';
    head.insertCell().innerHTML = 'Nombre del parqueo';
    head.insertCell().innerHTML = 'Ingresos totales';
    head.insertCell().innerHTML = 'Total comisión';
    head.insertCell().innerHTML = 'Ganancias del parqueo';

    tabla_reporte_ingresos_header.appendChild(head);
    //AQUÍ CREA LOS DATOS DE LA TABLA
    for (let i = 1; i <= parqueos.cant_parqueos; i++) {
        let identificador_parqueo = ('parqueo_' + i);
        listar_datos_tabla(parqueos[identificador_parqueo]);
    }
};

listar_reporte();