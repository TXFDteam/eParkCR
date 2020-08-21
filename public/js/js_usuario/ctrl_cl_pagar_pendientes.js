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
const btn_recibo = document.querySelector('#boton_recibo');

let tarjetas;





/* -------------------------- Link a metodos de pago ------------------------- */
const btn_link_revisar_tarjetas = document.querySelector('#link_revisar_tarjetas');

btn_link_revisar_tarjetas.addEventListener('click', () => {
    window.location.assign('listar_tarjetas.html');
});





/* ---------------------------- Reconocer usuario --------------------------- */
let correoC = localStorage.getItem('correo');
console.log('El correo en cache es ' + correoC);
let contrasennaC = localStorage.getItem('contrasenna');
console.log('La contrasenna en cachce es ' + contrasennaC);


let buscar_info_cliente = async() => {

    let info_clientes = await obtener_clientes();
    let id;
    //c va a ser el  contador para encontrar los clientes
    for (let c = 0; c < info_clientes.length; c++) {
        if (correoC == info_clientes[c].correo && contrasennaC == info_clientes[c].contraseña) {
            id = info_clientes[c];
            console.log('El ID del clientes es: ' + id._id);
        }
    }
    return id;
};


/* -------------- Funcion para calcular el descuento a aplicar -------------- */
const calcular_descuento = async(id_usuario, psubtotal) => {
    let convenios = await buscar_convenios();
    let porcentaje_descuento;

    convenios.forEach(convenio => {
        convenio.usuarios.forEach(usuario => {
            if (usuario.id_empleado == id_usuario) {
                porcentaje_descuento = new Number(convenio.porcentaje_convenio);
            } else {
                porcentaje_descuento = 0;
            }
        });
    });

    return porcentaje_descuento;

};




/* ----------------- Funcion para calcular y mostrar el monto final ---------------- */

const mostrar_monto_final = async() => {

    let info_cliente = await buscar_info_cliente();
    let reserva = await obtener_reserva(info_cliente.id_reserva_activa);
    let porc_descuento = await calcular_descuento(info_cliente._id, reserva.monto_total);

    console.log(reserva);
    //console.log('Nombre del cliente: ' + info_cliente.nombre);
    let monto_descuento = reserva.monto_total * porc_descuento / 100;
    let monto_final = (reserva.monto_total - monto_descuento);



    //Crea  los elementos para impresion
    let nombre_parqueo = document.createElement('p');
    let fecha_reservacion = document.createElement('p');
    let total_horas = document.createElement('p');
    let subtotal = document.createElement('p');
    let descuento = document.createElement('p');
    let total = document.createElement('p');



    //Define los valores de la reserva activa
    nombre_parqueo.innerHTML = reserva.nombre_parqueo;
    fecha_reservacion.innerHTML = reserva.fecha_reserva;
    total_horas.innerHTML = new Number(reserva.horas).toFixed(2);
    subtotal.innerHTML = ('₡' + new Number(reserva.monto_total).toFixed(2));
    descuento.innerHTML = '- ₡' + monto_descuento + ' (' + porc_descuento + '%)';
    total.innerHTML = ('₡' + new Number(monto_final).toFixed(2));


    //Imprmime los elementos en su espacio respectivo
    output_pend_parqueo.appendChild(nombre_parqueo);
    output_pend_fecha.appendChild(fecha_reservacion);
    output_pend_horas.appendChild(total_horas);
    output_pend_monto.appendChild(subtotal);
    output_pend_descuento.appendChild(descuento);
    output_pend_monto_final.appendChild(total);

    btn_pagar.addEventListener('click', () => {

        if (menu_tarjetas.value == '') {
            Swal.fire({
                title: 'Seleccioná una tarjeta para realizar el pago',
                timer: 3000
            })

        } else {
            completar_pago(reserva._id, monto_descuento, monto_final, menu_tarjetas.value);
            quitar_reserva_activa(info_cliente._id)
            actualizar_estado_espacio(reserva.id_parqueo, reserva.id_piso_espacio_seleccionado, reserva.id_espacio_seleccionado, '0')


            Swal.fire({
                title: 'Pago completado con éxito',
            }).then(function() {
                window.location = 'historial_reservas_cliente.html';
            });
        }



    });




};



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


    tarjetas.tarjetas.forEach(nueva_tarjeta => {

        let opcion_tarjeta = document.createElement('option');

        opcion_tarjeta.value = nueva_tarjeta.numero_tarjeta;

        opcion_tarjeta.innerText = (info_tarjeta(nueva_tarjeta));

        menu_tarjetas.appendChild(opcion_tarjeta);

    });
};



mostrar_tarjetas();
mostrar_monto_final();