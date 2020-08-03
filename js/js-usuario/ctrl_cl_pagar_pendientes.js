'use strict'

/* ------------------------------ Enlace a html ----------------------------- */
//Llamado a divs del html donde se colocara los valores de la reservacion
const output_pend_parqueo = document.querySelector('#detalle_pend_parqueo');
const output_pend_fecha = document.querySelector('#detalle_pend_fecha');
const output_pend_horas = document.querySelector('#detalle_pend_horas');
const output_pend_monto = document.querySelector('#detalle_pend_monto');
const input_moneda_seleccionada = document.querySelector('input[name="menu_moneda"]:checked');
const menu_tarjetas = document.querySelector('#inp_menu_lista_tarjetas');
const btn_calcular_monto = document.querySelector('#calcular_monto');
const btn_pagar = document.querySelector('#boton_pagar');


/* -------------------------- Links a otras paginas ------------------------- */
//botones - enlace a otra pagina
const btn_link_revisar_tarjetas = document.querySelector('#link_revisar_tarjetas');
const btn_link_generar_recibo = document.querySelector('#link_generar_recibo');


//Enlaces a otras paginas
btn_link_revisar_tarjetas.addEventListener('click', () => {
    window.location.assign('listar_tarjetas.html');
});
btn_link_generar_recibo.addEventListener('click', () => {
    window.location.assign('recibo_pago_clientes.html');
});






/* Datos tomados por default para probar el JS (Id de la reserva, tipo de cambio) */
const id_usuario = usuarios.usuario1; //obtener_usuario_ingresado();
const numreserva = 'reserva1';
let signoMoneda = '₡';

let correo_actual = localStorage.getItem('correo');
let contrasenna_actual = localStorage.getItem('contrasenna');

for (let u = 1; u <= usuarios.cant_usuarios; u++) {
    let identificador_usuario = ('usuario' + u);
    //SI EL CORREO Y  CONTRASEÑA ALMACENADOS EN INICIAR SESION PROCEDE A ASIGNAR LOS VALORES DEL USUARIO LOGEADO
    if (usuarios[identificador_usuario].correo_usuario == correo_actual && usuarios[identificador_usuario].contraseña == contrasenna_actual) {
        console.log(usuarios[identificador_usuario].id_usuario);

        for (let r = 1; r <= reservas.cant_reservas; r++) {
            let identificador_reserva = ('reserva' + r);
            console.log(reservas[identificador_reserva].id_usuario);
            if (usuarios[identificador_usuario].id_usuario == reservas[identificador_reserva].id_usuario) {

                output_pend_parqueo.innerHTML = reservas[identificador_reserva].parqueo_seleccionado;
                output_pend_fecha.innerHTML = reservas[identificador_reserva].fecha_reserva;
                output_pend_horas.innerHTML = reservas[identificador_reserva].hora_entrada;
                output_pend_monto.innerHTML = reservas[identificador_reserva].monto_final;
                break;

            }
        };
        break;
    };
};


//#region 
/* ----------------- Funcion para calcular y mostrar el monto final ---------------- 

const calcular_monto = (pnumreserva) => {

    //Datos provenientes del Json
    let monto = (pnumreserva.monto_total);
    let descuento_convenio = (pnumreserva.descuento);


    //Variables locales para calculo de saldo final
    let tipoDeCambio;
    let signoMoneda;


    switch (input_moneda_seleccionada.value) {
        case 1:
            tipoDeCambio = 1;
            signoMoneda = '₡';
            break;
        case 2:
            tipoDeCambio = 580;
            signoMoneda = '$';
            break;
        case 3:
            tipoDeCambio = 680;
            signoMoneda = '€';
            break;
    }


    let montofinal = monto * descuento_convenio / tipoDeCambio;


    let datoMonto = document.createElement('p');
    datoMonto.innerHTML = (signoMoneda + montofinal);
    output_pend_monto.appendChild(datoMonto);

}


btn_calcular_monto.addEventListener('click', calcular_monto(numreserva));*/
//#endregion




const mostrar_tarjetas = () => {

    for (let i = 1; i <= Object.keys(id_usuario.tarjetas).length; i++) {
        let id_tarjeta = ('tarjeta_' + i);
        let nueva_tarjeta = document.createElement('option');
        let terminacion = id_usuario.tarjetas[id_tarjeta].numero_tarjeta[15] + id_usuario.tarjetas[id_tarjeta].numero_tarjeta[16] + id_usuario.tarjetas[id_tarjeta].numero_tarjeta[17] + id_usuario.tarjetas[id_tarjeta].numero_tarjeta[18];

        nueva_tarjeta.innerHTML = ('*** ' + terminacion);
        menu_tarjetas.appendChild(nueva_tarjeta);

    };

};

mostrar_tarjetas();


//#region 
/*
let mostrar_informacion = (pnumreserva) => {

  
    //Extraer los valores de la base de datos
    let parqueo = (reservas[pnumreserva].parqueo_seleccionado);
    let fecha = (reservas[pnumreserva].fecha_reserva);
    let horas = (reservas[pnumreserva].horas);
    let monto = (reservas[pnumreserva].monto_total);

    //Crear los espacios para imprimir los datos
    let datoParqueo = document.createElement('p');
    let datoFecha = document.createElement('p');
    let datoHoras = document.createElement('p');
    let datoMonto = document.createElement('p');




    //Asignar la informacion de la base de datos al elemento de html creado
    datoParqueo.innerHTML = parqueo;
    datoFecha.innerHTML = fecha;
    datoHoras.innerHTML = horas;
    datoMonto.innerHTML = (signoMoneda + monto);


    //Incluir los datos asignados al contenedor preexistente del html
    output_pend_parqueo.appendChild(datoParqueo);
    output_pend_fecha.appendChild(datoFecha);
    output_pend_horas.appendChild(datoHoras);
    output_pend_monto.appendChild(datoMonto);

};

//Invoca funcion para imprimir los datos de la reservacion
mostrar_informacion(numreserva);*/
//#endregion








/* -------------------------------------------------------------------------- */
/*                    Controles para habilitar los botones                   */
/* -------------------------------------------------------------------------- */

//Habilita el boton de 'Generar recibo' una vez que el estado de la reservacion esta 'Paga'
if (reservas[numreserva].estado_reserva != 'Paga') {
    btn_link_generar_recibo.setAttribute('disabled', true);
}

//Desabilita el boton de 'Pagar' una vez que el estado de la reservacion esta 'Paga'
if (reservas[numreserva].estado_reserva == 'Paga') {
    btn_pagar.setAttribute('disabled', true);
}