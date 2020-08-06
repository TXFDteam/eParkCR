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



//Variables globales
let contrasenna = localStorage.getItem('contrasenna');
let correo = localStorage.getItem('correo');



/* --------------------- Identificador de usuario actual -------------------- */
const obtener_usuario_ingresado = () => {

    for (let i = 1; i < usuarios.cant_usuarios; i++) {
        let identificador_usuario = ('usuario' + i);
        let usuario_actual = usuarios[identificador_usuario];

        if (correo == usuario_actual.correo_usuario && contrasenna == usuario_actual.contraseña) {
            return usuario_actual;
        }
    }
};


/* -------- Constantes para identificar el usuario y reserva actuales ------- */
const id_usuario = obtener_usuario_ingresado();
const numreserva = 'reserva7'; //Se toma la reserva 7 para corroborar que el codigo funcione correctamente



/* ---------------------- Imprimir los datos del recibo --------------------- */
const mostrar_recibo = (pnumreserva) => {

    //Extraigo la informacion de la base de datos
    let parqueo = (reservas[pnumreserva].parqueo_seleccionado);
    let fecha = (reservas[pnumreserva].fecha_reserva);
    let horas = (reservas[pnumreserva].horas);
    let monto = (reservas[pnumreserva].monto_final);
    let tarjeta = ('*** ' + reservas[pnumreserva].tarjeta_creditada.numero_tarjeta[15] + reservas[pnumreserva].tarjeta_creditada.numero_tarjeta[16] + reservas[pnumreserva].tarjeta_creditada.numero_tarjeta[17] + reservas[pnumreserva].tarjeta_creditada.numero_tarjeta[18]);

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
    datoMonto.innerHTML = monto;
    datoTarjeta.innerHTML = tarjeta;


    //Incluir los datos llenados a los contenedores preexistentes del html
    output_recibo_parqueo.appendChild(datoParqueo);
    output_recibo_fecha.appendChild(datoFecha);
    output_recibo_horas.appendChild(datoHoras);
    output_recibo_monto_final.appendChild(datoMonto);
    output_recibo_tarjeta.appendChild(datoTarjeta);
};



/* ------------- (Solo imprime los datos si el recibo esta pagado) ------------ */
if (reservas[numreserva].estado_reserva == 'Paga') {
    mostrar_recibo(numreserva);
}