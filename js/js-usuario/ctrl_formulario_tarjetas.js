'use strict'

/* --------------------------- Enlaces con el html -------------------------- */
const inp_nombre_tarjeta = document.querySelector('#nombre_tarjeta');
const inp_numero_tarjeta = document.querySelector('#numero_tarjeta');
const inp_cod_seguridad = document.querySelector('#codigo-seguridad');
const inp_mes_expr = document.querySelector('#mes-expiracion');
const inp_anno_expr = document.querySelector('#anno-expiracion');
const btn_agregar_tarjeta = document.querySelector('#btn_agregar_tarjeta');
const formulario = document.querySelector('#formulario_agregar_tarjetas');
const logo_tarjeta = document.querySelector('#logo_tarjeta');
const link_btn_cancelar = document.querySelector('#btn_cancelar');




/* ---------------------- Enlace para el boton cancelar --------------------- */
link_btn_cancelar.addEventListener('click', function() {
    window.location.assign('listar_tarjetas.html');
});






/* ------------- Formato automatico para input numero de tarjeta ------------ */
formulario.numero_tarjeta.addEventListener('keyup', (e) => {

    let valorInput = e.target.value;
    let numero = inp_numero_tarjeta.value;
    let amex = /^3/;
    let visa = /^4/;
    let masterc = /^5/;

    //Formato #### #### #### ####
    formulario.numero_tarjeta.value = valorInput.replace(/\s/g, '')
        .replace(/\D/g, '')
        .replace(/([0-9]{4})/g, '$1 ').trim();


    //Asignacion del logo segun tipo de tarjeta
    logo_tarjeta.innerHTML = '';

    if (inp_numero_tarjeta.value == '') {
        logo_tarjeta.innerHTML = '';

    } else
    if (visa.test(numero)) {
        const logo = document.createElement('img');
        logo.src = '../../imgs/imgs_cards/visa.png';
        logo_tarjeta.appendChild(logo);

    } else if (masterc.test(numero)) {
        const logo = document.createElement('img');
        logo.src = '../../imgs/imgs_cards/mastercard.png';
        logo_tarjeta.appendChild(logo);

    } else if (amex.test(numero)) {
        const logo = document.createElement('img');
        logo.src = '../../imgs/imgs_cards/amex.png';
        logo_tarjeta.appendChild(logo);
    } else {
        const logo = document.createElement('img');
        logo.src = '../../imgs/imgs_cards/card.png';
        logo_tarjeta.appendChild(logo);
    };

});






/* ---------------------- Funcion para enviar los datos --------------------- */
const enviar_datos = () => {
    let nombre_tarjeta = inp_nombre_tarjeta.value;
    let num_tarjeta = inp_numero_tarjeta.value;
    let cod_seguridad = inp_cod_seguridad.value;
    let mes_expr = inp_mes_expr.value;
    let anno_expr = inp_anno_expr.value;


    console.log('El nombre en la tarjeta es: ' + nombre_tarjeta);
    console.log('El numero de la tarjeta es: ' + num_tarjeta);
    console.log('El codigo de seguridad es: ' + cod_seguridad);
    console.log('La fecha de expiracion es: ' + mes_expr + '/' + anno_expr);

    Swal.fire({
        title: 'Tarjeta agregada satisfactoriamente',
        showConfirmButton: false,
        timer: 1000
    })

};



/* ------------------------- Funciones de validacion ------------------------ */

//Funcion para evaluar que todos los espacios esten llenos (devuelve error t/f)
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

//Mensaje de error
const mensaje_error = () => {
    Swal.fire({
        title: 'Revisá que los campos resaltados sean correctos',
        timer: 2000
    })
}


//Controla las funciones de validacion
const obtener_datos = () => {

    let error_espacios = validar_espacios();

    if (error_espacios) {
        console.log('Error al llenar formulario');
        mensaje_error();
    } else {
        console.log('Formulario llenado correctamente');
        enviar_datos()

    };
};


btn_agregar_tarjeta.addEventListener('click', obtener_datos);