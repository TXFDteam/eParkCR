'use strict'

const contenedor_tarjetas = document.querySelector('#lista_tarjetas');


/* ---------------------- Plantilla ---------------------- */
const plantilla_tarjeta =
    '<div class=\"detalle_tarjeta\"> \n' +
    '<input id="input_preferida" type="radio" name=\"tarjeta_preferida\"> \n' +

    '</div> \n' +

    '<div class=\"detalle_tarjeta\"> \n' +
    '<img src="[LOGO_TARJETA]" > \n' +
    '</div> \n' +

    '<div class=\"numero_tarjeta\"> \n' +
    '<p> * * * [TERMINACION_TARJETA] \n' +
    '</p> \n' +
    '</div> \n' +

    '<div class=\"detalle_tarjeta\"> \n' +
    '<button type=\"button\"> \n' +
    '<i class=\"fas fa-times\"> \n' +
    '</i> \n' +
    '</button> \n' +
    '</div>';




/* 3-  */
const crear_carta_tarjetas = (ptarjeta) => {
    let nueva_tarjeta = document.createElement('div');
    let nueva_plantilla = plantilla_tarjeta;
    nueva_tarjeta.classList.add('carta_tarjeta');



    /* --------------------- Reemplazar valores especificos --------------------- */

    //Reemplazar logo de tarjeta
    let amex = /^3/;
    let visa = /^4/;
    let masterc = /^5/;
    if (visa.test(ptarjeta.numero_tarjeta)) {
        nueva_plantilla = nueva_plantilla.replace('[LOGO_TARJETA]', '../imgs/imgs_cards/visa.png');

    } else if (masterc.test(ptarjeta.numero_tarjeta)) {
        nueva_plantilla = nueva_plantilla.replace('[LOGO_TARJETA]', '../imgs/imgs_cards/mastercard.png');


    } else if (amex.test(ptarjeta.numero_tarjeta)) {
        nueva_plantilla = nueva_plantilla.replace('[LOGO_TARJETA]', '../imgs/imgs_cards/amex.png');
    } else {
        nueva_plantilla = nueva_plantilla.replace('[LOGO_TARJETA]', 'imgs/imgs_cards/card.png');
    };



    //Imprimir la terminacion de la tarjeta
    let terminacion = /([0-9]{4}$)/;
    nueva_plantilla = nueva_plantilla.replace('[TERMINACION_TARJETA]', terminacion.exec(ptarjeta.numero_tarjeta));




    //Marca el input-radio de la tarjeta con metodo preferido
    const input_preferida = document.querySelector('#input_preferida');
    if (ptarjeta.predeterminada) {
        input_preferida.setAttribute("checked", "");
    };


    nueva_tarjeta.innerHTML = nueva_plantilla;
    contenedor_tarjetas.appendChild(nueva_tarjeta);

};





/* 2- Inicializar funcion para imprimir */
const mostrar_tarjetas = () => {
    /* console.log('check1') */
    for (let i = 1; i <= tarjetas.cant_tarjetas; i++) {
        let id_tarjeta = ('tarjeta_' + i);
        crear_carta_tarjetas(tarjetas[id_tarjeta]);
    };

};

/* 1-Invoca funcion para imprimir */
mostrar_tarjetas();