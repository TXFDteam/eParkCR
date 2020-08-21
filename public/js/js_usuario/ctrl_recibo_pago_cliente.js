'use strict'

//Enlaces al html
const output_recibo_parqueo = document.querySelector('#detalle_recibo_parqueo');
const output_recibo_fecha = document.querySelector('#detalle_recibo_fecha');
const output_recibo_horas = document.querySelector('#detalle_recibo_horas');
const output_recibo_monto_final = document.querySelector('#detalle_recibo_monto');
const output_recibo_tarjeta = document.querySelector('#detalle_recibo_tarjeta');
const link_btn_regresar = document.querySelector('#btn_regresar');
const btn_descargar = document.querySelector('#btn_descargar');


//Enlace de regreso al Historial de reservas
link_btn_regresar.addEventListener('click', () => {
    window.location.assign('historial_reservas_cliente.html');
});


/* ----------------- Opcion descargar reporte para imprimir ----------------- */
btn_descargar.addEventListener('click', function() {
    let printContent = document.querySelector('#tabla_recibo');

    window.print(printContent);
});




/* -------- Identificar la reserva actual ------- */
const numreserva = obtener_reserva_id_url('_id');
console.log('El ID de la reserva es: ' + numreserva);


/* ---------------------- Imprimir los datos del recibo --------------------- */
const mostrar_recibo = async() => {

    let reserva = await obtener_reservas(numreserva);
    console.log('La informacion de la reserva es: ');
    console.log(reserva);

    //Extraigo la informacion de la base de datos
    let parqueo = (reserva.nombre_parqueo);
    let fecha = (reserva.fecha_reserva);
    let horas = (reserva.horas);
    let monto = (reserva.monto_final);
    let tarjeta = ('*** ' + reserva.tarjeta_creditada[15] + reserva.tarjeta_creditada[16] + reserva.tarjeta_creditada[17] + reserva.tarjeta_creditada[18]);

    //Crear los espacios para imprimir los datos
    let datoParqueo = document.createElement('p');
    let datoFecha = document.createElement('p');
    let datoHoras = document.createElement('p');
    let datoMonto = document.createElement('p');
    let datoTarjeta = document.createElement('p');

    //Asignar la informacion de la base de datos al elemento de html creado
    datoParqueo.innerHTML = parqueo;
    datoFecha.innerHTML = fecha;
    datoHoras.innerHTML = horas;
    datoMonto.innerHTML = '₡' + monto;
    datoTarjeta.innerHTML = tarjeta;


    //Incluir los datos llenados a los contenedores preexistentes del html
    output_recibo_parqueo.appendChild(datoParqueo);
    output_recibo_fecha.appendChild(datoFecha);
    output_recibo_horas.appendChild(datoHoras);
    output_recibo_monto_final.appendChild(datoMonto);
    output_recibo_tarjeta.appendChild(datoTarjeta);
};



/* ------------- (Solo imprime los datos si el recibo esta pagado) ------------ */

mostrar_recibo();