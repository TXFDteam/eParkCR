'use strict'

/* ------------------------------ Enlace a html ----------------------------- */
//Llamado a divs del html donde se colocara los valores de la reservacion
const output_pend_parqueo = document.querySelector('#detalle_pend_parqueo');
const output_pend_fecha = document.querySelector('#detalle_pend_fecha');
const output_pend_horas = document.querySelector('#detalle_pend_horas');
const output_pend_monto = document.querySelector('#detalle_pend_monto');
const input_moneda_seleccionada = document.querySelector('#menu_moneda input[type=radio]:checked');


/* -------------------------- Links a otras paginas ------------------------- */
//botones - link
const btn_link_revisar_tarjetas = document.querySelector('#link_revisar_tarjetas');
const btn_link_generar_recibo = document.querySelector('#link_generar_recibo');

//Enlaces a otras paginas
btn_link_revisar_tarjetas.addEventListener('click', () => {
    window.location.assign('listar_tarjetas.html');
});





const obtener_usuario_ingresado = () => {
    let contrasenna = localStorage.getItem('contrasenna');
    let correo = localStorage.getItem('correo');

    for (let i = 1; i < usuarios.cant_usuarios; i++) {
        let identificador_usuario = ('usuario' + i);
        let usuario_actual = usuarios[identificador_usuario];

        if (correo == usuario_actual.correo_usuario && contrasenna == usuario_actual.contraseña) {
            return usuario_actual;
        }

    }
    usuario_ingresado = '';
};



/* Datos tomados por default para probar el JS (Id de la reserva, tipo de cambio) */
const numreserva = 'reserva1'
let tarifa = 1000;
const porcentajedescuento = 1;


//Calcular el tipo de cambio
switch (input_moneda_seleccionada) {
    case 1:
        tipoDeCambio = 1;
        break;
    case 2:
        tipoDeCambio = 580;
        break;
    case 3:
        tipoDeCambio = 680;
        break;
}











let mostrar_informacion = (pnumreserva) => {



    //Extraer los valores del json
    let parqueo = reservas[pnumreserva].espacio_seleccionado;
    let fecha = (reservas[pnumreserva].fecha_reserva);
    let horas = (reservas[pnumreserva].horas);
    let monto = reservas[pnumreserva].monto_total;

    //Crear los espacios para imprimir los datos
    let datoParqueo = document.createElement('p');
    let datoFecha = document.createElement('p');
    let datoHoras = document.createElement('p');
    let datoMonto = document.createElement('p');

    //Calculos segun tipo de moneda
    let tipoDeCambio = 1
    let signoMoneda = '₡';
    let montofinal = monto * porcentajedescuento / tipoDeCambio;


    //Asignar la informacion del json al elemento de html creado
    datoParqueo.innerHTML = parqueo;
    datoFecha.innerHTML = fecha;
    datoHoras.innerHTML = horas;
    datoMonto.innerHTML = (signoMoneda + montofinal);

    //Incluir los datos asignados al contenedor preexistente del html
    output_pend_parqueo.appendChild(datoParqueo);
    output_pend_fecha.appendChild(datoFecha);
    output_pend_horas.appendChild(datoHoras);
    output_pend_monto.appendChild(datoMonto);

};

//Invoca funcion para imprimir los datos de la reservacion
mostrar_informacion(numreserva);














/* -------------------------------------------------------------------------- */
/*                    Controles para habilitar los botones                   */
/* -------------------------------------------------------------------------- */

//Habilita el boton de Generar recibo una vez que el estado de la reservacion esta 'Paga'
if (reservas[numreserva].estado_reserva != 'Paga') {
    btn_link_generar_recibo.setAttribute('disabled', true)
}