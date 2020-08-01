'use strict'

const inp_nombre_tarjeta = document.querySelector('#nombre_tarjeta');
const inp_numero_tarjeta = document.querySelector('#numero_tarjeta');
const inp_cod_seguridad = document.querySelector('#codigo-seguridad');
const inp_mes_expr = document.querySelector('#mes-expiracion');
const inp_anno_expr = document.querySelector('#anno-expiracion');
const btn_agregar_tarjeta = document.querySelector('#btn-agregar-tarjeta');
const formulario = document.querySelector('#formulario_agregar_tarjetas');
const logo_tarjeta = document.querySelector('#logo_tarjeta');



//Funcion para evaluar que todos los espacios esten llenos
const validar_espacios = () => {
    let error = false;
    let campos_requeridos = document.querySelectorAll('[required]');
    let tamanno = campos_requeridos.length;

    for (let i = 0; i < tamanno; i++) {
        if (campos_requeridos[i].value == '') {
            error = true;
            campos_requeridos[i].classList.add('error');
        } else {
            campos_requeridos[i].classList.remove('error');
        }
    }
    return error;
}



const obtener_datos = () => {

    let error = validar_espacios();

    if (error) {
        console.log('Error al llenar formulario');
    } else {
        console.log('Formulario llenado correctamente');
    }
}



// Formato automatico para input numero de tarjeta
formulario.numero_tarjeta.addEventListener('keyup', (e) => {

    let valorInput = e.target.value;
    let numero = inp_numero_tarjeta.value;
    let amex = /^3/;
    let visa = /^4/;
    let masterc = /^5/;

    formulario.numero_tarjeta.value = valorInput.replace(/\s/g, '')
        .replace(/\D/g, '')
        .replace(/([0-9]{4})/g, '$1 ').trim();



    logo_tarjeta.innerHTML = '';

    if (inp_numero_tarjeta.value == '') {
        logo_tarjeta.innerHTML = '';

    } else
    if (visa.test(numero)) {
        const logo = document.createElement('img');
        logo.src = '../imgs/imgs_cards/visa.png';
        logo_tarjeta.appendChild(logo);

    } else if (masterc.test(numero)) {
        const logo = document.createElement('img');
        logo.src = '../imgs/imgs_cards/mastercard.png';
        logo_tarjeta.appendChild(logo);

    } else if (amex.test(numero)) {
        const logo = document.createElement('img');
        logo.src = '../imgs/imgs_cards/amex.png';
        logo_tarjeta.appendChild(logo);
    } else {
        const logo = document.createElement('img');
        logo.src = '../imgs/imgs_cards/card.png';
        logo_tarjeta.appendChild(logo);
    };

});

btn_agregar_tarjeta.addEventListener('click', obtener_datos);