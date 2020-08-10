'use strict'

//Contenedor preexistente del html donde se listan las tarjetas dinamicamente
const contenedor_tarjetas = document.querySelector('#lista_tarjetas');
let btn_agregar_tarjeta = document.querySelector('#agregar_tarjeta');


/* ------------------------ Redirecciones en botones ------------------------ */
btn_agregar_tarjeta.addEventListener('click', function() {
    window.location.assign('formulario_tarjetas.html');
});



/* --------------------- Identificador de usuario actual -------------------- */
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



const id_usuario = obtener_usuario_ingresado();


/* ---------------------- Plantilla de tarjetas ---------------------- */
const plantilla_tarjeta = '<div class=\"detalle_tarjeta\"> \n' +
    '<img src="[LOGO_TARJETA]" > \n' +
    '</div> \n' +

    '<div class=\"numero_tarjeta\"> \n' +
    '<p> **** [TERMINACION_TARJETA] \n' +
    '</p> \n' +
    '</div> \n' +

    '<div class=\"detalle_tarjeta\"> \n' +
    '<button type=\"button\" class=\"boton_eliminar\" > \n' +
    '<i class=\"fas fa-times\"> \n' +
    '</i> \n' +
    '</button> \n' +
    '</div>';




/* 3-  Funcion para preparar la plantilla de tarjetas e imprimirla en el html*/
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
        nueva_plantilla = nueva_plantilla.replace('[LOGO_TARJETA]', '../../imgs/imgs_cards/visa.png');

    } else if (masterc.test(ptarjeta.numero_tarjeta)) {
        nueva_plantilla = nueva_plantilla.replace('[LOGO_TARJETA]', '../../imgs/imgs_cards/mastercard.png');


    } else if (amex.test(ptarjeta.numero_tarjeta)) {
        nueva_plantilla = nueva_plantilla.replace('[LOGO_TARJETA]', '../../imgs/imgs_cards/amex.png');
    } else {
        nueva_plantilla = nueva_plantilla.replace('[LOGO_TARJETA]', '../../imgs/imgs_cards/card.png');
    };



    //Imprimir la terminacion de la tarjeta
    nueva_plantilla = nueva_plantilla.replace('[TERMINACION_TARJETA]', (ptarjeta.numero_tarjeta[15] + ptarjeta.numero_tarjeta[16] + ptarjeta.numero_tarjeta[17] + ptarjeta.numero_tarjeta[18]));



    nueva_tarjeta.innerHTML = nueva_plantilla;
    contenedor_tarjetas.appendChild(nueva_tarjeta);

};





/* 2- Inicializar funcion para imprimir */
const mostrar_tarjetas = () => {
    for (let i = 1; i <= Object.keys(id_usuario.tarjetas).length; i++) {
        let id_tarjeta = ('tarjeta_' + i);
        crear_carta_tarjetas(id_usuario.tarjetas[id_tarjeta]);
    };

};

/* 1-Invoca funcion para imprimir */
mostrar_tarjetas();