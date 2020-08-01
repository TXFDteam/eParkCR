'use strict'

//Llamado a divs del html donde se colocara los valores de la reservacion

const output_pend_parqueo = document.querySelector('#detalle_pend_parqueo');
const output_pend_fecha = document.querySelector('#detalle_pend_fecha');
const output_pend_horas = document.querySelector('#detalle_pend_horas');
const output_pend_monto = document.querySelector('#detalle_pend_monto');


//Se toma por default los datos de la reserva1  DETERMINAR EL ID DE LA RESERVA
const numreserva = 'reserva1'



//FALTA FUNCION PARA DETERMINAR EL MONTO TOTAL FINAL A PAGAR
// ---TOMAR EN CUENTA TARIFA DEL PARQUEO, CANTIDAD DE HORAS, DESCUENTOS Y TIPO DE CAMBIO
// ---AGREGAR FUNCION PARA DETERMINAR TIPO DE CAMBIO Y SIGNO SEGUN MONEDA SELECCIONADA
// ---FALTA DETERMINAR PORCENTAJE DE DESCUENTO POR CONVENIO O PROMOCION
// ---FALTA CALCULAR LAS HORAS TOTALES CON HORA DE ENRTADA Y SALIDA **AGREGADO COMO NUMERO MAGICO**
const tipoDeCambio = 1;
const signoMoneda = '₡';
const tarifa = 1000;
const porcentajedescuento = 1; //Calcularse en rango entre [0, 1] para calcularlo con una multiplicacion simple






let mostrar_informacion = () => {

    //Extraer los valores del json
    let parqueo = reservas[numreserva].espacio_seleccionado;
    let fecha = (reservas[numreserva].fecha_reserva);
    let horaEntrada = new Date(reservas[numreserva].hora_entrada);
    let horaSalida = new Date(reservas[numreserva].hora_salida);
    //let monto = reservas[numreserva].monto_total;

    //Crear los espacios para imprimir los datos
    let datoParqueo = document.createElement('p');
    let datoFecha = document.createElement('p');
    let datoHoras = document.createElement('p');
    let datoMonto = document.createElement('p');

    //Hacer los calculos necesarios para el recibo final
    /* let horasTotales = horaSalida.getTime - horaEntrada.getTime; */
    let horasTotales = 3;
    let montofinal = horasTotales * tarifa * tipoDeCambio * porcentajedescuento;


    //Asignar la informacion del json al elemento de html creado
    datoParqueo.innerHTML = parqueo;
    datoFecha.innerHTML = fecha;
    datoHoras.innerHTML = horasTotales;
    datoMonto.innerHTML = (signoMoneda + montofinal);

    //Incluir los datos asignados al contenedor preexistente del html
    output_pend_parqueo.appendChild(datoParqueo);
    output_pend_fecha.appendChild(datoFecha);
    output_pend_horas.appendChild(datoHoras);
    output_pend_monto.appendChild(datoMonto);

};





//Invoca funcion para imprimir los datos de la reservacion
mostrar_informacion();