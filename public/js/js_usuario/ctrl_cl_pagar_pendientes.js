'use strict'

/* ------------------------------ Enlace a html ----------------------------- */
const output_pend_parqueo = document.querySelector('#detalle_pend_parqueo');
const output_pend_fecha = document.querySelector('#detalle_pend_fecha');
const output_pend_horas = document.querySelector('#detalle_pend_horas');
const output_pend_monto = document.querySelector('#detalle_pend_monto');
const output_pend_descuento = document.querySelector('#detalle-descuento-aplicado');
const output_pend_monto_final = document.querySelector('#detalle-monto-final');
const menu_tarjetas = document.querySelector('#inp_menu_lista_tarjetas');
const btn_pagar = document.querySelector('#boton_pagar');
let tarjetas;





/* -------------------------- Link a metodos de pago ------------------------- */
const btn_link_revisar_tarjetas = document.querySelector('#link_revisar_tarjetas');

btn_link_revisar_tarjetas.addEventListener('click', () => {
    window.location.assign('listar_tarjetas.html');
});





/* ---------------------------- Reconocer usuario --------------------------- */
let correoC = localStorage.getItem('correo');
console.log(correoC);
let contrasennaC = localStorage.getItem('contrasenna');
console.log(contrasennaC);


let buscar_info_cliente = async() => {

    let info_clientes = await obtener_clientes();
    let id;
    //c va a ser el  contador para encontrar los clientes
    for (let c = 0; c < info_clientes.length; c++) {
        if (correoC == info_clientes[c].correo && contrasennaC == info_clientes[c].contraseña) {
            id = info_clientes[c];
            console.log(id);
        }
    }
    return id;
};


/* -------------- Funcion para calcular el descuento a aplicar -------------- */
const calcular_descuento = async(pid_usuario, psubtotal) => {



};




/* ----------------- Funcion para calcular y mostrar el monto final ---------------- */

const mostrar_monto_final = async() => {

    let info_cliente = await buscar_info_cliente();
    console.log(info_cliente);

    let reserva = await obtener_reserva(info_cliente.id_reserva_activa);
    console.log(reserva);


    //Crea  los espacios para impresion
    let nombre_parqueo = document.createElement('p');
    let fecha_reservacion = document.createElement('p');
    let total_horas = document.createElement('p');
    let subtotal = document.createElement('p');
    let descuento = document.createElement('p');
    let total = document.createElement('p');



    //Define los valores de la reserva activa
    nombre_parqueo.innerHTML = reserva.nombre_parqueo;
    fecha_reservacion.innerHTML = reserva.fecha_reserva;
    total_horas.innerHTML = reserva.horas;
    subtotal.innerHTML = ('₡' + reserva.monto_total);
    descuento.innerHTML = calcular_descuento(reserva.id_usuario, subtotal);
    total.innerHTML = ('₡' + (subtotal - descuento));

    output_pend_parqueo.appendChild(nombre_parqueo);
    output_pend_fecha.appendChild(fecha_reservacion);
    output_pend_horas.appendChild(total_horas);
    output_pend_monto.appendChild(subtotal);
    output_pend_descuento.appendChild(descuento);
    output_pend_monto_final.appendChild(total);



    /*   let montofinal = monto * descuento_convenio;


      let datoMonto = document.createElement('p');
      datoMonto.innerHTML = (signoMoneda + montofinal);
      output_pend_monto.appendChild(datoMonto); */

}




//Crear el nombre de la tarjeta a seleccionar
const info_tarjeta = (pnueva_tarjeta) => {
    let amex = /^3/;
    let visa = /^4/;
    let masterc = /^5/;
    let terminacion = pnueva_tarjeta.numero_tarjeta[15] + pnueva_tarjeta.numero_tarjeta[16] + pnueva_tarjeta.numero_tarjeta[17] + pnueva_tarjeta.numero_tarjeta[18];
    let display_tarjeta;

    if (visa.test(pnueva_tarjeta.numero_tarjeta)) {
        display_tarjeta = ('VISA: **' + terminacion);

    } else if (masterc.test(pnueva_tarjeta.numero_tarjeta)) {
        display_tarjeta = ('MasterCard: **' + terminacion);

    } else if (amex.test(pnueva_tarjeta.numero_tarjeta)) {
        display_tarjeta = ('AmEx: **' + terminacion);
    } else {
        display_tarjeta = ('Tarjeta: **' + terminacion);
    };

    return display_tarjeta;
}

//Imprime la terminacion de la tarjeta en el menu de las  tarjetas
const mostrar_tarjetas = async() => {

    let info_cliente = await buscar_info_cliente();
    console.log(info_cliente);

    tarjetas = await obtener_tarjetas(info_cliente._id);
    console.log(tarjetas.tarjetas)


    tarjetas.tarjetas.forEach(nueva_tarjeta => {

        console.log(nueva_tarjeta._id);
        let opcion_tarjeta = document.createElement('option');

        opcion_tarjeta.innerText = (info_tarjeta(nueva_tarjeta));

        menu_tarjetas.appendChild(opcion_tarjeta);

    });
};



mostrar_tarjetas();
mostrar_monto_final();




/* ------------------ Controles para habilitar los botones ------------------ */

//Habilita el boton de 'Generar recibo' una vez que el estado de la reservacion esta 'Paga'
/* if (reservas[numreserva].estado_reserva != 'Paga') {
    btn_link_generar_recibo.setAttribute('disabled', true);
}

//Desabilita el boton de 'Pagar' una vez que el estado de la reservacion esta 'Paga'
if (reservas[numreserva].estado_reserva == 'Paga') {
    btn_pagar.setAttribute('disabled', true);
} */


//let signoMoneda = '₡';